<?php header('Content-Type: text/javascript; charset=UTF-8'); ?>

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/ ) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

imgnum = Math.floor(Math.random() * 11) + 1;
img1 = [new Image()];
img1[0].src = "https://www.whatsmystarbucksname.com/img/bg" + imgnum + ".jpg";

bgnames = ["aranami", "shinji_w", "justin in sd", "dick thomas johnson", "tregoning", "miki yoshihito", "lwyang", "adpowers", "jimg944", "carbonnyc [in sf!]", "ralph and jenny", "missbossy", "garryknight", "seafaringwoman"];
bgurls = ["https://www.flickr.com/photos/z0/7904559194/", "https://www.flickr.com/photos/shisho_1975/7667397762/", "https://www.flickr.com/photos/justininsd/7618567732/", "https://www.flickr.com/photos/31029865@N06/6399693885/", "https://www.flickr.com/photos/johnniewalker/12624055345/", "https://www.flickr.com/photos/mujitra/14830012507", "https://www.flickr.com/photos/lwy/2143712438/", "https://www.flickr.com/photos/adpowers/21602218/", "https://www.flickr.com/photos/jimg944/258006177/", "https://www.flickr.com/photos/carbonnyc/2627326773/", "https://www.flickr.com/photos/ralphandjenny/4163977166/", "https://www.flickr.com/photos/missbossy/2726629055",  "https://www.flickr.com/photos/garryknight/6240786602/", "https://www.flickr.com/photos/seafaringwoman/5213830041/"];
bgname = bgnames[imgnum - 1];
bgurl = bgurls[imgnum - 1];

turn = 0;
choices = [];
firstrun = true;

var popnames = ["james", "jim", "john", "robert", "rob", "michael", "mike", "william", "will", "david", "dave", "richard", "rich", "joseph", "charles", "charlie", "thomas", "tom", "christopher", "chris", "daniel", "dan", "matthew", "matt", "donald", "don", "anthony", "tony", "paul", "mark", "george", "steven", "steve", "kenneth", "ken", "andrew", "andy", "edward", "ed", "joshua", "josh", "brian", "kevin", "ronald", "ron", "timothy", "tim", "jason", "jeffrey", "jeff", "gary", "ryan", "nicholas", "nick", "eric", "jacob", "jake", "stephen", "jonathan", "jon", "larry", "frank", "scott", "justin", "brandon", "raymond", "ray", "gregory", "greg", "samuel", "sam", "benjamin", "ben", "patrick", "pat", "jack", "dennis", "jerry", "alexander", "alex", "tyler", "henry", "douglas", "doug", "peter", "pete", "aaron", "walter", "jose", "adam", "zachary", "zach", "harold", "nathan", "nate", "kyle", "carl", "arthur", "gerald", "roger", "lawrence", "keith", "albert", "al", "jeremy", "terry", "joe", "sean", "willie", "jesse", "austin", "christian", "ralph", "billy", "bill", "bruce", "bryan", "roy", "eugene", "ethan", "louis", "wayne", "jordan", "harry", "russell", "alan", "juan", "philip", "phill", "randy", "dylan", "howard", "vincent", "bobby", "bob", "johnny", "phillip", "shawn", "mary", "patricia", "jennifer", "jenny", "elizabeth", "liz", "linda", "barbara", "barb", "susan", "margaret", "marge", "maggie", "jessica", "jess", "dorothy", "sarah", "karen", "nancy", "betty", "lisa", "sandra", "helen", "ashley", "donna", "kimberly", "kim", "carol", "michelle", "emily", "amanda", "melissa", "deborah", "laura", "stephanie", "steph", "rebecca", "becky", "bec", "sharon", "cynthia", "kathleen", "ruth", "anna", "shirley", "amy", "angela", "virginia", "brenda", "pamela", "catherine", "katherine", "katie", "nicole", "christine", "janet", "debra", "samantha", "carolyn", "rachel", "heather", "maria", "diane", "frances", "joyce", "julie", "emma", "evelyn", "martha", "joan", "kelly", "christina", "lauren", "judith", "alice", "victoria", "doris", "ann", "jean", "cheryl", "marie", "megan", "kathryn", "andrea", "jacqueline", "gloria", "teresa", "janice", "sara", "rose", "hannah", "julia", "theresa", "judy", "grace", "beverly", "denise", "marilyn", "mildred", "amber", "danielle", "brittany", "olivia", "diana", "jane", "lori", "madison", "tiffany", "kathy", "tammy", "crystal"];

