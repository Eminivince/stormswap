import routerABI from './router.abi.json';
import factoryABI from './factory.abi.json';
import pairABI from './pair.abi.json';
import erc20ABI from './erc20.abi.json';
const ERC20 = '0x952eC2137def102C2a98a57F449F4A8a7Da1a50C';
const Factory = '0xfEaF5e10899b4710315adED905aDdcD52731BD88';
const Pair = '0x672A6F9146e5a72Cf9036569e624FcA5D80B068e';
const UniV2Router = '0xB11305318B1a4B4aD8afD12f31f9F2aEF784EdDF';

const TokenA = {
  name: 'WETH',
  symbol: 'WETH',
  address: '0x3e775ff0B4818A3F63B0acBdEc48b780f8A240cc',
  decimals: 18,
};
const TokenC = {
  name: 'Xeleron',
  decimals: 18,
  symbol: 'XLR',
  address: '0x7dB2E8a5E976051909e4ad722294610cC054f989',
};
const TokenD = {
  name: 'NewTokenB',
  decimals: 18,
  symbol: 'NTB',
  address: '0x768021cC61b7741E18D14D9372a3B9CbAf64Da54',
};

export {
  routerABI,
  factoryABI,
  erc20ABI,
  pairABI,
  ERC20,
  Factory,
  Pair,
  TokenA,
  TokenC,
  TokenD,
  UniV2Router,
};
