function misinfo_display() {
  // alert('abc');
	tweets = showMisinfoTweets()
	document.getElementById("misinfo_score_table").innerHTML = tweets;
}

function showMisinfoTweets(){
	// var abc =  [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
  var  abc = getMisinfoTweets();
	var str = "";
  str += "<table ><tr style='border-bottom:1px solid lightpink'>"
  str += "<th>Website Type (if available)</th>  <th>Detection Score</th> <th>False/Misleading Tweets</th> </tr>";
  var i;  // currently 25 tweets shown tweetlist.length/8
  for (i = 0; i < abc.length; i++) {
      str += "<tr style='border-bottom:1px solid lightpink'>"
      str += "<td>" +   abc[i][0] + "<td>"
      str += "<td>" +   abc[i][1] + "<td>"
      str += "<td><div style='width: 600px;'>" +  abc[i][2] + "</div></td></tr>";
  }
  str += "</table> <br/><br/><br/>";
  // str += "<br><a href=javascript:showMoreTweets(" + clustername + ")  style='color: dimgray'>" + "See more tweets" + "</a>";
  // alert(str);
  return str;
}


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
    // ['  ',  1.0 , ' RT @VictoriaSerbia: American Coronavirus Patient, 36, Rushed to Biocontainment in Critical Condition- https://t.co/xbJgXiCjdv Via - @NeonNe…'],
    // ['  ',  1.0 , ' President Donald Trump announced Monday his coronavirus task force is looking into various financial relief actions aimed at curbing the disease’s effect on the economy. https://t.co/PtFElJPBkA'],
    // ['  ',  1.0 , ' Its shocking that MSDNC would push back, right? Just because they want to start a PANIC and blame the President?  THE STATS:  In the same time that we ve seen 3,354 deaths from the coronavirus, 924,000 children have gone missing. 125,000 abortions/day US. https://t.co/Ku0Qkyt1aj'],
    // ['  ',  1.0 , ' RT @ThePatriotPin: Rush Limbaugh Explains Why He Believes Democrats Approach To Coronavirus Will Backfire https://t.co/wiShcOKv2X via @TPIn…'],
    // ['  ',  1.0 , ' RT @P4tR10tBoo: Senator Ted Cruz Self-Quarantined After Meeting Someone With Coronavirus  https://t.co/SrgXPA6vFw  via @Breaking911'],
    // ['  ',  1.0 , ' RT @heyk1967: MSNBC’s Stephanie Ruhle Pushes Back After Elon Musk Calls Coronavirus Panic ‘Dumb’ | The Daily Caller https://t.co/DHd1zefMEe'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: MSNBC’s Stephanie Ruhle Pushes Back After Elon Musk Calls Coronavirus Panic ‘Dumb.’ https://t.co/6XnFqcUiRs'],
    [' political-clickbait ',  1.0 , ' RT @DailyCaller: Hunter Biden Says Coronavirus Is Keeping Him From Attending Child Support Deposition https://t.co/iTybXfD3N3'],
    // ['  ',  1.0 , ' RT @JimKuther: Dr. Drew On Coronavirus: Media ‘Hurting People,’ ‘Need To Be Held Accountable’ For Causing Panic https://t.co/tTzlxub7MG'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Gavin Newsom Praises Trump Administration’s Response To Coronavirus https://t.co/2xgZmD4GBm'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Hunter Biden Says Coronavirus Is Keeping Him From Attending Child Support Deposition https://t.co/iTybXfD3N3'],
    // ['  ',  1.0 , ' RT @Alpha_57: NOT KIDDING: Kevin McCarthy attacked by Democrats and the media for saying "Chinese coronavirus" https://t.co/zDVuBscPpL'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Matt Gaetz Tests Negative For Coronavirus — Will Remain Under Self-Quarantine https://t.co/nrJd36Cr2V'],
    [' political-clickbait ',  1.0 , ' RT @DailyCaller: ‘This Is Masochism’: Russia Wages An Oil War Against Saudi Arabia, US Amid Coronavirus Concerns https://t.co/j71VAfWKKN'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: ‘This Is Masochism’: Russia Wages An Oil War Against Saudi Arabia, US Amid Coronavirus Concerns https://t.co/j71VAfWKKN'],
    // ['  ',  1.0 , ' RT @bennyjohnson: Ocasio-Cortez: Not Eating Chinese Food Is Racist  https://t.co/PPhpqO7zBc'],
    // ['  ',  1.0 , ' RT @COL314: Gavin Newsom Praises Trump Administration’s Response To Coronavirus - The Daily Caller  https://t.co/3PnAtZKqSc'],
    ['  ',  1.0 , ' RT @Brn2Wander1: https://t.co/lebAEvQtIM  those people who responded to these polls are FOOLS.  Stop listening to the LMSM and the Dems.  T…'],
    // [' clickbait-unreliable ',  1.0 , ' RT @Breaking911: BREAKING: Bernie Sanders Cancels Rally Over #Coronavirus Fears - https://t.co/5eaxKXP5vX https://t.co/PY1tpSvekt'],
    // ['  ',  1.0 , ' RT @ophidianpilot: Head Of Koch-Linked Think Tank Hopes Trump Will Die From Coronavirus  https://t.co/4Q64HNj87k via @DailyCaller'],
    [' political-clickbait ',  1.0 , ' RT @DailyCaller: Bernie Sanders Uses Coronavirus Fears As Fundraising Tool. https://t.co/1eu0JfeTwv'],
    // [' political-clickbait ',  1.0 , ' RT @DailyCaller: Bernie Sanders Uses Coronavirus Fears As Fundraising Tool https://t.co/1eu0JfeTwv'],
    [' political-clickbait ',  1.0 , ' RT @DailyCaller: Poll: More Voters Disapprove Of Trump’s Response To Coronavirus https://t.co/tiShGxXCua'],
    // ['  ',  1.0 , ' RT @bwp808: اٹلی کا آرمی چیف بھی کرونا کا شکار   Italian army’s chief of staff tests positive for coronavirus https://t.co/qcdySAYja7'],
    ['  ',  1.0 , ' RT @chaser: Widespread panic hits as Corona Virus found to transmit via toilet paper https://t.co/DHwDzfkyFj #toiletpapergate #coronavirus'],
    [' political-clickbait ',  1.0 , ' RT @DailyCaller: Ilhan Omar Says It’s ‘Racist’ To Call COVID-19 The ‘Chinese Coronavirus.’ https://t.co/YuseqdS5Hm'],
    [' political-clickbait ',  1.0 , ' RT @DailyCaller: Dayton Students Riot After Campus Closes Down Because Of The Coronavirus https://t.co/sAAoKVk64V'],
    ['  ',  1.0 , ' RT @Bipartisanism: Jim Cramer Defects From Trump &amp  Blames Him For Coronavirus Response #Trump #golf #Money https://t.co/YM8lrC8QrB'],

    // [' clickbait-unreliable ',  1.0 , ' RT @Breaking911: Senator Ted Cruz Self-Quarantined  https://t.co/g0Gs30cOTO'],
    ['  ',  1.0 , ' RT @JackPosobiec: Yikes  Head of Koch-Linked Think Tank Hopes Trump Will Die From Coronavirus  https://t.co/4O6mx2kZ35'],
    ['  ',  1.0 , ' RT @Brn2Wander1: VIDEO: Fox’s Jeanine Pirro slams media for ‘doomsday reporting’ on coronavirus https://t.co/GAwO4zBgBJ via @realdennislynch'],
    ['  ',  1.0 , ' RT @chaser: Barnaby Joyce plays down coronavirus risk to latest 47 colleagues hes impregnated #auspol https://t.co/xL15vOodQ3'],

    ['  ',  1.0 , ' RT @AIIAmericanGirI: O.J. Simpson spotted at Costco -- without gloves -- preparing for coronavirus https://t.co/Iw0dXOeUGA @TwitchyTeam #AA…'],
    ['  ',  0.99 , ' RT @MariaSMB01: Situation in Milan as Up to 16 Million Italians Put in Quarantine Amid Coronavirus Outbreak – Video https://t.co/z9kcCrm4UU'],
    ['  ',  0.99 , ' RT @BillyWarpinjur: Where’s Uncle Jed? Jethro is getting a little too big for his britches! #2020JethroBodine https://t.co/KCtzUm5OKG'],
    ['  ',  0.99 , ' RT @NEWS_MAKER: WASHPOST, POLITICO, DAILY BEAST reporters quarantined...  https://t.co/VWfdxzPFLa'],
    ['  ',  0.99 , ' RT @DrFunkySpoon: DC Priest With Coronavirus Reportedly Gave Communion At Services With More Than 500 In Attendance https://t.co/8rk2mghu52'],
    ['  ',  0.99 , ' “We zijn een nuchter landje dat van lekker rampetampen houdt”, benadrukte de minister-president. https://t.co/eLY2zxTZR9. Juist zo mogen wij het horen 😎. Bij https://t.co/F9FJikxDD7 geen #coronavirus maar gewoon lekker genieten met ondeugende dames! https://t.co/3hNUcbtRt4'],
    ['  ',  0.98 , ' RT @yhn: Mo Brooks: Congress going into recess over the coronavirus sends the wrong message https://t.co/XMT3nfpy8z'],
    ['  ',  0.97 , ' RT @helper2: The Morning Briefing: ZOMG CORONAVIRUS CANCEL ALL THE THINGS! https://t.co/yrs3T3ynh2 #Columns via @pjmedia_com'],
    ['  ',  0.97 , ' RT @peterjhasson: Bernie Sanders is using the coronavirus to fundraise and build his email list https://t.co/DynyfD5sRm'],
    ['  ',  0.97 , ' RT @StephenShippee2: Head Of Koch-Linked Think Tank Hopes Trump Will Die From Coronavirus #SmartNews  https://t.co/osaemZlpSS'],
    [' political-clickbait ',  0.93 , ' RT @DailyCaller: Here Are The Members Of Congress Self-Quarantining After Meeting Person With Coronavirus At CPAC https://t.co/O9oPHw9VNA'],
    // ['  ',  0.93 , ' RT @NorCalCrush: Here Are The Members Of Congress Self-Quarantining After Meeting Person With Coronavirus At CPAC https://t.co/D3qQECHPJH'],
    // ['  ',  0.88 , ' RT @Thomas1774Paine: BREAKING ****** Coronavirus live updates: NCAA Tournament games will be played without fans https://t.co/AwzvmGnDif'],
    // [' political-clickbait ',  0.76 , ' RT @DailyCaller: Dublin Cancels St. Patrick’s Day Parades Amid Coronavirus Outbreak https://t.co/PgOzWZfM3g'],
    ['  ',  0.61 , ' RT @Bipartisanism: Trump Goes Fully Weird On Twitter Sunday Night #Trump #Coronavirus #DonaldTrump https://t.co/Zka2G52yJ3'],
    ['  ',  0.54 , ' RT @RED_IN_PA: While this is noble and all, some of us do have to go to work and show up every day or we get fired.  https://t.co/ScuZuMo6R0']
  ]
  return abc;
}
