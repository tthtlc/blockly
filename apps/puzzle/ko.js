// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="country1">호주</span><span id="country1Flag">flag_au.png</span><span id="country1FlagHeight">50</span><span id="country1FlagWidth">100</span><span id="country1Language">영어</span><span id="country1City1">멜버른</span><span id="country1City2">시드니</span><span id="country1HelpUrl">http://ko.wikipedia.org/wiki/오스트레일리아</span><span id="country2">독일</span><span id="country2Flag">flag_de.png</span><span id="country2FlagHeight">60</span><span id="country2FlagWidth">100</span><span id="country2Language">독일어</span><span id="country2City1">베를린</span><span id="country2City2">뮌헨</span><span id="country2HelpUrl">http://ko.wikipedia.org/wiki/독일</span><span id="country3">중국</span><span id="country3Flag">flag_cn.png</span><span id="country3FlagHeight">66</span><span id="country3FlagWidth">100</span><span id="country3Language">중국어</span><span id="country3City1">베이징</span><span id="country3City2">상하이</span><span id="country3HelpUrl">http://ko.wikipedia.org/wiki/중화인민공화국</span><span id="country4">브라질</span><span id="country4Flag">flag_br.png</span><span id="country4FlagHeight">70</span><span id="country4FlagWidth">100</span><span id="country4Language">포르투갈어</span><span id="country4City1">리우데자네이루</span><span id="country4City2">상파울루</span><span id="country4HelpUrl">http://ko.wikipedia.org/wiki/브라질</span><span id="flag">국기</span><span id="language">언어:</span><span id="languageChoose">선택...</span><span id="cities">도시:</span><span id="error0">완벽합니다!\n모든 블록 %1개가 정확합니다.</span><span id="error1">거의 됐습니다! 블록 한 개가 잘못되었습니다.</span><span id="error2">블록 %1개가 잘못되었습니다.</span><span id="tryAgain">강조한 블록은 올바르지 않습니다.\n계속 해보세요.</span></div>';
};


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title"><a href="../index.html">Blockly</a> : 퍼즐</span></h1></td><td><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select>&nbsp; &nbsp;<button id="helpButton" onclick="Puzzle.showHelp();">도움말</button>&nbsp; &nbsp;<button id="checkButton" class="launch" onclick="Puzzle.checkAnswers();">정답 확인</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div><div id="shadow"></div><div id="help"><div style="padding-bottom: 0.7ex">각 국가(초록)에 국기를 연결하고 언어를 선택하여 도시를 정렬하세요.</div><iframe src="help.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '" style="height: 200px; width: 100%; border: none;"></iframe><div class="farSide" style="padding: 1ex 3ex 0"><button id="okButton" onclick="Puzzle.hideHelp()">확인</button></div></div>';
};


puzzlepage.help = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div><div id="notouch"></div>';
};
