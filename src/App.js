import React from 'react';
import logo from './logo.svg';
import './App.css';
import Airtable from 'airtable'

// import video5 from
const video1 = 'https://wrau.s3-us-west-2.amazonaws.com/dark-sun.mp4';
const video2 = 'https://wrau.s3-us-west-2.amazonaws.com/fire-sun.mp4.mp4';
const video3 = 'https://wrau.s3-us-west-2.amazonaws.com/lines.mp4';
const video4 = 'https://wrau.s3-us-west-2.amazonaws.com/water-light.mp4';
const video5 = 'https://wrau.s3-us-west-2.amazonaws.com/mall.mp4';
const video6 = 'https://wrau.s3-us-west-2.amazonaws.com/tropical.mp4'
const video7 = 'https://wrau.s3-us-west-2.amazonaws.com/static.mp4'
const video8 = 'https://wrau.s3-us-west-2.amazonaws.com/tv-static.mp4'
const video9 = 'https://wrau.s3-us-west-2.amazonaws.com/snow-forest.mp4'
const base = new Airtable({apiKey: 'keyxTmjEcWluvy82P'}).base('appaFvaUcm0byQs3Q');

var vidPaths = [video1, video2, video3, video4, video5, video6, video7, video8, video9];

var templates = [
  "@who in a world changed by @context, @verb with a @adjective @noun.",
  "@who are dealing with @context, @verb through @adjective @noun."
  
  ];
  
  var phrases = [
    "The date is 2024. Imagine",
    "In 10 years, you'll see",
    "This is your future:"
  ];
  
  var labels = [
    "What else might the future bring?",
    "This is crazy, show me another!",
    "I don't believe you... do it again."
  ];
  
  /*
    Auto Generated from WTF.csv
  */
  
  // let corpus = {};
  
  // corpus.who = ["Artists", "The Neighborhood Drone" , "Beekeepers", "A homeless man", "Librarians", "Dinosaurs", "I am", "Communities", "Doctors", "Taxi drivers", "Darth Vader", "An astronaut", "Scientists", "A psychologist", "Adversarial Robots", "Mutants", "My grand grand future son", "Alien colonization", "Revived Walt Disney", "Elephants", "Drones", "Barack Obama", "Jimmy Carter", "An abolitionist", "Youth", "Business people", "Women", "Dali Lama", "Aliens", "Coders", "Teachers", "Me", "Artichokes", "Super Germs", "Talking animals", "Robots", "Haters", "Punks", "Ross", "Doppelgängers", "Enemies", "Children", "Microbes", "Grandma", "Elders", "My clone", "A fireman", "Farmers", "Sarah", "A Middle Schooler", "A Waitress" , "Simba" , "Monkeys" , "Futuristas", "My children"];
  
  // corpus.context = ["weird", "anticipatory", "busy", "forgiving", "diseased", "strange", "desperate", "invisible", "borderless", "flooded", "dry", "crowded", "competitive", "open sourced", "cooperative", "collaborative", "depressing", "empowering", "inspiring", "loved", "crowded", "chaotic", "judgmental", "scary", "bedazzled", "dormant", "unstable", "satisfactory", "virtual", "expansive", "isolated", "fun", "inclusive", "hot","challenging", "collaborative", "connected", "highly organized", "sustainable", "wholly unfamiliar", "regulated", "adversarial", "friendly", "community-oriented" ];
  
  // corpus.verb = ["laughing", "sharing", "destroying", "running", "being watched", "gathering information", "gardening", "stalking birds", "blogging", "harvesting", "organizing", "eating", "dreaming", "philosophizing", "peacemaking", "rendering", "owning", "speaking", "dancing", "sleeping", "ritualizing", "smelling", "vacationing", "living", "celebrating", "dying", "creating","running", "touching", "tasting", "smelling", "hearing", "seeing", "using telepathy", "designing interactions", "driving", "singing", "blogging","browsing","chatting","file sharing","gaming","hacking","microblogging","sharing","shopping","syncing"];
  
  // corpus.adjective = ["healthy", "four dimensional", "audio reactive", "collaborative", "time traveling", "local", "green", "intense", "lab grown", "isolated", "artisinal", "organic", "free range", "family owned", "musical", "resilient", "quality", "implanted", "organic", "compartmentalized", "fresh", "genetically engineered", "composted", "teleported", "nourishing", "sentient", "compressed","cross-platform","crowdsourced","distributed","dynamic","generative","gesture controlled","integrated","lightweight","locally executing","memcached","monetized","motion controlled","open source","optimized","micro", "nano", "swarming", "smart", "emergent", "disruptive", "crowdsourced", "increasingly available", "augmented", "hyper-local", "distributed"];
  
  // corpus.noun = ["ticket", "backpack", "kitchen sink", "gestural interface","surveillance camera", "birth control", "set of glasses", "ticket", "backpack", "kitchen sink", "internal music device", "shelf", "health checkup screen", "robot-sourced disco bootie", "beard", "monkey", "tea pot", "space craft", "screw driver", "glue gun", "power tool", "slime", "wand", "skate board", "pen", "scooter", "soil", "tree", "earth", "space", "statistic", "microchip", "building", "fly trap", "time machine", "water bottle", "moon", "internal bionic body part", "cyborg plant", "communication device", "necklace", "submarine", "banana", "hamburger", "toothbrush", "water slide", "snake pit", "farm", "home", "tomato", "phone", "jetpack", "car", "book", "plant", "fork and knife", "set of chopsticks", "hat", "street sign"];
  
   var dom = {};
  var regex = /./;
  var vowel = /\b(a)\b(\s+)?(((<[^>]+>)\s?)+)?(\s+)?([aeiou]|hou)/gim;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corpus: {}
    }
  }
 

 update = () => {

	// this.generateIdea();
	// // dom.output.hide();
	// // dom.output.fadeIn(500);
	
	// this.setGenerateLabel();
}