var drinktype = ["I", "G", "H", "I", "H", "I", "W", "I", "H", "H", "H", "H", "F", "H", "H", "W", "H", "F", "I", "W", "H", "I", "I", "H", "H", "W", "H", "H", "H", "W", "F", "I", "I", "I", "I", "H", "H", "H", "I", "H", "H", "H", "I", "I", "I", "H", "I", "I", "H", "G", "I", "F", "G", "I", "F", "G", "H", "H", "F", "H", "F", "I", "I", "H", "H", "I", "I", "H", "H", "H", "H", "H", "H", "W", "H", "H", "H", "H", "I", "I", "I", "P", "F", "H", "H", "I", "I", "I", "I", "I", "W", "H", "I", "G", "H", "I", "I", "I", "H", "H", "I", "I", "H", "H", "W", "I", "H", "H", "I", "H", "I", "I", "I", "H", "I", "H", "P", "H", "I", "H", "I", "F", "H", "I", "F", "H", "H", "F", "I", "I", "H", "H", "H", "H", "H", "W", "F", "I", "I", "I", "H", "I", "H", "F", "I", "H", "H", "H", "I", "F", "H", "H", "I", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "I", "F", "H", "I", "I", "I", "H", "I", "H", "G", "I", "I", "G", "H", "H", "G", "I", "I", "I", "H", "H", "H", "I", "H", "I", "H", "I", "H", "I", "H", "H", "H", "I", "H", "G", "I", "F", "H", "H", "I", "H", "H", "F", "H", "I", "H", "I", "H", "I", "I", "I", "I", "I", "I", "H", "I", "H", "F", "H", "I", "H", "I", "I", "I", "I", "H", "I", "I", "I", "F", "I", "P", "L", "S", "F", "I", "I", "I", "I", "I", "I", "H", "I", "P", "I", "I", "G", "I", "G", "I", "F", "F", "F", "H", "H", "I", "I", "I", "F", "I", "P", "H", "H", "H", "I", "H", "H", "H", "G", "G", "H", "H", "F", "I", "P", "F", "F", "P", "I", "I", "F", "H", "H", "H", "H", "H", "H", "I", "F", "P", "F", "H", "H", "I", "I", "I", "F", "I", "I", "I", "I", "H", "H", "I", "H", "H", "H", "H", "P", "H", "T", "H", "H", "F", "H", "H", "P", "T", "T", "P", "I", "H", "H", "I", "P", "F", "H", "I", "F", "I", "H", "H", "F", "I", "H", "G", "S", "H", "H", "I", "I", "F", "H", "P", "H", "H", "H", "I", "H", "H", "H", "P", "F", "I", "P", "H", "F", "F", "H", "G", "H", "H", "I", "H", "I", "H", "H", "F", "H", "H", "H", "F", "H", "I", "P", "F", "F", "I", "H", "H", "H", "H", "F", "P", "H", "H", "F", "H", "H", "H", "H", "H", "H", "H", "I", "I", "P", "I", "I", "H", "I", "I", "I", "F", "I", "H", "H", "H", "H", "I", "H", "O", "H", "H", "H", "H", "H", "H", "G", "H", "I", "H", "H", "H", "F", "H", "H", "F", "F", "I", "F", "H", "H", "G", "H", "F", "H", "H", "H", "F", "H", "H", "H", "H", "I", "H", "H", "H", "T", "P", "H", "H", "H", "I", "H", "H", "H", "H", "H", "F", "F", "I", "F", "H", "H", "P", "H", "H", "H", "F", "I", "I", "H", "H", "I", "F", "F", "G", "I", "H", "I", "H", "H", "H", "H", "I", "H", "H", "H", "I", "H", "H", "H", "H", "F", "E", "P", "P", "F", "H", "H", "H", "H", "H", "H", "H", "H", "H", "I", "H", "P", "F", "R", "H", "F", "W", "I", "I", "H", "H", "H", "H", "I", "H", "I", "I", "H", "H", "H", "H", "I", "F", "F", "I", "F", "F", "H", "I", "S", "H", "H", "H", "H", "I", "H", "H", "G", "H", "H", "H", "I", "H", "H", "H", "I", "H", "H", "H", "H", "I", "H", "F", "F", "F", "H", "H", "F", "H", "H", "H", "H", "S", "I", "F", "H", "H", "F", "H", "P", "H", "I", "I", "H", "F", "H", "H", "L", "F", "H", "H", "H", "F", "H", "I", "F", "I", "H", "F", "I", "H", "P", "F", "H", "F", "I", "H", "H", "H", "F", "I", "I", "I", "H", "P", "H", "H", "H", "F", "F", "F", "H", "H", "H", "H", "H", "F", "E", "H", "F", "H", "I", "H", "R", "H", "H", "F", "I", "F", "H", "F", "I", "H", "H", "H", "F", "H", "F", "H", "H", "F", "H", "H", "I", "H", "F", "T", "I", "I", "I", "H", "F", "F", "H", "L", "H", "I", "F", "H", "H", "H", "H", "I", "P", "H", "G", "H", "G", "H", "H", "I", "I", "I", "F", "H", "P", "I", "F", "F", "I", "H", "H", "P", "I", "H", "F", "H", "F", "H", "P", "H", "H", "H", "I", "H", "F", "F", "F", "H", "G", "H", "H", "H", "H", "H", "H", "F", "H", "I", "F", "I", "H", "H", "I", "H", "F", "H", "F", "P", "I", "F", "P", "F", "F", "I", "H", "H", "F", "I", "T", "I", "H", "H", "T", "H", "H", "F", "I", "H", "H", "H", "H", "H", "H", "I", "H", "F", "H", "H", "I", "H", "H", "H", "H", "H", "H", "F", "F", "I", "I", "H", "H", "I", "I", "H", "F", "I", "H", "H", "H", "H", "L", "H", "I", "H", "P", "I", "H", "H", "F", "I", "F", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "F", "F", "F", "H", "G", "H", "F", "F", "H", "F", "H", "H", "H", "I", "H", "H", "H", "H", "H", "H", "F", "H", "I", "H", "I", "F", "H", "H", "H", "H", "H", "H", "F", "H", "T", "H", "H", "H", "H", "H", "H", "H", "I", "H", "H", "H", "H", "I", "H", "I", "I", "H", "H", "H", "H", "H", "I", "H", "H", "H", "H", "H", "W", "H", "H", "H", "I", "I", "H", "H", "H", "I", "H", "F", "I", "I", "F", "H", "H", "H", "I", "I", "F", "H", "I", "F", "G", "R", "F", "H", "F", "I", "H", "F", "H", "H", "H", "H", "F", "G", "I", "H", "F", "I", "H", "H", "F", "S", "F", "H", "F", "F", "S", "F", "I", "I", "I", "I", "I", "H", "H", "H", "G", "A", "F", "A", "H", "I", "H", "H", "T", "I", "I", "H", "I", "H", "I", "P", "G", "F", "H", "I", "A", "H", "I", "I", "I", "H", "F", "H", "H", "H", "I", "G", "P", "H", "H", "I", "I", "I", "H", "H", "H", "I", "F", "F", "H", "I", "H", "H", "T", "I", "I", "I", "H", "H", "I", "I", "I", "H", "I", "H", "F", "I", "I", "G", "H", "H", "I", "I", "H", "I", "H", "I", "H", "H", "L", "T", "H", "H", "H", "H", "G", "I", "H", "H", "I", "H", "H", "I", "H", "H", "H", "I", "H", "I", "I", "H", "H", "I", "H", "W", "F", "H", "I", "H", "F", "H", "H", "P", "F", "H", "H", "H", "H", "H", "H", "I", "F", "I", "H", "H", "H", "H", "F", "H", "H", "H", "H", "H", "G", "F", "T", "I", "H", "F", "H", "H", "H", "L", "H", "F", "H", "I", "H", "R", "I", "I", "H", "H", "H", "I", "H", "I", "I", "I", "H", "I", "F", "H", "I", "I", "I", "H", "I", "I", "I", "H", "I", "H", "H", "I", "F", "H", "I", "I", "H", "H", "R", "I", "F", "H", "P", "H", "H", "F", "I", "I", "I", "P", "I", "T", "I", "R", "T", "H", "H", "T", "I", "I", "T", "A", "I", "H", "I", "T", "H", "I", "F", "F", "F", "F", "H", "H", "I", "P", "P", "I", "I", "H", "I", "H", "I", "F", "F", "H", "I", "H", "H", "I", "H", "H", "I", "H", "H", "F", "I", "I", "H", "I", "H", "H", "F", "F", "H", "I", "H", "S", "H", "H", "I", "H", "I", "I", "H", "I", "H", "I", "P", "O", "I", "I", "F", "H", "I", "T", "H", "H", "P", "I", "H", "P", "H", "I", "I", "H", "H", "H", "I", "I", "H", "I", "I", "H", "I", "H", "H", "I", "H", "I", "H", "H", "H", "H", "F", "H", "H", "F", "F", "H", "I", "I", "H", "H", "F", "H", "I", "H", "F", "H", "H", "F", "I", "I", "H", "H", "I", "H", "I", "T", "H", "H", "F", "H", "P", "I", "H", "H", "I","I",
"I",
"F",
"I",
"H",
"H",
"G",
"F",
"F",
"H",
"H",
"H",
"H",
"H",
"H",
"F",
"H",
"H",
"H",
"F",
"F",
"F",
"F",
"F",
"H",
"H",
"H",
"I",
"F",
"F",
"F",
"F",
"I",
"H",
"I",
"H",
"H",
"H",
"G",
"H",
"H",
"H",
"H",
"I",
"F",
"H",
"H"];

