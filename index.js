/*
     *
     * I don't take any responsibility for blocked Discord accounts that used this module.
     * Using this is prohibited by the Discord TOS and can lead to the account block.
     *
     *
     * ------------- *
     *
     * Editing this Package Means
     * Breaking the Rules of Package and Package License
     * 
     * ------------- *
     * 
     * Reminder That Deleting the Copyright and Package Author
     * Also Means Breaking the rule of Copyright
     * 
     * ------------- *
     * 
     * Use this package as it is
     * and
     * 
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * DO NOT MAKE ANY CHANGES
     * 
     * ------------- *
     * 
     * Github Repo: SeTar-Bot/DSB-Package
     * Author Website: http://EhsanG.ir/
     * 
     */
const _0x5b62=['Please\x20config\x20your\x20application!','message','ready','[INFO]:\x20','token','\x20DSB\x20is\x20Now\x20Loaded!','=================================','config','Commands\x20for\x20load\x20can\x20be\x20a\x20string\x20or\x20an\x20array\x20only!','includes','author','name','size','string','.js','exports','\x20Logged\x20in\x20to\x20','Please\x20Enter\x20Token\x20and\x20Prefix\x20as\x20a\x20String!','push','tag','content','\x20not\x20exist,\x20please\x20load\x20a\x20valid\x20command!','length','command','toLowerCase','set','execute','filter','setup','login','[ERROR]:\x20','aliases','\x20PLEASE\x20NOT\x20THAT\x20YOUR\x20ACCOUNT\x20IS\x20AT\x20RISK','\x20AS\x20SELFBOTS\x20ARE\x20AGAINST\x20DISCORD\x27S\x20TOS','Guilds:\x20','discord.js','\x20NO\x20ONE\x20IS\x20RESPONSILE\x20FOR\x20YOUR\x20ACCOUNT','user','endsWith','commands','trim','1.1.0','log','shift','path','Created\x20By\x20','prefix','chalk','[READY]:','startsWith','console','get','find','forEach','[WARNING]:'];(function(_0x3fc2f3,_0x5b622c){const _0x48cf22=function(_0x7d5130){while(--_0x7d5130){_0x3fc2f3['push'](_0x3fc2f3['shift']());}};_0x48cf22(++_0x5b622c);}(_0x5b62,0x180));const _0x48cf=function(_0x3fc2f3,_0x5b622c){_0x3fc2f3=_0x3fc2f3-0x0;let _0x48cf22=_0x5b62[_0x3fc2f3];return _0x48cf22;};const _0x365777=_0x48cf,{Client,RichEmbed,Collection}=require(_0x365777('0x24')),{red,green,blue,yellow,cyan}=require(_0x365777('0x30')),client=new Client(),{readdirSync}=require('fs'),fs=require('fs'),{join}=require(_0x365777('0x2d')),{Console}=require(_0x365777('0x33'));let NPMData={'config':![],'command':![],'setup':![],'version':_0x365777('0x2a'),'author':'EhsanFox'},ClientData={'token':null,'prefix':null},Commands=[],ClientCMDS=[];module[_0x365777('0x10')]={'about':function(){const _0xd18f0d=_0x365777;console[_0xd18f0d('0x2b')]('DSB\x20v'+NPMData['version']),console[_0xd18f0d('0x2b')](_0xd18f0d('0x2e')+NPMData[_0xd18f0d('0xb')]+'\x0a'+'');},'commands':function(){const _0x29903b=_0x365777;let _0x7d5130=[];const _0x12ee36=readdirSync(join(__dirname,_0x29903b('0x28')))[_0x29903b('0x1c')](_0x503844=>_0x503844[_0x29903b('0x27')](_0x29903b('0xf')));for(const _0x220515 of _0x12ee36){const _0x449e1e=require(join(__dirname,'commands',''+_0x220515));_0x7d5130[_0x29903b('0x13')](_0x449e1e[_0x29903b('0xc')]);}return _0x7d5130;},'config':function(_0x29ec77,_0x547ff6){const _0x1439f3=_0x365777;if(typeof _0x29ec77!='string'||typeof _0x547ff6!=_0x1439f3('0xe'))return console[_0x1439f3('0x2b')](red(_0x1439f3('0x1f'))+_0x1439f3('0x12'));ClientData[_0x1439f3('0x2f')]=_0x547ff6,ClientData[_0x1439f3('0x5')]=_0x29ec77,client['commands']=new Collection();const _0x1978fa=readdirSync(join(__dirname,_0x1439f3('0x28')))[_0x1439f3('0x1c')](_0x1716e1=>_0x1716e1[_0x1439f3('0x27')](_0x1439f3('0xf')));for(const _0x4892fc of _0x1978fa){const _0x3c7ee5=require(join(__dirname,_0x1439f3('0x28'),''+_0x4892fc));client[_0x1439f3('0x28')][_0x1439f3('0x1a')](_0x3c7ee5[_0x1439f3('0xc')],_0x3c7ee5),Commands[_0x1439f3('0x13')](_0x3c7ee5['name']);}NPMData['config']=!![];},'load':function(_0x486312){const _0x41bfd2=_0x365777;if(!NPMData[_0x41bfd2('0x8')])return console[_0x41bfd2('0x2b')](red(_0x41bfd2('0x1f'))+_0x41bfd2('0x1'));if(typeof _0x486312==_0x41bfd2('0xe')){if(!Commands[_0x41bfd2('0xa')](_0x486312))return console['log'](red(_0x41bfd2('0x1f'))+(_0x486312+_0x41bfd2('0x16')));ClientCMDS[_0x41bfd2('0x13')](_0x486312),NPMData['command']=!![];}else{if(typeof _0x486312=='object')_0x486312[_0x41bfd2('0x36')](_0x3e4c13=>{const _0x55ecbe=_0x41bfd2;if(!Commands['includes'](_0x3e4c13))return console[_0x55ecbe('0x2b')](red(_0x55ecbe('0x1f'))+(_0x3e4c13+_0x55ecbe('0x16')));ClientCMDS[_0x55ecbe('0x13')](_0x3e4c13),NPMData[_0x55ecbe('0x18')]=!![];});else return console['log'](red(_0x41bfd2('0x1f'))+_0x41bfd2('0x9'));}},'setup':function(){const _0x187d4b=_0x365777;if(!NPMData[_0x187d4b('0x8')]||!NPMData[_0x187d4b('0x18')])return console[_0x187d4b('0x2b')](red(_0x187d4b('0x1f'))+'Please\x20config\x20your\x20application\x20and\x20load\x20at\x20least\x20one\x20command![SETUP\x20ERROR]');console[_0x187d4b('0x2b')](yellow(_0x187d4b('0x0'))+_0x187d4b('0x21')),console[_0x187d4b('0x2b')](yellow(_0x187d4b('0x0'))+_0x187d4b('0x22')),console['log'](yellow(_0x187d4b('0x0'))+_0x187d4b('0x25')),console[_0x187d4b('0x2b')](_0x187d4b('0x7')),client[_0x187d4b('0x1e')](ClientData[_0x187d4b('0x5')]),client['on'](_0x187d4b('0x3'),()=>{const _0x437e69=_0x187d4b;console[_0x437e69('0x2b')](green('[READY]:')+_0x437e69('0x6')),console[_0x437e69('0x2b')](green(_0x437e69('0x31'))+(_0x437e69('0x11')+client[_0x437e69('0x26')][_0x437e69('0x14')])),console[_0x437e69('0x2b')]('================================='),console[_0x437e69('0x2b')](yellow('[INFO]:\x20')+('Bot\x20Prefix:\x20'+ClientData[_0x437e69('0x2f')])),console[_0x437e69('0x2b')](yellow(_0x437e69('0x4'))+(_0x437e69('0x23')+client['guilds'][_0x437e69('0xd')])),console[_0x437e69('0x2b')](_0x437e69('0x7')),NPMData[_0x437e69('0x1d')]=!![];}),client['on'](_0x187d4b('0x2'),async _0x406bcd=>{const _0x140de8=_0x187d4b;if(_0x406bcd[_0x140de8('0x15')][_0x140de8('0x32')](ClientData['prefix'])&&_0x406bcd['author']['id']===client[_0x140de8('0x26')]['id']){const _0x14c62b=_0x406bcd[_0x140de8('0x15')]['slice'](ClientData[_0x140de8('0x2f')][_0x140de8('0x17')])[_0x140de8('0x29')]()['split'](/ +/),_0x1f2d2=_0x14c62b[_0x140de8('0x2c')]()[_0x140de8('0x19')]();if(!ClientCMDS[_0x140de8('0xa')](_0x1f2d2))return;const _0x26f546=client[_0x140de8('0x28')][_0x140de8('0x34')](_0x1f2d2)||client['commands'][_0x140de8('0x35')](_0x5c66ba=>_0x5c66ba[_0x140de8('0x20')]&&_0x5c66ba[_0x140de8('0x20')][_0x140de8('0xa')](_0x1f2d2));if(!_0x26f546)return;try{_0x26f546[_0x140de8('0x1b')](_0x406bcd,_0x14c62b);}catch(_0x23b77a){console[_0x140de8('0x2b')](red(_0x140de8('0x1f')+_0x23b77a));}}});}};
