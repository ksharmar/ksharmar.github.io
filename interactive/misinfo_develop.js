function misinfo_display() {
  // alert('abc');
	tweets = showMisinfoTweets(0, 100)
	//tweets_2 = showMisinfoTweets(10, 100)
	document.getElementById("misinfo_score_table_recent").innerHTML = tweets;
	//document.getElementById("misinfo_score_table_remaining").innerHTML = tweets_2;
}

function showMisinfoTweets(s, e){

	// 0 = webtype; 1=detection score; 2=text, 3=date, 4=num
	// var abc =  [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
  var  abc = getMisinfoTweets();
	var str = "";
  str += "<table class='mistable' style='border-collapse: separate; border-spacing: 0px;'>"
	str += "<tr class='mistr'><td class='card-header' width='15%'>Website Type*</td>"
	+ "<td class='card-header'>Tweet Propagated on Social Media</td><td class='card-header'  width='35%'>Retweets</td></tr>"
  var i;  // currently 25 tweets shown tweetlist.length/8 abc.length
  for (i = s; i < abc.length; i++) {
			//alert(i)
			if (abc[i].length == 3){
				str += "<tr class='mistr'>";
	      str += "<td class='mistd'>" + abc[i][0] + "</td>";
	      str += "<td class='mistd'>" + abc[i][2]  +"  [" + abc[i][1]+ "]"

				// "<blockquote class='twitter-tweet' data-lang='en'>" +
				// "<p lang='en' dir='ltr'>" + abc[i][2] + "<br/><br/>"  + abc[i][3] +
				// // "<a href='https://twitter.com/anyuser/status/"+ '' +"'>" + abc[i][3] + "</a> " +
				// "</blockquote>"

				+  "</td>";

	      //str += "<td class='mistd' style='text-align:center'>" +   abc[i][1] + "</td></tr>";
				str += "<td class='mistd' style='text-align:center'>" +
				"<img src='img/misinfo/cascade_histogram_images_fixed_ylim/cascade_timeseries_" + abc[i][4] + ".png'" + " class='img-fluid' alt='Responsive image'/>"
				+ "</td></tr>";

			}else{
				str += "<tr class='mistr'>";
	      str += "<td class='mistd'>" + abc[i][0] + "</td>";
	      str += "<td class='mistd'>" + abc[i][2]  +"  [" + abc[i][3]+ "]"

				// "<blockquote class='twitter-tweet' data-lang='en'>" +
				// "<p lang='en' dir='ltr'>" + abc[i][2] + "<br/><br/>"  + abc[i][3] +
				// // "<a href='https://twitter.com/anyuser/status/"+ '' +"'>" + abc[i][3] + "</a> " +
				// "</blockquote>"

				+  "</td>";

	      // str += "<td class='mistd' style='text-align:center'>" +   abc[i][1] + "</td></tr>";
				str += "<td class='mistd' style='text-align:center'>" +
				"<img src='img/misinfo/cascade_histogram_images_fixed_ylim/cascade_timeseries_" + abc[i][4] + ".png'" + " class='img-fluid' alt='Responsive image'/>"
				+ "</td></tr>";

			};
  }

// + abc[4] + ".png'"
	str += "<tr><td style='color:dimgray; font-size:14px'>*(displayed if available)</td>"
    // + "<td style='text-align:center'><a href=javascript:showMoreMisinfoTweets() style='color: dimgray'>"
		//+ "<br/>See more tweets" + "</a></td>"
		+ "<td></td>"
    + "<td></td></tr>";

  str += "</table> <br/><br/><br/>";
  return str;
}

// function showMisinfoTweets(){
//
// 	// 0 = webtype; 1=detection score; 2=text, 3=date, 4=num
// 	// var abc =  [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
//   var  abc = getMisinfoTweets();
// 	var str = "";
//   str += "<table class='mistable' style='border-collapse: separate; border-spacing: 0px;'>"
// 	str += "<tr class='mistr'><td class='card-header' width='15%'>Website Type*</td>"
// 	+ "<td class='card-header'>Tweet Propagated on Social Media</td><td class='card-header'  width='35%'>Retweets</td></tr>"
//   var i;  // currently 25 tweets shown tweetlist.length/8 abc.length
//   for (i = 0; i < 50; i++) {
// 			if (abc[i].length == 3){
// 				str += "<tr class='mistr'>";
// 	      str += "<td class='mistd'>" + abc[i][0] + "</td>";
// 	      str += "<td class='mistd'>" + abc[i][2]  +"  [" + abc[i][1]+ "]"
//
// 				// "<blockquote class='twitter-tweet' data-lang='en'>" +
// 				// "<p lang='en' dir='ltr'>" + abc[i][2] + "<br/><br/>"  + abc[i][3] +
// 				// // "<a href='https://twitter.com/anyuser/status/"+ '' +"'>" + abc[i][3] + "</a> " +
// 				// "</blockquote>"
//
// 				+  "</td>";
//
// 	      //str += "<td class='mistd' style='text-align:center'>" +   abc[i][1] + "</td></tr>";
// 				str += "<td class='mistd' style='text-align:center'>" +
// 				"<img src='img/misinfo/cascade_timeseries_" + abc[i][4] + ".png'" + " class='img-fluid' alt='Responsive image'/>"
// 				+ "</td></tr>";
//
// 			}else{
// 				str += "<tr class='mistr'>";
// 	      str += "<td class='mistd'>" + abc[i][0] + "</td>";
// 	      str += "<td class='mistd'>" + abc[i][2]  +"  [" + abc[i][3]+ "]"
//
// 				// "<blockquote class='twitter-tweet' data-lang='en'>" +
// 				// "<p lang='en' dir='ltr'>" + abc[i][2] + "<br/><br/>"  + abc[i][3] +
// 				// // "<a href='https://twitter.com/anyuser/status/"+ '' +"'>" + abc[i][3] + "</a> " +
// 				// "</blockquote>"
//
// 				+  "</td>";
//
// 	      // str += "<td class='mistd' style='text-align:center'>" +   abc[i][1] + "</td></tr>";
// 				str += "<td class='mistd' style='text-align:center'>" +
// 				"<img src='img/misinfo/cascade_timeseries_" + abc[i][4] + ".png'" + " class='img-fluid' alt='Responsive image'/>"
// 				+ "</td></tr>";
//
// 			};
//   }
//
// // + abc[4] + ".png'"
// 	str += "<tr><td style='color:dimgray; font-size:14px'>*(displayed if available)</td>"
//     + "<td style='text-align:center'><a href=javascript:showMoreMisinfoTweets() style='color: dimgray'>"
// 		+ "<br/>See more tweets" + "</a></td>"
//     + "<td></td></tr>";
//
//   str += "</table> <br/><br/><br/>";
//   return str;
// }

// function showMoreMisinfoTweets(){
//
// 		// 0 = webtype; 1=detection score; 2=text, 3=date, 4=num
// 		// var abc =  [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
// 	  var  abc = getMisinfoTweets();
// 		var str = "";
// 	  str += "<table class='mistable' style='border-collapse: separate; border-spacing: 0px;'>"
// 		str += "<tr class='mistr'><td class='card-header' width='15%'>Website Type*</td>"
// 		+ "<td class='card-header'>Tweet Propagated on Social Media</td><td class='card-header'  width='35%'>Retweets</td></tr>"
// 	  var i;  // currently 25 tweets shown tweetlist.length/8 abc.length
// 	  for (i = 0; i < 100; i++) {
// 				if (abc[i].length == 3){
// 					str += "<tr class='mistr'>";
// 		      str += "<td class='mistd'>" + abc[i][0] + "</td>";
// 		      str += "<td class='mistd'>" + abc[i][2]  +"  [" + abc[i][1]+ "]"
//
// 					// "<blockquote class='twitter-tweet' data-lang='en'>" +
// 					// "<p lang='en' dir='ltr'>" + abc[i][2] + "<br/><br/>"  + abc[i][3] +
// 					// // "<a href='https://twitter.com/anyuser/status/"+ '' +"'>" + abc[i][3] + "</a> " +
// 					// "</blockquote>"
//
// 					+  "</td>";
//
// 		      //str += "<td class='mistd' style='text-align:center'>" +   abc[i][1] + "</td></tr>";
// 					str += "<td class='mistd' style='text-align:center'>" +
// 					"<img src='img/misinfo/cascade_timeseries_" + abc[i][4] + ".png'" + " class='img-fluid' alt='Responsive image'/>"
// 					+ "</td></tr>";
//
// 				}else{
// 					str += "<tr class='mistr'>";
// 		      str += "<td class='mistd'>" + abc[i][0] + "</td>";
// 		      str += "<td class='mistd'>" + abc[i][2]  +"  [" + abc[i][3]+ "]"
//
// 					// "<blockquote class='twitter-tweet' data-lang='en'>" +
// 					// "<p lang='en' dir='ltr'>" + abc[i][2] + "<br/><br/>"  + abc[i][3] +
// 					// // "<a href='https://twitter.com/anyuser/status/"+ '' +"'>" + abc[i][3] + "</a> " +
// 					// "</blockquote>"
//
// 					+  "</td>";
//
// 		      // str += "<td class='mistd' style='text-align:center'>" +   abc[i][1] + "</td></tr>";
// 					str += "<td class='mistd' style='text-align:center'>" +
// 					"<img src='img/misinfo/cascade_timeseries_" + abc[i][4] + ".png'" + " class='img-fluid' alt='Responsive image'/>"
// 					+ "</td></tr>";
//
// 				};
// 	  }
//
//
// // + abc[4] + ".png'"
// 	str += "<tr><td style='color:dimgray; font-size:14px'>*(displayed if available)</td>"
//     + "<td style='text-align:center'><a href=javascript:showMoreMisinfoTweets() style='color: dimgray'>"
// 		// + "<br/>See more tweets" + "</a></td>"
//     + "<td></td></tr>";
//
//   str += "</table> <br/><br/><br/>";
// 	document.getElementById("misinfo_score_table").innerHTML = str;
// 	return;
// }

