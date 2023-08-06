import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineLeft, AiOutlineCheck } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Caution from '../../images/caution.png';
import {
  hidePoolImportTokenModal,
  removePoolTokenModal,
  selectTokenForFirstInput,
  selectTokenForSecondInput,
  validateFirstInputImport,
} from '../Features/PoolSlice';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { setAllToken } from '../Features/TokenSlice';

function ImportTokenModal() {
  const { firstInputTokenImport, PoolTokenType } = useSelector(
    (store) => store.poolFunc
  );
  const dispatch = useDispatch();

  const [proceed, setProceed] = useState(false);

  async function completeTokenImport() {
    await addToFireStore();
    dispatch(removePoolTokenModal());
    dispatch(hidePoolImportTokenModal());
  }

  function closeTokenModals() {
    dispatch(removePoolTokenModal());
    dispatch(hidePoolImportTokenModal());
  }

  async function addToFireStore() {
    try {
      console.log('adding to firestore');

      await addDoc(collection(db, 'tokens'), firstInputTokenImport);
      if (PoolTokenType === 'first')
        dispatch(selectTokenForFirstInput(firstInputTokenImport));
      else if (PoolTokenType === 'second')
        dispatch(selectTokenForSecondInput(firstInputTokenImport));
      dispatch(removePoolTokenModal());
      toast.success('Token added successfully');

      const querySnapshot = await getDocs(collection(db, 'tokens'));
      const temp = await Promise.all(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      dispatch(setAllToken(temp));
    } catch (err) {
      console.log(err);
    }
  }
  function updateApproval(e) {
    setProceed(e.target.checked);
  }
  return (
    <div className="">
      <div className="bg-[#0f0611b8] fixed w-full h-fit min-h-[100vh] top-0 left-0 backdrop-blur-[4px] z-50"></div>
      <div className="bg-purple-800 w-full max-w-[400px] sm:w-[400px] h-[500px] p-4 absolute top-8 left-1/2 -translate-x-1/2 z-50 rounded-xl flex flex-col">
        <header className="flex items-center mb-5 justify-between">
          <div
            className=" cursor-pointer"
            onClick={() => dispatch(hidePoolImportTokenModal())}
          >
            <AiOutlineLeft />
          </div>
          <h3 className="text-white">Import Token </h3>
          <div className=" cursor-pointer text-white" onClick={closeTokenModals}>
            <AiOutlineClose />
          </div>
        </header>

        {firstInputTokenImport.name ? (
          <div className="w-full h-[88px] rounded-lg bg-gray-300 flex items-center text-[12px] px-3 text-purple-900">
            <img src={firstInputTokenImport.logo} alt="" className="mr-3" />
            <div>
              <p>{firstInputTokenImport.name}</p>
              <p>{firstInputTokenImport.address}</p>
            </div>
          </div>
        ) : (
          ''
        )}

        <div className="h-full mt-8">
          <img src={Caution} alt={Caution} className="m-auto animate-pulse" />
          
          <div className="text-[#DCDCDC] px-3 mb-4">
            <p className="text-center">
              Anyone can create a token, including creating fake versions of
              existing tokens that claim to represent projects.
            </p>
            <p className="text-center">If you purchase this token,</p>
            <p className="text-center">you may not be able to sell it back</p>
          </div>

          <label
            htmlFor="accept"
            className="flex items-center w-fit mx-auto mb-4 text-black"
          >
            <input
              type="checkbox"
              id="accept"
              name="proceed"
              value={proceed}
              onChange={updateApproval}
              className="hidden text-purple-800"
            />
            <div className="bg-gray-300 h-4 w-4 flex items-center justify-center text-sm ">
              <span className={`${proceed ? 'block' : 'hidden'}`}>
                <AiOutlineCheck />
              </span>
            </div>
            <div className="ml-2 text-white">I understand</div>
          </label>

          <button
            disabled={proceed ? false : true}
            className={`bg-gray-300 font-bold rounded-xl w-full max-w-[384px] block m-auto sm:w-[384px] h-[48px] ${
              proceed ? '' : 'cursor-not-allowed'
            }`}
            onClick={completeTokenImport}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImportTokenModal;
