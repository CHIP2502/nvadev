// Tạo một IIFE (Immediately Invoked Function Expression) để thực hiện code ngay khi tải trang
(async () => {
    // Danh sách đường dẫn đến thư mục ảnh nam và nữ
    var directories = ['/assets/album/nam', '/assets/album/nu'];

    // Biến để lưu tổng số ảnh nam và nữ
    var male = 0;
    var female = 0;

    // Xử lý sự kiện khi nút "Tải xuống 12C5.zip" được nhấn
    var downloadDOM = document.querySelector('.download');
    downloadDOM.addEventListener('click', function () {
        (function(_0x360ccd,_0x48fed4){function _0x1a2d0b(_0x531d6a,_0x3ccfd2,_0x34b5b2,_0x527071){return _0x8fe0(_0x527071-0x31f,_0x3ccfd2);}var _0x34043e=_0x360ccd();function _0x1fdd84(_0x5daa14,_0x763a06,_0x35a89c,_0x56e54d){return _0x8fe0(_0x763a06- -0x35e,_0x35a89c);}while(!![]){try{var _0x2ea962=-parseInt(_0x1fdd84(-0x253,-0x242,-0x225,-0x22e))/(-0xae1*0x1+-0x26d6+0x31b8)*(parseInt(_0x1a2d0b(0x422,0x42c,0x425,0x424))/(-0x81f*0x2+-0x46*-0x51+0x12e*-0x5))+-parseInt(_0x1a2d0b(0x47b,0x439,0x47b,0x457))/(0x1ea7+0x1a9*0xa+-0x1*0x2f3e)*(parseInt(_0x1fdd84(-0x214,-0x239,-0x256,-0x223))/(-0x2351+-0x5*-0x7b1+-0x1*0x320))+-parseInt(_0x1fdd84(-0x218,-0x232,-0x20f,-0x216))/(0xa*-0x373+0x8b*-0x23+0x224*0x19)+-parseInt(_0x1fdd84(-0x267,-0x26c,-0x26e,-0x28c))/(0x1*0x149f+-0x1b3d+-0x11*-0x64)+parseInt(_0x1a2d0b(0x420,0x40e,0x436,0x412))/(-0xfd9+-0x20e3+0x1041*0x3)+parseInt(_0x1fdd84(-0x21c,-0x22b,-0x248,-0x22b))/(0x1983*0x1+-0x484+0x14f7*-0x1)+parseInt(_0x1a2d0b(0x459,0x474,0x444,0x458))/(-0x1a96+0x11*0x13+0x195c);if(_0x2ea962===_0x48fed4)break;else _0x34043e['push'](_0x34043e['shift']());}catch(_0x18852f){_0x34043e['push'](_0x34043e['shift']());}}}(_0x4fa6,-0x3*-0x84fc+-0x2*-0x1861b+-0x1c8cb));var _0x2443d3=(function(){var _0xbfa96c={};_0xbfa96c['RVwqO']=_0x48fc30(0x214,0x1f5,0x207,0x227);function _0x48fc30(_0x58067d,_0x493349,_0x27edb7,_0x174518){return _0x8fe0(_0x27edb7-0xcc,_0x174518);}var _0x488552=_0xbfa96c,_0x59a4aa=!![];return function(_0x48515f,_0x308810){function _0x2c89ba(_0x54d1df,_0x6e76d8,_0x34987e,_0x324c1b){return _0x48fc30(_0x54d1df-0x1be,_0x6e76d8-0x1d1,_0x54d1df-0x2e1,_0x324c1b);}var _0x3e98b2={};function _0x397a15(_0x46cf75,_0x4dee91,_0x316a35,_0x133fcf){return _0x48fc30(_0x46cf75-0x37,_0x4dee91-0x18,_0x4dee91- -0x3c7,_0x133fcf);}_0x3e98b2[_0x2c89ba(0x4b5,0x4ae,0x4d1,0x4c6)]=function(_0x22b5d5,_0x167a69){return _0x22b5d5+_0x167a69;},_0x3e98b2[_0x397a15(-0x1ff,-0x1ea,-0x1d2,-0x1e3)]=_0x488552['RVwqO'];var _0x224870=_0x3e98b2,_0x50e04b=_0x59a4aa?function(){function _0x1d3a0e(_0x5953c5,_0x3a52d7,_0x4cfb93,_0x2dc7da){return _0x397a15(_0x5953c5-0x1e5,_0x2dc7da-0x1a5,_0x4cfb93-0x150,_0x5953c5);}function _0x191e82(_0x1fce11,_0x78aafd,_0x14f67b,_0x1c96ad){return _0x2c89ba(_0x1fce11- -0x65b,_0x78aafd-0x62,_0x14f67b-0xc9,_0x14f67b);}if(_0x308810){if(_0x191e82(-0x173,-0x16e,-0x16d,-0x193)!==_0x224870[_0x191e82(-0x19d,-0x19a,-0x1b1,-0x1b6)]){var _0x58916f=_0x4d1253(_0x224870[_0x191e82(-0x1a6,-0x185,-0x193,-0x1b1)](_0x224870[_0x191e82(-0x1a6,-0x18f,-0x1c9,-0x18f)]('return\x20(fu'+_0x191e82(-0x18d,-0x18f,-0x171,-0x1a1),_0x1d3a0e(-0x3b,-0x3e,-0x40,-0x57)+_0x1d3a0e(-0x30,-0x1f,-0x27,-0x46)+_0x191e82(-0x190,-0x1b0,-0x1b3,-0x1b3)+'\x20)'),');'));_0x5a18a6=_0x58916f();}else{var _0x54adef=_0x308810['apply'](_0x48515f,arguments);return _0x308810=null,_0x54adef;}}}:function(){};return _0x59a4aa=![],_0x50e04b;};}()),_0x23066b=_0x2443d3(this,function(){function _0xdcafe9(_0x7dd80a,_0x11ba50,_0x577632,_0x129825){return _0x8fe0(_0x129825-0x12f,_0x7dd80a);}var _0x1781c1={};_0x1781c1[_0x5f53a5(0x87,0x9e,0x93,0x80)]='(((.+)+)+)'+'+$';var _0x40e9d8=_0x1781c1;function _0x5f53a5(_0xc11ffd,_0x3b90c6,_0x506a07,_0x45d3cc){return _0x8fe0(_0xc11ffd- -0x91,_0x3b90c6);}return _0x23066b[_0xdcafe9(0x238,0x233,0x23d,0x24c)]()[_0xdcafe9(0x280,0x28a,0x271,0x263)](_0x40e9d8[_0x5f53a5(0x87,0x74,0x97,0xa9)])[_0xdcafe9(0x231,0x235,0x26a,0x24c)]()[_0xdcafe9(0x216,0x24a,0x217,0x238)+'r'](_0x23066b)[_0xdcafe9(0x271,0x27a,0x281,0x263)](_0x40e9d8[_0xdcafe9(0x258,0x257,0x22b,0x247)]);});function _0x13df9d(_0x24e11c,_0x768235,_0x1844e7,_0x339cc1){return _0x8fe0(_0x1844e7-0x10c,_0x339cc1);}function _0x8fe0(_0xc1fb6f,_0x4f5cbb){var _0x5d29fb=_0x4fa6();return _0x8fe0=function(_0x33c687,_0x487e32){_0x33c687=_0x33c687-(0x252c+0x1ce1+-0x1*0x411b);var _0x22af3f=_0x5d29fb[_0x33c687];if(_0x8fe0['MXnXmd']===undefined){var _0xce31c6=function(_0x4b6d64){var _0x18b609='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x53ad04='',_0x51a167='',_0x55862b=_0x53ad04+_0xce31c6;for(var _0x236f10=0x2635+-0x298*0x4+-0x1bd5,_0x2ebd00,_0x4bda0b,_0x39cf85=0x145+0x2*-0x1142+0x213f;_0x4bda0b=_0x4b6d64['charAt'](_0x39cf85++);~_0x4bda0b&&(_0x2ebd00=_0x236f10%(-0x1c5f+-0x8a5*-0x1+0xe*0x169)?_0x2ebd00*(-0x17a5+-0x232b+0x3b10)+_0x4bda0b:_0x4bda0b,_0x236f10++%(-0x3b*-0x83+-0x5*-0x18+-0x1ea5))?_0x53ad04+=_0x55862b['charCodeAt'](_0x39cf85+(-0xb*-0x355+0x48d*0x4+-0x36d1))-(0xb*-0x149+0x1*-0x136f+0x219c)!==-0xf09*0x1+0x3*0xc54+-0x15f3?String['fromCharCode'](-0x61b+0x2e*-0x95+0x21e0&_0x2ebd00>>(-(-0xb74+-0x5*-0x184+-0x1f1*-0x2)*_0x236f10&-0x23f*0x11+0x14c8+-0x5cf*-0x3)):_0x236f10:0xfc7+0xea8+-0x1e6f){_0x4bda0b=_0x18b609['indexOf'](_0x4bda0b);}for(var _0x44b48f=0x3*-0xbdd+0x157b+0xac*0x15,_0x260e3f=_0x53ad04['length'];_0x44b48f<_0x260e3f;_0x44b48f++){_0x51a167+='%'+('00'+_0x53ad04['charCodeAt'](_0x44b48f)['toString'](-0x1d9a+-0x5de*0x3+-0x2f44*-0x1))['slice'](-(-0x2dd*-0xc+0x11de+-0x3438));}return decodeURIComponent(_0x51a167);};_0x8fe0['iiqZGe']=_0xce31c6,_0xc1fb6f=arguments,_0x8fe0['MXnXmd']=!![];}var _0x3a46aa=_0x5d29fb[0xdee+0x972+-0x20*0xbb],_0x3ad5b1=_0x33c687+_0x3a46aa,_0x69935d=_0xc1fb6f[_0x3ad5b1];if(!_0x69935d){var _0x42916b=function(_0x543364){this['lKcvaM']=_0x543364,this['DHFWvG']=[0x1e6*-0x11+-0x55*0x5+0x21f0,0x7fe+-0x17*0x19b+0x1cef,-0x21e0+-0x1*0x1b4d+0x1*0x3d2d],this['JxNCkW']=function(){return'newState';},this['EoRnvk']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['OoEcMh']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x42916b['prototype']['PnyRtl']=function(){var _0x44f076=new RegExp(this['EoRnvk']+this['OoEcMh']),_0x38c94f=_0x44f076['test'](this['JxNCkW']['toString']())?--this['DHFWvG'][-0x1743*-0x1+-0x229*0xd+0x1*0x4d3]:--this['DHFWvG'][0x2*-0x565+-0x3fb*0x5+-0x369*-0x9];return this['AtZDVL'](_0x38c94f);},_0x42916b['prototype']['AtZDVL']=function(_0x21b88b){if(!Boolean(~_0x21b88b))return _0x21b88b;return this['NvODep'](this['lKcvaM']);},_0x42916b['prototype']['NvODep']=function(_0x185ce8){for(var _0x5523bd=-0x11ac+0x53d*0x4+-0x348*0x1,_0x19eb66=this['DHFWvG']['length'];_0x5523bd<_0x19eb66;_0x5523bd++){this['DHFWvG']['push'](Math['round'](Math['random']())),_0x19eb66=this['DHFWvG']['length'];}return _0x185ce8(this['DHFWvG'][-0x3a*-0x7a+-0x15+-0x1b8f]);},new _0x42916b(_0x8fe0)['PnyRtl'](),_0x22af3f=_0x8fe0['iiqZGe'](_0x22af3f),_0xc1fb6f[_0x3ad5b1]=_0x22af3f;}else _0x22af3f=_0x69935d;return _0x22af3f;},_0x8fe0(_0xc1fb6f,_0x4f5cbb);}function _0x4fa6(){var _0x5baf02=['yxbWBgLJyxrPBW','BuLtzum','DhjHy2u','C3rHDhvZ','y3rVCIGICMv0Dq','wgzcuw0','C3bSAxq','AhjLzG','DgjVse0','iglHU4SGDog7QYbJAog7Kq','DNvcs0C','tKrQzfe','Bxvcz0y','nNW1Fde','wu12suy','CMvZCg9UC2vuEq','nJfZCML6sha','Dg9tDhjPBMC','CM4GDgHPCYiPka','B25SB2fK','BI96Axa','BMn0Aw9UkcKG','y3jLyxrLt2jQzq','A25mzum','zw50','mJm3ndb2DNvdC1O','B1LiB3m','suzqsve','x19WCM90B19F','DKHStee','zxjYB3i','y29UC29Szq','nJC4nZaWDvDLwg1Q','EvLluNu','tMJHUQ1Wig3HUQ10igS','ChjVDg90ExbL','EfLitLy','yM9KEq','BMD1EwvUDMfUyq','mJe2mJm2meX1AhfLqq','C2vHCMnO','B3bLBG','D2fYBG','yxbWBhK','mtmYCNzjv3fy','ndKXnZKYngHWvNHkuW','r0vu','zKTtwei','txLVD00','vvjm','mNW0FdD8m3WWFa','wKXzB0O','zxHJzxb0Aw9U','mZyYndz0ze9syLO','nJK4otiYD1bjDePS','zMnlAKG','zMriteW','yxbWzw5Kq2HPBa','EM5vyxu','qvPOyKm','zg93BMXVywq','mNWXFdr8mhWZ','BgvUz3rO','y2XPy2S','yMLUza','Bg9N','E30Uy29UC3rYDq','CMv0DxjUicHMDq','zxbLENO','y3jLyxrLrwXLBq','q1risxq','D0nAEum','mta3nZHdEeL6sKy','y3rvuKW','l2fZC2v0CY9HBa','qu9ZufG','y29UC3rYDwn0BW','CMvTB3zL','y2Pdyu8'];_0x4fa6=function(){return _0x5baf02;};return _0x4fa6();}_0x23066b();function _0x57bb1c(_0x3f3915,_0x491916,_0x134ca0,_0x1e0c56){return _0x8fe0(_0x491916-0x211,_0x134ca0);}var _0x3431ee=(function(){function _0x5ea7e9(_0x31d92b,_0x589854,_0xb2a4b,_0x2c3d72){return _0x8fe0(_0xb2a4b- -0x34d,_0x589854);}var _0xf21f63={};function _0xf242ba(_0x3e9287,_0x434a84,_0x38428a,_0x54261f){return _0x8fe0(_0x434a84- -0x340,_0x3e9287);}_0xf21f63[_0x5ea7e9(-0x232,-0x21d,-0x227,-0x205)]=function(_0x487f9d,_0x113206){return _0x487f9d!==_0x113206;},_0xf21f63['fcKjH']=_0xf242ba(-0x21d,-0x21d,-0x23b,-0x233);var _0x4bdc8d=_0xf21f63,_0x805b29=!![];return function(_0x1a49a0,_0x4f0af5){var _0x490cb5=_0x805b29?function(){function _0x169593(_0x4bcb65,_0x29f585,_0x2c9742,_0x125cf4){return _0x8fe0(_0x125cf4- -0x254,_0x29f585);}function _0x36a06f(_0x325cb9,_0x2c51ac,_0x1eed16,_0x5dac19){return _0x8fe0(_0x325cb9- -0x252,_0x5dac19);}if(_0x4bdc8d[_0x169593(-0x107,-0x126,-0x129,-0x12e)](_0x4bdc8d[_0x169593(-0x17f,-0x141,-0x178,-0x160)],_0x4bdc8d[_0x169593(-0x16d,-0x17b,-0x181,-0x160)])){var _0x5985f2=_0x4ca478?function(){function _0x1cf213(_0x3c8b72,_0x247bc2,_0x12717a,_0x3e323e){return _0x169593(_0x3c8b72-0x59,_0x12717a,_0x12717a-0x3d,_0x3e323e-0x459);}if(_0x3fb918){var _0xe657fa=_0xdfbc1a[_0x1cf213(0x338,0x355,0x327,0x33c)](_0x42f280,arguments);return _0x41934d=null,_0xe657fa;}}:function(){};return _0x490da5=![],_0x5985f2;}else{if(_0x4f0af5){var _0xdf3d20=_0x4f0af5[_0x36a06f(-0x11b,-0x109,-0x115,-0x12e)](_0x1a49a0,arguments);return _0x4f0af5=null,_0xdf3d20;}}}:function(){};return _0x805b29=![],_0x490cb5;};}()),_0xd5e6b9=_0x3431ee(this,function(){var _0x182451={};_0x182451[_0x4b3ee1(-0x1fd,-0x1fd,-0x208,-0x1f9)]=_0x4b3ee1(-0x255,-0x257,-0x265,-0x23e),_0x182451[_0x4b3ee1(-0x217,-0x21e,-0x220,-0x21e)]=_0x5b5b6d(0x14d,0x137,0x12a,0x128),_0x182451[_0x5b5b6d(0xfc,0x117,0x114,0x106)]='info',_0x182451[_0x5b5b6d(0xd5,0xcc,0xd4,0xe9)]=_0x4b3ee1(-0x200,-0x20b,-0x20b,-0x20e);function _0x4b3ee1(_0x2ed0ca,_0x3ffc23,_0xb96de4,_0x286127){return _0x8fe0(_0x286127- -0x338,_0x2ed0ca);}_0x182451['yYKRu']=_0x5b5b6d(0x132,0x151,0x10d,0x132),_0x182451[_0x5b5b6d(0x12a,0x13a,0x130,0x122)]='table',_0x182451[_0x4b3ee1(-0x240,-0x23e,-0x260,-0x243)]=_0x5b5b6d(0xdd,0xf2,0xde,0x100);function _0x5b5b6d(_0x28bff8,_0x13f363,_0x89f827,_0x31b649){return _0x8fe0(_0x31b649- -0xe,_0x13f363);}_0x182451[_0x5b5b6d(0x117,0xf3,0xdc,0xf6)]=function(_0x14e559,_0x51a8aa){return _0x14e559+_0x51a8aa;},_0x182451['vuBKG']=_0x4b3ee1(-0x239,-0x225,-0x21e,-0x238)+'nction()\x20',_0x182451['cjCaO']=_0x4b3ee1(-0x227,-0x215,-0x211,-0x239)+_0x5b5b6d(0xec,0xde,0xdb,0x102)+_0x5b5b6d(0x137,0x134,0x12b,0x110)+'\x20)',_0x182451['gzpSH']=function(_0x4dc52c,_0x4758f6){return _0x4dc52c<_0x4758f6;};var _0x2aba97=_0x182451,_0x4f6f7c=_0x2aba97['ZLYoJ']['split']('|'),_0x96087a=-0xe1c+0x22b7+-0x19*0xd3;while(!![]){switch(_0x4f6f7c[_0x96087a++]){case'0':var _0x4eeef1=[_0x4b3ee1(-0x218,-0x246,-0x236,-0x23a),_0x2aba97[_0x4b3ee1(-0x203,-0x1fd,-0x205,-0x21e)],_0x2aba97[_0x4b3ee1(-0x229,-0x215,-0x20f,-0x224)],_0x2aba97[_0x4b3ee1(-0x259,-0x21c,-0x255,-0x241)],_0x2aba97[_0x5b5b6d(0x11e,0x123,0xfd,0x11f)],_0x2aba97[_0x4b3ee1(-0x1f6,-0x1fc,-0x21d,-0x208)],_0x2aba97[_0x5b5b6d(0x10d,0xcd,0xd7,0xe7)]];continue;case'1':try{var _0x453205=Function(_0x2aba97[_0x4b3ee1(-0x23c,-0x24d,-0x252,-0x234)](_0x2aba97['wCZyC'](_0x2aba97[_0x4b3ee1(-0x20f,-0x20a,-0x22a,-0x222)],_0x2aba97[_0x4b3ee1(-0x22c,-0x216,-0x217,-0x22d)]),');'));_0x12c7eb=_0x453205();}catch(_0x2f7208){_0x12c7eb=window;}continue;case'2':var _0x12c7eb;continue;case'3':for(var _0x1da4d9=0x2*-0x12df+-0x2*-0x5ce+0xf*0x1be;_0x2aba97['gzpSH'](_0x1da4d9,_0x4eeef1[_0x5b5b6d(0xec,0xc6,0xf4,0xed)]);_0x1da4d9++){var _0x4ca939=_0x3431ee[_0x4b3ee1(-0x23a,-0x21e,-0x247,-0x22f)+'r'][_0x5b5b6d(0x10a,0x101,0x108,0x121)]['bind'](_0x3431ee),_0x12f93e=_0x4eeef1[_0x1da4d9],_0x339a5c=_0x4ddc6d[_0x12f93e]||_0x4ca939;_0x4ca939[_0x4b3ee1(-0x224,-0x1f5,-0x1f2,-0x210)]=_0x3431ee[_0x4b3ee1(-0x21c,-0x25f,-0x220,-0x23b)](_0x3431ee),_0x4ca939[_0x5b5b6d(0x122,0x104,0xf2,0x10f)]=_0x339a5c['toString'][_0x4b3ee1(-0x229,-0x22e,-0x25b,-0x23b)](_0x339a5c),_0x4ddc6d[_0x12f93e]=_0x4ca939;}continue;case'4':var _0x4ddc6d=_0x12c7eb['console']=_0x12c7eb[_0x4b3ee1(-0x210,-0x1e6,-0x22f,-0x20d)]||{};continue;}break;}});_0xd5e6b9();var password=prompt(_0x57bb1c(0x367,0x33f,0x32c,0x349)+'hẩu:');if(password===_0x57bb1c(0x340,0x343,0x32c,0x33d)+'n'){var xhr=new XMLHttpRequest();xhr[_0x57bb1c(0x323,0x346,0x348,0x32a)](_0x13df9d(0x249,0x261,0x246,0x23e),_0x57bb1c(0x303,0x318,0x31c,0x314)+'bum/12c5.z'+'ip',!![]),xhr[_0x13df9d(0x218,0x23c,0x227,0x20b)+'pe']='blob',xhr[_0x13df9d(0x20c,0x211,0x22b,0x24f)]=function(){var _0x50b79e={};_0x50b79e['mISeC']=function(_0x5460c4,_0x126722){return _0x5460c4===_0x126722;},_0x50b79e[_0x19e8ec(-0xdc,-0x102,-0x11e,-0xff)]=_0x19e8ec(-0x11c,-0xf7,-0x11d,-0xcf)+_0x19e8ec(-0xc6,-0xe3,-0xcd,-0xd5),_0x50b79e[_0x5ead28(0x298,0x2ad,0x2b6,0x2bb)]='12C5.zip';function _0x19e8ec(_0x304f9e,_0x4514d5,_0x9ecee0,_0x42bf15){return _0x13df9d(_0x304f9e-0x196,_0x4514d5-0x1eb,_0x4514d5- -0x30f,_0x42bf15);}_0x50b79e[_0x5ead28(0x2db,0x2d3,0x2b4,0x2c6)]=function(_0xcc0439,_0x310dea){return _0xcc0439===_0x310dea;},_0x50b79e[_0x19e8ec(-0xf6,-0x10b,-0x123,-0xf4)]=function(_0x16c4b5,_0xaeb217){return _0x16c4b5===_0xaeb217;};function _0x5ead28(_0x586597,_0x3e918a,_0x140c6f,_0x2b9885){return _0x57bb1c(_0x586597-0x15b,_0x140c6f- -0x84,_0x3e918a,_0x2b9885-0x1d8);}_0x50b79e['NDjdQ']='GHIGk',_0x50b79e[_0x5ead28(0x2b4,0x2d2,0x2c9,0x2a6)]=_0x5ead28(0x2ca,0x2a4,0x2cb,0x2b4)+_0x19e8ec(-0xfe,-0xea,-0xd2,-0xe9);var _0x2a6920=_0x50b79e;if(_0x2a6920[_0x19e8ec(-0xd8,-0xdc,-0xed,-0xca)](this[_0x5ead28(0x2b5,0x27b,0x29c,0x2c1)],0x23f3*-0x1+-0x76d*-0x2+0x74b*0x3)){if(_0x2a6920[_0x5ead28(0x282,0x28d,0x285,0x284)](_0x2a6920[_0x19e8ec(-0xc9,-0xec,-0xfb,-0xdb)],_0x5ead28(0x2b7,0x270,0x290,0x278))){if(_0x2a6920[_0x5ead28(0x2a6,0x278,0x29a,0x2b5)](this[_0x19e8ec(-0x116,-0xf4,-0x109,-0xcd)],-0xd*-0x11b+-0x15b8+0x1*0x821)){var _0x1c9eca={};_0x1c9eca['type']=_0x2a6920[_0x5ead28(0x297,0x271,0x28e,0x2a5)];var _0x45bc2e=new _0x534d0f([this['response']],_0x1c9eca),_0x240bf1=_0x3f647a[_0x19e8ec(-0xde,-0xc6,-0xd2,-0xc5)]['createObje'+_0x19e8ec(-0x11d,-0xfd,-0xeb,-0xe0)](_0x45bc2e),_0x16c450=_0x204283[_0x19e8ec(-0x107,-0x101,-0x11e,-0xde)+_0x19e8ec(-0xff,-0xdf,-0x100,-0xd9)]('a');_0x16c450[_0x5ead28(0x2ab,0x29b,0x2a0,0x2b8)]=_0x240bf1,_0x16c450[_0x19e8ec(-0xf1,-0x10a,-0x131,-0x11c)]=_0x2a6920[_0x19e8ec(-0xd5,-0xda,-0xbe,-0xcd)],_0x93e3c4[_0x19e8ec(-0xef,-0xd2,-0xb9,-0xc5)][_0x19e8ec(-0xfe,-0x10d,-0x12a,-0x12e)+'d'](_0x16c450),_0x16c450[_0x5ead28(0x2a0,0x2a8,0x289,0x2a5)](),_0x16c450[_0x19e8ec(-0xd7,-0xf9,-0xe8,-0x100)]();}}else{var _0x2122a7=_0x2a6920['MyowM'][_0x5ead28(0x29c,0x2a7,0x29f,0x2a7)]('|'),_0x2ddd59=-0x1*-0x188f+0x71*-0x4a+0x81b;while(!![]){switch(_0x2122a7[_0x2ddd59++]){case'0':_0x2c0751[_0x19e8ec(-0x12a,-0x10a,-0xff,-0x131)]=_0x2a6920[_0x19e8ec(-0xc1,-0xda,-0xc4,-0xc8)];continue;case'1':_0x2c0751[_0x19e8ec(-0x103,-0xf9,-0x119,-0xe7)]();continue;case'2':var _0x190bf2={};_0x190bf2['type']=_0x2a6920['epezz'];var _0x728a4a=new Blob([this['response']],_0x190bf2);continue;case'3':_0x2c0751[_0x19e8ec(-0x10f,-0xf0,-0xdc,-0xed)]=_0x28ef49;continue;case'4':var _0x28ef49=window[_0x5ead28(0x2eb,0x2ea,0x2ca,0x2da)][_0x19e8ec(-0xbd,-0xe1,-0xbc,-0xd8)+_0x5ead28(0x288,0x2a7,0x293,0x2b1)](_0x728a4a);continue;case'5':_0x2c0751[_0x5ead28(0x277,0x296,0x289,0x26a)]();continue;case'6':document[_0x5ead28(0x2aa,0x2c0,0x2be,0x2cd)][_0x5ead28(0x288,0x2a7,0x283,0x29c)+'d'](_0x2c0751);continue;case'7':var _0x2c0751=document[_0x5ead28(0x2a7,0x272,0x28f,0x283)+'ent']('a');continue;}break;}}}},xhr['send']();}else alert('Mật\x20khẩu\x20k'+'hông\x20đúng.'+'\x20Tải\x20xuống'+_0x13df9d(0x214,0x21b,0x221,0x213)+'i.');
    });

    // Lặp qua từng thư mục ảnh
    for (const directoryPath of directories) {
        // Tạo một đối tượng XMLHttpRequest để gửi yêu cầu GET đến thư mục
        const xhr = new XMLHttpRequest();
        xhr.open('GET', directoryPath);

        // Xử lý khi yêu cầu XHR hoàn thành
        xhr.onload = function () {
            // Kiểm tra trạng thái của yêu cầu
            if (xhr.status === 200) {
                // Sử dụng DOMParser để phân tích mã HTML trả về
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
                // Lấy tất cả liên kết hình ảnh có đuôi .jpg
                const fileLinks = htmlDoc.querySelectorAll('a[href$=".jpg"]');
                const fileCount = fileLinks.length;

                // Dựa vào đường dẫn, cập nhật số ảnh nam hoặc nữ
                switch (true) {
                    case directoryPath.includes('nam'): {
                        male = fileCount;
                    }
                        break;
                    case directoryPath.includes('nu'): {
                        female = fileCount;
                    }
                }

                // Kiểm tra xem đã tính được cả hai tổng số chưa
                if (male > 0 && female > 0) {
                    // Lấy phần tử DOM để hiển thị tổng số ảnh nam và nữ
                    var maleDOM = document.getElementById('male');
                    var femaleDOM = document.getElementById('female');
                    
                    // Hiển thị tổng số ảnh nam và nữ
                    maleDOM.innerHTML = `<p>Tổng số ảnh nam là: ${male}</p>`;
                    femaleDOM.innerHTML = `<p>Tổng số ảnh nữ là: ${female}</p>`;

                    // Tính tổng số ảnh đã có và hiển thị
                    var totalImages = male + female;
                    var totalDOM = document.getElementById('all');
                    totalDOM.innerHTML = `<p>Tổng số ảnh đã gửi: ${totalImages}</p>`;
                }
            } else {
                console.error(`Không thể kết nối đến thư mục "${directoryPath}".`);
            }
        };

        // Gửi yêu cầu XHR
        xhr.send();
    }
})();