var names = ["cindy", "gabrie", "maylessa", "foxy", "farla", "brie", "darth", "royland", "ruth", "jerica", "stacy", "gho", "kay", "yerza", "caol", "bucky", "ginina", "ganerle", "marlov", "gaga", "joeana", "kelsy", "keith", "don", "tatayana", "madilyn", "juliana", "mary", "", "titan", "jaston", "merissa", "whilm", "groupie", "pam", "lemathe", "worin", "jenis", "millisia", "alexus", "montanmy", "cary", "steave", "collie", "nochin", "amada", "tandul", "meka", "jesse", "ambus", "haiti", "jennica", "alis", "debra", "sharrie", "karly", "boosha", "ploga", "katherine", "bruse", "", "debra", "methbeth", "kendif", "kio", "evane", "evon", "alien", "maritsa", "merissa", "mellisa", "miritsa", "larissa", "mayitza", "manul", "dhola", "lole", "shaggy", "greg", "aiden", "lazy", "pricella", "lin", "kris-chin", "roff", "granole", "horbael", "hobart", "homar", "omae", "sue", "jei", "beridet", "gio", "arin", "camilla", "men", "jerame", "jhanette", "jeren", "jerried", "jorry", "", "prijah", "priyah", "priya", "kalire", "idus", "louise", "loius", "louies", "louis", "weilan", "jolly", "jill", "lidnsy", "heinl", "pollen", "meanid", "rackel", "rocelle", "estefoni", "darren", "cody", "highway", "brino", "casn", "ellen", "keilo", "cage", "isa", "elissan", "holga", "sweter", "jordg", "gina", "fullta", "sharonica", "", "enuzie", "darcy", "parkus", "rish", "jallet", "", "jaret", "janette", "vanet", "alexon", "rush", "akizzen", "kinth", "themile", "jermiel", "brokee", "perla", "violut", "evil", "recrele", "pee", "judy", "?1", "briz", "boner", "raksen", "mufgarith", "jen", "pinkus", "danielle", "jooke", "math", "ad", "danno", "curyn", "elianza", "olle", "chilelle", "", "parker", "gayna", "baltimore", "jane", "louk", "oha", "aña", "aarad", "slitch", "emilly", "voota", "dendt", "frota", "chlob", "lauren", "mitchell", "metchat", "elysia", "jet", "kahee", "blibe", "nellis", "deja", "natilia", "phyllis", "chelsie", "cyndi", "shareena", "terv", "taffy", "malene", "nabil", "noira", "bripney", "jade", "salene", "hospie", "crason", "quess", "dingo", "michel", "jen", "shanu", "", "grena", "toshy", "ausie", "micheal", "coop", "nikki", "korin", "millysa", "collene", "dean", "tyler", "cristin", "tusash", "edlir", "shunna", "caotlyne", "", "holland", "phobee", "fee", "nur", "raja", "mali", "piag", "dami", "erick", "fiola", "lazey", "alie", "gym", "erie", "alas", "aevarth", "joline", "jaline", "tina", "lineth", "racheal", "blkursty", "julie", "ken", "sum", "dasta", "kerstin", "quine", "ketlin", "olga", "an", "gloria", "joshpe", "drega", "casidy", "blant", "racson", "luaren", "lily", "polly", "brendra", "baioy", "agustine", "super", "marques", "laycee", "kad", "roi", "nicole", "warton", "charlene", "gevonu", "merash", "rechealle", "katelan", "grel", "virgin", "ferensiz", "elauiner", "fioang", "gianna", "", "matiy", "maggie", "yunis", "lilly", "dobi", "add", "norm", "cherice", "nate", ":)", "lee", "lisa", "kyra", "joymi", "", "maritha", "britney", "kaly", "panara", "jeuels", "subien", "krisdna", "kyle", "ramheal", "bernie", "mexico", "juile", "arie", "justine", "merasha", "sillian", "allibia", "damella", "chelsie", "galda", "katlen", "maxil", "denese", "brett", "marrisy", "schieller", "duviol", "maira", "tyra", "cusey", "jordan", "naddie", "graig", "leah", "lora", "kiff", "barrufio", "", "mayo", "kuleo", "idel", "arial", "laurent", "airin", "michaell", "jazmin", "beuy", "?2", "holly", "pitea", "gary", "kathline", "auto", "collie", "joolee", "coline", "boe", "po", "hayde", "devin", "lunie", "feiw", "kalan", "cyndi", "capon", "dione", "any", "whendee", "fill", "gaylynn", "krysen", "kurth", "fible", "kindrie", "kyle", "ain", "mamad", "hiedi", "lint", "ilean", "judy", "debora", "danyur", "platen", "nehn", "naija", "parson", "carsie", "narson", "carston", "anny", "reel", "sheryl", "laynton", "erie", "kaylo", "coul", "kaid", "at", "son", "may lei", "tranquil", "trinke", "torri", "alj", "sandra", "adria", "jean", "randle", "aluha", "andria", "brnie", "melo", "jackie", "derrke", "karren", "kim", "pina", "margarette", "havan", "tylor", "kae", "carollne", "", "becon", "killy", "kathren", "zues", "lizza", "aleixis", "samie", "sharmena", "har", "trissa", "rihanne", "sherry", "rutnia", "rafio", "kaysea", "juily", "lexy", "danial", "nas", "henna", "gerage", "nay", "lotria", "erina", "kis", "brea", "gory", "rio", "lexus", "kel", "paehc", "charolette", "mya", "courtenay", "batt", "kristen", "re", "judis", "allen", "kathleen", "anvthyst", "javier", "debra", "lien", "kale", "harii", "sharlotte", "alician", "elkry", "", "stephanie", "alen", "dirian", "lettuces", "cloey", "vasak", "mourine", "eing", "juanneena", "melissa", "jolina", "samartha", "jane", "hopal", "creige", "ailisig", "lexin", "harvey", "feny", "nesta", "allies", "leana", "broatey", "stewen", "dane", "coley", "reese", "beyanka", "laura", "skayler", "meggie", "peter", "elena", "lee", "pole", "isla", "smeilene", "keny", "mayhuh", "lorraina", "duck", "gioven", "harriet", "brick", "kumtar", "encear", "portiric", "tefamy", "raymond", "charlie", "holena", "brabnello", "christin", "mychell", "lorry", "lorhen", "hai", "lorrie", "lory", "lora", "ingris", "michael", "t", "naun", "barlen", "trishian", "catrine", "emily", "olive", "lory", "estefani", "aeanne", "larrisa", "leuian", "maranne", "rem", "lara", "clarif", "damon", "zohi", "jeph", "packy", "rebeka", "ton", "tim", "daniel", "kirim", "rotci", "jepui", "zui", "whell", "chelsea", "herald", "clif", "iolin", "doo", "syntheia", "chake", "cathine", "robert", "", "", "football", "ciriria", "matra", "sabata", "no", "wailml", "", "shalet", "alice", "gilan", "ten", "chelbie", "zimond", "kelly", "cynthia", "denisse", "alian", "lorie", "maurice", "bat", "hutt", "chamber", "?3", "paul", "brianne", "kaila", "steve", "luz", "davis", "bita", "winday", "steph]", "gabby", "death", "metchal", "shaggy", "evie", "courtenay", "alis", "lynonn", "deauh", "l", "leanna", "adi", "lindsay", "france", "silwia", "kitty", "", "rabin", "uon", "heliy", "rebign", "jod", "gud", "mary", "nynia", "maggy", "sophaya", "iailt", "radell", "batman", "dennie", "reipar", "adem", "star", "breona", "traviz", "bionka", "macke", "rolling", "brignette", "ezabell", "rowmen", "robicca", "dian", "shat", "bod", "din", "carrie", "carry", "caitlin", "trasy", "wong", "booja", "titty", "nemo", "imogem", "kotry", "arar", "?4", "caroon", "carsey", "jen", "catmrine", "lurel or lourvel or lorel", "fibi", "linett", "divn", "ricon", "bror", "jene", "jain", "pihti", "ghana ", "neo", "esthefi", "ribay", "lory", "magen", "arika", "saull", "marn", "winona", "ram", "reackel", "kimbrly", "weell", "edwin", "lesi", "?5", "aleey", "amely", "mareen", "maconda", "kathline", "golden", "candles", "seyia", "ralsea", "sardin", "boneem", "rhiana", "aaron", "cheo", "drue", "kaik", "donna", "khaley", "urserlla", "chann", "muranda", "daisy", "haten", "hkolleane", "cinthea", "bruk", "machille", "lizu", "einesha", "valiry", "meg", "kaylob", "estbelk", "kelvin", "scoth", "erine", "cean", "aren", "rebel", "kaitlann", "kate", "jimmy", "rebekha", "gean", "margie", "chetta", "hundres", "alexison", "johnnie", "june", "alliyah", "entoiad", "lora", "aleson", "ashe", "styles", "favor", "alicia", "jone", "evan", "kitten", "aaron", "blass", "pena", "anna", "yesua", "katlyn", "penai", "eric", "corrola", "missle", "kayla", "mac", "iris", "elyca", "shillby", "flow", "lei", "vibi", "vebee", "kiera", "lydsney", "babela", "alax", "manly", "jean", "mess", "polo", "gloria", "sab", "haryt", "perry", "heriett", "picksie", "steaven", "voldamort", "nan", "mikenski", "petti", "dalphy", "mkcenzie", "dia", "thei", "rubiap", "gilu", "patrisha", "kardine", "kane", "diane", "jema", "mad-ah-lynn", "pigo", "sailor", "ibellium", "gib", "tuckilya", "spanser", "karmin", "allen", "aleashia", "lya", "mykala", "lylos", "gaherlott", "mila", "liyi", "lailo", "cheft", "berra", "litzy", "easy", "vocsan", "fimbpy", "chole", "prik", "blan", "wlio", "sarry", "dillian", "pony", "jone", "ive", "boris", "jail", "aby", "heidi", "barry", "giggles", "darlul", "amanda", "besty", "fili", "ileen", "gasca", "tiphony", "martheful", "laria", "chelsea", "a-me", "player", "giny", "verginya", "molten", "mavdat", "kristil", "rebecka", "cherry", "harold", "hazul", "cyedny", "ezibella", "quartney", "raghleigh", "berry", "poiest", "chelsay", "cats", "careen", "karson", "carson", "carsud", "buddy", "cendy", "shubh", "gurry", "sharlet", "diki", "berk", "leften", "ridge", "dayan", "apizy", "aubrey", "tanner", "gia", "earn", "almond", "sonla", "garey", "glorin", "parker", "wang", "amnika", "fornetta", "o", "kollen", "vanilia", "aliz", "downy", "lid", "emmie", "dash", "elisa", "eric", "", "imie", "ejay", "wayne", "cheeshy", "alican", "dairius", "azath", "jeff", "molley", "bristiba", "bobro", "ari inn", "auch", "adrain", "collin", "baniel", "germine", "nittley", "tac", "carline", "ashleey freed", "jatin", "jeff", "prornwin", "sewd", "sonla", "any", "marice", "carolyn", "reclier", "olorn", "moron", "rabi", "helen", "phobia", "daze", "", "jusel", "gaiea", "joyse", "elaink", "zoey", "keith", "partha", "nali", "jazimin", "spina", "jacell", "pebba", "loen", "tesale", "danine", "gaillon", "katheran", "honey connie", "prina", "megan", "briayan", "moti", "santa", "meloney", "eursela", "carfy", "?6", "louisee", "riber", "maress", "", "debbie", "belutia", "corolrian", "primrose everdeen", "presly", "passion", "heather", "samen", "yelena", "paritsa", "pastry", "lery", "penellipie", "lidia", "corel", "syarah", "kateland", "rocsi", "perisa", "baricia", "daninel", "blad", "rod", "vadler", "creag", "erich", "marbra", "libral", "gazelle", "gab", "sahara", "cardinal", "mog", "mudule", "jaramie", "leoues", "", "alex", "deny", "broke", "sanje", "tatna", "lousie", "ebbie", "donie", "grof", "spirow", "trug", "alien", "rola", "tary", "evan", "en", "jen", "sasealya", "nick", "rat", "botchada", "livra", "tez", "crustle", "dunal", "lorry", "", "seara", "seara", "ecky", "lynn", "vergona", "ketty", "sherril", "ailson", "jd", "brain", "meow", "mogone", "janiver", "stayc", "parlcu", "heleoren", "apron", "haypu", "vawl", "pony", "jasitan", "shirry", "pallapi", "gale", "mat", "bunksha", "christen", "polly", "chrisben", "ilisia", "fam", "hartsan", "carsan", "wid", "steey", "carsey", "cale", "ciady", "sherry", "metchul", "borin", "angie", "janna", "lyzeth", "madellin", "ralph", "eriall", "joed", "syreena", "alice", "dreyo", "nichol", "justine", "renarldo", "lilyen", "carlee", "", "leia", "han", "lanea", "ales", "kris", "brigittta", "natasha", "malon", "riana", "eric", "corrie", "lindsey lohan", "its renee", "kathlein", "rinaldo", "natie", "megan", "angler", "", "brigitta", "tool", "litia", "hellen", "anie", "joan", "gabby", "dave", "pollen", "chancuer", "statlley", "jesice", "sjiann", "johin", "pula", "xena", "danyele", "aruse", "rebecca", "mitus", "", "jaques", "trich", "mullen", "carlene", "christen", "debbie", "mia", "shontel", "bakkie", "cristmian", "anger", "shopra", "olbama", "niclla", "coby", "eeron", "renold", "lisa", "l.e.", "anecia", "spuscun", "emelly", "ryss", "brian", "magan", "isla", "correy", "rute", "surly", "mary", "zui", "nia", "leennn", "froncine", "chatal", "diego", "sales", "mierla", "alers", "sherlun", "stia", "cathrine", "e", "keiti", "may", "evelin", "quib", "cloie", "haceldie", "shavan", "shaniqua", "auntie", "adry", "pam", "venisha", "falestha", "felcira", "alishia", "philesha", "?7", "fillionna", "jilly", "maian", "amely", "parris", "christol", "shrille", "wrreck", "gosh", "gris", "malo", "suazei", "gylan", "aaron", "pork", "kay", "katty", "jami", "ashton", "ellen", "gretta", "casid-e", "chippy", "mad", "awhina", "", "broke", "genus", "ashley", "cherry ann", "cionet", "gena", "janie", "jill", "jordan", "naija", "reese", "sharlet", "steff", "susy", "treresa", "tyler", "hiati", "alivia","anatira","azarat","bodd","candance","catiran","chras","clowy","colon","curli","danilla","denis","eantha","easy","eber","eder","emsi","feline","folen","garim","griely","haphme","hater","iney","jannett","kenya","keydi","lebi","lenuy","liao","lisdsey","lola","lonye","mara","marrick","wye","murray","myllysa","pensa","phillidia","pit","que","semen","shear","tennis","wallup","withney"];