// function getMisinfoTweets(){
//   // var abc =  [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
//   var abc = [
//     ['  ',  1.0 , ' RT @VictoriaSerbia: American Coronavirus Patient, 36, Rushed to Biocontainment in Critical Condition- https://t.co/xbJgXiCjdv Via - @NeonNe…'],
//     ['  ',  1.0 , ' President Donald Trump announced Monday his coronavirus task force is looking into various financial relief actions aimed at curbing the disease’s effect on the economy. https://t.co/PtFElJPBkA']
//   ]
//   return abc;
// }
//
function getMisinfoTweets(){
  var abc = [
		['political-clickbait', 1.0, 'RT @TeaPainUSA: Trump will easily double the national debt during his first and only term.  https://t.co/Goh9Ndow9F', '2020-03-17T21:00:30', '121'],
		['bias-conspiracy-unreliable', 1.0, '📢 CALM DOWN!   BREAKING EXCLUSIVE: The Coronavirus Fatality Rate Reported by Media Is COMPLETELY INACCURATE. Actual Rate Is LESS THAN THE FLU – MEDIA LYING AGAIN!  Are we surprised?   @RudyGiuliani has a #coronavirus podcast:  👇 https://t.co/nWV2zaaXm6  https://t.co/0rXKmMuOIY', '2020-03-16T14:33:14', '105'],
		//['political-bias', 1.0, 'RT @dbongino: Ayanna Pressley Would Release Prisoners to Fight Coronavirus. #TDS 👇🏻 https://t.co/jYHMBAxPuL', '2020-03-16T13:04:30', '102'],
		['political-clickbait-bias', 1.0, 'RT @DailyCaller: Jennifer Rubin: More Republicans Will Die From Coronavirus Than Democrats https://t.co/r3V0bSvyot', '2020-03-16T10:34:42', '101'],
		['bias', 1.0, 'RT @marklevinshow: Pompeo slams communist China for lying about Wuhan coronavirus. https://t.co/1aozdSU1qK', '2020-03-17T12:28:47', '119'],
		// ['political-clickbait', 1.0, 'RT @TekStol: Trump supporters worry president’s coronavirus response will cost him 2020 re-election https://t.co/ww8Bk8FM7D', '2020-03-16T15:37:07', '109'],
		['bias-conspiracy-unreliable', 1.0, 'RT @JohnGrahamDick1: Johns Hopkins and Gates Foundation Hosted Coronavirus Pandemic Simulation Last October https://t.co/JSn1dAh3zi via @ga…', '2020-03-15T02:06:31', '92'],
		['', 1.0, 'RT @TheOnion: Health Experts Worry Coronavirus Will Overwhelm America’s GoFundMe System https://t.co/7W8dIjmVJS https://t.co/eALs99PiBA', '2020-03-13T17:25:56', '129'],
		['conspiracy-fake-bias', 1.0, 'RT @EyesOnQ: Sheriff Clarke: George Soros is Involved in Coronavirus Outbreak Panic .... https://t.co/wWAXHxvWd2', '2020-03-17T06:25:15', '117'],
		['political-clickbait', 1.0, 'RT @RawStory: Here’s how the Kushner family is cashing in on the coronavirus  https://t.co/5xqq93NTdE', '2020-03-16T03:48:48', '98'],
		['political-bias', 1.0, 'RT @Kimbraov1: The Real Reason Why 40 Republicans Voted Against the Second Coronavirus Bill https://t.co/zfpaji8uEi #NewsandPolitics via @p…', '2020-03-14T21:03:58', '89'],
['political-bias', 1.0, 'RT @dbongino: Joe Biden Presents Trumps Coronavirus Response as His Own Plan https://t.co/qnaTDyhxol', '2020-03-13T11:39:12', '72'],
		['', 1.0, 'RT @TheBabylonBee: Biden: Ill Survive The Coronavirus Just Like I Survived The Black Death https://t.co/QINU5dKadi', '2020-03-12T21:19:33', '128'],



		['bias', 1.0, 'RT @EyesOnQ: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/k1inDIuKi8', '2020-03-10T19:13:56', '47'],
		['clickbait-unreliable', 1.0, 'RT @Breaking911: LIST: These Products Will Kill The Coronavirus - https://t.co/flnPkXPPou https://t.co/q3XcSz0z3n', '2020-03-10T18:32:30', '46'],
		['bias-unreliable', 1.0, 'RT @Russ_Warrior: #Russia gives #Iran 50.000 #coronavirus testing kits to help fight epidemic. 👏 https://t.co/ckxs7K1yHp', '2020-03-10T17:47:42', '45'],
		['clickbait-unreliable', 1.0, 'RT @RobertCooper58: Ben Carson Admits Trump Has No Plan For Coronavirus Infected Cruise Ship https://t.co/ss1ufvKYBM', '2020-03-08T23:28:49', '1'],
		['clickbait-unreliable', 1.0, 'RT @realTuckFrumper: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/aszIIk1dOq', '2020-03-08T23:28:43', '0'],

		// ['political-clickbait-bias', 1.0, 'RT @Inevitable_ET: Wut in tarnation  https://t.co/KgA2jkelJb', '2020-03-17T18:54:40', '120'],
		// ['political-clickbait-bias', 1.0, 'RT @EyesOnQ: Katie Hill Claims She ‘Almost Certainly’ Has Coronavirus https://t.co/yK9Dse8JZh', '2020-03-17T07:09:00', '118'],
		['political-clickbait-bias', 1.0, 'RT @ReneeCarrollAZ: Devin Nunez: Media And The Left Are Putting The Country Into A Panic For No Reason https://t.co/9lo9VoB0Wn  "So a…', '2020-03-15T11:21:55', '94'],
		//['political-clickbait-bias', 1.0, 'RT @DailyCaller: Trump Calls Coronavirus ‘The Chinese Virus’ For The First Time https://t.co/OHK3ptaK5g', '2020-03-17T03:54:06', '116'],
		//['political-clickbait-bias', 1.0, 'RT @JackPosobiec: Katie Hill Claims She ‘Almost Certainly’ Has Coronavirus  https://t.co/nZblOBtyUC', '2020-03-17T02:38:54', '115'],
		//['political-clickbait-bias', 1.0, 'RT @DailyCaller: Katie Hill Claims She ‘Almost Certainly’ Has Coronavirus https://t.co/FZeNuTEKo0', '2020-03-17T01:34:20', '114'],
		// ['political', 1.0, 'Twitter Deleted Sheriff Clarke’s Wildly Reckless Coronavirus Tweets, So He Says He’s Quitting https://t.co/v0iocpCWlJ via @thedailybeast', '2020-03-17T00:54:53', '113'],
		['political', 1.0, 'RT @realTuckFrumper: Twitter Deleted Sheriff Clarke’s Wildly Reckless Coronavirus Tweets, So He Says He’s Quitting https://t.co/gYtcz2xfba', '2020-03-16T19:30:22', '112'],
		['political-clickbait', 1.0, 'RT @SarahKSilverman: Here’s how the Kushner family is cashing in on the coronavirus | Raw Story https://t.co/uvHCrRLgrA', '2020-03-16T16:40:33', '111'],
		['political-clickbait', 1.0, 'Looks like @senatemajldr again putting the needs of Americans behind other interests by pushing coronavirus vote to later in week over GOP opposition to House bill.  There are no possible reasons. Even the House GOP and the Trump support this. https://t.co/ThwhpMuZSh via rawstory', '2020-03-16T16:40:28', '110'],
				// ['political-clickbait', 1.0, 'RT @IBiegen: McConnell pushing coronavirus vote to later in week over GOP opposition to House bill: report https://t.co/qVVBctCHDU THIS SHI…', '2020-03-16T15:15:34', '108'],
		//['political-clickbait', 1.0, 'No member of the @GOP should ever be allowed to serve in Government again.  McConnell pushing coronavirus vote to later in week over GOP opposition to House bill: report https://t.co/zqGF5XJeta', '2020-03-16T14:55:30', '107'],
		// ['political-clickbait', 1.0, 'RT @thomaskaine5: McConnell pushing coronavirus vote to later in week over GOP opposition to House bill: report https://t.co/TnduzshhBG', '2020-03-16T14:52:35', '106'],
				//['political-clickbait', 1.0, 'Trump-loving megachurch begs followers to pack into the pews amid coronavirus outbreak: ‘If we die — we die for Christ’ https://t.co/ZUfkml5tAQ', '2020-03-16T14:08:43', '104'],
		//['political', 1.0, 'RT @Public_Citizen: Matt Gaetz voted against paid sick leave then took paid sick leave. https://t.co/E9uvK4I6SJ', '2020-03-16T13:28:32', '103'],
		['bias-conspiracy-unreliable', 1.0, 'Pompous Democrat Lawyer Who Tried and Failed to Impeach Trump Tests Positive for Coronavirus - Then Blames Trump https://t.co/yd8vY65HBs via @gatewaypundit', '2020-03-16T08:07:17', '100'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: Take comfort, MAGA.  Your suffering is linin’ the pockets of the Trump crime family. https://t.co/T5cIzHUCoh', '2020-03-16T04:31:46', '99'],
		// ['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: 29 of 68 Coronavirus Deaths in US Are Associated with One Senior Center in Kirkland, Washington https://t.co/vb6FeWn9eS…', '2020-03-15T23:11:03', '97'],
		// ['political-clickbait', 1.0, 'Dow Futures drop 840 points as Trump was speaking about coronavirus response  https://t.co/1ZqNCUY1j2', '2020-03-15T22:28:39', '96'],
		// ['bias-conspiracy-unreliable', 1.0, 'RT @militarysweep2: https://t.co/hA7UuqhONN Indictments Fl 14K+- Iw 5k+- La 3k+- NY 17000+ RI 1600+- WA 6500+- MD 6k+- CA 72K+- Think Smoke…', '2020-03-15T12:49:49', '95'],
		['political-clickbait-bias', 1.0, 'RT @DailyCaller: Devin Nunes: ‘Media And The Left’ Are ‘Putting The Country Into A Panic’ For ‘No Reason’ https://t.co/kdM7mVmhIn', '2020-03-15T02:25:40', '93'],
		['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: Johns Hopkins and Gates Foundation Hosted Coronavirus Pandemic Simulation Last October https://t.co/A7pvxqjxGY via @gate…', '2020-03-15T01:42:15', '91'],
		['bias-conspiracy-unreliable', 1.0, 'RT @love4thegameAK: 👀👀  Johns Hopkins and Gates Foundation Hosted Coronavirus Pandemic Simulation Last October   https://t.co/XK8vbFow81', '2020-03-15T01:42:03', '90'],
		// ['political', 1.0, '“We’re in one of those rare times when sharp, structural change is possible in the heat of the crisis.” Read me, @alybatt @aldatweets &amp  @KateAronoff in @jacobinmag. We must care for the vulnerable and demand systemic  transformation. We can’t afford not to https://t.co/o0MZmgFvUR', '2020-03-14T20:41:59', '88'],
		// ['political', 1.0, 'Matt Gaetz voted against paid sick leave.   Matt Gaetz is currently on paid sick leave from Congress. https://t.co/E9uvK4I6SJ', '2020-03-14T18:36:01', '87'],
		['bias-conspiracy-unreliable', 1.0, 'Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage... Wait...Stop... ⁦@trish_regan⁩ monologue created such a uproar on the #Left her show was suspended shortly after..  ⁦@FoxBusiness⁩ Is suppressing our voice (VIDEO)🤬 https://t.co/RXvEATdnbE', '2020-03-14T13:34:48', '86'],
		['bias', 1.0, 'RT @marklevinshow: Biden ad attacking Trump over coronavirus is full of lies https://t.co/9mjctuOSrH', '2020-03-14T12:25:57', '85'],
		['political-clickbait-bias', 1.0, 'RT @DailyCaller: Google-Funded Think Tank Chief Resigns After Wishing Coronavirus Would Kill Trump. https://t.co/WnA7upJhFN', '2020-03-14T12:07:41', '84'],
		['bias-conspiracy-unreliable', 1.0, 'RT @steve_Beno3210: Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage https://t.co/8LjtnKSRFw', '2020-03-14T08:54:35', '83'],
		['bias', 1.0, 'The same guy who coerced a doctor into helping him dodge the draft is now coercing a doctor into helping him dodge the coronavirus test.  https://t.co/k5rVteYLmb', '2020-03-14T05:03:35', '82'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: Trump’s literally the “enemy of the people.” https://t.co/9mhBXO882f', '2020-03-14T03:57:07', '81'],
		['bias-conspiracy-unreliable', 1.0, 'RT @DavidWaddell5: NOT HAPPY 😡😡 Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage https://t.co/xLgRhV83vK', '2020-03-14T03:18:07', '80'],
		['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage @KristinnFR https://t.co/jfAj5SCNct via @ga…', '2020-03-14T02:56:47', '79'],
		['political-unreliable-bias', 1.0, 'RT @DevinNunes: Democrats Pushed Impeachment While Coronavirus Spread ⁦@joelpollak⁩  https://t.co/TA4AuQDYam', '2020-03-14T01:29:40', '78'],
		['political-unreliable-bias', 1.0, 'RT @atensnut: Fmr Coronavirus Patient: The Hysteria Has Just Gotten Out of Control https://t.co/BNqjahbCU2', '2020-03-14T01:26:43', '77'],
		['satire', 1.0, 'RT @NickBaumann: Health Experts Worry Coronavirus Will Overwhelm America’s GoFundMe System: https://t.co/XEFaJnIWOX', '2020-03-14T01:05:41', '76'],
		['political', 1.0, 'RT @jacobinmag: Bernie Sanders can lead the fight against coronavirus. Joe Biden can’t. https://t.co/BjnOwMhl5z', '2020-03-13T22:14:25', '75'],
		['bias', 1.0, 'RT @newtgingrich: Bidens attacks on the administrations handling of the coronavirus were filled with falsehoods. https://t.co/1ZubavDdIH', '2020-03-13T19:39:00', '74'],
		['political', 1.0, 'RT @briantylercohen: Matt Gaetz, who voted against paid sick leave, is currently on paid sick leave from Congress. https://t.co/SRfjGWqkjH', '2020-03-13T16:43:39', '73'],
		['political-unreliable-bias', 1.0, 'RT @joelpollak: Pollak: Democrats Pushed Impeachment While Coronavirus Spread — (for 20 days!) https://t.co/Iw1gIBCuZc', '2020-03-13T11:18:05', '71'],
		['political-clickbait', 1.0, 'RT @RawStory: How did Matt Gaetz get a coronavirus test when the rest of us can’t?  https://t.co/gSLVKhzAcu', '2020-03-13T10:55:07', '70'],
		['political-clickbait', 1.0, 'RT @RealJamesWoods: Can they be any more putrid examples of pure evil than they already are?  https://t.co/puVhu71qw0', '2020-03-13T05:51:45', '69'],
		['political-unreliable-bias', 1.0, 'RT @2runtherace: Super-Rich Turn to Bunkers to Self-Quarantine During Coronavirus Outbreak!!  https://t.co/uiuE9DiT0t @realDonaldTrump', '2020-03-13T02:38:34', '68'],


		['political', 1.0, 'RT @dyllyp: Matt Gaetz voted against paid sick leave, and then went on paid sick leave. https://t.co/1oh2WOZoWu', '2020-03-12T23:52:22', '67'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: We should condemn Mar-a-Lago and turn it into a #coronavirus containment facility.   https://t.co/KDNyD7e4PH', '2020-03-12T19:54:43', '66'],
		['political-clickbait-bias', 1.0, 'RT @DailyCaller: Chinese Official Blames US For Introducing Coronavirus To Wuhan, Says US ‘Owes Us An Explanation’ https://t.co/TxELt2x5nA', '2020-03-12T18:04:32', '65'],


		['bias-clickbait', 1.0, 'RT @HarveyStaub1: MSNBC Hopes Americans Dying From Coronavirus Will “Take Down Trump’s Presidency” https://t.co/XUBaj6Y8x1 Think. The fake…', '2020-03-12T03:32:44', '64'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: Trump’s every instinct is either wrong, stupid or evil. https://t.co/ILbuNzkBRx', '2020-03-12T02:46:47', '63'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: ‘We can’t believe a word you say’  https://t.co/GFSovbT6i0', '2020-03-11T22:56:30', '62'],
		['political', 1.0, 'RT @jaketapper: Editors of @NRO: President Trump Needs to Step Up on the Coronavirus  https://t.co/K36xcTxR8e', '2020-03-11T12:28:37', '61'],
		['political-clickbait-bias', 1.0, 'RT @DailyCaller: Gavin Newsom Praises Trump Administration’s Response To Coronavirus. https://t.co/2xgZmD4GBm', '2020-03-11T08:12:01', '60'],


		['bias-conspiracy-unreliable', 1.0, 'So commie #BernieSanders says he wouldn’t close the border to stop the spread of #coronavirus in a national emergency—it’s too xenophobic.   Stuff like this is why he got destroyed yesterday by a guy who is semi-senile.  #SocialismKills #KAGA2020 #TWGRP  https://t.co/KDa2qUrzJz', '2020-03-11T06:21:40', '59'],
		['bias-conspiracy-unreliable', 1.0, 'DESPITE CORONAVIRUS PANIC: President Trump Approval Rating at 48% -- 4 Points Higher than Media Darling Obama at Same Point in His Presidency https://t.co/0BCDzzXmPS via @gatewaypundit', '2020-03-11T02:47:32', '58'],
		['', 1.0, 'RT @chuckwoolery: Liberal California Governor Praises Trump And Pence For Response To Coronavirus (VIDEO) https://t.co/fW9fSWj85n https://t…', '2020-03-10T23:10:23', '127'],
		['political-unreliable-bias', 1.0, 'RT @KeishaJake: LIAR HUNTER‼️🤥🤥🤥🤥Hunter Biden to Skip Court Appearance, Cites Coronavirus, Pregnant Wife https://t.co/vHUFNXCKO4', '2020-03-10T22:30:13', '57'],
		['political', 1.0, '1. Gaetz gets a test and we are supposed to believe Trump hasn’t? 2. If you are negative, get your butt to work! https://t.co/gCVhFFKH2p', '2020-03-10T21:22:29', '56'],
		['political-clickbait-bias', 1.0, 'RT @DailyCaller: Hunter Biden Says Coronavirus Is Keeping Him From Attending Child Support Deposition https://t.co/iTybXfD3N3', '2020-03-10T21:01:23', '55'],
		['political-unreliable', 1.0, 'RT @RealSaavedra: Democrat Ilhan Omar is spreading propaganda from communist China: https://t.co/OKWWYsCvEh', '2020-03-10T20:18:46', '54'],
		['political-clickbait-bias', 1.0, 'RT @DailyCaller: Ilhan Omar Says It’s ‘Racist’ To Call COVID-19 The ‘Chinese Coronavirus’ https://t.co/YuseqdS5Hm', '2020-03-10T19:37:51', '53'],
		['', 1.0, 'RT @1776Stonewall: https://t.co/II1IMOUPXO California governor Gavin Newsom Praises President Trump and vice president Pence for Coronaviru…', '2020-03-10T19:35:30', '126'],
		['bias', 1.0, 'RT @MZHemingway: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/LW9zqIvVGa', '2020-03-10T19:35:20', '52'],
		['bias', 1.0, 'RT @alx: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/2xSKmFBjP6', '2020-03-10T19:14:37', '51'],
		['bias', 1.0, 'RT @BrentScher: BREAKING: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/Py17Wr37Kc', '2020-03-10T19:14:34', '50'],
		['bias', 1.0, 'RT @bennyjohnson: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife   https://t.co/IEdjcmaVeX', '2020-03-10T19:14:16', '49'],
		['bias', 1.0, 'RT @JackPosobiec: Hunter Biden to Skip Court Appearance, Citing Coronavirus  https://t.co/VxXZFmKeCr', '2020-03-10T19:13:57', '48'],
		['political-unreliable-bias', 1.0, 'RT @yogagenie: Scott Adams: Even with Coronavirus, Bernie and Biden Will Lose to Trump https://t.co/t1i7ExgPc7', '2020-03-10T13:30:56', '44'],
		['political-clickbait', 1.0, 'Just more #fakenews trying to tarnish ⁦@realDonaldTrump⁩ reputation with #America Fake News: #DailyMail Claims #Trump ‘Storms’ Out of #WuhanVirus Briefing, But the Video Shows No Such Thing #coronavirus #KAG2020 #MAGA #KAG #Trump2020  https://t.co/Ant7S0MWMD', '2020-03-10T12:49:32', '43'],
		['bias-conspiracy-unreliable', 1.0, 'Dr. Oz Argues Coronavirus Numbers from Korea Show Lower Death Rate - May Be No Worse than Common Flu (VIDEO) https://t.co/4UwnFDpz1D', '2020-03-10T10:19:18', '42'],
		['', 1.0, 'RT @washingtonpost: Opinion: As the coronavirus burns, Trump scores a perfect Nero https://t.co/wXo7KohMxI', '2020-03-10T07:45:21', '125'],
		['bias-conspiracy-unreliable', 1.0, 'RT @Wingman_Bret: Liberal California Governor Praises Trump And Pence For Response To Coronavirus (VIDEO) https://t.co/nAX4SoEN1s', '2020-03-10T06:20:31', '41'],
		['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: Liberal California Governor Praises Trump And Pence For Response To Coronavirus (VIDEO) https://t.co/Xx3qgA9xH7 via @gat…', '2020-03-10T04:56:24', '40'],
		// ['bias', 1.0, 'RT @PalmerReport: Pearl Jam cancels tour, slams Donald Trump administrations disastrous coronavirus response https://t.co/mFMGKAVWES', '2020-03-10T03:28:29', '39'],
		['political-clickbait', 1.0, 'RT @RawStory: Judges blast Trump administration for ordering coronavirus info posters taken down from courts https://t.co/aav25XJkRM', '2020-03-10T03:08:39', '38'],
		['political-clickbait', 1.0, 'We haven’t considered it, but now that you mention it. https://t.co/FtNk4g3NS4', '2020-03-10T01:44:23', '37'],
		['clickbait-unreliable', 1.0, 'RT @Breaking911: LIST: These Products Will Kill The Coronavirus - https://t.co/flnPkXPPou https://t.co/0nxsxN8A62', '2020-03-10T01:41:20', '36'],
		['political-clickbait', 1.0, 'RT @debraraes: MSNBC Host Nicole Wallace Hopes Coronavirus Tanks Trump’s Presidency https://t.co/MfQRCBCHLX’s-presidency/ Democrats NOT #Th…', '2020-03-10T01:21:49', '35'],
		['political-clickbait', 1.0, 'RT @RawStory: Fox host fears Trump will be impeached over his coronavirus response: ‘The hate is boiling over’   https://t.co/csxV0cA3Nn', '2020-03-10T01:18:49', '34'],
		['political-clickbait', 1.0, 'RT @RawStory: Judges blast Trump administration for ordering #coronavirus info posters taken down from courts https://t.co/aav25XJkRM', '2020-03-10T00:14:21', '33'],
		['political-unreliable-bias', 1.0, 'RT @KeishaJake: Trump Blames Oil War and Coronavirus ‘Fake News’ for Stock Market Plunge https://t.co/nABZA8NDbj', '2020-03-09T23:52:57', '32'],
		['political-unreliable-bias', 1.0, 'RT @cjtruth: Pompeo knows what it is....👀👇👇 China: Vicious for Pompeo to Refer to Chinese Coronavirus as Chinese https://t.co/MXqyDADzVk', '2020-03-09T21:23:54', '31'],
		['clickbait-unreliable', 1.0, 'Trump Demands Barr Investigate The Media’s Coronavirus Coverage https://t.co/HkVF4NrOJV via @politicususa  Welcome to 1930s Germany.', '2020-03-09T20:43:28', '30'],
		['political-clickbait', 1.0, 'Karma laughs at idiots and fools.  https://t.co/xb0wSRitB9', '2020-03-09T20:18:56', '29'],
		['political-reliable', 1.0, 'RT @TeaPainUSA: Teas gonna keep sayin it.    MAGA. Is. A. Death. Cult.  https://t.co/QluhhbjJYE', '2020-03-09T19:56:36', '28'],
		['clickbait-unreliable', 1.0, 'Trump Demands Barr Investigate The Media’s Coronavirus Coverage https://t.co/GT7vU6DxFA', '2020-03-09T19:17:34', '27'],
		['political', 1.0, 'RT @Brn2Wander1: VIDEO: Fox’s Jeanine Pirro slams media for ‘doomsday reporting’ on coronavirus https://t.co/GAwO4zBgBJ via @realdennislynch', '2020-03-09T17:39:24', '26'],
		['', 1.0, 'LIVE: Daily media briefing on #COVID19 with @DrTedros #coronavirus https://t.co/cN3WfNcsyd', '2020-03-09T16:14:11', '124'],
		['conspiracy', 1.0, 'DC Priest Who Shook 500 Hands At Communion Has Coronavirus  https://t.co/McWUF5Wnrz', '2020-03-09T16:14:00', '25'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: Come on MAGA.  Take one for the team! https://t.co/EEHsUMFYB1', '2020-03-09T15:52:42', '24'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: Many people are sayin’ Adderall weakens you immunity to coronavirus. https://t.co/QQ5Nll9lXp', '2020-03-09T15:51:33', '23'],
		['political-unreliable-bias', 1.0, 'RT @cjtruth: Pirro: Coronavirus Is Proof Mainstream Media Has an Agenda When It Comes to Trump https://t.co/fMsu3vMkzN', '2020-03-09T14:28:23', '22'],
		['political-clickbait', 1.0, 'RT @TeaPainUSA: Evil thrives in chaos and darkness. https://t.co/3Vpb8OquKU', '2020-03-09T14:27:00', '21'],
		['', 1.0, 'RT @CNBC: Markets are tanking, coronavirus is spreading – and Trump is attacking Biden and the media https://t.co/tMvobAJuXr', '2020-03-09T12:40:14', '123'],
		['clickbait-unreliable', 1.0, 'Kellyanne Conway May Have Been Exposed To Coronavirus https://t.co/bLBllSgUYU', '2020-03-09T12:39:50', '20'],
		['political-clickbait-bias', 1.0, 'Its shocking that MSDNC would push back, right? Just because they want to start a PANIC and blame the President?  THE STATS:  In the same time that weve seen 3,354 deaths from the coronavirus, 924,000 children have gone missing. 125,000 abortions/day US. https://t.co/Ku0Qkyt1aj', '2020-03-09T10:32:52', '19'],
		['political-clickbait', 1.0, 'Here’s Just How Ridiculously Biased the Media Have Been Covering Coronavirus https://t.co/0lLbHm6tzG', '2020-03-09T10:30:19', '18'],
		['bias', 1.0, 'RT @PalmerReport: Donald Trump just learned he’s been potentially exposed to coronavirus. Now he’s canceling events. https://t.co/c87AWmgGNh', '2020-03-09T10:08:00', '17'],
		['political-clickbait', 1.0, 'RT @RawStory: Dow futures sink more than 1,000 points and oil prices plummet amid coronavirus  https://t.co/aTjKECZaP5', '2020-03-09T03:46:20', '16'],
		['clickbait-unreliable', 1.0, 'RT @IAmJoeTrudeau: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/DKuozSeags', '2020-03-09T03:26:50', '15'],
		['bias', 1.0, 'RT @PalmerReport: Donald Trump just learned hes been potentially exposed to coronavirus. Now hes canceling events. https://t.co/xdgUfwD7jE', '2020-03-09T02:19:57', '14'],
		['bias', 1.0, 'I didn’t even have “Ted Cruz locks himself in bunker because he may have deadly virus that Donald Trump failed to stop” on my bingo card.  https://t.co/DYe0VCMe6N', '2020-03-09T01:59:26', '13'],
		['political-clickbait', 1.0, 'RT @RawStory: YOWZA!   Dow futures sink more than 1,000 points and oil prices plummet amid coronavirus   https://t.co/aTjKEDgMdF', '2020-03-09T00:56:34', '12'],
		['clickbait-unreliable', 1.0, 'RT @rmayemsinger: #DontTestDontTell needs to trend. https://t.co/TQoAPYdkJ9', '2020-03-09T00:33:34', '11'],
		['clickbait-unreliable', 1.0, 'RT @whatifisaidit: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/1LIBInsIHB via @politicususa', '2020-03-09T00:32:59', '10'],
		['', 1.0, 'RT @Thomas1774Paine: ER Doctor: 98 to 99 Percent Of Coronavirus Victims ‘Are Going To Do Very, Very Well’ https://t.co/s10TQvnDOQ', '2020-03-09T00:11:48', '122'],
		['bias', 1.0, 'RT @Texasexpatriate: ER Doctor: 98 to 99 Percent Of Coronavirus Victims ‘Are Going To Do Very, Very Well’   https://t.co/4Tr6TAF8Mj', '2020-03-09T00:11:46', '9'],
		['clickbait-unreliable', 1.0, 'RT @Breaking911: Senator Ted Cruz Self-Quarantined  https://t.co/g0Gs30cOTO', '2020-03-08T23:50:30', '8'],
		['political-clickbait', 1.0, 'WOW...Ted Cruz interacted with coronavirus-infected CPAC attendee — and won’t return to Washington. https://t.co/syKFPOMN6c', '2020-03-08T23:30:38', '7'],
		['political-clickbait', 1.0, '🔥🔥Trump was warned of a pandemic LAST YEAR ‘that could lead to massive rates of death’ by the intel director he fired‼️ https://t.co/DEZy2L6THy via rawstory #CoronavirusOutbreak #Nero #coronavirus #Resistance', '2020-03-08T23:30:07', '6'],
		['political-clickbait-bias', 1.0, 'RT @Stop_Trump20: Matt Gaetz Suggests That Drinking A Bunch Of Alcohol Can Kill The Coronavirus  https://t.co/tkx5snprU5', '2020-03-08T23:29:44', '5'],
		['political-clickbait', 1.0, 'RT @RawStory: Ted Cruz interacted with coronavirus-infected CPAC attendee -- and wont return to Washington   https://t.co/ASwyIKjYhR', '2020-03-08T23:29:42', '4'],
		['clickbait-unreliable', 1.0, 'RT @1reddragon696: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/7SUCYvWDp6 via @politicususa', '2020-03-08T23:29:36', '3'],
		['political-clickbait', 1.0, 'RT @CheriJacobus: Ted Cruz interacted with coronavirus-infected CPAC attendee and won’t return to Washington - https://t.co/NWxcVnVpcG', '2020-03-08T23:28:59', '2'],


// ['clickbait-unreliable', 1.0, 'RT @realTuckFrumper: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/aszIIk1dOq', '2020-03-08T23:28:43', '0'],
// ['clickbait-unreliable', 1.0, 'RT @RobertCooper58: Ben Carson Admits Trump Has No Plan For Coronavirus Infected Cruise Ship https://t.co/ss1ufvKYBM', '2020-03-08T23:28:49', '1'],
// // ['political-clickbait', 1.0, 'RT @CheriJacobus: Ted Cruz interacted with coronavirus-infected CPAC attendee and won’t return to Washington - https://t.co/NWxcVnVpcG', '2020-03-08T23:28:59', '2'],
// ['clickbait-unreliable', 1.0, 'RT @1reddragon696: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/7SUCYvWDp6 via @politicususa', '2020-03-08T23:29:36', '3'],
// ['political-clickbait', 1.0, 'RT @RawStory: Ted Cruz interacted with coronavirus-infected CPAC attendee -- and wont return to Washington   https://t.co/ASwyIKjYhR', '2020-03-08T23:29:42', '4'],
// ['political-clickbait-bias', 1.0, 'RT @Stop_Trump20: Matt Gaetz Suggests That Drinking A Bunch Of Alcohol Can Kill The Coronavirus  https://t.co/tkx5snprU5', '2020-03-08T23:29:44', '5'],
// ['political-clickbait', 1.0, '🔥🔥Trump was warned of a pandemic LAST YEAR ‘that could lead to massive rates of death’ by the intel director he fired‼️ https://t.co/DEZy2L6THy via rawstory #CoronavirusOutbreak #Nero #coronavirus #Resistance', '2020-03-08T23:30:07', '6'],
// ['political-clickbait', 1.0, 'WOW...Ted Cruz interacted with coronavirus-infected CPAC attendee — and won’t return to Washington. https://t.co/syKFPOMN6c', '2020-03-08T23:30:38', '7'],
// //['clickbait-unreliable', 1.0, 'RT @Breaking911: Senator Ted Cruz Self-Quarantined  https://t.co/g0Gs30cOTO', '2020-03-08T23:50:30', '8'],
// ['bias', 1.0, 'RT @Texasexpatriate: ER Doctor: 98 to 99 Percent Of Coronavirus Victims ‘Are Going To Do Very, Very Well’   https://t.co/4Tr6TAF8Mj', '2020-03-09T00:11:46', '9'],
// ['clickbait-unreliable', 1.0, 'RT @whatifisaidit: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/1LIBInsIHB via @politicususa', '2020-03-09T00:32:59', '10'],
// ['clickbait-unreliable', 1.0, 'RT @rmayemsinger: #DontTestDontTell needs to trend. https://t.co/TQoAPYdkJ9', '2020-03-09T00:33:34', '11'],
// ['political-clickbait', 1.0, 'RT @RawStory: YOWZA!   Dow futures sink more than 1,000 points and oil prices plummet amid coronavirus   https://t.co/aTjKEDgMdF', '2020-03-09T00:56:34', '12'],
// ['bias', 1.0, 'I didn’t even have “Ted Cruz locks himself in bunker because he may have deadly virus that Donald Trump failed to stop” on my bingo card.  https://t.co/DYe0VCMe6N', '2020-03-09T01:59:26', '13'],
// ['bias', 1.0, 'RT @PalmerReport: Donald Trump just learned hes been potentially exposed to coronavirus. Now hes canceling events. https://t.co/xdgUfwD7jE', '2020-03-09T02:19:57', '14'],
// ['clickbait-unreliable', 1.0, 'RT @IAmJoeTrudeau: Trump Is Withholding Coronavirus Testing Kits From Governors https://t.co/DKuozSeags', '2020-03-09T03:26:50', '15'],
// // ['political-clickbait', 1.0, 'RT @RawStory: Dow futures sink more than 1,000 points and oil prices plummet amid coronavirus  https://t.co/aTjKECZaP5', '2020-03-09T03:46:20', '16'],
// ['bias', 1.0, 'RT @PalmerReport: Donald Trump just learned he’s been potentially exposed to coronavirus. Now he’s canceling events. https://t.co/c87AWmgGNh', '2020-03-09T10:08:00', '17'],
// ['political-clickbait', 1.0, 'Here’s Just How Ridiculously Biased the Media Have Been Covering Coronavirus https://t.co/0lLbHm6tzG', '2020-03-09T10:30:19', '18'],
// ['political-clickbait-bias', 1.0, 'Its shocking that MSDNC would push back, right? Just because they want to start a PANIC and blame the President?  THE STATS:  In the same time that weve seen 3,354 deaths from the coronavirus, 924,000 children have gone missing. 125,000 abortions/day US. https://t.co/Ku0Qkyt1aj', '2020-03-09T10:32:52', '19'],
// ['clickbait-unreliable', 1.0, 'Kellyanne Conway May Have Been Exposed To Coronavirus https://t.co/bLBllSgUYU', '2020-03-09T12:39:50', '20'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: Evil thrives in chaos and darkness. https://t.co/3Vpb8OquKU', '2020-03-09T14:27:00', '21'],
// ['political-unreliable-bias', 1.0, 'RT @cjtruth: Pirro: Coronavirus Is Proof Mainstream Media Has an Agenda When It Comes to Trump https://t.co/fMsu3vMkzN', '2020-03-09T14:28:23', '22'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: Many people are sayin’ Adderall weakens you immunity to coronavirus. https://t.co/QQ5Nll9lXp', '2020-03-09T15:51:33', '23'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: Come on MAGA.  Take one for the team! https://t.co/EEHsUMFYB1', '2020-03-09T15:52:42', '24'],
// ['conspiracy', 1.0, 'DC Priest Who Shook 500 Hands At Communion Has Coronavirus  https://t.co/McWUF5Wnrz', '2020-03-09T16:14:00', '25'],
// ['political', 1.0, 'RT @Brn2Wander1: VIDEO: Fox’s Jeanine Pirro slams media for ‘doomsday reporting’ on coronavirus https://t.co/GAwO4zBgBJ via @realdennislynch', '2020-03-09T17:39:24', '26'],
// ['clickbait-unreliable', 1.0, 'Trump Demands Barr Investigate The Media’s Coronavirus Coverage https://t.co/GT7vU6DxFA', '2020-03-09T19:17:34', '27'],
// ['political-reliable', 1.0, 'RT @TeaPainUSA: Teas gonna keep sayin it.    MAGA. Is. A. Death. Cult.  https://t.co/QluhhbjJYE', '2020-03-09T19:56:36', '28'],
// ['political-clickbait', 1.0, 'Karma laughs at idiots and fools.  https://t.co/xb0wSRitB9', '2020-03-09T20:18:56', '29'],
// ['clickbait-unreliable', 1.0, 'Trump Demands Barr Investigate The Media’s Coronavirus Coverage https://t.co/HkVF4NrOJV via @politicususa  Welcome to 1930s Germany.', '2020-03-09T20:43:28', '30'],
// ['political-unreliable-bias', 1.0, 'RT @cjtruth: Pompeo knows what it is....👀👇👇 China: Vicious for Pompeo to Refer to Chinese Coronavirus as Chinese https://t.co/MXqyDADzVk', '2020-03-09T21:23:54', '31'],
// ['political-unreliable-bias', 1.0, 'RT @KeishaJake: Trump Blames Oil War and Coronavirus ‘Fake News’ for Stock Market Plunge https://t.co/nABZA8NDbj', '2020-03-09T23:52:57', '32'],
// ['political-clickbait', 1.0, 'RT @RawStory: Judges blast Trump administration for ordering #coronavirus info posters taken down from courts https://t.co/aav25XJkRM', '2020-03-10T00:14:21', '33'],
// ['political-clickbait', 1.0, 'RT @RawStory: Fox host fears Trump will be impeached over his coronavirus response: ‘The hate is boiling over’   https://t.co/csxV0cA3Nn', '2020-03-10T01:18:49', '34'],
// ['political-clickbait', 1.0, 'RT @debraraes: MSNBC Host Nicole Wallace Hopes Coronavirus Tanks Trump’s Presidency https://t.co/MfQRCBCHLX’s-presidency/ Democrats NOT #Th…', '2020-03-10T01:21:49', '35'],
// ['clickbait-unreliable', 1.0, 'RT @Breaking911: LIST: These Products Will Kill The Coronavirus - https://t.co/flnPkXPPou https://t.co/0nxsxN8A62', '2020-03-10T01:41:20', '36'],
// ['political-clickbait', 1.0, 'We haven’t considered it, but now that you mention it. https://t.co/FtNk4g3NS4', '2020-03-10T01:44:23', '37'],
// ['political-clickbait', 1.0, 'RT @RawStory: Judges blast Trump administration for ordering coronavirus info posters taken down from courts https://t.co/aav25XJkRM', '2020-03-10T03:08:39', '38'],
// ['bias', 1.0, 'RT @PalmerReport: Pearl Jam cancels tour, slams Donald Trump administrations disastrous coronavirus response https://t.co/mFMGKAVWES', '2020-03-10T03:28:29', '39'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: Liberal California Governor Praises Trump And Pence For Response To Coronavirus (VIDEO) https://t.co/Xx3qgA9xH7 via @gat…', '2020-03-10T04:56:24', '40'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @Wingman_Bret: Liberal California Governor Praises Trump And Pence For Response To Coronavirus (VIDEO) https://t.co/nAX4SoEN1s', '2020-03-10T06:20:31', '41'],
// ['bias-conspiracy-unreliable', 1.0, 'Dr. Oz Argues Coronavirus Numbers from Korea Show Lower Death Rate - May Be No Worse than Common Flu (VIDEO) https://t.co/4UwnFDpz1D', '2020-03-10T10:19:18', '42'],
// ['political-clickbait', 1.0, 'Just more #fakenews trying to tarnish ⁦@realDonaldTrump⁩ reputation with #America Fake News: #DailyMail Claims #Trump ‘Storms’ Out of #WuhanVirus Briefing, But the Video Shows No Such Thing #coronavirus #KAG2020 #MAGA #KAG #Trump2020  https://t.co/Ant7S0MWMD', '2020-03-10T12:49:32', '43'],
// ['political-unreliable-bias', 1.0, 'RT @yogagenie: Scott Adams: Even with Coronavirus, Bernie and Biden Will Lose to Trump https://t.co/t1i7ExgPc7', '2020-03-10T13:30:56', '44'],
// ['bias-unreliable', 1.0, 'RT @Russ_Warrior: #Russia gives #Iran 50.000 #coronavirus testing kits to help fight epidemic. 👏 https://t.co/ckxs7K1yHp', '2020-03-10T17:47:42', '45'],
// ['clickbait-unreliable', 1.0, 'RT @Breaking911: LIST: These Products Will Kill The Coronavirus - https://t.co/flnPkXPPou https://t.co/q3XcSz0z3n', '2020-03-10T18:32:30', '46'],
// ['bias', 1.0, 'RT @EyesOnQ: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/k1inDIuKi8', '2020-03-10T19:13:56', '47'],
// ['bias', 1.0, 'RT @JackPosobiec: Hunter Biden to Skip Court Appearance, Citing Coronavirus  https://t.co/VxXZFmKeCr', '2020-03-10T19:13:57', '48'],
// ['bias', 1.0, 'RT @bennyjohnson: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife   https://t.co/IEdjcmaVeX', '2020-03-10T19:14:16', '49'],
// ['bias', 1.0, 'RT @BrentScher: BREAKING: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/Py17Wr37Kc', '2020-03-10T19:14:34', '50'],
// ['bias', 1.0, 'RT @alx: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/2xSKmFBjP6', '2020-03-10T19:14:37', '51'],
// ['bias', 1.0, 'RT @MZHemingway: Hunter Biden to Skip Court Appearance, Citing Coronavirus and His Pregnant Wife https://t.co/LW9zqIvVGa', '2020-03-10T19:35:20', '52'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Ilhan Omar Says It’s ‘Racist’ To Call COVID-19 The ‘Chinese Coronavirus’ https://t.co/YuseqdS5Hm', '2020-03-10T19:37:51', '53'],
// ['political-unreliable', 1.0, 'RT @RealSaavedra: Democrat Ilhan Omar is spreading propaganda from communist China: https://t.co/OKWWYsCvEh', '2020-03-10T20:18:46', '54'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Hunter Biden Says Coronavirus Is Keeping Him From Attending Child Support Deposition https://t.co/iTybXfD3N3', '2020-03-10T21:01:23', '55'],
// ['political', 1.0, '1. Gaetz gets a test and we are supposed to believe Trump hasn’t? 2. If you are negative, get your butt to work! https://t.co/gCVhFFKH2p', '2020-03-10T21:22:29', '56'],
// ['political-unreliable-bias', 1.0, 'RT @KeishaJake: LIAR HUNTER‼️🤥🤥🤥🤥Hunter Biden to Skip Court Appearance, Cites Coronavirus, Pregnant Wife https://t.co/vHUFNXCKO4', '2020-03-10T22:30:13', '57'],
// ['bias-conspiracy-unreliable', 1.0, 'DESPITE CORONAVIRUS PANIC: President Trump Approval Rating at 48% -- 4 Points Higher than Media Darling Obama at Same Point in His Presidency https://t.co/0BCDzzXmPS via @gatewaypundit', '2020-03-11T02:47:32', '58'],
// ['bias-conspiracy-unreliable', 1.0, 'So commie #BernieSanders says he wouldn’t close the border to stop the spread of #coronavirus in a national emergency—it’s too xenophobic.   Stuff like this is why he got destroyed yesterday by a guy who is semi-senile.  #SocialismKills #KAGA2020 #TWGRP  https://t.co/KDa2qUrzJz', '2020-03-11T06:21:40', '59'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Gavin Newsom Praises Trump Administration’s Response To Coronavirus. https://t.co/2xgZmD4GBm', '2020-03-11T08:12:01', '60'],
// ['political', 1.0, 'RT @jaketapper: Editors of @NRO: President Trump Needs to Step Up on the Coronavirus  https://t.co/K36xcTxR8e', '2020-03-11T12:28:37', '61'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: ‘We can’t believe a word you say’  https://t.co/GFSovbT6i0', '2020-03-11T22:56:30', '62'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: Trump’s every instinct is either wrong, stupid or evil. https://t.co/ILbuNzkBRx', '2020-03-12T02:46:47', '63'],
// ['bias-clickbait', 1.0, 'RT @HarveyStaub1: MSNBC Hopes Americans Dying From Coronavirus Will “Take Down Trump’s Presidency” https://t.co/XUBaj6Y8x1 Think. The fake…', '2020-03-12T03:32:44', '64'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Chinese Official Blames US For Introducing Coronavirus To Wuhan, Says US ‘Owes Us An Explanation’ https://t.co/TxELt2x5nA', '2020-03-12T18:04:32', '65'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: We should condemn Mar-a-Lago and turn it into a #coronavirus containment facility.   https://t.co/KDNyD7e4PH', '2020-03-12T19:54:43', '66'],
// ['political', 1.0, 'RT @dyllyp: Matt Gaetz voted against paid sick leave, and then went on paid sick leave. https://t.co/1oh2WOZoWu', '2020-03-12T23:52:22', '67'],
// ['political-unreliable-bias', 1.0, 'RT @2runtherace: Super-Rich Turn to Bunkers to Self-Quarantine During Coronavirus Outbreak!!  https://t.co/uiuE9DiT0t @realDonaldTrump', '2020-03-13T02:38:34', '68'],
// ['political-clickbait', 1.0, 'RT @RealJamesWoods: Can they be any more putrid examples of pure evil than they already are?  https://t.co/puVhu71qw0', '2020-03-13T05:51:45', '69'],
// ['political-clickbait', 1.0, 'RT @RawStory: How did Matt Gaetz get a coronavirus test when the rest of us can’t?  https://t.co/gSLVKhzAcu', '2020-03-13T10:55:07', '70'],
// ['political-unreliable-bias', 1.0, 'RT @joelpollak: Pollak: Democrats Pushed Impeachment While Coronavirus Spread — (for 20 days!) https://t.co/Iw1gIBCuZc', '2020-03-13T11:18:05', '71'],
// ['political-bias', 1.0, 'RT @dbongino: Joe Biden Presents Trumps Coronavirus Response as His Own Plan https://t.co/qnaTDyhxol', '2020-03-13T11:39:12', '72'],
// ['political', 1.0, 'RT @briantylercohen: Matt Gaetz, who voted against paid sick leave, is currently on paid sick leave from Congress. https://t.co/SRfjGWqkjH', '2020-03-13T16:43:39', '73'],
// ['bias', 1.0, 'RT @newtgingrich: Bidens attacks on the administrations handling of the coronavirus were filled with falsehoods. https://t.co/1ZubavDdIH', '2020-03-13T19:39:00', '74'],
// ['political', 1.0, 'RT @jacobinmag: Bernie Sanders can lead the fight against coronavirus. Joe Biden can’t. https://t.co/BjnOwMhl5z', '2020-03-13T22:14:25', '75'],
// ['satire', 1.0, 'RT @NickBaumann: Health Experts Worry Coronavirus Will Overwhelm America’s GoFundMe System: https://t.co/XEFaJnIWOX', '2020-03-14T01:05:41', '76'],
// ['political-unreliable-bias', 1.0, 'RT @atensnut: Fmr Coronavirus Patient: The Hysteria Has Just Gotten Out of Control https://t.co/BNqjahbCU2', '2020-03-14T01:26:43', '77'],
// ['political-unreliable-bias', 1.0, 'RT @DevinNunes: Democrats Pushed Impeachment While Coronavirus Spread ⁦@joelpollak⁩  https://t.co/TA4AuQDYam', '2020-03-14T01:29:40', '78'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage @KristinnFR https://t.co/jfAj5SCNct via @ga…', '2020-03-14T02:56:47', '79'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @DavidWaddell5: NOT HAPPY 😡😡 Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage https://t.co/xLgRhV83vK', '2020-03-14T03:18:07', '80'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: Trump’s literally the “enemy of the people.” https://t.co/9mhBXO882f', '2020-03-14T03:57:07', '81'],
// ['bias', 1.0, 'The same guy who coerced a doctor into helping him dodge the draft is now coercing a doctor into helping him dodge the coronavirus test.  https://t.co/k5rVteYLmb', '2020-03-14T05:03:35', '82'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @steve_Beno3210: Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage https://t.co/8LjtnKSRFw', '2020-03-14T08:54:35', '83'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Google-Funded Think Tank Chief Resigns After Wishing Coronavirus Would Kill Trump. https://t.co/WnA7upJhFN', '2020-03-14T12:07:41', '84'],
// ['bias', 1.0, 'RT @marklevinshow: Biden ad attacking Trump over coronavirus is full of lies https://t.co/9mjctuOSrH', '2020-03-14T12:25:57', '85'],
// ['bias-conspiracy-unreliable', 1.0, 'Fox Business Suspends Trish Regan and Kennedy Shows for Coronavirus Coverage... Wait...Stop... ⁦@trish_regan⁩ monologue created such a uproar on the #Left her show was suspended shortly after..  ⁦@FoxBusiness⁩ Is suppressing our voice (VIDEO)🤬 https://t.co/RXvEATdnbE', '2020-03-14T13:34:48', '86'],
// ['political', 1.0, 'Matt Gaetz voted against paid sick leave.   Matt Gaetz is currently on paid sick leave from Congress. https://t.co/E9uvK4I6SJ', '2020-03-14T18:36:01', '87'],
// ['political', 1.0, '“We’re in one of those rare times when sharp, structural change is possible in the heat of the crisis.” Read me, @alybatt @aldatweets &amp  @KateAronoff in @jacobinmag. We must care for the vulnerable and demand systemic  transformation. We can’t afford not to https://t.co/o0MZmgFvUR', '2020-03-14T20:41:59', '88'],
// ['political-bias', 1.0, 'RT @Kimbraov1: The Real Reason Why 40 Republicans Voted Against the Second Coronavirus Bill https://t.co/zfpaji8uEi #NewsandPolitics via @p…', '2020-03-14T21:03:58', '89'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @love4thegameAK: 👀👀  Johns Hopkins and Gates Foundation Hosted Coronavirus Pandemic Simulation Last October   https://t.co/XK8vbFow81', '2020-03-15T01:42:03', '90'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: Johns Hopkins and Gates Foundation Hosted Coronavirus Pandemic Simulation Last October https://t.co/A7pvxqjxGY via @gate…', '2020-03-15T01:42:15', '91'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @JohnGrahamDick1: Johns Hopkins and Gates Foundation Hosted Coronavirus Pandemic Simulation Last October https://t.co/JSn1dAh3zi via @ga…', '2020-03-15T02:06:31', '92'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Devin Nunes: ‘Media And The Left’ Are ‘Putting The Country Into A Panic’ For ‘No Reason’ https://t.co/kdM7mVmhIn', '2020-03-15T02:25:40', '93'],
// ['political-clickbait-bias', 1.0, 'RT @ReneeCarrollAZ: Devin Nunez: Media And The Left Are Putting The Country Into A Panic For No Reason https://t.co/9lo9VoB0Wn  "So a…', '2020-03-15T11:21:55', '94'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @militarysweep2: https://t.co/hA7UuqhONN Indictments Fl 14K+- Iw 5k+- La 3k+- NY 17000+ RI 1600+- WA 6500+- MD 6k+- CA 72K+- Think Smoke…', '2020-03-15T12:49:49', '95'],
// ['political-clickbait', 1.0, 'Dow Futures drop 840 points as Trump was speaking about coronavirus response  https://t.co/1ZqNCUY1j2', '2020-03-15T22:28:39', '96'],
// ['bias-conspiracy-unreliable', 1.0, 'RT @gatewaypundit: 29 of 68 Coronavirus Deaths in US Are Associated with One Senior Center in Kirkland, Washington https://t.co/vb6FeWn9eS…', '2020-03-15T23:11:03', '97'],
// ['political-clickbait', 1.0, 'RT @RawStory: Here’s how the Kushner family is cashing in on the coronavirus  https://t.co/5xqq93NTdE', '2020-03-16T03:48:48', '98'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: Take comfort, MAGA.  Your suffering is linin’ the pockets of the Trump crime family. https://t.co/T5cIzHUCoh', '2020-03-16T04:31:46', '99'],
// ['bias-conspiracy-unreliable', 1.0, 'Pompous Democrat Lawyer Who Tried and Failed to Impeach Trump Tests Positive for Coronavirus - Then Blames Trump https://t.co/yd8vY65HBs via @gatewaypundit', '2020-03-16T08:07:17', '100'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Jennifer Rubin: More Republicans Will Die From Coronavirus Than Democrats https://t.co/r3V0bSvyot', '2020-03-16T10:34:42', '101'],
// ['political-bias', 1.0, 'RT @dbongino: Ayanna Pressley Would Release Prisoners to Fight Coronavirus. #TDS 👇🏻 https://t.co/jYHMBAxPuL', '2020-03-16T13:04:30', '102'],
// ['political', 1.0, 'RT @Public_Citizen: Matt Gaetz voted against paid sick leave then took paid sick leave. https://t.co/E9uvK4I6SJ', '2020-03-16T13:28:32', '103'],
// ['political-clickbait', 1.0, 'Trump-loving megachurch begs followers to pack into the pews amid coronavirus outbreak: ‘If we die — we die for Christ’ https://t.co/ZUfkml5tAQ', '2020-03-16T14:08:43', '104'],
// ['bias-conspiracy-unreliable', 1.0, '📢 CALM DOWN!   BREAKING EXCLUSIVE: The Coronavirus Fatality Rate Reported by Media Is COMPLETELY INACCURATE. Actual Rate Is LESS THAN THE FLU – MEDIA LYING AGAIN!  Are we surprised?   @RudyGiuliani has a #coronavirus podcast:  👇 https://t.co/nWV2zaaXm6  https://t.co/0rXKmMuOIY', '2020-03-16T14:33:14', '105'],
// ['political-clickbait', 1.0, 'RT @thomaskaine5: McConnell pushing coronavirus vote to later in week over GOP opposition to House bill: report https://t.co/TnduzshhBG', '2020-03-16T14:52:35', '106'],
// ['political-clickbait', 1.0, 'No member of the @GOP should ever be allowed to serve in Government again.  McConnell pushing coronavirus vote to later in week over GOP opposition to House bill: report https://t.co/zqGF5XJeta', '2020-03-16T14:55:30', '107'],
// ['political-clickbait', 1.0, 'RT @IBiegen: McConnell pushing coronavirus vote to later in week over GOP opposition to House bill: report https://t.co/qVVBctCHDU THIS SHI…', '2020-03-16T15:15:34', '108'],
// ['political-clickbait', 1.0, 'RT @TekStol: Trump supporters worry president’s coronavirus response will cost him 2020 re-election https://t.co/ww8Bk8FM7D', '2020-03-16T15:37:07', '109'],
// ['political-clickbait', 1.0, 'Looks like @senatemajldr again putting the needs of Americans behind other interests by pushing coronavirus vote to later in week over GOP opposition to House bill.  There are no possible reasons. Even the House GOP and the Trump support this. https://t.co/ThwhpMuZSh via rawstory', '2020-03-16T16:40:28', '110'],
// ['political-clickbait', 1.0, 'RT @SarahKSilverman: Here’s how the Kushner family is cashing in on the coronavirus | Raw Story https://t.co/uvHCrRLgrA', '2020-03-16T16:40:33', '111'],
// ['political', 1.0, 'RT @realTuckFrumper: Twitter Deleted Sheriff Clarke’s Wildly Reckless Coronavirus Tweets, So He Says He’s Quitting https://t.co/gYtcz2xfba', '2020-03-16T19:30:22', '112'],
// ['political', 1.0, 'Twitter Deleted Sheriff Clarke’s Wildly Reckless Coronavirus Tweets, So He Says He’s Quitting https://t.co/v0iocpCWlJ via @thedailybeast', '2020-03-17T00:54:53', '113'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Katie Hill Claims She ‘Almost Certainly’ Has Coronavirus https://t.co/FZeNuTEKo0', '2020-03-17T01:34:20', '114'],
// ['political-clickbait-bias', 1.0, 'RT @JackPosobiec: Katie Hill Claims She ‘Almost Certainly’ Has Coronavirus  https://t.co/nZblOBtyUC', '2020-03-17T02:38:54', '115'],
// ['political-clickbait-bias', 1.0, 'RT @DailyCaller: Trump Calls Coronavirus ‘The Chinese Virus’ For The First Time https://t.co/OHK3ptaK5g', '2020-03-17T03:54:06', '116'],
// ['conspiracy-fake-bias', 1.0, 'RT @EyesOnQ: Sheriff Clarke: George Soros is Involved in Coronavirus Outbreak Panic .... https://t.co/wWAXHxvWd2', '2020-03-17T06:25:15', '117'],
// ['political-clickbait-bias', 1.0, 'RT @EyesOnQ: Katie Hill Claims She ‘Almost Certainly’ Has Coronavirus https://t.co/yK9Dse8JZh', '2020-03-17T07:09:00', '118'],
// ['bias', 1.0, 'RT @marklevinshow: Pompeo slams communist China for lying about Wuhan coronavirus. https://t.co/1aozdSU1qK', '2020-03-17T12:28:47', '119'],
// ['political-clickbait-bias', 1.0, 'RT @Inevitable_ET: Wut in tarnation  https://t.co/KgA2jkelJb', '2020-03-17T18:54:40', '120'],
// ['political-clickbait', 1.0, 'RT @TeaPainUSA: Trump will easily double the national debt during his first and only term.  https://t.co/Goh9Ndow9F', '2020-03-17T21:00:30', '121'],
// ['', 1.0, 'RT @Thomas1774Paine: ER Doctor: 98 to 99 Percent Of Coronavirus Victims ‘Are Going To Do Very, Very Well’ https://t.co/s10TQvnDOQ', '2020-03-09T00:11:48', '122'],


// ['', 1.0, 'RT @CNBC: Markets are tanking, coronavirus is spreading – and Trump is attacking Biden and the media https://t.co/tMvobAJuXr', '2020-03-09T12:40:14', '123'],
// ['', 1.0, 'LIVE: Daily media briefing on #COVID19 with @DrTedros #coronavirus https://t.co/cN3WfNcsyd', '2020-03-09T16:14:11', '124'],
// ['', 1.0, 'RT @washingtonpost: Opinion: As the coronavirus burns, Trump scores a perfect Nero https://t.co/wXo7KohMxI', '2020-03-10T07:45:21', '125'],
// ['', 1.0, 'RT @1776Stonewall: https://t.co/II1IMOUPXO California governor Gavin Newsom Praises President Trump and vice president Pence for Coronaviru…', '2020-03-10T19:35:30', '126'],
// ['', 1.0, 'RT @chuckwoolery: Liberal California Governor Praises Trump And Pence For Response To Coronavirus (VIDEO) https://t.co/fW9fSWj85n https://t…', '2020-03-10T23:10:23', '127'],
// ['', 1.0, 'RT @TheBabylonBee: Biden: Ill Survive The Coronavirus Just Like I Survived The Black Death https://t.co/QINU5dKadi', '2020-03-12T21:19:33', '128'],
// ['', 1.0, 'RT @TheOnion: Health Experts Worry Coronavirus Will Overwhelm America’s GoFundMe System https://t.co/7W8dIjmVJS https://t.co/eALs99PiBA', '2020-03-13T17:25:56', '129'],
// ['', 1.0, 'RT @alexisgoldstein: Here are the Republicans who voted no on the #coronavirus bill #HR6201  https://t.co/fSNOBxtbXv https://t.co/NiBnVSqc4z', '2020-03-14T05:23:43', '130'],
// ['', 1.0, 'NEW: Coronavirus package hits roadblocks amid GOP opposition https://t.co/bCZaS0UTs5 https://t.co/jPa92hvSmI', '2020-03-16T23:04:05', '131'],
// ['', 1.0, 'RT @renato_mariotti: Why is the Trump Administration overruling the advice of medical professionals?  Congress needs to get to the bottom o…', '2020-03-08T23:28:59', '132'],
// ['', 1.0, 'RT @eugenegu: @realDonaldTrump It means Trump is just like Nero, but instead of playing the fiddle while Rome burns, Trump plays the violin…', '2020-03-08T23:29:15', '133'],
// ['', 1.0, 'RT @JohnMTalmadgeMD: Trump blasted for overruling health officials on coronavirus warning for seniors: ‘It’s sociopathic and dangerous’ - h…', '2020-03-08T23:29:59', '134'],
// ['', 1.0, 'RT @JudgeJeanine: They say the mortality rate for Coronavirus is higher than the flu. Consider though that we have a flu vaccine and yet in…', '2020-03-08T23:30:17', '135'],
// ['', 1.0, 'RT @Yascha_Mounk: Corona is not like the flu.  Corona is not like the flu.  Corona is not like the flu.  Corona is not like the flu.  Coron…', '2020-03-08T23:31:00', '136'],
// ['', 1.0, 'RT @LincolnsBible: Can’t get past this. There is no other news.  The President weaponized a virus to help himself. It’s an order to kill vu…', '2020-03-08T23:31:59', '137'],
// ['', 1.0, 'RT @A_Rosie_Life: You booze, you lose 💀 Matt Gaetz Suggests That Drinking A Bunch Of Alcohol Can Kill The Coronavirus - The Daily Caller ht…', '2020-03-08T23:32:50', '138'],
// ['', 1.0, 'RT @mkraju: Pelosi and Schumer lay down their marker on the economic steps they want taken in wake of Coronavirus threats to economy, inclu…', '2020-03-08T23:50:11', '139'],
// ['', 1.0, 'Zodiac is going to kill us all.', '2020-03-08T23:51:05', '140'],
// ['', 1.0, 'RT @joelockhart: Bill Gates doing what the Trump administration can’t or won’t do.', '2020-03-08T23:53:17', '141'],
// ['', 1.0, 'RT @waltshaub: Matt Gaetz mocked fear over the coronavirus. Now one of his constituents is dead. The family of the deceased has got to be w…', '2020-03-08T23:54:18', '142'],
// ['', 1.0, 'RT @clif_high: high dose Vitamin C kills #coronavirus by electron donation &amp  formation of hydrogen peroxide. Chaga kills #covid19 by protea…', '2020-03-09T00:11:42', '143'],
// ['', 1.0, 'RT @ACTforAmerica: Chuck Todd praises Chinas handling of #coronavirus while demonizing President Trumps early and prompt response to the…', '2020-03-09T00:12:57', '144'],
// ['', 1.0, 'RT @44mmvvpp: Is it bad I have a coronavirus wish list? ...  get over it! 😝  1) Trump 2) McConnell 3) Bill Barr 4) Lindsey Graham 5) Mike P…', '2020-03-09T00:54:22', '145'],
// ['', 1.0, 'RT @FaceTheNation: .@ChrisMurphyCT blasts Trump administration for creating “culture of misinformation” in wake of #coronavirusoutbreak htt…', '2020-03-09T00:55:00', '146'],
// ['', 1.0, 'RT @PalmerReport: Trump: coronavirus is a hoax  Ted Cruz: I’ve been exposed to it and I’m self-isolating  Matt Schlapp: I’ve been exposed t…', '2020-03-09T01:16:05', '147'],
// ['', 1.0, 'RT @WordswithSteph: Trump sends out Dr. Ben Carson to plea for calm over the spread of coronavirus. Carson’s message: #Coronavirus is just…', '2020-03-09T01:58:29', '148'],
// ['', 1.0, 'RT @ANCALERTS: JUST IN: Marikina PIO: Mayor Marcy Teodoro says an 86-year old senior citizen living in Marikina City, who recently traveled…', '2020-03-09T01:58:35', '149'],
// ['', 1.0, 'RT @ABSCBNNews: @RayaCapulong JUST IN: Marikina PIO: Mayor Marcy Teodoro says an 86-year old senior citizen living in Marikina City, who re…', '2020-03-09T01:58:38', '150'],
// ['', 1.0, 'RT @greta: I would like to know (and maybe they have already spoken about this) what VP Biden and Sen Sanders would do today about coronavi…', '2020-03-09T01:58:50', '151'],
// ['', 1.0, 'This is terrible news for Heidi. A week with Ted? 🤢', '2020-03-09T02:00:49', '152'],
// ['', 1.0, 'RT @TheDailyEdge: Senator Ted Cruz, now that you have to self-quarantine for two weeks, do you have anything to say about @realDonaldTrump…', '2020-03-09T02:20:05', '153'],
// ['', 1.0, 'RT @SassySouthern10: 🙏🏻🙏🏻PRAYERS FOR SENATOR CRUZ🙏🏻🙏🏻 THIS IS LEADERSHIP.  Senator Cruzs actions are exactly the response he should have t…', '2020-03-09T02:41:21', '154'],
// ['', 1.0, 'Idk why I’m crying 😢 Take care, everyone!!', '2020-03-09T02:42:52', '155'],
// ['', 1.0, 'everyone deserves a mayor like our mayor marcy ☹️❤️', '2020-03-09T03:24:26', '156'],
// ['', 1.0, 'How about “Kung Flu”?', '2020-03-09T03:26:32', '157'],
// ['', 1.0, 'RT @Trey_VonDinkis: . ⚕️ MAGA HEALTH - DR. SIEGEL / NEVER SEEN CONTAGION HANDLED BETTER than with TRUMP   Famed Dr. Marc Siegel on Trumps…', '2020-03-09T03:27:43', '158'],
// ['', 1.0, 'RT @DemWrite: Trump doesnt deserve all the blame if #CoronavirusOutbreak gets out of control. The GOP does, (including Trump).   The GOP e…', '2020-03-09T03:45:47', '159'],
// ['', 1.0, 'RT @Shem_Infinite: The market will go up and itll go down, once the media created panic over the coronavirus dies down itll go way up aga…', '2020-03-09T03:46:13', '160'],
// ['', 1.0, 'A little dose of reality during the media-driven, fake news Corona Virus hysteria.', '2020-03-09T04:07:47', '161'],
// ['', 1.0, 'RT @Wyn1745: Despite coronavirus, Dow will hit 40,000 in 4-5 years: Wharton Finance professor Jeremy Siegel. 💥Only If Trump Re-elected in N…', '2020-03-09T04:29:52', '162'],
// ['', 1.0, 'RT @BridgetSterli19: News flash, MAGAts. Viruses don’t care or know about political affiliations. But #KAG, #KAG, #KAG won’t just be one of…', '2020-03-09T04:50:56', '163'],
// ['', 1.0, 'Trump is *already* cooking the books on #COVID19. Is the @CDC staff all hitting the links at Mar-A-Lago on weekends?', '2020-03-09T04:52:33', '164'],
// ['', 1.0, 'RT @NewIndianXpress: #OPINION | Does #Coronavirus spread through chicken consumption? Is the virus used as a biological weapon? Can hot wat…', '2020-03-09T05:14:38', '165'],
// ['', 1.0, 'RT @PalmerReport: Donald Trump just learned he’s been potentially exposed to coronavirus. Now he’s canceling events.  https://t.co/c87AWmyi…', '2020-03-09T06:22:35', '166'],
// ['', 1.0, 'RT @businessinsider: Bill Gates has been warning about the risk of a pandemic disease for years and his foundation pledged $100 million las…', '2020-03-09T06:58:32', '167'],
// ['', 1.0, 'RT @BagdMilkSoWhat: Hard to give up the Phi Kappa Pi days isn’t it Matt 🤦‍♂️🍻  Matt Gaetz Suggests That Drinking A Bunch Of Alcohol Can Kil…', '2020-03-09T08:19:06', '168'],
// ['', 1.0, 'Revolutionary - Tim Cook  #COVID19 https://t.co/VIQVc3Brtg', '2020-03-09T10:32:46', '169'],
// ['', 1.0, 'RT @rxjef77: Im no psychic but be prepared for the Dow Jones to go way down (tank) today due to the mishandled Coronavirus response by thi…', '2020-03-09T10:54:15', '170'],
// ['', 1.0, 'RT @awaken_to_maga: The flu worries me more than #Coronavirus, and Im not even worried about the flu.  🤔 Name something that scares you mo…', '2020-03-09T13:22:50', '171'],
// ['', 1.0, 'RT @SerendipityDizl: This woman is an idiot. Trump had NO rallies last week. Where’s Speier’s criticism of Biden’s and Sanders’ 24/7 rallie…', '2020-03-09T13:23:34', '172'],
// ['', 1.0, 'what is up with conservatives trying to kill off their base (old people)', '2020-03-09T13:44:11', '173'],
// ['', 1.0, 'Totally this. 🙄 #coronavirus #CoronavirusOutbreak #COVID19 #panicbuyinguk https://t.co/8rA8APhXOj', '2020-03-09T13:45:05', '174'],
// ['', 1.0, 'RT @Feisty_FL: I think the media is causing panic over the Coronavirus in order to tank the stock market and hurt President Trump before th…', '2020-03-09T14:46:54', '175'],
// ['', 1.0, 'RT @InspiringU2: Trump Is Withholding Coronavirus Testing Kits From Governors!  Two governors requested #coronavirus testing kits for their…', '2020-03-09T14:47:57', '176'],
// ['', 1.0, 'RT @TVietor08: FUTURE TWEET: Trump rebrands the coronavirus "the Biden Bug" &amp  claims that Hunter Biden crashed the stock market. Major news…', '2020-03-09T14:49:22', '177'],
// ['', 1.0, '@realDonaldTrump Coronavirus is not the flu  60x deadlier 35x hospitalization rate  80+ years old. 14.8% fatality rate 70-79 years old. 8.0% fatality rate 60-69 years old. 3.6% fatality rate  15-20% of all cases require hospitalization   Sooner we attack problem sooner epidemic curve elongates', '2020-03-09T15:08:08', '178'],
// ['', 1.0, 'RT @lawhawk: @realDonaldTrump The flu has a mortality rate of  0.1%.  Covid19 has a current mortality rate in the US that is higher than th…', '2020-03-09T15:09:17', '179'],
// ['', 1.0, 'RT @childishgamzeno: Trying to kill ME is fine, but my ANIME, Coronavirus?! MY ANIME?!?!?!?!', '2020-03-09T15:53:31', '180'],
// ['', 1.0, 'RT @doctor_oxford: 1. Flu has a vaccine  2. Flu has proven antiviral meds  3. Flu has a mortality rate 20-30x *less* then #COVID19   4. You…', '2020-03-09T15:54:39', '181'],
// ['', 1.0, 'The Coronavirus isnt a pandemic. Its nothing more but another Dem panic.  Every month we have another Dem panic. Dont let that fool you.   The world isnt ending.  Youre not going to die.  Trump will get re-elected.', '2020-03-09T16:56:41', '182'],
// ['', 1.0, 'RT @JoyAnnReid: Boy oh boy...', '2020-03-09T17:18:22', '183'],
// ['', 1.0, 'RT @IrvineWelsh: “Who did you vote for at the last election grandad?” “I voted Johnson to *cack* *cack* *wheeze* get it duh-“ “Grandad? Gra…', '2020-03-09T17:40:35', '184'],
// ['', 1.0, 'Sherlock Gets Coronavirus', '2020-03-09T19:36:46', '185'],
// ['', 1.0, 'RT @RawStory: Donald Trump facing revolt from senior GOP officials over ‘incompetent’ handling of coronavirus crisis: CNN https://t.co/qQQN…', '2020-03-09T21:00:54', '186'],
// ['', 1.0, 'RT @DWUhlfelderLaw: Matt Gaetz who was exposed to Coronavirus boards air force one with Trump. https://t.co/977e8hk7UC', '2020-03-09T21:04:17', '187'],
// ['', 1.0, 'RT @GKeile: Democrat Gavin Newsome was asked how President Trump was handling the Coronavirus.   Gavins response:  "Everytime weve asked…', '2020-03-09T21:22:11', '188'],
// ['', 1.0, 'RT @alaynatreene: NEW: Eric Swalwell &amp  Rick Crawford are reintroducing a 2013 bill that would enable members of Congress to virtually parti…', '2020-03-09T21:24:08', '189'],
// ['', 1.0, 'RT @PalmerReport: Donald Trump was potentially exposed to coronavirus on Air Force One today, by Matt Gaetz of all people https://t.co/8cx1…', '2020-03-09T21:44:29', '190'],
// ['', 1.0, 'RT @ReallyKW: Why do the Democrats always have to BLAME someone? Drives me insane.  They blame the President for the Coronavirus and no pla…', '2020-03-09T22:28:25', '191'],
// ['', 1.0, 'RT @CBSEveningNews: NEW: CBS News has learned Pres. Trump may have been exposed to coronavirus himself -- at least 4 GOP members of Congres…', '2020-03-09T22:49:25', '192'],
// ['', 1.0, 'The Corona Virus in a Month https://t.co/mwB5b0DYbL', '2020-03-09T22:52:10', '193'],
// ['', 1.0, 'RT @CBSNews: Surgeon general: “If you are a child or young adult, you are more likely to die from the flu, if you get it, than you are to d…', '2020-03-09T23:11:43', '194'],
// ['', 1.0, 'RT @PAPPYKOJO: Oh boy this corona virus really mess things up , like by now me then my boy Sammy Dey vibe , I don’t know if it’s nana ama o…', '2020-03-09T23:13:12', '195'],
// ['', 1.0, 'RT @morethanmySLE: Surgeon General: “If you are a child or young adult, you are more likely to die from the flu, if you get it, than you ar…', '2020-03-09T23:52:45', '196'],
// ['', 1.0, 'RT @nandorvila: But even if Biden somehow beats Trump because coronavirus causes a huge financial meltdown, he will then hand the response…', '2020-03-09T23:56:45', '197'],
// ['', 1.0, 'RT @BorisJohnson_MP: Having failed to get elected 7 times, failed to get any of his MPs elected and not even being an MEP who doesnt turn…', '2020-03-10T00:37:02', '198'],
// ['', 1.0, 'RT @DogginTrump: Let me get this Straight  Ted Cruz  Matt Schlapp  Matt Gaetz  And now Mark Meadows  All have to be quarantined because the…', '2020-03-10T00:58:26', '199'],


		// // ['  ',  1.0 , ' RT @VictoriaSerbia: American Coronavirus Patient, 36, Rushed to Biocontainment in Critical Condition- https://t.co/xbJgXiCjdv Via - @NeonNe…'],
    // // ['  ',  1.0 , ' President Donald Trump announced Monday his coronavirus task force is looking into various financial relief actions aimed at curbing the disease’s effect on the economy. https://t.co/PtFElJPBkA'],
    // // ['  ',  1.0 , ' Its shocking that MSDNC would push back, right? Just because they want to start a PANIC and blame the President?  THE STATS:  In the same time that we ve seen 3,354 deaths from the coronavirus, 924,000 children have gone missing. 125,000 abortions/day US. https://t.co/Ku0Qkyt1aj'],
    // // ['  ',  1.0 , ' RT @ThePatriotPin: Rush Limbaugh Explains Why He Believes Democrats Approach To Coronavirus Will Backfire https://t.co/wiShcOKv2X via @TPIn…'],
    // // ['  ',  1.0 , ' RT @P4tR10tBoo: Senator Ted Cruz Self-Quarantined After Meeting Someone With Coronavirus  https://t.co/SrgXPA6vFw  via @Breaking911'],
    // // ['  ',  1.0 , ' RT @heyk1967: MSNBC’s Stephanie Ruhle Pushes Back After Elon Musk Calls Coronavirus Panic ‘Dumb’ | The Daily Caller https://t.co/DHd1zefMEe'],
    // // [' political-clickbait ',  1.0 , ' RT @DailyCaller: MSNBC’s Stephanie Ruhle Pushes Back After Elon Musk Calls Coronavirus Panic ‘Dumb.’ https://t.co/6XnFqcUiRs'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Hunter Biden Says Coronavirus Is Keeping Him From Attending Child Support Deposition https://t.co/iTybXfD3N3'],
    // // ['  ',  1.0 , ' RT @JimKuther: Dr. Drew On Coronavirus: Media ‘Hurting People,’ ‘Need To Be Held Accountable’ For Causing Panic https://t.co/tTzlxub7MG'],
    // // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Gavin Newsom Praises Trump Administration’s Response To Coronavirus https://t.co/2xgZmD4GBm'],
    // // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Hunter Biden Says Coronavirus Is Keeping Him From Attending Child Support Deposition https://t.co/iTybXfD3N3'],
    // // ['  ',  1.0 , ' RT @Alpha_57: NOT KIDDING: Kevin McCarthy attacked by Democrats and the media for saying "Chinese coronavirus" https://t.co/zDVuBscPpL'],
    // // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Matt Gaetz Tests Negative For Coronavirus — Will Remain Under Self-Quarantine https://t.co/nrJd36Cr2V'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: ‘This Is Masochism’: Russia Wages An Oil War Against Saudi Arabia, US Amid Coronavirus Concerns https://t.co/j71VAfWKKN'],
    // // [' political-clickbait ',  1.0 , ' RT @DailyCaller: ‘This Is Masochism’: Russia Wages An Oil War Against Saudi Arabia, US Amid Coronavirus Concerns https://t.co/j71VAfWKKN'],
    // // ['  ',  1.0 , ' RT @bennyjohnson: Ocasio-Cortez: Not Eating Chinese Food Is Racist  https://t.co/PPhpqO7zBc'],
    // // ['  ',  1.0 , ' RT @COL314: Gavin Newsom Praises Trump Administration’s Response To Coronavirus - The Daily Caller  https://t.co/3PnAtZKqSc'],
    // ['  ',  1.0 , ' RT @Brn2Wander1: https://t.co/lebAEvQtIM  those people who responded to these polls are FOOLS.  Stop listening to the LMSM and the Dems.  T…'],
    // // [' clickbait-unreliable ',  1.0 , ' RT @Breaking911: BREAKING: Bernie Sanders Cancels Rally Over #Coronavirus Fears - https://t.co/5eaxKXP5vX https://t.co/PY1tpSvekt'],
    // // ['  ',  1.0 , ' RT @ophidianpilot: Head Of Koch-Linked Think Tank Hopes Trump Will Die From Coronavirus  https://t.co/4Q64HNj87k via @DailyCaller'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Bernie Sanders Uses Coronavirus Fears As Fundraising Tool. https://t.co/1eu0JfeTwv'],
    // // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Bernie Sanders Uses Coronavirus Fears As Fundraising Tool https://t.co/1eu0JfeTwv'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Poll: More Voters Disapprove Of Trump’s Response To Coronavirus https://t.co/tiShGxXCua'],
    // // ['  ',  1.0 , ' RT @bwp808: اٹلی کا آرمی چیف بھی کرونا کا شکار   Italian army’s chief of staff tests positive for coronavirus https://t.co/qcdySAYja7'],
    // ['  ',  1.0 , ' RT @chaser: Widespread panic hits as Corona Virus found to transmit via toilet paper https://t.co/DHwDzfkyFj #toiletpapergate #coronavirus'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Ilhan Omar Says It’s ‘Racist’ To Call COVID-19 The ‘Chinese Coronavirus.’ https://t.co/YuseqdS5Hm'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Dayton Students Riot After Campus Closes Down Because Of The Coronavirus https://t.co/sAAoKVk64V'],
    // ['  ',  1.0 , ' RT @Bipartisanism: Jim Cramer Defects From Trump &amp  Blames Him For Coronavirus Response #Trump #golf #Money https://t.co/YM8lrC8QrB'],
		//
    // // [' clickbait-unreliable ',  1.0 , ' RT @Breaking911: Senator Ted Cruz Self-Quarantined  https://t.co/g0Gs30cOTO'],
    // ['  ',  1.0 , ' RT @JackPosobiec: Yikes  Head of Koch-Linked Think Tank Hopes Trump Will Die From Coronavirus  https://t.co/4O6mx2kZ35'],
    // ['  ',  1.0 , ' RT @Brn2Wander1: VIDEO: Fox’s Jeanine Pirro slams media for ‘doomsday reporting’ on coronavirus https://t.co/GAwO4zBgBJ via @realdennislynch'],
    // ['  ',  1.0 , ' RT @chaser: Barnaby Joyce plays down coronavirus risk to latest 47 colleagues hes impregnated #auspol https://t.co/xL15vOodQ3'],
		//
    // ['  ',  1.0 , ' RT @AIIAmericanGirI: O.J. Simpson spotted at Costco -- without gloves -- preparing for coronavirus https://t.co/Iw0dXOeUGA @TwitchyTeam #AA…'],
    // ['  ',  0.99 , ' RT @MariaSMB01: Situation in Milan as Up to 16 Million Italians Put in Quarantine Amid Coronavirus Outbreak – Video https://t.co/z9kcCrm4UU'],
    // ['  ',  0.99 , ' RT @BillyWarpinjur: Where’s Uncle Jed? Jethro is getting a little too big for his britches! #2020JethroBodine https://t.co/KCtzUm5OKG'],
    // ['  ',  0.99 , ' RT @NEWS_MAKER: WASHPOST, POLITICO, DAILY BEAST reporters quarantined...  https://t.co/VWfdxzPFLa'],
    // ['  ',  0.99 , ' RT @DrFunkySpoon: DC Priest With Coronavirus Reportedly Gave Communion At Services With More Than 500 In Attendance https://t.co/8rk2mghu52'],
    // ['  ',  0.99 , ' “We zijn een nuchter landje dat van lekker rampetampen houdt”, benadrukte de minister-president. https://t.co/eLY2zxTZR9. Juist zo mogen wij het horen 😎. Bij https://t.co/F9FJikxDD7 geen #coronavirus maar gewoon lekker genieten met ondeugende dames! https://t.co/3hNUcbtRt4'],
    // ['  ',  0.98 , ' RT @yhn: Mo Brooks: Congress going into recess over the coronavirus sends the wrong message https://t.co/XMT3nfpy8z'],
    // ['  ',  0.97 , ' RT @helper2: The Morning Briefing: ZOMG CORONAVIRUS CANCEL ALL THE THINGS! https://t.co/yrs3T3ynh2 #Columns via @pjmedia_com'],
    // ['  ',  0.97 , ' RT @peterjhasson: Bernie Sanders is using the coronavirus to fundraise and build his email list https://t.co/DynyfD5sRm'],
    // ['  ',  0.97 , ' RT @StephenShippee2: Head Of Koch-Linked Think Tank Hopes Trump Will Die From Coronavirus #SmartNews  https://t.co/osaemZlpSS'],
    // [' political-clickbait ',  0.93 , ' RT @DailyCaller: Here Are The Members Of Congress Self-Quarantining After Meeting Person With Coronavirus At CPAC https://t.co/O9oPHw9VNA'],
    // // ['  ',  0.93 , ' RT @NorCalCrush: Here Are The Members Of Congress Self-Quarantining After Meeting Person With Coronavirus At CPAC https://t.co/D3qQECHPJH'],
    // // ['  ',  0.88 , ' RT @Thomas1774Paine: BREAKING ****** Coronavirus live updates: NCAA Tournament games will be played without fans https://t.co/AwzvmGnDif'],
    // // [' political-clickbait ',  0.76 , ' RT @DailyCaller: Dublin Cancels St. Patrick’s Day Parades Amid Coronavirus Outbreak https://t.co/PgOzWZfM3g'],
    // ['  ',  0.61 , ' RT @Bipartisanism: Trump Goes Fully Weird On Twitter Sunday Night #Trump #Coronavirus #DonaldTrump https://t.co/Zka2G52yJ3'],
    // ['  ',  0.54 , ' RT @RED_IN_PA: While this is noble and all, some of us do have to go to work and show up every day or we get fired.  https://t.co/ScuZuMo6R0']
  ]
  return abc;
}