// build regex from corpus

generateRegExp = () => {
 console.log('REGEXING')
	var str = '';
	var arr = [];
	var tmp = "@(types)";
	console.log(this.state.corpus);
  
  Object.keys(this.state.corpus).forEach(function(key,index) {
     arr.push(key);
});
	
	var exp = tmp.replace("types", arr.join('|'));
	console.log('exp', exp)
	return new RegExp(exp, "ig");
}

// generate idea

generateIdea = () => {
	var type;
	var match;
	var index;
	var intro;
	var output;
	
	var template = templates[(Math.random() * templates.length) | 0];
	var data = this.state.corpus;

  const vidPath =  vidPaths[Math.floor(Math.random() * vidPaths.length)];
	for(var prop in this.state.corpus) {
    data[prop] = this.state.corpus[prop].concat();
	}
	var result = regex.exec(template);
	while(result) {
		type = result[1];
		match = result[0];
    index = (Math.random() * data[type].length) | 0;
    template = template.replace(match, data[type].splice(index, 1)[0]);
		regex.lastIndex = 0;
		result = regex.exec(template);
	}
	
	var intro = phrases[(Math.random() * phrases.length) | 0];
	console.log('intro', intro, 'template', template)
	output = intro + ' ' + template
	console.log('output', output);
  this.setState({
    vidPath: vidPath,
    future: this.correctGrammar(output),
    corpus: this.state.originalCorpus
  })
}

getWhoTable = () => {
let who = [];
base('Who').select({
    maxRecords: 25,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        who.push(record.get('Name'))
    });
    console.log('who', who)
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});
return who;
}

getVerbTable = () => {
  let verb = [];
  base('Verb').select({
      maxRecords: 25,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          console.log('Retrieved', record.get('Name'));
          verb.push(record.get('Name'))
      });
      fetchNextPage();
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  return verb;
  }

  getNounTable = () => {
    let noun = [];
    base('Noun').select({
        maxRecords: 25,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Name'));
            noun.push(record.get('Name'))
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    return noun;
  }

  getAdjTable = () => {
    let adjective = [];
    base('Adjective').select({
        maxRecords: 25,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Name'));
            adjective.push(record.get('Name'))
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    return adjective;
  }

getContextTable = () => {
    let context = [];
    base('Context').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 25,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Name'));
            context.push(record.get('Name'))
        });
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    return context;
  
  }

correctGrammar = (input) => {

	// change 'a' to 'an' when before a vowel (I know this is not not always true!)
	input = input.replace(vowel, "$1n$2$3$6$7");

	return input;
}

// set label

setGenerateLabel = () => {
	// var label = labels[(Math.random() * labels.length) | 0];
	// dom.generate.text(label);
	
}
  
  componentDidMount = async () => {
    // console.log(corpus) 
    let corpus = {}
    corpus.context = this.getContextTable()

    console.log('yo', corpus.context)
    corpus.who = this.getWhoTable();
    corpus.noun =  this.getNounTable();
    corpus.adjective = this.getAdjTable();
    corpus.verb = this.getVerbTable()
    console.log('new corpus', corpus.who)

    // regex = this.generateRegExp();
  setTimeout(() => {this.setState({
    corpus: corpus,
    originalCorpus: corpus,
    loading: true
   }, () => {regex = this.generateRegExp();})}, 2000)
  //  this.setState({
  //   corpus: corpus
  //  })
  }

  render() {
    console.log(this.state.corpus)
    return (
      <div className="App">
        {this.state.vidPath && <div className="video-wrapper">
          <div className="videoOverlay"></div>
          <video src={this.state.vidPath} autoPlay loop muted/>
       </div> }
    		<div id="wrapper">
        <header>
          <h1>{this.state.finalAnswer}</h1>
        </header>

        <article>
          <div id="output">
      {this.state.future}
          </div>
    {this.state.loading && <div onClick={this.generateIdea} id="generate" href="#" title="Hit me again!">Tell me more about the future.</div> }
        </article>



        <footer>
          {/* <p><a href="http://www.iftf.org">Institute for the Future</a></p> */}
          <p>Inspired by soulwire's <a href="https://github.com/soulwire/WTFEngine">WTFEngine</a></p>
        </footer>

        </div>
              </div>
            );
          }
}

export default App;
