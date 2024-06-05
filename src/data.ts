import { distanceBetweenLocations } from "./utils/position";
import { getTotalDistance } from "./utils/position";

const standard = 1435;
const minWidth = 1422;
const maxWidth = 1460;

export const minDeviation = minWidth - standard;
export const maxDeviation = maxWidth - standard;

const baseVariation = 5;

const OSL_LAR = [
  {
    lat: 59.9117505,
    lon: 10.7506371,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9137298,
    lon: 10.7377625,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9152357,
    lon: 10.7315826,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9172148,
    lon: 10.7184505,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9192369,
    lon: 10.7076359,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.919452,
    lon: 10.6981087,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9192369,
    lon: 10.6921005,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9211297,
    lon: 10.6830025,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9227213,
    lon: 10.6764793,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9230224,
    lon: 10.6716728,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9210006,
    lon: 10.6657505,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9173869,
    lon: 10.6569958,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9150636,
    lon: 10.6470394,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9132996,
    lon: 10.6364822,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9148055,
    lon: 10.6271267,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9147194,
    lon: 10.6188011,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9131705,
    lon: 10.5996609,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9105457,
    lon: 10.5805206,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9069308,
    lon: 10.564127,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.9015939,
    lon: 10.5531406,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8977198,
    lon: 10.5425835,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8923384,
    lon: 10.5238724,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8910037,
    lon: 10.5166626,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8901856,
    lon: 10.5053329,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8869992,
    lon: 10.4878235,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8805393,
    lon: 10.4740047,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8726565,
    lon: 10.4685974,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8666247,
    lon: 10.4603577,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8599453,
    lon: 10.4496288,
    width: (Math.random() - 0.5) * baseVariation + standard + 2,
  },
  {
    lat: 59.8527042,
    lon: 10.4440498,
    width: (Math.random() - 0.5) * baseVariation + standard + 4,
  },
  {
    lat: 59.8458496,
    lon: 10.4402733,
    width: (Math.random() - 0.5) * baseVariation + standard + 5,
  },
  {
    lat: 59.8376136,
    lon: 10.4380417,
    width: (Math.random() - 0.5) * baseVariation + standard + 3,
  },
  {
    lat: 59.8322225,
    lon: 10.4331493,
    width: (Math.random() - 0.5) * baseVariation + standard + 1,
  },
  {
    lat: 59.8248891,
    lon: 10.4254246,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8177698,
    lon: 10.4144382,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8113828,
    lon: 10.4028511,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.8054262,
    lon: 10.3911781,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7986482,
    lon: 10.3775311,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7927757,
    lon: 10.3664589,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7874637,
    lon: 10.3556442,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7827124,
    lon: 10.3463745,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7776579,
    lon: 10.3362465,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7758433,
    lon: 10.3299809,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7735533,
    lon: 10.315733,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7690593,
    lon: 10.3034592,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7644783,
    lon: 10.2932453,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7598101,
    lon: 10.2779675,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.753974,
    lon: 10.2656937,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7495206,
    lon: 10.250845,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7454991,
    lon: 10.2362537,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7397037,
    lon: 10.2271557,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7374113,
    lon: 10.2193451,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.737714,
    lon: 10.210247,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7403092,
    lon: 10.204668,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7417798,
    lon: 10.1936817,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7405688,
    lon: 10.1881027,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7378006,
    lon: 10.1887035,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7329556,
    lon: 10.2017498,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7281965,
    lon: 10.2135944,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7251677,
    lon: 10.2267265,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7204075,
    lon: 10.2296448,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7175078,
    lon: 10.232563,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7140451,
    lon: 10.2333355,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7117076,
    lon: 10.2322197,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.7046508,
    lon: 10.2388287,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.695427,
    lon: 10.2423477,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.6882801,
    lon: 10.2426052,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.6808717,
    lon: 10.2470684,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.669431,
    lon: 10.240202,
    width: (Math.random() - 0.5) * baseVariation + standard + 17,
  },
  {
    lat: 59.6615416,
    lon: 10.2353954,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.6500509,
    lon: 10.227499,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.640682,
    lon: 10.2261257,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.635042,
    lon: 10.2268124,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.6247141,
    lon: 10.2212334,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.6193753,
    lon: 10.2191734,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.6107794,
    lon: 10.2140236,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.6034407,
    lon: 10.206728,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5984026,
    lon: 10.2026081,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5901923,
    lon: 10.2019215,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5831099,
    lon: 10.2056122,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5755913,
    lon: 10.2109337,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5648538,
    lon: 10.217886,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5575051,
    lon: 10.2257824,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5495894,
    lon: 10.2339363,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5423244,
    lon: 10.2428627,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5350578,
    lon: 10.2496433,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5273544,
    lon: 10.2631187,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5160355,
    lon: 10.2804565,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.5017508,
    lon: 10.2988243,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4876343,
    lon: 10.3139305,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4716809,
    lon: 10.3285217,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4618261,
    lon: 10.3381348,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4515322,
    lon: 10.3465462,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4380058,
    lon: 10.3544426,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4300619,
    lon: 10.3690338,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4237754,
    lon: 10.3865433,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4159155,
    lon: 10.3994179,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4108493,
    lon: 10.4067993,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4035107,
    lon: 10.4067993,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.4007147,
    lon: 10.4112625,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3956462,
    lon: 10.4117775,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3860315,
    lon: 10.4095459,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3784252,
    lon: 10.4112625,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3691555,
    lon: 10.406456,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.361283,
    lon: 10.4090309,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3535836,
    lon: 10.4109192,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3461451,
    lon: 10.4179573,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3399305,
    lon: 10.4148674,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3335396,
    lon: 10.4116058,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3281109,
    lon: 10.3966713,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3158491,
    lon: 10.385685,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.3065623,
    lon: 10.3874016,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2992011,
    lon: 10.3925514,
    width: (Math.random() - 0.5) * baseVariation + standard - 8,
  },
  {
    lat: 59.2884194,
    lon: 10.4043961,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2825449,
    lon: 10.4085159,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2758802,
    lon: 10.4073143,
    width: (Math.random() - 0.5) * baseVariation + standard - 10,
  },
  {
    lat: 59.269565,
    lon: 10.4138374,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2697405,
    lon: 10.4217339,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2733367,
    lon: 10.4222488,
    width: (Math.random() - 0.5) * baseVariation + standard - 15,
  },
  {
    lat: 59.2785112,
    lon: 10.4090309,
    width: (Math.random() - 0.5) * baseVariation + standard + 10,
  },
  {
    lat: 59.2824573,
    lon: 10.3983879,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2840356,
    lon: 10.3683472,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2835095,
    lon: 10.3621674,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2845616,
    lon: 10.3396797,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2820188,
    lon: 10.3333282,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2750909,
    lon: 10.3286934,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2651788,
    lon: 10.320797,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2540352,
    lon: 10.3129005,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2465749,
    lon: 10.3110123,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2409567,
    lon: 10.3158188,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2327032,
    lon: 10.3127289,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2270826,
    lon: 10.3072357,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2221639,
    lon: 10.3027725,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2197921,
    lon: 10.2960777,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.216278,
    lon: 10.2904129,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2116213,
    lon: 10.2850914,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2065246,
    lon: 10.2842331,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.2021303,
    lon: 10.2855206,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1979112,
    lon: 10.2850056,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1892955,
    lon: 10.2797699,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1837118,
    lon: 10.2770233,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1775115,
    lon: 10.277195,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1721458,
    lon: 10.2735901,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.167659,
    lon: 10.2682686,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1589478,
    lon: 10.2615738,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.149266,
    lon: 10.254364,
    width: (Math.random() - 0.5) * baseVariation + standard - 10,
  },
  {
    lat: 59.1409023,
    lon: 10.2461243,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1350905,
    lon: 10.2289581,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1356189,
    lon: 10.2209759,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1370279,
    lon: 10.2140236,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1353547,
    lon: 10.2083588,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1251377,
    lon: 10.200119,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.120821,
    lon: 10.1922226,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1130672,
    lon: 10.1755714,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.1114369,
    lon: 10.1701641,
    width: (Math.random() - 0.5) * baseVariation + standard + 10,
  },
  {
    lat: 59.1085727,
    lon: 10.1659584,
    width: (Math.random() - 0.5) * baseVariation + standard + 10,
  },
  {
    lat: 59.1012568,
    lon: 10.1668167,
    width: (Math.random() - 0.5) * baseVariation + standard + 15,
  },
  {
    lat: 59.0965404,
    lon: 10.1694775,
    width: standard + 28,
  },
  {
    lat: 59.0931459,
    lon: 10.169735,
    width: (Math.random() - 0.5) * baseVariation + standard - 2,
  },
  {
    lat: 59.0822107,
    lon: 10.1654434,
    width: (Math.random() - 0.5) * baseVariation + standard + 15,
  },
  {
    lat: 59.0729704,
    lon: 10.1611948,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0689339,
    lon: 10.1591778,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0650072,
    lon: 10.1549721,
    width: (Math.random() - 0.5) * baseVariation + standard + 15,
  },
  {
    lat: 59.0591825,
    lon: 10.1484489,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0554975,
    lon: 10.1439857,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0538865,
    lon: 10.1369476,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0525403,
    lon: 10.1300812,
    width: (Math.random() - 0.5) * baseVariation + standard + 15,
  },
  {
    lat: 59.0504437,
    lon: 10.1233864,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0452346,
    lon: 10.1158333,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0424532,
    lon: 10.110898,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.040378,
    lon: 10.1036453,
    width: (Math.random() - 0.5) * baseVariation + standard + 15,
  },
  {
    lat: 59.037,
    lon: 10.096693,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0363156,
    lon: 10.0907707,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0366468,
    lon: 10.0859213,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0387884,
    lon: 10.0824451,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0470005,
    lon: 10.0756645,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0480379,
    lon: 10.0715446,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0483911,
    lon: 10.0647211,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0486118,
    lon: 10.0560951,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0477951,
    lon: 10.0476837,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0472433,
    lon: 10.0429201,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0474861,
    lon: 10.039916,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0482807,
    lon: 10.0372982,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0494064,
    lon: 10.0352812,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
  {
    lat: 59.0500906,
    lon: 10.0316334,
    width: (Math.random() - 0.5) * baseVariation + standard,
  },
];

export const totalDistance = getTotalDistance(OSL_LAR);

console.log(totalDistance);

let currentDistance = 0;
let lastPoint = OSL_LAR[0];

export const mockData = OSL_LAR.map((point) => {
  const distance = distanceBetweenLocations(lastPoint, point);
  currentDistance += distance;
  lastPoint = point;
  return {
    ...point,
    distance: currentDistance,
    deviation: point.width - standard,
  };
});

console.log(mockData);

export const getMockDataInDistanceBuckets = (count: number) => {
  const bucketSize = totalDistance / count;
  const buckets = Array.from({ length: count }).map((_, i) => {
    const start = i * bucketSize;
    const end = (i + 1) * bucketSize;
    return {
      start,
      end,
      data: mockData.filter(
        (point) => point.distance >= start && point.distance < end,
      ),
    };
  });
  return buckets;
};