function getName(passedname) {


    firstrun = false;

    var getname = passedname.replace(/\W/g, '').toLowerCase();

    var scount = new_count(getname);

    var firstletter = [getname.substr(0, 1)];

    var lastletter = [getname.slice(-1)];

    var exactmatch = [];

    if (/[a-z]/.test(firstletter) == false) {
        var badchoices = [];

        for (i = 0; i < names.length; i++) {
            if (names[i].substr(0, 1) == "?")
                badchoices.push(i);
        }

        var rn = Math.floor(Math.random() * badchoices.length);

        for (i = 0; i < badchoices.length; i++) {

            while (badchoices[rn] == "x") {
                rn = Math.floor(Math.random() * badchoices.length);
            }
            choices.push(badchoices[rn]);
            badchoices[rn] = "x";
        }

        return;
    }


    choice0 = []; // First letter & syllables & not popular & last letter
    choice1 = []; // First letter & syllables & not popular
    choice2 = []; // First letter and syllables
    choice3 = []; // First letter & not popular
    choice4 = []; // First letter



    if (getname.substr(0, 2) == "ch") {
        firstletter.push("ch");

        if (getname.substr(0, 3) == "chr")
            firstletter.push("kr");

    } else if (firstletter[0] == "c")
        firstletter.push("k");

    if (firstletter[0] == "k")
        firstletter.push("c");

    if (getname.substr(0, 3) == "phi")
        firstletter.push("f");

    /*  if (getname.substr(0, 3)=="f")
     firstletter.push("phi"); Does not Apply */

    if (firstletter[0] == "x")
        firstletter.push("z");

    if (firstletter[0] == "z")
        firstletter.push("x");
              
    if (firstletter[0] == "j")
        firstletter.push("g");

    if (firstletter[0] == "g")
        firstletter.push("j");

    if (lastletter[0] == "y") {
        lastletter.push("ee");
        lastletter.push("ie");
    }

    if (getname.slice(-2) == "ee") {
        lastletter.push("y");
        lastletter.push("ie");
    }

    if (getname.slice(-2) == "ie") {
        lastletter.push("ee");
        lastletter.push("y");
    }


    for (i = 0; i < names.length; i++) {

        if (names[i] == getname) {
            exactmatch.push(i);
            continue;
        }

        var icount = new_count(names[i]);
        var flmatch = false;
        var llmatch = false;
        var popped = popnames.indexOf(names[i]);


        for (j = 0; j < firstletter.length; j++) {
            if (names[i].substr(0, firstletter[j].length) == firstletter[j])
                flmatch = true;
        }

        for (k = 0; k < lastletter.length; k++) {
            if (names[i].slice(lastletter[k].length * -1) == lastletter[k])
                llmatch = true;
        }


        if (
            flmatch == true &&
            icount == scount &&
            popped == -1 &&
            llmatch == true

        )

            choice0.push(i);

        else if (
            flmatch == true &&
            icount == scount &&
            popped == -1

        )

            choice1.push(i);

        else if (
            flmatch == true &&
            icount == scount

        )

            choice2.push(i);

        else if (
            flmatch == true &&
            popped == -1
        )
            choice3.push(i);

        else if (
            flmatch == true
        )
            choice4.push(i);

    }

    if (exactmatch.length > 0) {
        choice4.push(exactmatch[Math.floor(Math.random() * exactmatch.length)]);
    }

    /* console.log("0: "+choice0);    
     console.log("1: "+choice1);
     console.log("2: "+choice2);
     console.log("3: "+choice3);
     console.log("4: "+choice4); */

    var rn = Math.floor(Math.random() * choice0.length);

    for (i = 0; i < choice0.length; i++) {

        while (choice0[rn] == "x") {
            rn = Math.floor(Math.random() * choice0.length);
        }
        choices.push(choice0[rn]);
        choice0[rn] = "x";
    }
    for (i = 0; i < choice1.length; i++) {
        rn = Math.floor(Math.random() * choice1.length);
        while (choice1[rn] == "x") {
            rn = Math.floor(Math.random() * choice1.length);
        }
        choices.push(choice1[rn]);
        choice1[rn] = "x";
    }
    for (i = 0; i < choice2.length; i++) {
        rn = Math.floor(Math.random() * choice2.length);
        while (choice2[rn] == "x") {
            rn = Math.floor(Math.random() * choice2.length);
        }
        choices.push(choice2[rn]);
        choice2[rn] = "x";
    }
    for (i = 0; i < choice3.length; i++) {
        rn = Math.floor(Math.random() * choice3.length);
        while (choice3[rn] == "x") {
            rn = Math.floor(Math.random() * choice3.length);
        }
        choices.push(choice3[rn]);
        choice3[rn] = "x";
    }
    for (i = 0; i < choice4.length; i++) {
        rn = Math.floor(Math.random() * choice4.length);
        while (choice4[rn] == "x") {
            rn = Math.floor(Math.random() * choice4.length);
        }
        choices.push(choice4[rn]);
        choice4[rn] = "x";
    }
    //console.log("choices: "+choices);
    return;


}


