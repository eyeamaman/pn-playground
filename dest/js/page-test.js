pg=pg||{},pg.page=pg.page||{},$(function(){pg.page.test=function(){var a=new pg.widget.playButton,b=new pg.widget.playButton;return resetAll=function(){a.resetAllButtons(),b.resetAllButtons()},a.init("[data-bttn-play]"),b.init("[data-bttn-play-2]"),{resetAll:resetAll}}()});