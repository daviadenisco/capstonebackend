exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('studentinfotable').del().then(function() {
    // Inserts seed entries
    return knex('studentinfotable').insert([
      {
        id: 1,
        headshot: "https://i.imgur.com/gzuG5IP.jpg",
        fullname: "Davia DeNisco",
        github: "https://github.com/daviadenisco",
        linkedin: "https://www.linkedin.com/in/davia-denisco-2889317",
        email: "mailto:davia@daviadenisco.com",
        personalsite: "http://www.daviadenisco.com/",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "http://www.daviadenisco.com/snake/",
        q2project: "https://techtionary.herokuapp.com/",
        q3project: "https://g72bestwebdevs.herokuapp.com/",
        bio: "I'm a software engineer based in New York City, where I was born and raised. After graduating from Drew University with a double major in Fine Art and History, I worked in event management for The Estée Lauder Companies, and then for The Open Society Foundations. I'm currently looking for a full-time position as a software engineer. In the meantime, I'm working on several freelance projects and will soon be teaching an intro to HTML, CSS, and JavaScript class. In my free time, I like to rescue cats, kiss wolves, and hike across volcanoes.",
        funfact: "I once found a message in a bottle on a beach.",
        funpic: "",
        requestresume: "mailto:davia@daviadenisco.com",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 2,
        headshot: "https://i.imgur.com/wya2YOA.jpg",
        fullname: "David Nyman",
        github: "https://github.com/davidnymanmusic",
        linkedin: "https://www.linkedin.com/in/david-nyman-a65a8a17/",
        email: "mailto:davenyman@gmail.com",
        personalsite: "",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "http://davidnymanmusic.github.io/white-noise",
        q2project: "http://dogeat.herokuapp.com/",
        q3project: "http://ring-signal.herokuapp.com/",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 3,
        headshot: "https://i.imgur.com/Biu7y7z.png",
        fullname: "Don Tamayo",
        github: "https://github.com/webbydon29",
        linkedin: "https://www.linkedin.com/in/don-aldrich-tamayo-2b0204132/",
        email: "mailto:amazingmardon@gmail.com",
        personalsite: "https://resume-viewer2018.herokuapp.com/",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "https://webbydon29.github.io/Q1_cars_2nd/index.html",
        q2project: "",
        q3project: "https://nba-apps-2018.herokuapp.com/",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 4,
        headshot: "https://i.imgur.com/yecnx3Z.jpg",
        fullname: "Gonpo Lama",
        github: "https://github.com/gonpolama",
        linkedin: "https://www.linkedin.com/in/gonpo-lama-68b0a840/",
        email: "mailto:gonpolama@gmail.com",
        personalsite: "",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "",
        q2project: "",
        q3project: "",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 5,
        headshot: "https://i.imgur.com/uHu09GK.jpg",
        fullname: "Jon Aquarone",
        github: "https://github.com/Jontronics",
        linkedin: "https://www.linkedin.com/in/jonathan-aquarone-73085189/",
        email: "mailto:j.aquarone@gmail.com",
        personalsite: "",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "",
        q2project: "",
        q3project: "",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 6,
        headshot: "https://i.imgur.com/lC1D5iQ.jpg",
        fullname: "Kyle Treman",
        github: "https://github.com/jkyletreman",
        linkedin: "https://www.linkedin.com/in/jkyletreman/",
        email: "mailto:jkt290@nyu.edu",
        personalsite: "",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "https://html-platformer-jungle-jumper.firebaseapp.com/",
        q2project: "https://stark-citadel-36057.herokuapp.com/recipes/",
        q3project: "https://flash-app-react-galvanize.herokuapp.com/",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 7,
        headshot: "https://i.imgur.com/U5PYID3.jpg",
        fullname: "Mike Allen",
        github: "https://github.com/mikevocalz",
        linkedin: "https://www.linkedin.com/in/michael-allen-3b538429/",
        email: "mailto:mikevocalz@aol.com",
        personalsite: "",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "",
        q2project: "",
        q3project: "",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 8,
        headshot: "https://i.imgur.com/qLEciTm.jpg",
        fullname: "Mona Temchin",
        github: "https://github.com/MonaTem",
        linkedin: "https://www.linkedin.com/in/monatemchin/",
        email: "mailto:monatemchin@gmail.com",
        personalsite: "",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "https://monatem.github.io/q1-project-mvp/",
        q2project: "https://still-ravine-87799.herokuapp.com/",
        q3project: "",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }, {
        id: 9,
        headshot: "https://i.imgur.com/4lYyS6B.jpg",
        fullname: "Riley Green",
        github: "https://github.com/rgreenviiiv",
        linkedin: "https://www.linkedin.com/in/riley-green-aaaa2463/",
        email: "mailto:rileygreenviiiv@gmail.com",
        personalsite: "",
        capstonelink: "",
        capstonedesc: "For my capstone project, I made the most useful app the world will ever know. It's the most convenient and the best designed app ever. Not only is it free to download, your bank account will be credited $1 every time you open the app.",
        q1project: "http://diligent-dog.surge.sh/",
        q2project: "http://q2-wine-pairing.herokuapp.com/",
        q3project: "",
        bio: "",
        funfact: "",
        funpic: "",
        requestresume: "",
        extraspace1: "",
        extraspace2: "",
        extraspace3: "",
        extraspace4: "",
        extraspace5: ""
      }
    ]);
  });
};