function jpegName(jpgnum)

{


    if (jpgnum < 10)
        jpgnum = "000" + jpgnum;
    else if ((jpgnum > 9) && (jpgnum < 100))
        jpgnum = "00" + jpgnum;
    else if ((jpgnum > 99) && (jpgnum < 1000))
        jpgnum = "0" + jpgnum;

    return jpgnum;

}


function showResult() {

$("#starbucks").css("visibility","visible");

    var passname = $('#getname').val();
    if (passname == "")
        return;


    if (firstrun)
        getName(passname);

    gotnum = choices[turn];
    gotname = names[gotnum];
    jpgnum = jpegName(gotnum + 1);


    turn++;

    if (turn == choices.length) {
        turn = 0;
    }


    if (gotname.substr(0, 1) == "?") {
        gotname = "you";
    } else {
        gotname = gotname.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }


    switch (drinktype[jpgnum - 1]) {

<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
switch ($lang){

    case "fr":
        include("fr.txt");
        break;
        
            case "de":
        include("de.txt");
        break;
        
            case "pt":
        include("pt.txt");
        break;
        
           case "es":
        include("es.txt");
        break;
        
            case "en":
        include("en.txt");
        break;
        
            default:
        include("en.txt");
        break;
			
		}	
			?>
        

    }

    var drink = possibledrinks[Math.floor(Math.random() * (possibledrinks.length))];

    $('#yourorder').html("“" + drink + " <?php
    
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

    switch ($lang){

    case "fr":
        echo "pour";
        break;
        
            case "de":
        echo "für";
        break;
        
            case "pt":
        echo "para";
        break;
        
           case "es":
        echo "para";
        break;
        
            case "en":
        echo "for";
        break;
        
            default:
        echo "for";
        break;
			
		}	
    
    
    
    ?> <b>" + gotname + "</b>.”");
    $('#yourpicture').html('<img src="https://www.whatsmystarbucksname.com/img/' + jpgnum + '.jpg" id="coffeepic">');
    $('#preresults').hide();
    $('#results').show();

    $('#twittershare').attr("href", "https://twitter.com/intent/tweet?url=https%3A%2F%2FWhatsMyStarbucksName.com%2F%3Fcup%3D" + jpgnum + "&text=My%20Starbucks%20name%20is%20%22" + gotname + ".%22%20What%27s%20yours%3F&hashtags=mystarbucksname");
   
    $('#tumblrshare').attr("href", "https://www.tumblr.com/widgets/share/tool?posttype=photo&tags=mystarbucksname%2Cstarbucks%20name&content=https%3A%2F%2Fwhatsmystarbucksname.com%2Fimg-w%2F"+jpgnum+".jpg&caption=My%20Starbucks%20name%20is%20%22" + gotname + ".%22%20Find%20yours%20at%20WhatsMyStarbucksName.com&canonicalUrl=https%3A%2F%2Fwhatsmystarbucksname.com?cup="+jpgnum);
    $('#pshare').attr("href", "https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.whatsmystarbucksname.com%2F&media=https%3A%2F%2Fwhatsmystarbucksname.com%2Fimg-w%2F"+jpgnum+".jpg&description=My%20Starbucks%20name%20is%20%22" + gotname + ".%22%20Find%20yours%20at%20WhatsMyStarbucksName.com");
	
   ga('send', 'event', 'button', 'get drink', jpgnum);

    img1[1] = new Image();
    jpgnum2 = jpegName(choices[turn]);
    img1[1].src = "https://www.whatsmystarbucksname.com/img/" + jpgnum2 + ".jpg";

 

}

function fbShare() {

    FB.ui({
        method: 'feed',
        link: 'https://www.whatsmystarbucksname.com/?cup=' + jpgnum,
        name: 'My Starbucks name is "' + window.gotname + '." What\'s yours?',
        caption: 'What\'s My Starbucks Name?',
        picture: 'https://www.whatsmystarbucksname.com/img-w/' + jpgnum + '.jpg',

    }, function(response) {});

}

function new_count(word) {
    word = word.toLowerCase().replace(/\W/g, '');
    if (word.length <= 3) {
        return 1;
    }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    if (word.match(/[aeiouy]{1,2}/g))
        return word.match(/[aeiouy]{1,2}/g).length;
}


function newGame() {

$("#starbucks").css("visibility","hidden");

    imgnum++;
    if (imgnum == 14)
        imgnum = 1;

    img1[0].src = "https://www.whatsmystarbucksname.com/img/bg" + imgnum + ".jpg";

    bgname = bgnames[imgnum - 1];
    bgurl = bgurls[imgnum - 1];

    turn = 0;
    choices = [];
    firstrun = true;

    $('#bgimage').css('background-image', 'url(https://www.whatsmystarbucksname.com/img/bg' + imgnum + '.jpg)');
    $('#bgauthor').html('<a href="' + bgurl + '" target="_blank">' + bgname + '</a>');
    $('#getname').val("");

    $('#results').hide();
    $('#preresults').show();
    $('#getname').focus();

}


/* On Load */

$('#bgimage').css('background-image', 'url(https://www.whatsmystarbucksname.com/img/bg' + imgnum + '.jpg)');
$('#bgauthor').html('<a href="' + bgurl + '" target="_blank">' + bgname + '</a>');
$('#getname').focus();

$('#getname').keyup( function(e) {

    if ((e.keyCode ? e.keyCode : e.which) == 13)
        showResult();
    else if ($('#getname').val() != '')
        $('#go').css('backgroundPosition', 'top right');
    else
        $('#go').css('backgroundPosition', 'top left');


});

$('#shareme').sharrre({
    share: {

   
      
        facebook: true,
        
          googlePlus: true,
        
               
        twitter: true,
        
         stumbleupon: false,
        
        	pinterest: false

    },
    buttons: {
       
        twitter: {
            url: ' ',
          count: 'none',
            hashtags: 'mystarbucksname'
         
        },
        googlePlus: {
            size: 'medium',
            // width: '120',
            annotation: 'none' //inline
        },
        facebook: {
             url: 'https://www.facebook.com/WhatsMyStarbucksName/',
             action: 'like',
  layout: 'button', //_count

  send: 'false',
  faces: 'false',
  colorscheme: '',

  lang: 'en_US'
        },
         stumbleupon: {
            layout: '4' //2
        },
      pinterest: { 
  url: 'https://www.whatsmystarbucksname.com/', 
  media: 'https://www.whatsmystarbucksname.com/img-w/logo-w.png',
  description: 'Find out how a barista will ruin your name with What\'s My Starbucks Name?',
  layout: 'horizontal'
}

    },
    enableHover: false,
    enableCounter: false,
    enableTracking: false
});