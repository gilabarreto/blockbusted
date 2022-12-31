const data = [
  {
    id: 1,
    quote: "Frankly, my dear, I don’t give a damn.",
    movie: "GONE WITH THE WIND",
    year: 1939
  },
  {
    id: 2,
    quote: "I'm going to make him an offer he can't refuse.",
    movie: "GODFATHER, THE",
    year: 1972
  },
  {
    id: 3,
    quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    movie: "ON THE WATERFRONT",
    year: 1954
  },
  {
    id: 4,
    quote: "Toto, I've got a feeling we're not in Kansas anymore.",
    movie: "WIZARD OF OZ, THE",
    year: 1939
  },
  {
    id: 5,
    quote: "Here's looking at you, kid.",
    movie: "CASABLANCA",
    year: 1942
  },
  {
    id: 6,
    quote: "Go ahead, make my day.",
    movie: "SUDDEN IMPACT",
    year: 1983
  },
  {
    id: 7,
    quote: "All right, Mr. DeMille, I'm ready for my close-up.",
    movie: "SUNSET BLVD.",
    year: 1950
  },
  {
    id: 8,
    quote: "May the Force be with you.",
    movie: "STAR WARS",
    year: 1977
  },
  {
    id: 9,
    quote: "Fasten your seatbelts. It's going to be a bumpy night.",
    movie: "ALL ABOUT EVE",
    year: 1950
  },
  {
    id: 10,
    quote: "You talking to me?",
    movie: "TAXI DRIVER",
    year: 1976
  },
  {
    id: 11,
    quote: "What we've got here is failure to communicate.",
    movie: "COOL HAND LUKE",
    year: 1967
  },
  {
    id: 12,
    quote: "I love the smell of napalm in the morning.",
    movie: "APOCALYPSE NOW",
    year: 1979
  },
  {
    id: 13,
    quote: "Love means never having to say you're sorry.",
    movie: "LOVE STORY",
    year: 1970
  },
  {
    id: 14,
    quote: "The stuff that dreams are made of.",
    movie: "MALTESE FALCON, THE",
    year: 1941
  },
  {
    id: 15,
    quote: "E.T. phone home.",
    movie: "E.T. THE EXTRA-TERRESTRIAL",
    year: 1982
  },
  {
    id: 16,
    quote: "They call me Mister Tibbs!",
    movie: "IN THE HEAT OF THE NIGHT",
    year: 1967
  },
  {
    id: 17,
    quote: "Rosebud.",
    movie: "CITIZEN KANE",
    year: 1941
  },
  {
    id: 18,
    quote: "Made it, Ma! Top of the world!",
    movie: "WHITE HEAT",
    year: 1949
  },
  {
    id: 19,
    quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    movie: "NETWORK",
    year: 1976
  },
  {
    id: 20,
    quote: "Louis, I think this is the beginning of a beautiful friendship.",
    movie: "CASABLANCA",
    year: 1942
  },
  {
    id: 21,
    quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    movie: "SILENCE OF THE LAMBS, THE",
    year: 1991
  },
  {
    id: 22,
    quote: "Bond. James Bond.",
    movie: "DR. NO",
    year: 1962
  },
  {
    id: 23,
    quote: "There's no place like home.",
    movie: "WIZARD OF OZ, THE",
    year: 1939
  },
  {
    id: 24,
    quote: "I am big! It's the pictures that got small.",
    movie: "SUNSET BLVD.",
    year: 1950
  },
  {
    id: 25,
    quote: "Show me the money!",
    movie: "JERRY MAGUIRE",
    year: 1996
  },
  {
    id: 26,
    quote: "Why don't you come up sometime and see me?",
    movie: "SHE DONE HIM WRONG",
    year: 1933
  },
  {
    id: 27,
    quote: "I'm walking here! I'm walking here!",
    movie: "MIDNIGHT COWBOY",
    year: 1969
  },
  {
    id: 28,
    quote: "Play it, Sam. Play 'As Time Goes By.'",
    movie: "CASABLANCA",
    year: 1942
  },
  {
    id: 29,
    quote: "You can't handle the truth!",
    movie: "FEW GOOD MEN, A",
    year: 1992
  },
  {
    id: 30,
    quote: "I want to be alone.",
    movie: "GRAND HOTEL",
    year: 1932
  },
  {
    id: 31,
    quote: "After all, tomorrow is another day!",
    movie: "GONE WITH THE WIND",
    year: 1939
  },
  {
    id: 32,
    quote: "Round up the usual suspects.",
    movie: "CASABLANCA",
    year: 1942
  },
  {
    id: 33,
    quote: "I'll have what she's having.",
    movie: "WHEN HARRY MET SALLY",
    year: 1989
  },
  {
    id: 34,
    quote: "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    movie: "TO HAVE AND HAVE NOT",
    year: 1944
  },
  {
    id: 35,
    quote: "You're gonna need a bigger boat.",
    movie: "JAWS",
    year: 1975
  },
  {
    id: 36,
    quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    movie: "TREASURE OF THE SIERRA MADRE, THE",
    year: 1948
  },
  {
    id: 37,
    quote: "I'll be back.",
    movie: "TERMINATOR, THE",
    year: 1984
  },
  {
    id: 38,
    quote: "Today, I consider myself the luckiest man on the face of the earth.",
    movie: "PRIDE OF THE YANKEES, THE",
    year: 1942
  },
  {
    id: 39,
    quote: "If you build it, he will come.",
    movie: "FIELD OF DREAMS",
    year: 1989
  },
  {
    id: 40,
    quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    movie: "FORREST GUMP",
    year: 1994
  },
  {
    id: 41,
    quote: "We rob banks.",
    movie: "BONNIE AND CLYDE",
    year: 1967
  },
  {
    id: 42,
    quote: "Plastics.",
    movie: "GRADUATE, THE",
    year: 1967
  },
  {
    id: 43,
    quote: "We'll always have Paris.",
    movie: "CASABLANCA",
    year: 1942
  },
  {
    id: 44,
    quote: "I see dead people.",
    movie: "SIXTH SENSE, THE",
    year: 1999
  },
  {
    id: 45,
    quote: "Stella! Hey, Stella!",
    movie: "STREETCAR NAMED DESIRE, A",
    year: 1951
  },
  {
    id: 46,
    quote: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    movie: "NOW, VOYAGER",
    year: 1942
  },
  {
    id: 47,
    quote: "Shane. Shane. Come back!",
    movie: "SHANE",
    year: 1953
  },
  {
    id: 48,
    quote: "Well, nobody's perfect.",
    movie: "SOME LIKE IT HOT",
    year: 1959
  },
  {
    id: 49,
    quote: "It's alive! It's alive!",
    movie: "FRANKENSTEIN",
    year: 1931
  },
  {
    id: 50,
    quote: "Houston, we have a problem.",
    movie: "APOLLO 13",
    year: 1995
  },
  {
    id: 51,
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "DIRTY HARRY",
    year: 1971
  },
  {
    id: 52,
    quote: "You had me at \"hello.\"",
    movie: "JERRY MAGUIRE",
    year: 1996
  },
  {
    id: 53,
    quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    movie: "ANIMAL CRACKERS",
    year: 1930
  },
  {
    id: 54,
    quote: "There's no crying in baseball!",
    movie: "LEAGUE OF THEIR OWN, A",
    year: 1992
  },
  {
    id: 55,
    quote: "La-dee-da, la-dee-da.",
    movie: "ANNIE HALL",
    year: 1977
  },
  {
    id: 56,
    quote: "A boy's best friend is his mother.",
    movie: "PSYCHO",
    year: 1960
  },
  {
    id: 57,
    quote: "Greed, for lack of a better word, is good.",
    movie: "WALL STREET",
    year: 1987
  },
  {
    id: 58,
    quote: "Keep your friends close, but your enemies closer.",
    movie: "GODFATHER II, THE",
    year: 1974
  },
  {
    id: 59,
    quote: "As God is my witness, I'll never be hungry again.",
    movie: "GONE WITH THE WIND",
    year: 1939
  },
  {
    id: 60,
    quote: "Well, here's another nice mess you've gotten me into!",
    movie: "SONS OF THE DESERT",
    year: 1933
  },
  {
    id: 61,
    quote: "Say \"hello\"to my little friend!",
    movie: "SCARFACE",
    year: 1983
  },
  {
    id: 62,
    quote: "What a dump.",
    movie: "BEYOND THE FOREST",
    year: 1949
  },
  {
    id: 63,
    quote: "Mrs. Robinson, you're trying to seduce me. Aren't you?",
    movie: "GRADUATE, THE",
    year: 1967
  },
  {
    id: 64,
    quote: "Gentlemen, you can't fight in here! This is the War Room!",
    movie: "DR. STRANGELOVE",
    year: 1964
  },
  {
    id: 65,
    quote: "Elementary, my dear Watson.",
    movie: "ADVENTURES OF SHERLOCK HOLMES, THE",
    year: 1939
  },
  {
    id: 66,
    quote: "Take your stinking paws off me, you damned dirty ape.",
    movie: "PLANET OF THE APES",
    year: 1968
  },
  {
    id: 67,
    quote: "Of all the gin joints in all the towns in all the world, she walks into mine.",
    movie: "CASABLANCA",
    year: 1942
  },
  {
    id: 68,
    quote: "Here's Johnny!",
    movie: "SHINING, THE",
    year: 1980
  },
  {
    id: 69,
    quote: "They're here!",
    movie: "POLTERGEIST",
    year: 1982
  },
  {
    id: 70,
    quote: "Is it safe?",
    movie: "MARATHON MAN",
    year: 1976
  },
  {
    id: 71,
    quote: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    movie: "JAZZ SINGER, THE",
    year: 1927
  },
  {
    id: 72,
    quote: "No wire hangers, ever!",
    movie: "MOMMIE DEAREST",
    year: 1981
  },
  {
    id: 73,
    quote: "Mother of mercy, is this the end of Rico?",
    movie: "LITTLE CAESAR",
    year: 1930
  },
  {
    id: 74,
    quote: "Forget it, Jake, it's Chinatown.",
    movie: "CHINATOWN",
    year: 1974
  },
  {
    id: 75,
    quote: "I have always depended on the kindness of strangers.",
    movie: "STREETCAR NAMED DESIRE, A",
    year: 1951
  },
  {
    id: 76,
    quote: "Hasta la vista, baby.",
    movie: "TERMINATOR 2: JUDGMENT DAY",
    year: 1991
  },
  {
    id: 77,
    quote: "Soylent Green is people!",
    movie: "SOYLENT GREEN",
    year: 1973
  },
  {
    id: 78,
    quote: "Open the pod bay doors, HAL.",
    movie: "2001: A SPACE ODYSSEY",
    year: 1968
  },
  {
    id: 79,
    quote: "Striker: Surely you can't be serious. Rumack: I am serious...and don't call me Shirley.",
    movie: "AIRPLANE!",
    year: 1980
  },
  {
    id: 80,
    quote: "Yo, Adrian!",
    movie: "ROCKY",
    year: 1976
  },
  {
    id: 81,
    quote: "Hello, gorgeous.",
    movie: "FUNNY GIRL",
    year: 1968
  },
  {
    id: 82,
    quote: "Toga! Toga!",
    movie: "NATIONAL LAMPOON'S ANIMAL HOUSE",
    year: 1978
  },
  {
    id: 83,
    quote: "Listen to them. Children of the night. What music they make.",
    movie: "DRACULA",
    year: 1931
  },
  {
    id: 84,
    quote: "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    movie: "KING KONG",
    year: 1933
  },
  {
    id: 85,
    quote: "My precious.",
    movie: "LORD OF THE RINGS: TWO TOWERS, THE",
    year: 2002
  },
  {
    id: 86,
    quote: "Attica! Attica!",
    movie: "DOG DAY AFTERNOON",
    year: 1975
  },
  {
    id: 87,
    quote: "Sawyer, you're going out a youngster, but you've got to come back a star!",
    movie: "42ND STREET",
    year: 1933
  },
  {
    id: 88,
    quote: "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
    movie: "ON GOLDEN POND",
    year: 1981
  },
  {
    id: 89,
    quote: "Tell 'em to go out there with all they got and win just one for the Gipper.",
    movie: "KNUTE ROCKNE ALL AMERICAN",
    year: 1940
  },
  {
    id: 90,
    quote: "A martini. Shaken, not stirred.",
    movie: "GOLDFINGER",
    year: 1964
  },
  {
    id: 91,
    quote: "Who's on first.",
    movie: "NAUGHTY NINETIES, THE",
    year: 1945
  },
  {
    id: 92,
    quote: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!",
    movie: "CADDYSHACK",
    year: 1980
  },
  {
    id: 93,
    quote: "Life is a banquet, and most poor suckers are starving to death!",
    movie: "AUNTIE MAME",
    year: 1958
  },
  {
    id: 94,
    quote: "I feel the need ... the need for speed!",
    movie: "TOP GUN",
    year: 1986
  },
  {
    id: 95,
    quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    movie: "DEAD POETS SOCIETY",
    year: 1989
  },
  {
    id: 96,
    quote: "Snap out of it!",
    movie: "MOONSTRUCK",
    year: 1987
  },
  {
    id: 97,
    quote: "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.",
    movie: "YANKEE DOODLE DANDY",
    year: 1942
  },
  {
    id: 98,
    quote: "Nobody puts Baby in a corner.",
    movie: "DIRTY DANCING",
    year: 1987
  },
  {
    id: 99,
    quote: "I'll get you, my pretty, and your little dog, too!",
    movie: "WIZARD OF OZ, THE",
    year: 1939
  },
  {
    id: 100,
    quote: "I'm king of the world!",
    movie: "TITANIC",
    year: 1997
  }
]

export default data;