import useSWR from "swr";

export interface Attachment {
  name: string;
  url: string;
}

export interface SolvedBy {
  solved_at: number;
  team_id: number;
  team_name: string;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  category: string;
  author: string;
  score: number;
  tags: string[];
  attachments: Attachment[];
  solved_by: SolvedBy[];

  is_open: boolean;
  is_survey: boolean;
}

const useTasks = () =>
  useSWR<Task[]>("/tasks", () => [
    {
      id: 61275121,
      name: "They Were Eleven",
      flag: "",
      category: "crypto",
      description:
        "Accidentally there were eleven people in the spaceship, as the conspiracy of the Space University. Excellent cadets were having predicted such a situation, however, their secret message had been polluted by the artful University...",
      author: "theoremoon",
      score: 427,
      tags: [],
      attachments: [
        {
          name: "they_were_eleven_2368be134fa64e5b4f9bec0b7cf29fb4.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/792f7349-b124-4ded-ac37-bc3bb97cd685/they_were_eleven_2368be134fa64e5b4f9bec0b7cf29fb4.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636243626,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636184594,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636179848,
          team_id: 4038631232,
          team_name: "Hermes",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 175516696,
      name: "Write as a Service",
      flag: "",
      category: "pwn",
      description:
        "\u003cp\u003eRead as a Service is still under development...\u003c/p\u003e \u003ccode\u003enc pwn.bsidesahmedabad.in 9090\u003c/code\u003e\n",
      author: "keymoon",
      score: 469,
      tags: [],
      attachments: [
        {
          name: "write_as_a_service_5ff1b6c14cbb0d0fadd8a21563140022.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/97c61a1d-b0a1-40a8-be7f-c3478dfb4f82/write_as_a_service_5ff1b6c14cbb0d0fadd8a21563140022.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636238368,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636216674,
          team_id: 2869414462,
          team_name: "padoru padoru!!!!",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 414358294,
      name: "httpsaba",
      flag: "",
      category: "pwn",
      description:
        '\u003cp\u003eThis tiny HTTP server is enough for hosting a \u003ca href="http://pwn.bsidesahmedabad.in:9080/"\u003estatic website\u003c/a\u003e.\u003c/p\u003e\n',
      author: "ptr-yudai",
      score: 239,
      tags: [],
      attachments: [
        {
          name: "httpsaba_2142613fca924cd8021e6090bf111423.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/49cc45a2-e4f4-4504-9760-5b5e0bd044b3/httpsaba_2142613fca924cd8021e6090bf111423.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636251828,
          team_id: 3047485153,
          team_name: "Nupakachi",
        },
        {
          solved_at: 1636249698,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636243731,
          team_id: 3039301393,
          team_name: "ShroomZ",
        },
        {
          solved_at: 1636236794,
          team_id: 2162170792,
          team_name: "The Flat Network Society",
        },
        {
          solved_at: 1636226669,
          team_id: 344174345,
          team_name: "uetctf",
        },
        {
          solved_at: 1636226280,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636224681,
          team_id: 2672811704,
          team_name: "ssssss",
        },
        {
          solved_at: 1636222748,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636208273,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636206249,
          team_id: 1673786134,
          team_name: "whateverittakes",
        },
        {
          solved_at: 1636200645,
          team_id: 2093620421,
          team_name: "Zzer0",
        },
        {
          solved_at: 1636195140,
          team_id: 1124451295,
          team_name: "hoge",
        },
        {
          solved_at: 1636186095,
          team_id: 2759966904,
          team_name: "Weak But Leet",
        },
        {
          solved_at: 1636182427,
          team_id: 921602238,
          team_name: "Infinite loop",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 472626810,
      name: "BabyBOF:SBX",
      flag: "",
      category: "pwn",
      description:
        "\u003cp\u003eAs we have received many malicious feedbacks, we decided to isolate the feedback form. Is it over-killing?\u003c/p\u003e \u003ccode\u003enc pwn2.bsidesahmedabad.in 9002\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 340,
      tags: [],
      attachments: [
        {
          name: "babybof_sbx_71afb925453cc37d719c9547fbe48fbf.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/592bc5cc-58a8-45f0-977c-1fe66720014a/babybof_sbx_71afb925453cc37d719c9547fbe48fbf.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636244329,
          team_id: 344174345,
          team_name: "uetctf",
        },
        {
          solved_at: 1636230957,
          team_id: 1124451295,
          team_name: "hoge",
        },
        {
          solved_at: 1636226416,
          team_id: 2162170792,
          team_name: "The Flat Network Society",
        },
        {
          solved_at: 1636224448,
          team_id: 2813555526,
          team_name: "zr0pts",
        },
        {
          solved_at: 1636206534,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636196587,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 742936355,
      name: "neutron",
      flag: "",
      category: "web",
      description:
        '\u003cp\u003eHere is my new startup, electron pentesting as a service. The electron apps we audit are not hackable try breaking our own app. If you were able to hack it somehow, contact admin with your room id. \u003c/p\u003e\u003cp\u003e Download the app here: \u003c/p\u003e\u003cp\u003e\u003ca href="https://bsidesahm-web-files-blah-thisishash1234.s3.us-east-2.amazonaws.com/neutron-app_1.0.0_amd64.deb"\u003eLinux\u003c/a\u003e, \u003ca href="https://bsidesahm-web-files-blah-thisishash1234.s3.us-east-2.amazonaws.com/Neutron+Setup+1.0.0.exe"\u003eWindows\u003c/a\u003e, \u003ca href="https://bsidesahm-web-files-blah-thisishash1234.s3.us-east-2.amazonaws.com/Neutron-1.0.0.dmg"\u003eMacOS \u003c/a\u003e\n',
      author: "s1r1us",
      score: 500,
      tags: [],
      attachments: [
        {
          name: "neutron_94d0c3627969d45780d17944188ce17f.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/08153866-78fc-4f64-b3de-9a3bc1c849b9/neutron_94d0c3627969d45780d17944188ce17f.tar.gz",
        },
      ],
      solved_by: [],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 1356482943,
      name: "intersection",
      flag: "",
      category: "reversing",
      description:
        "\u003cp\u003eSimple flag checker for warmup! No strip and no obfuscation! Only main function!\u003c/p\u003e\n",
      author: "ptr-yudai",
      score: 226,
      tags: [],
      attachments: [
        {
          name: "intersection_67c4bb7b7402de6c27b1e5221e2bded3.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/a9b90fed-5d21-4abe-adc1-6a8bd18fe9c6/intersection_67c4bb7b7402de6c27b1e5221e2bded3.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636253446,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636234516,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636224643,
          team_id: 171428256,
          team_name: "SiBears",
        },
        {
          solved_at: 1636222259,
          team_id: 1976801730,
          team_name: "DLC",
        },
        {
          solved_at: 1636219697,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636213798,
          team_id: 4055297429,
          team_name: "CyberSlacker",
        },
        {
          solved_at: 1636211453,
          team_id: 1726847822,
          team_name: "Bruh",
        },
        {
          solved_at: 1636209871,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636209085,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636202549,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636186345,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636181098,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636178161,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636177467,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636175399,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636175246,
          team_id: 3338287823,
          team_name: "n03tAck",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 1806181470,
      name: "bettercatalog",
      flag: "",
      category: "web",
      description:
        '\u003cp\u003eThe catalog by bluepichu is so vulnerable, I made a secure version check \u003ca href="https://bettercatalog.xyz/"\u003ethis\u003c/a\u003e out, Please run your tests locally using docker provided \u003c/p\u003e\u003cbr\u003e\u003cp\u003eNote: The flag format for this challenge is NEKO{this_is_not_flag}\u003c/p\u003e\n',
      author: "s1r1us",
      score: 500,
      tags: [],
      attachments: [
        {
          name: "bettercatalog_f4f479d06cb522dd565634479bb0dac2.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/e9dd9cd8-b5a7-4ce9-bca1-c82e63fddcaf/bettercatalog_f4f479d06cb522dd565634479bb0dac2.tar.gz",
        },
      ],
      solved_by: [],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 1808665617,
      name: "entrance",
      flag: "",
      category: "web",
      description:
        '\u003cp\u003eWelcome to the \u003ca href="http://web.bsidesahmedabad.in:8001/" target="_blank"\u003eEntrance\u003c/a\u003e!\u003c/p\u003e\n',
      author: "ptr-yudai",
      score: 104,
      tags: ["warmup"],
      attachments: [
        {
          name: "entrance_e9f2dc6fa219b298bba1e337408309b7.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/e2fdd2e8-b972-4cca-a15f-b7d78af9fe32/entrance_e9f2dc6fa219b298bba1e337408309b7.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636252897,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636244889,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636235773,
          team_id: 3751957875,
          team_name: "tachy0ne",
        },
        {
          solved_at: 1636233752,
          team_id: 157802858,
          team_name: "2fast",
        },
        {
          solved_at: 1636233592,
          team_id: 3632724317,
          team_name: "MonkOnMars",
        },
        {
          solved_at: 1636229387,
          team_id: 3966291763,
          team_name: "The Imperium",
        },
        {
          solved_at: 1636229380,
          team_id: 384684839,
          team_name: "me_alone",
        },
        {
          solved_at: 1636227594,
          team_id: 1976801730,
          team_name: "DLC",
        },
        {
          solved_at: 1636227289,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636220521,
          team_id: 3772775219,
          team_name: "TryAgainDz",
        },
        {
          solved_at: 1636220114,
          team_id: 3477465534,
          team_name: "AvenaQuaker",
        },
        {
          solved_at: 1636217990,
          team_id: 251258744,
          team_name: "M1h4n1k",
        },
        {
          solved_at: 1636217871,
          team_id: 1725631347,
          team_name: "azki",
        },
        {
          solved_at: 1636217381,
          team_id: 2924359168,
          team_name: "Slonser",
        },
        {
          solved_at: 1636216666,
          team_id: 2346546474,
          team_name: "smol.ppt",
        },
        {
          solved_at: 1636216140,
          team_id: 4120948831,
          team_name: "helloworlds",
        },
        {
          solved_at: 1636215960,
          team_id: 2178523733,
          team_name: "puchak",
        },
        {
          solved_at: 1636215715,
          team_id: 3471078127,
          team_name: "fl4gs4b33rs",
        },
        {
          solved_at: 1636214452,
          team_id: 2059953111,
          team_name: "NIS",
        },
        {
          solved_at: 1636213728,
          team_id: 4074013277,
          team_name: "CodeNames",
        },
        {
          solved_at: 1636213190,
          team_id: 1347313875,
          team_name: "Ksa",
        },
        {
          solved_at: 1636212381,
          team_id: 1739062591,
          team_name: "N4N",
        },
        {
          solved_at: 1636211844,
          team_id: 2973741978,
          team_name: "xof5566",
        },
        {
          solved_at: 1636211586,
          team_id: 171428256,
          team_name: "SiBears",
        },
        {
          solved_at: 1636209737,
          team_id: 3178544619,
          team_name: "dtl",
        },
        {
          solved_at: 1636209211,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636208622,
          team_id: 1398520620,
          team_name: "TEAM0001",
        },
        {
          solved_at: 1636208400,
          team_id: 4055297429,
          team_name: "CyberSlacker",
        },
        {
          solved_at: 1636206726,
          team_id: 2093620421,
          team_name: "Zzer0",
        },
        {
          solved_at: 1636205770,
          team_id: 4112913692,
          team_name: "A5537",
        },
        {
          solved_at: 1636204589,
          team_id: 113229465,
          team_name: "Capture the Swag",
        },
        {
          solved_at: 1636203654,
          team_id: 3453710168,
          team_name: "aboba",
        },
        {
          solved_at: 1636203038,
          team_id: 983991622,
          team_name: "JustMe",
        },
        {
          solved_at: 1636202479,
          team_id: 2162170792,
          team_name: "The Flat Network Society",
        },
        {
          solved_at: 1636202051,
          team_id: 867055920,
          team_name: "OurHeung",
        },
        {
          solved_at: 1636198193,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636197682,
          team_id: 1180065274,
          team_name: "5upernova",
        },
        {
          solved_at: 1636197441,
          team_id: 3039301393,
          team_name: "ShroomZ",
        },
        {
          solved_at: 1636197267,
          team_id: 2134836658,
          team_name: "🍣🐱‍🚀🍣",
        },
        {
          solved_at: 1636195353,
          team_id: 1921236215,
          team_name: "UECTF",
        },
        {
          solved_at: 1636194999,
          team_id: 2586139551,
          team_name: "H25",
        },
        {
          solved_at: 1636193349,
          team_id: 3499120459,
          team_name: "Jump2Flag",
        },
        {
          solved_at: 1636193318,
          team_id: 3430926056,
          team_name: "mr_robot",
        },
        {
          solved_at: 1636191793,
          team_id: 186957549,
          team_name: "FEB",
        },
        {
          solved_at: 1636190148,
          team_id: 2813555526,
          team_name: "zr0pts",
        },
        {
          solved_at: 1636189804,
          team_id: 344174345,
          team_name: "uetctf",
        },
        {
          solved_at: 1636188525,
          team_id: 345769827,
          team_name: "i",
        },
        {
          solved_at: 1636188174,
          team_id: 3250583928,
          team_name: "SecCoder",
        },
        {
          solved_at: 1636187387,
          team_id: 3621645696,
          team_name: "traP",
        },
        {
          solved_at: 1636187248,
          team_id: 885380306,
          team_name: "UnderDog",
        },
        {
          solved_at: 1636186793,
          team_id: 4194126813,
          team_name: "ninetynine",
        },
        {
          solved_at: 1636186535,
          team_id: 1403295035,
          team_name: "Wani Hackase",
        },
        {
          solved_at: 1636186338,
          team_id: 3896971770,
          team_name: "byc_404",
        },
        {
          solved_at: 1636183965,
          team_id: 819208901,
          team_name: "ethan",
        },
        {
          solved_at: 1636183957,
          team_id: 259468897,
          team_name: "n00b3r",
        },
        {
          solved_at: 1636182934,
          team_id: 2008624396,
          team_name: "Underrated",
        },
        {
          solved_at: 1636180690,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636180233,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636180066,
          team_id: 3530739591,
          team_name: "BIT CRIMINALS",
        },
        {
          solved_at: 1636179473,
          team_id: 3047485153,
          team_name: "Nupakachi",
        },
        {
          solved_at: 1636178713,
          team_id: 1045081418,
          team_name: "higota",
        },
        {
          solved_at: 1636178634,
          team_id: 3882204788,
          team_name: "tranvantrui097@gmail.com",
        },
        {
          solved_at: 1636178526,
          team_id: 3319446585,
          team_name: "guetsec",
        },
        {
          solved_at: 1636178505,
          team_id: 882611146,
          team_name: "0x62EEN7EA",
        },
        {
          solved_at: 1636178426,
          team_id: 3346668497,
          team_name: "K1mCh1W@rr10r",
        },
        {
          solved_at: 1636177054,
          team_id: 972005752,
          team_name: "Hacking Help",
        },
        {
          solved_at: 1636176869,
          team_id: 1788285842,
          team_name: "onlyWeb",
        },
        {
          solved_at: 1636176042,
          team_id: 3146712183,
          team_name: "Ph0en1x",
        },
        {
          solved_at: 1636174688,
          team_id: 3160756113,
          team_name: "Phantom",
        },
        {
          solved_at: 1636174535,
          team_id: 3151208928,
          team_name: "Cypher",
        },
        {
          solved_at: 1636174407,
          team_id: 2759966904,
          team_name: "Weak But Leet",
        },
        {
          solved_at: 1636174157,
          team_id: 2355642345,
          team_name: "tester",
        },
        {
          solved_at: 1636174042,
          team_id: 3192549727,
          team_name: "BlackBird",
        },
        {
          solved_at: 1636173385,
          team_id: 1068142739,
          team_name: "pain",
        },
        {
          solved_at: 1636173260,
          team_id: 660195450,
          team_name: "miku",
        },
        {
          solved_at: 1636173126,
          team_id: 3338287823,
          team_name: "n03tAck",
        },
        {
          solved_at: 1636172848,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636172472,
          team_id: 1366395221,
          team_name: "satgate",
        },
        {
          solved_at: 1636172369,
          team_id: 2269318528,
          team_name: "visemo",
        },
        {
          solved_at: 1636171303,
          team_id: 2395038263,
          team_name: "Red Knights",
        },
        {
          solved_at: 1636170640,
          team_id: 3272554389,
          team_name: "efiens",
        },
        {
          solved_at: 1636170468,
          team_id: 2336640453,
          team_name: "PIS",
        },
        {
          solved_at: 1636170390,
          team_id: 622903063,
          team_name: "KUDoS",
        },
        {
          solved_at: 1636170072,
          team_id: 2096971403,
          team_name: "\\/(54",
        },
        {
          solved_at: 1636170006,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636169500,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636169327,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636169199,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636169065,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636168627,
          team_id: 1939124177,
          team_name: "SaturnX",
        },
        {
          solved_at: 1636168581,
          team_id: 1145633420,
          team_name: "IrisSec",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 1864208894,
      name: "SSSS.RNG",
      flag: "",
      category: "crypto",
      description: "SSSS.GRIDMAN -\u003e SSSS.DYNAZEON -\u003e SSSS.RNG",
      author: "theoremoon",
      score: 226,
      tags: [],
      attachments: [
        {
          name: "ssss_rng_4d5b9c979591ea2cd3446f9b43d33a61.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/6224b994-a534-468e-83c0-82e2b86103e4/ssss_rng_4d5b9c979591ea2cd3446f9b43d33a61.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636244471,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636243476,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636238214,
          team_id: 1726847822,
          team_name: "Bruh",
        },
        {
          solved_at: 1636229628,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636215006,
          team_id: 873809443,
          team_name: "wiwam845",
        },
        {
          solved_at: 1636213914,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636207431,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636204886,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636195820,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636193603,
          team_id: 3504564412,
          team_name: "kasiatutej",
        },
        {
          solved_at: 1636189725,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636187374,
          team_id: 1403295035,
          team_name: "Wani Hackase",
        },
        {
          solved_at: 1636177798,
          team_id: 4086347094,
          team_name: "y011d4",
        },
        {
          solved_at: 1636176466,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636173670,
          team_id: 3467100769,
          team_name: "Utaha",
        },
        {
          solved_at: 1636170249,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 1869996516,
      name: "ECC-RSA 2",
      flag: "",
      category: "crypto",
      description: "let's take a random walk, blindling everything in our way",
      author: "theoremoon, S3v3ru5",
      score: 304,
      tags: [],
      attachments: [
        {
          name: "ecc_rsa_2_51653ef36d1c5ccba66b669d1dbbbeab.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/c03a904e-33c6-47fb-92d3-cfc3fb21b700/ecc_rsa_2_51653ef36d1c5ccba66b669d1dbbbeab.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636229361,
          team_id: 3467100769,
          team_name: "Utaha",
        },
        {
          solved_at: 1636213061,
          team_id: 3504564412,
          team_name: "kasiatutej",
        },
        {
          solved_at: 1636205325,
          team_id: 983991622,
          team_name: "JustMe",
        },
        {
          solved_at: 1636195003,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636192931,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636189403,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636183299,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636181914,
          team_id: 4086347094,
          team_name: "y011d4",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 1911909652,
      name: "Survey",
      flag: "",
      category: "survey",
      description:
        '\u003cp\u003e Please give us your feedback \u003ca href="https://forms.gle/d3pRNUuQC75kMhbR9" target="_blank"\u003ehere\u003c/a\u003e. \u003c/p\u003e\n',
      author: "zer0pts",
      score: 91,
      tags: [],
      attachments: [],
      solved_by: [
        {
          solved_at: 1636253822,
          team_id: 69620785,
          team_name: "deepakp9757",
        },
        {
          solved_at: 1636252735,
          team_id: 1459020183,
          team_name: "BOISQWERTY",
        },
        {
          solved_at: 1636252573,
          team_id: 2593291415,
          team_name: "m1z0r3",
        },
        {
          solved_at: 1636252441,
          team_id: 983991622,
          team_name: "JustMe",
        },
        {
          solved_at: 1636250130,
          team_id: 4086347094,
          team_name: "y011d4",
        },
        {
          solved_at: 1636249918,
          team_id: 2665408067,
          team_name: "stankc",
        },
        {
          solved_at: 1636247262,
          team_id: 1852641254,
          team_name: "Federal_Bonk_Investigations",
        },
        {
          solved_at: 1636245057,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636242392,
          team_id: 1011202775,
          team_name: "meltdown",
        },
        {
          solved_at: 1636240601,
          team_id: 3242857836,
          team_name: "hak1mlukha",
        },
        {
          solved_at: 1636240576,
          team_id: 1398943354,
          team_name: "HB_SK",
        },
        {
          solved_at: 1636235786,
          team_id: 2096083613,
          team_name: "PatagoniaHack",
        },
        {
          solved_at: 1636234983,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636233811,
          team_id: 3819635610,
          team_name: "CYCLONE",
        },
        {
          solved_at: 1636230622,
          team_id: 2415564418,
          team_name: "tyulpan",
        },
        {
          solved_at: 1636229221,
          team_id: 2506986509,
          team_name: "0x0a",
        },
        {
          solved_at: 1636228948,
          team_id: 1925081894,
          team_name: "secta",
        },
        {
          solved_at: 1636228271,
          team_id: 921602238,
          team_name: "Infinite loop",
        },
        {
          solved_at: 1636227047,
          team_id: 2096971403,
          team_name: "\\/(54",
        },
        {
          solved_at: 1636226784,
          team_id: 882611146,
          team_name: "0x62EEN7EA",
        },
        {
          solved_at: 1636226345,
          team_id: 2659660501,
          team_name: "Congo",
        },
        {
          solved_at: 1636225518,
          team_id: 303884082,
          team_name: "Xephyrus",
        },
        {
          solved_at: 1636224461,
          team_id: 2344151863,
          team_name: "joyuriz",
        },
        {
          solved_at: 1636224233,
          team_id: 3777984699,
          team_name: "BackMoon",
        },
        {
          solved_at: 1636222949,
          team_id: 2956914945,
          team_name: "GUN",
        },
        {
          solved_at: 1636220651,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636219470,
          team_id: 3168754783,
          team_name: "BawaH98",
        },
        {
          solved_at: 1636218118,
          team_id: 1725631347,
          team_name: "azki",
        },
        {
          solved_at: 1636216225,
          team_id: 3471078127,
          team_name: "fl4gs4b33rs",
        },
        {
          solved_at: 1636216167,
          team_id: 1078066185,
          team_name: "Slab Allocator",
        },
        {
          solved_at: 1636215344,
          team_id: 2973741978,
          team_name: "xof5566",
        },
        {
          solved_at: 1636214505,
          team_id: 3191773525,
          team_name: "CyberSpace",
        },
        {
          solved_at: 1636214282,
          team_id: 1886926175,
          team_name: "TCTN",
        },
        {
          solved_at: 1636214032,
          team_id: 3902253471,
          team_name: "vikrantbatra05",
        },
        {
          solved_at: 1636213912,
          team_id: 3246974543,
          team_name: "Wayf4r3rs",
        },
        {
          solved_at: 1636213717,
          team_id: 1601893875,
          team_name: "Reloaded",
        },
        {
          solved_at: 1636213339,
          team_id: 3504564412,
          team_name: "kasiatutej",
        },
        {
          solved_at: 1636213154,
          team_id: 3909385811,
          team_name: "Asmodeus",
        },
        {
          solved_at: 1636212953,
          team_id: 1656670824,
          team_name: "blackend",
        },
        {
          solved_at: 1636212654,
          team_id: 2960658274,
          team_name: "blockchain",
        },
        {
          solved_at: 1636211337,
          team_id: 1974864609,
          team_name: "nexus",
        },
        {
          solved_at: 1636210910,
          team_id: 4074013277,
          team_name: "CodeNames",
        },
        {
          solved_at: 1636210651,
          team_id: 2346546474,
          team_name: "smol.ppt",
        },
        {
          solved_at: 1636210549,
          team_id: 3178544619,
          team_name: "dtl",
        },
        {
          solved_at: 1636210217,
          team_id: 4179973424,
          team_name: "105",
        },
        {
          solved_at: 1636209999,
          team_id: 3082095667,
          team_name: "NewLine",
        },
        {
          solved_at: 1636209856,
          team_id: 139287741,
          team_name: "Cyber Ghosts",
        },
        {
          solved_at: 1636209363,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636208535,
          team_id: 1359305130,
          team_name: "Knight Squad",
        },
        {
          solved_at: 1636208504,
          team_id: 3059958433,
          team_name: "/upb/hack",
        },
        {
          solved_at: 1636208138,
          team_id: 908442783,
          team_name: "Esoteric",
        },
        {
          solved_at: 1636207840,
          team_id: 4055297429,
          team_name: "CyberSlacker",
        },
        {
          solved_at: 1636207557,
          team_id: 3966291763,
          team_name: "The Imperium",
        },
        {
          solved_at: 1636207502,
          team_id: 3467100769,
          team_name: "Utaha",
        },
        {
          solved_at: 1636207261,
          team_id: 3872718519,
          team_name: "TamilCTF",
        },
        {
          solved_at: 1636207079,
          team_id: 3220933017,
          team_name: "H@ck3r9!rl",
        },
        {
          solved_at: 1636205919,
          team_id: 3499120459,
          team_name: "Jump2Flag",
        },
        {
          solved_at: 1636205391,
          team_id: 2059953111,
          team_name: "NIS",
        },
        {
          solved_at: 1636204663,
          team_id: 113229465,
          team_name: "Capture the Swag",
        },
        {
          solved_at: 1636204426,
          team_id: 1112195614,
          team_name: "noraneco",
        },
        {
          solved_at: 1636204372,
          team_id: 867055920,
          team_name: "OurHeung",
        },
        {
          solved_at: 1636204219,
          team_id: 1548936822,
          team_name: "ri5e",
        },
        {
          solved_at: 1636203707,
          team_id: 3210318901,
          team_name: "h4xt3r_0ffic4l",
        },
        {
          solved_at: 1636203418,
          team_id: 259468897,
          team_name: "n00b3r",
        },
        {
          solved_at: 1636203196,
          team_id: 1739647002,
          team_name: "Hunter’s Fury",
        },
        {
          solved_at: 1636202425,
          team_id: 507445937,
          team_name: "Exodus",
        },
        {
          solved_at: 1636201868,
          team_id: 2665403067,
          team_name: "N0000B",
        },
        {
          solved_at: 1636201636,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636201368,
          team_id: 2093620421,
          team_name: "Zzer0",
        },
        {
          solved_at: 1636201331,
          team_id: 171428256,
          team_name: "SiBears",
        },
        {
          solved_at: 1636200954,
          team_id: 622903063,
          team_name: "KUDoS",
        },
        {
          solved_at: 1636200929,
          team_id: 3166241054,
          team_name: "Shreyansh0x01",
        },
        {
          solved_at: 1636200484,
          team_id: 1939124177,
          team_name: "SaturnX",
        },
        {
          solved_at: 1636199602,
          team_id: 853626162,
          team_name: "Flaggermeister",
        },
        {
          solved_at: 1636199598,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636199367,
          team_id: 3869978104,
          team_name: "0x9747",
        },
        {
          solved_at: 1636199224,
          team_id: 786119574,
          team_name: "MTMzN25vb2Jz",
        },
        {
          solved_at: 1636199092,
          team_id: 807108695,
          team_name: "xSpark",
        },
        {
          solved_at: 1636198426,
          team_id: 2193738324,
          team_name: "D4rkM0d3",
        },
        {
          solved_at: 1636198194,
          team_id: 265674100,
          team_name: "0xRoot",
        },
        {
          solved_at: 1636197924,
          team_id: 4168588043,
          team_name: "1nf1n1ty",
        },
        {
          solved_at: 1636197779,
          team_id: 1180065274,
          team_name: "5upernova",
        },
        {
          solved_at: 1636197404,
          team_id: 1663131742,
          team_name: "Tipiak",
        },
        {
          solved_at: 1636197240,
          team_id: 2759966904,
          team_name: "Weak But Leet",
        },
        {
          solved_at: 1636196996,
          team_id: 1346778000,
          team_name: "ducks0ci3ty",
        },
        {
          solved_at: 1636196866,
          team_id: 972005752,
          team_name: "Hacking Help",
        },
        {
          solved_at: 1636196854,
          team_id: 174986101,
          team_name: "m1t0",
        },
        {
          solved_at: 1636196749,
          team_id: 1387280916,
          team_name: "cyberbangla",
        },
        {
          solved_at: 1636196488,
          team_id: 1366395221,
          team_name: "satgate",
        },
        {
          solved_at: 1636196465,
          team_id: 973272136,
          team_name: "[418]TeapotTeam",
        },
        {
          solved_at: 1636196323,
          team_id: 3338287823,
          team_name: "n03tAck",
        },
        {
          solved_at: 1636196320,
          team_id: 2256720649,
          team_name: "Learners_",
        },
        {
          solved_at: 1636195628,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636195607,
          team_id: 2586139551,
          team_name: "H25",
        },
        {
          solved_at: 1636195179,
          team_id: 2737646122,
          team_name: "SubUrban",
        },
        {
          solved_at: 1636194820,
          team_id: 3192549727,
          team_name: "BlackBird",
        },
        {
          solved_at: 1636194346,
          team_id: 1921236215,
          team_name: "UECTF",
        },
        {
          solved_at: 1636194331,
          team_id: 1359990231,
          team_name: "AccesDenieD",
        },
        {
          solved_at: 1636193810,
          team_id: 3738361639,
          team_name: "JRP",
        },
        {
          solved_at: 1636193757,
          team_id: 1048880857,
          team_name: "PeakyBlinders",
        },
        {
          solved_at: 1636193630,
          team_id: 3854859085,
          team_name: "OnlyFeet",
        },
        {
          solved_at: 1636193353,
          team_id: 3085754517,
          team_name: "TechLovers",
        },
        {
          solved_at: 1636193020,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636192930,
          team_id: 36426655,
          team_name: "T3N4CI0US",
        },
        {
          solved_at: 1636192825,
          team_id: 2749407841,
          team_name: "Parakram",
        },
        {
          solved_at: 1636192604,
          team_id: 345769827,
          team_name: "i",
        },
        {
          solved_at: 1636192486,
          team_id: 3374100332,
          team_name: "potatoes",
        },
        {
          solved_at: 1636192233,
          team_id: 3151208928,
          team_name: "Cypher",
        },
        {
          solved_at: 1636192130,
          team_id: 1829063269,
          team_name: "I'm a teapot",
        },
        {
          solved_at: 1636192115,
          team_id: 2457235057,
          team_name: "/bin/chicken",
        },
        {
          solved_at: 1636192042,
          team_id: 332378111,
          team_name: "Moriya101",
        },
        {
          solved_at: 1636192025,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636191831,
          team_id: 2395038263,
          team_name: "Red Knights",
        },
        {
          solved_at: 1636191681,
          team_id: 4003734013,
          team_name: "aj_hack",
        },
        {
          solved_at: 1636191334,
          team_id: 3146712183,
          team_name: "Ph0en1x",
        },
        {
          solved_at: 1636191021,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636190864,
          team_id: 1403295035,
          team_name: "Wani Hackase",
        },
        {
          solved_at: 1636190592,
          team_id: 3010620646,
          team_name: "BitBuster",
        },
        {
          solved_at: 1636190260,
          team_id: 1739062591,
          team_name: "N4N",
        },
        {
          solved_at: 1636190133,
          team_id: 2751196234,
          team_name: "TeamMahi",
        },
        {
          solved_at: 1636189845,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636189740,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636189726,
          team_id: 3250583928,
          team_name: "SecCoder",
        },
        {
          solved_at: 1636189576,
          team_id: 2284462457,
          team_name: "3331",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: true,
    },
    {
      id: 2057125610,
      name: "dlppp",
      flag: "",
      category: "crypto",
      description: "\u003cp\u003eCan you solve DLP?\u003c/p\u003e\n",
      author: "ptr-yudai",
      score: 151,
      tags: ["warmup"],
      attachments: [
        {
          name: "dlppp_49a79c1a1a8807cb54525f8531f9700b.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/87511139-56d9-4857-b2fa-da7cf75f9955/dlppp_49a79c1a1a8807cb54525f8531f9700b.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636251644,
          team_id: 1180065274,
          team_name: "5upernova",
        },
        {
          solved_at: 1636244782,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636235379,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636225998,
          team_id: 3382483827,
          team_name: "Yellow",
        },
        {
          solved_at: 1636214986,
          team_id: 873809443,
          team_name: "wiwam845",
        },
        {
          solved_at: 1636212967,
          team_id: 1726847822,
          team_name: "Bruh",
        },
        {
          solved_at: 1636212483,
          team_id: 2534886826,
          team_name: "saluu",
        },
        {
          solved_at: 1636211531,
          team_id: 3178544619,
          team_name: "dtl",
        },
        {
          solved_at: 1636208601,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636207935,
          team_id: 2415564418,
          team_name: "tyulpan",
        },
        {
          solved_at: 1636207001,
          team_id: 882611146,
          team_name: "0x62EEN7EA",
        },
        {
          solved_at: 1636203499,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636201338,
          team_id: 2395038263,
          team_name: "Red Knights",
        },
        {
          solved_at: 1636198723,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636195138,
          team_id: 3505750332,
          team_name: "Shikataganai",
        },
        {
          solved_at: 1636192399,
          team_id: 3146712183,
          team_name: "Ph0en1x",
        },
        {
          solved_at: 1636192199,
          team_id: 1739062591,
          team_name: "N4N",
        },
        {
          solved_at: 1636189839,
          team_id: 4055297429,
          team_name: "CyberSlacker",
        },
        {
          solved_at: 1636188260,
          team_id: 705094065,
          team_name: "pcspcs@21cn.com",
        },
        {
          solved_at: 1636186654,
          team_id: 3504564412,
          team_name: "kasiatutej",
        },
        {
          solved_at: 1636184947,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636181597,
          team_id: 3621645696,
          team_name: "traP",
        },
        {
          solved_at: 1636181523,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636179056,
          team_id: 983991622,
          team_name: "JustMe",
        },
        {
          solved_at: 1636178774,
          team_id: 1068142739,
          team_name: "pain",
        },
        {
          solved_at: 1636177775,
          team_id: 867055920,
          team_name: "OurHeung",
        },
        {
          solved_at: 1636177576,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636175744,
          team_id: 4168588043,
          team_name: "1nf1n1ty",
        },
        {
          solved_at: 1636174786,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636174427,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636173809,
          team_id: 1403295035,
          team_name: "Wani Hackase",
        },
        {
          solved_at: 1636172602,
          team_id: 1976801730,
          team_name: "DLC",
        },
        {
          solved_at: 1636171340,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636170186,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636168956,
          team_id: 3467100769,
          team_name: "Utaha",
        },
        {
          solved_at: 1636168747,
          team_id: 4086347094,
          team_name: "y011d4",
        },
        {
          solved_at: 1636168718,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636168647,
          team_id: 2593291415,
          team_name: "m1z0r3",
        },
        {
          solved_at: 1636167927,
          team_id: 2028804799,
          team_name: "N30Z30N",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 2371015041,
      name: "King's License",
      flag: "",
      category: "reversing",
      description:
        "\u003cp\u003eIn 20XX, 99% of humanity purchased the license of this software, which means there should be more than 9 billion license keys. It's easy for you to crack one of them, right?\u003c/p\u003e \u003ccode\u003enc rev.bsidesahmedabad.in 10777\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 304,
      tags: [],
      attachments: [
        {
          name: "kings_license_ce089f16671f75a267ae81bd10b0ef6f.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/9d424661-aa6a-49ef-b786-491420696f70/kings_license_ce089f16671f75a267ae81bd10b0ef6f.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636245429,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636231072,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636228152,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636225126,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636213113,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636184710,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636182391,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636181529,
          team_id: 3210500832,
          team_name: "idek",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 2415905059,
      name: "pugpug",
      flag: "",
      category: "web",
      description:
        '\u003cp\u003e\u003ca href="http://pugpug.web.ctf.bsidesahmedabad.in:5000/"\u003eHere\u003c/a\u003e is the beta access to a interactive learning tool of my course \u003c/p\u003e\n',
      author: "s1r1us",
      score: 340,
      tags: [],
      attachments: [
        {
          name: "pugpug_a1c880b5c4139194e73df9b9c01adef1.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/e570f9f2-5c28-4419-898f-838b21ead535/pugpug_a1c880b5c4139194e73df9b9c01adef1.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636236515,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636218721,
          team_id: 2162170792,
          team_name: "The Flat Network Society",
        },
        {
          solved_at: 1636212643,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636210599,
          team_id: 2973741978,
          team_name: "xof5566",
        },
        {
          solved_at: 1636208293,
          team_id: 3896971770,
          team_name: "byc_404",
        },
        {
          solved_at: 1636193561,
          team_id: 2869414462,
          team_name: "padoru padoru!!!!",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 2743599748,
      name: "shared knote",
      flag: "",
      category: "pwn",
      description:
        "\u003cp\u003eThings are preserved as long as someone uses it. So as notes.\u003c/p\u003e \u003ccode\u003enc pwn3.bsidesahmedabad.in 9011\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 500,
      tags: [],
      attachments: [
        {
          name: "shared_knote_a5480561903a1f8b84e258e02d8e87e6.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/abb68313-1e1a-428c-9095-b9a798de0ead/shared_knote_a5480561903a1f8b84e258e02d8e87e6.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636226111,
          team_id: 921602238,
          team_name: "Infinite loop",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3052303659,
      name: "Welcome",
      flag: "",
      category: "welcome",
      description:
        '\u003cp\u003eWelcome to BSides Ahmedabad CTF 2021. All announcement, support, and the welcome flag are available in \u003ca href="https://discord.gg/hds59dnDY7" target="_blank"\u003eour Discord\u003c/a\u003e.\n',
      author: "zer0pts",
      score: 66,
      tags: [],
      attachments: [],
      solved_by: [
        {
          solved_at: 1636253969,
          team_id: 3505750332,
          team_name: "Shikataganai",
        },
        {
          solved_at: 1636253172,
          team_id: 3161994786,
          team_name: "chin_ctf",
        },
        {
          solved_at: 1636253130,
          team_id: 69620785,
          team_name: "deepakp9757",
        },
        {
          solved_at: 1636249829,
          team_id: 2665408067,
          team_name: "stankc",
        },
        {
          solved_at: 1636242023,
          team_id: 1011202775,
          team_name: "meltdown",
        },
        {
          solved_at: 1636240465,
          team_id: 3242857836,
          team_name: "hak1mlukha",
        },
        {
          solved_at: 1636240075,
          team_id: 1398943354,
          team_name: "HB_SK",
        },
        {
          solved_at: 1636238091,
          team_id: 1962296259,
          team_name: "1337Sec",
        },
        {
          solved_at: 1636232959,
          team_id: 2096083613,
          team_name: "PatagoniaHack",
        },
        {
          solved_at: 1636231487,
          team_id: 985840763,
          team_name: "T4ng0_t34m",
        },
        {
          solved_at: 1636231040,
          team_id: 3447763286,
          team_name: "Yeonmi/\\_/\\- Solist",
        },
        {
          solved_at: 1636228036,
          team_id: 3632724317,
          team_name: "MonkOnMars",
        },
        {
          solved_at: 1636227796,
          team_id: 921602238,
          team_name: "Infinite loop",
        },
        {
          solved_at: 1636226349,
          team_id: 3382483827,
          team_name: "Yellow",
        },
        {
          solved_at: 1636225643,
          team_id: 303884082,
          team_name: "Xephyrus",
        },
        {
          solved_at: 1636224547,
          team_id: 3338147546,
          team_name: '\u003cscript\u003ealert("Ping")\u003c/script\u003e',
        },
        {
          solved_at: 1636222869,
          team_id: 3959905709,
          team_name: "mravtechinfo",
        },
        {
          solved_at: 1636221725,
          team_id: 1347313875,
          team_name: "Ksa",
        },
        {
          solved_at: 1636221143,
          team_id: 4192674556,
          team_name: "χor",
        },
        {
          solved_at: 1636220947,
          team_id: 3777984699,
          team_name: "BackMoon",
        },
        {
          solved_at: 1636220873,
          team_id: 425918709,
          team_name: "TQI",
        },
        {
          solved_at: 1636220584,
          team_id: 13852655,
          team_name: "RandomTeam",
        },
        {
          solved_at: 1636220166,
          team_id: 3456005096,
          team_name: "letmein",
        },
        {
          solved_at: 1636218549,
          team_id: 2227840579,
          team_name: "karmic-folks",
        },
        {
          solved_at: 1636217689,
          team_id: 1347675455,
          team_name: "randoms",
        },
        {
          solved_at: 1636217415,
          team_id: 1078066185,
          team_name: "Slab Allocator",
        },
        {
          solved_at: 1636217177,
          team_id: 1499378842,
          team_name: "gruf",
        },
        {
          solved_at: 1636216188,
          team_id: 1673786134,
          team_name: "whateverittakes",
        },
        {
          solved_at: 1636215436,
          team_id: 3998456263,
          team_name: "team_darkLord",
        },
        {
          solved_at: 1636215307,
          team_id: 2336387157,
          team_name: "hambone",
        },
        {
          solved_at: 1636215249,
          team_id: 2973741978,
          team_name: "xof5566",
        },
        {
          solved_at: 1636214530,
          team_id: 3191773525,
          team_name: "CyberSpace",
        },
        {
          solved_at: 1636214276,
          team_id: 2798646439,
          team_name: "Soona Paana",
        },
        {
          solved_at: 1636213824,
          team_id: 3902253471,
          team_name: "vikrantbatra05",
        },
        {
          solved_at: 1636213123,
          team_id: 1656670824,
          team_name: "blackend",
        },
        {
          solved_at: 1636212819,
          team_id: 3909385811,
          team_name: "Asmodeus",
        },
        {
          solved_at: 1636211528,
          team_id: 3256157244,
          team_name: "UIT.W3",
        },
        {
          solved_at: 1636211321,
          team_id: 2049110878,
          team_name: "HackInSolo",
        },
        {
          solved_at: 1636210585,
          team_id: 2346546474,
          team_name: "smol.ppt",
        },
        {
          solved_at: 1636210252,
          team_id: 3178544619,
          team_name: "dtl",
        },
        {
          solved_at: 1636210087,
          team_id: 4179973424,
          team_name: "105",
        },
        {
          solved_at: 1636209872,
          team_id: 1974864609,
          team_name: "nexus",
        },
        {
          solved_at: 1636209794,
          team_id: 4074013277,
          team_name: "CodeNames",
        },
        {
          solved_at: 1636209692,
          team_id: 214878015,
          team_name: "I5E",
        },
        {
          solved_at: 1636209566,
          team_id: 578032760,
          team_name: "_N00b3R__",
        },
        {
          solved_at: 1636209488,
          team_id: 3783969092,
          team_name: "lulzash",
        },
        {
          solved_at: 1636209328,
          team_id: 139287741,
          team_name: "Cyber Ghosts",
        },
        {
          solved_at: 1636209223,
          team_id: 3242025157,
          team_name: "datsoa",
        },
        {
          solved_at: 1636208957,
          team_id: 2008587273,
          team_name: "PenProphecy",
        },
        {
          solved_at: 1636208522,
          team_id: 3059958433,
          team_name: "/upb/hack",
        },
        {
          solved_at: 1636208089,
          team_id: 3168754783,
          team_name: "BawaH98",
        },
        {
          solved_at: 1636207545,
          team_id: 2063513816,
          team_name: "pseudorandom",
        },
        {
          solved_at: 1636207395,
          team_id: 3991741576,
          team_name: "krzysztof1222",
        },
        {
          solved_at: 1636207302,
          team_id: 3872718519,
          team_name: "TamilCTF",
        },
        {
          solved_at: 1636207110,
          team_id: 3966291763,
          team_name: "The Imperium",
        },
        {
          solved_at: 1636205994,
          team_id: 2093620421,
          team_name: "Zzer0",
        },
        {
          solved_at: 1636205502,
          team_id: 2178523733,
          team_name: "puchak",
        },
        {
          solved_at: 1636205385,
          team_id: 2415564418,
          team_name: "tyulpan",
        },
        {
          solved_at: 1636203994,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636203957,
          team_id: 3062839499,
          team_name: "LamDyoMong",
        },
        {
          solved_at: 1636203772,
          team_id: 1694837077,
          team_name: "GGoverflow",
        },
        {
          solved_at: 1636203672,
          team_id: 102638275,
          team_name: "nomnom",
        },
        {
          solved_at: 1636202810,
          team_id: 2180362545,
          team_name: "fwf",
        },
        {
          solved_at: 1636202780,
          team_id: 2665403067,
          team_name: "N0000B",
        },
        {
          solved_at: 1636202529,
          team_id: 1739647002,
          team_name: "Hunter’s Fury",
        },
        {
          solved_at: 1636202306,
          team_id: 3839360136,
          team_name: "Godzilla",
        },
        {
          solved_at: 1636201790,
          team_id: 492437162,
          team_name: "S4V4G3 H4CK3R",
        },
        {
          solved_at: 1636201456,
          team_id: 1948909126,
          team_name: "Practice",
        },
        {
          solved_at: 1636200986,
          team_id: 4110172808,
          team_name: "WNS",
        },
        {
          solved_at: 1636200816,
          team_id: 1685372857,
          team_name: "jeongwon119",
        },
        {
          solved_at: 1636200761,
          team_id: 983991622,
          team_name: "JustMe",
        },
        {
          solved_at: 1636200712,
          team_id: 3166241054,
          team_name: "Shreyansh0x01",
        },
        {
          solved_at: 1636200639,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636200379,
          team_id: 3774532032,
          team_name: "acdwas",
        },
        {
          solved_at: 1636200102,
          team_id: 3082095667,
          team_name: "NewLine",
        },
        {
          solved_at: 1636199750,
          team_id: 3787737408,
          team_name: "bluehens",
        },
        {
          solved_at: 1636199726,
          team_id: 3503783282,
          team_name: "Lazydexter",
        },
        {
          solved_at: 1636199345,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636199259,
          team_id: 853626162,
          team_name: "Flaggermeister",
        },
        {
          solved_at: 1636199121,
          team_id: 786119574,
          team_name: "MTMzN25vb2Jz",
        },
        {
          solved_at: 1636199110,
          team_id: 2968284995,
          team_name: "c0rp5",
        },
        {
          solved_at: 1636198875,
          team_id: 1393464965,
          team_name: "3H",
        },
        {
          solved_at: 1636198486,
          team_id: 2193738324,
          team_name: "D4rkM0d3",
        },
        {
          solved_at: 1636198338,
          team_id: 796116559,
          team_name: "Dvirel",
        },
        {
          solved_at: 1636198067,
          team_id: 1068142739,
          team_name: "pain",
        },
        {
          solved_at: 1636197095,
          team_id: 1720320723,
          team_name: "INDIVIUAL",
        },
        {
          solved_at: 1636196676,
          team_id: 1743832722,
          team_name: "brian kamikaze",
        },
        {
          solved_at: 1636196470,
          team_id: 2256720649,
          team_name: "Learners_",
        },
        {
          solved_at: 1636196412,
          team_id: 730860615,
          team_name: "legendkiller",
        },
        {
          solved_at: 1636196344,
          team_id: 1387280916,
          team_name: "cyberbangla",
        },
        {
          solved_at: 1636195868,
          team_id: 3499120459,
          team_name: "Jump2Flag",
        },
        {
          solved_at: 1636195685,
          team_id: 2134836658,
          team_name: "🍣🐱‍🚀🍣",
        },
        {
          solved_at: 1636195201,
          team_id: 1180065274,
          team_name: "5upernova",
        },
        {
          solved_at: 1636195201,
          team_id: 1398520620,
          team_name: "TEAM0001",
        },
        {
          solved_at: 1636195082,
          team_id: 1355594742,
          team_name: "1nf053c80y",
        },
        {
          solved_at: 1636194951,
          team_id: 1258668072,
          team_name: "s111",
        },
        {
          solved_at: 1636194642,
          team_id: 3471078127,
          team_name: "fl4gs4b33rs",
        },
        {
          solved_at: 1636194518,
          team_id: 1346778000,
          team_name: "ducks0ci3ty",
        },
        {
          solved_at: 1636193584,
          team_id: 3854859085,
          team_name: "OnlyFeet",
        },
        {
          solved_at: 1636193542,
          team_id: 1663131742,
          team_name: "Tipiak",
        },
        {
          solved_at: 1636192964,
          team_id: 908442783,
          team_name: "Esoteric",
        },
        {
          solved_at: 1636192143,
          team_id: 2457235057,
          team_name: "/bin/chicken",
        },
        {
          solved_at: 1636191916,
          team_id: 186957549,
          team_name: "FEB",
        },
        {
          solved_at: 1636191877,
          team_id: 255087058,
          team_name: "Team 1337",
        },
        {
          solved_at: 1636191792,
          team_id: 1842969155,
          team_name: "TP_101",
        },
        {
          solved_at: 1636190969,
          team_id: 2506986509,
          team_name: "0x0a",
        },
        {
          solved_at: 1636190916,
          team_id: 3374100332,
          team_name: "potatoes",
        },
        {
          solved_at: 1636190514,
          team_id: 2096971403,
          team_name: "\\/(54",
        },
        {
          solved_at: 1636190475,
          team_id: 3448020889,
          team_name: "legend",
        },
        {
          solved_at: 1636190197,
          team_id: 2956914945,
          team_name: "GUN",
        },
        {
          solved_at: 1636189961,
          team_id: 3042175664,
          team_name: "Team VENOM",
        },
        {
          solved_at: 1636189936,
          team_id: 850262999,
          team_name: "qwertyuio",
        },
        {
          solved_at: 1636189789,
          team_id: 344174345,
          team_name: "uetctf",
        },
        {
          solved_at: 1636189743,
          team_id: 1829063269,
          team_name: "I'm a teapot",
        },
        {
          solved_at: 1636189656,
          team_id: 2284462457,
          team_name: "3331",
        },
        {
          solved_at: 1636189326,
          team_id: 2527902856,
          team_name: "h4ck7u5",
        },
        {
          solved_at: 1636188109,
          team_id: 2737646122,
          team_name: "SubUrban",
        },
        {
          solved_at: 1636187965,
          team_id: 4055297429,
          team_name: "CyberSlacker",
        },
        {
          solved_at: 1636187829,
          team_id: 4203100656,
          team_name: "sicada",
        },
        {
          solved_at: 1636187713,
          team_id: 1048880857,
          team_name: "PeakyBlinders",
        },
        {
          solved_at: 1636187549,
          team_id: 265674100,
          team_name: "0xRoot",
        },
        {
          solved_at: 1636187155,
          team_id: 1925081894,
          team_name: "secta",
        },
        {
          solved_at: 1636187134,
          team_id: 2751196234,
          team_name: "TeamMahi",
        },
        {
          solved_at: 1636187010,
          team_id: 36426655,
          team_name: "T3N4CI0US",
        },
        {
          solved_at: 1636186990,
          team_id: 3227021584,
          team_name: "betterway",
        },
        {
          solved_at: 1636186856,
          team_id: 3302142500,
          team_name: "macfarlane789@googlemail.com",
        },
        {
          solved_at: 1636186372,
          team_id: 3896971770,
          team_name: "byc_404",
        },
        {
          solved_at: 1636185413,
          team_id: 171428256,
          team_name: "SiBears",
        },
        {
          solved_at: 1636185384,
          team_id: 4080756232,
          team_name: "robots.txt",
        },
        {
          solved_at: 1636185220,
          team_id: 1854906491,
          team_name: "just a team",
        },
        {
          solved_at: 1636185141,
          team_id: 1310067364,
          team_name: "sbstm",
        },
        {
          solved_at: 1636185125,
          team_id: 3504564412,
          team_name: "kasiatutej",
        },
        {
          solved_at: 1636185116,
          team_id: 2328665335,
          team_name: "The White Rose",
        },
        {
          solved_at: 1636184991,
          team_id: 680423275,
          team_name: "square_r00t",
        },
        {
          solved_at: 1636184488,
          team_id: 2806140004,
          team_name: "INDIA",
        },
        {
          solved_at: 1636184225,
          team_id: 3533288391,
          team_name: "priyansh",
        },
        {
          solved_at: 1636184124,
          team_id: 55898088,
          team_name: "Noobs",
        },
        {
          solved_at: 1636184111,
          team_id: 3430926056,
          team_name: "mr_robot",
        },
        {
          solved_at: 1636183882,
          team_id: 3819635610,
          team_name: "CYCLONE",
        },
        {
          solved_at: 1636183773,
          team_id: 174986101,
          team_name: "m1t0",
        },
        {
          solved_at: 1636183386,
          team_id: 2684501590,
          team_name: "HugsForBugs",
        },
        {
          solved_at: 1636183173,
          team_id: 1381340366,
          team_name: "C4C",
        },
        {
          solved_at: 1636182919,
          team_id: 259468897,
          team_name: "n00b3r",
        },
        {
          solved_at: 1636182847,
          team_id: 113229465,
          team_name: "Capture the Swag",
        },
        {
          solved_at: 1636182801,
          team_id: 1548936822,
          team_name: "ri5e",
        },
        {
          solved_at: 1636182459,
          team_id: 2338804801,
          team_name: "ShellSpider",
        },
        {
          solved_at: 1636181851,
          team_id: 1921236215,
          team_name: "UECTF",
        },
        {
          solved_at: 1636181680,
          team_id: 2813555526,
          team_name: "zr0pts",
        },
        {
          solved_at: 1636181642,
          team_id: 3621645696,
          team_name: "traP",
        },
        {
          solved_at: 1636180970,
          team_id: 3869978104,
          team_name: "0x9747",
        },
        {
          solved_at: 1636180798,
          team_id: 2459555940,
          team_name: "KDS",
        },
        {
          solved_at: 1636180281,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636180262,
          team_id: 2059953111,
          team_name: "NIS",
        },
        {
          solved_at: 1636180261,
          team_id: 1852641254,
          team_name: "Federal_Bonk_Investigations",
        },
        {
          solved_at: 1636179866,
          team_id: 3047485153,
          team_name: "Nupakachi",
        },
        {
          solved_at: 1636179373,
          team_id: 2635363621,
          team_name: "kgrzk",
        },
        {
          solved_at: 1636179041,
          team_id: 1633830535,
          team_name: "A1",
        },
        {
          solved_at: 1636178709,
          team_id: 1739062591,
          team_name: "N4N",
        },
        {
          solved_at: 1636178595,
          team_id: 2226060818,
          team_name: "shellpwn",
        },
        {
          solved_at: 1636178593,
          team_id: 850340116,
          team_name: "Ravanan",
        },
        {
          solved_at: 1636178207,
          team_id: 2964749799,
          team_name: "let's hack ",
        },
        {
          solved_at: 1636178060,
          team_id: 2534886826,
          team_name: "saluu",
        },
        {
          solved_at: 1636177890,
          team_id: 2847332051,
          team_name: "b3lug4_4nd_h3ck3r",
        },
        {
          solved_at: 1636177835,
          team_id: 819208901,
          team_name: "ethan",
        },
        {
          solved_at: 1636177822,
          team_id: 2899701042,
          team_name: "RPCA Cyber Club",
        },
        {
          solved_at: 1636177322,
          team_id: 3089574214,
          team_name: "Anyhow",
        },
        {
          solved_at: 1636177251,
          team_id: 1441743395,
          team_name: "RimaL878",
        },
        {
          solved_at: 1636177060,
          team_id: 2344151863,
          team_name: "joyuriz",
        },
        {
          solved_at: 1636177027,
          team_id: 2659660501,
          team_name: "Congo",
        },
        {
          solved_at: 1636176871,
          team_id: 2355642345,
          team_name: "tester",
        },
        {
          solved_at: 1636176635,
          team_id: 1971152773,
          team_name: "Team Captain",
        },
        {
          solved_at: 1636176583,
          team_id: 3146712183,
          team_name: "Ph0en1x",
        },
        {
          solved_at: 1636176496,
          team_id: 2176707971,
          team_name: "black_pearl",
        },
        {
          solved_at: 1636176482,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636176413,
          team_id: 2541664866,
          team_name: "Ashes",
        },
        {
          solved_at: 1636176282,
          team_id: 954346838,
          team_name: "h3ck3r",
        },
        {
          solved_at: 1636176136,
          team_id: 3250583928,
          team_name: "SecCoder",
        },
        {
          solved_at: 1636175950,
          team_id: 2749407841,
          team_name: "Parakram",
        },
        {
          solved_at: 1636175403,
          team_id: 4229725661,
          team_name: "Checker",
        },
        {
          solved_at: 1636175333,
          team_id: 515486577,
          team_name: "GSOD",
        },
        {
          solved_at: 1636174940,
          team_id: 3857893297,
          team_name: "Bugsters",
        },
        {
          solved_at: 1636174835,
          team_id: 3210318901,
          team_name: "h4xt3r_0ffic4l",
        },
        {
          solved_at: 1636174805,
          team_id: 1785875874,
          team_name: "Cipher0k",
        },
        {
          solved_at: 1636174532,
          team_id: 2518579009,
          team_name: "victorem",
        },
        {
          solved_at: 1636174466,
          team_id: 3192224714,
          team_name: "Easter Eggs",
        },
        {
          solved_at: 1636174033,
          team_id: 3417790035,
          team_name: "Pa0x73cal",
        },
        {
          solved_at: 1636173377,
          team_id: 1405498108,
          team_name: "APT1337",
        },
        {
          solved_at: 1636172968,
          team_id: 1644835522,
          team_name: "NoobHacker",
        },
        {
          solved_at: 1636172884,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636172750,
          team_id: 660582825,
          team_name: "pakekoding",
        },
        {
          solved_at: 1636172606,
          team_id: 660195450,
          team_name: "miku",
        },
        {
          solved_at: 1636172588,
          team_id: 1601893875,
          team_name: "Reloaded",
        },
        {
          solved_at: 1636172448,
          team_id: 294686247,
          team_name: "underdawgs",
        },
        {
          solved_at: 1636172340,
          team_id: 2395038263,
          team_name: "Red Knights",
        },
        {
          solved_at: 1636172329,
          team_id: 1359305130,
          team_name: "Knight Squad",
        },
        {
          solved_at: 1636171885,
          team_id: 2759966904,
          team_name: "Weak But Leet",
        },
        {
          solved_at: 1636171800,
          team_id: 972005752,
          team_name: "Hacking Help",
        },
        {
          solved_at: 1636171786,
          team_id: 2700172517,
          team_name: "讃州中学勇者部",
        },
        {
          solved_at: 1636171572,
          team_id: 2730068197,
          team_name: "GG-WP",
        },
        {
          solved_at: 1636171415,
          team_id: 311762328,
          team_name: "atomicx001",
        },
        {
          solved_at: 1636171370,
          team_id: 3246974543,
          team_name: "Wayf4r3rs",
        },
        {
          solved_at: 1636171364,
          team_id: 3010620646,
          team_name: "BitBuster",
        },
        {
          solved_at: 1636171284,
          team_id: 507445937,
          team_name: "Exodus",
        },
        {
          solved_at: 1636171001,
          team_id: 164182415,
          team_name: "BugEaters",
        },
        {
          solved_at: 1636170928,
          team_id: 2639259878,
          team_name: "@CryptoH0x1",
        },
        {
          solved_at: 1636170396,
          team_id: 3151208928,
          team_name: "Cypher",
        },
        {
          solved_at: 1636170374,
          team_id: 4271675896,
          team_name: "DDLJ",
        },
        {
          solved_at: 1636170293,
          team_id: 205509429,
          team_name: "temp_Priv8corp",
        },
        {
          solved_at: 1636170156,
          team_id: 3346668497,
          team_name: "K1mCh1W@rr10r",
        },
        {
          solved_at: 1636170145,
          team_id: 1045081418,
          team_name: "higota",
        },
        {
          solved_at: 1636169703,
          team_id: 990935966,
          team_name: "KartikeyVinayak",
        },
        {
          solved_at: 1636169687,
          team_id: 332378111,
          team_name: "Moriya101",
        },
        {
          solved_at: 1636169596,
          team_id: 3272554389,
          team_name: "efiens",
        },
        {
          solved_at: 1636169449,
          team_id: 2968091824,
          team_name: "yu1hpa",
        },
        {
          solved_at: 1636169405,
          team_id: 3030418697,
          team_name: "SomeThing",
        },
        {
          solved_at: 1636169244,
          team_id: 266176777,
          team_name: "FSOCIETY00",
        },
        {
          solved_at: 1636169242,
          team_id: 4086347094,
          team_name: "y011d4",
        },
        {
          solved_at: 1636169216,
          team_id: 807108695,
          team_name: "xSpark",
        },
        {
          solved_at: 1636169210,
          team_id: 3085754517,
          team_name: "TechLovers",
        },
        {
          solved_at: 1636169195,
          team_id: 622903063,
          team_name: "KUDoS",
        },
        {
          solved_at: 1636169118,
          team_id: 2586139551,
          team_name: "H25",
        },
        {
          solved_at: 1636169031,
          team_id: 3467100769,
          team_name: "Utaha",
        },
        {
          solved_at: 1636168918,
          team_id: 2019423887,
          team_name: "Team Qword",
        },
        {
          solved_at: 1636168874,
          team_id: 1459020183,
          team_name: "BOISQWERTY",
        },
        {
          solved_at: 1636168774,
          team_id: 2593291415,
          team_name: "m1z0r3",
        },
        {
          solved_at: 1636168657,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636168607,
          team_id: 1725631347,
          team_name: "azki",
        },
        {
          solved_at: 1636168570,
          team_id: 3962255306,
          team_name: "Hunt2behuntee",
        },
        {
          solved_at: 1636168461,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636168455,
          team_id: 1302342880,
          team_name: "Hacker404",
        },
        {
          solved_at: 1636168453,
          team_id: 550127680,
          team_name: "eternal noobs",
        },
        {
          solved_at: 1636168441,
          team_id: 2028804799,
          team_name: "N30Z30N",
        },
        {
          solved_at: 1636168424,
          team_id: 799832172,
          team_name: "devplusinfosec",
        },
        {
          solved_at: 1636168399,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636168396,
          team_id: 3220933017,
          team_name: "H@ck3r9!rl",
        },
        {
          solved_at: 1636168345,
          team_id: 4003734013,
          team_name: "aj_hack",
        },
        {
          solved_at: 1636168297,
          team_id: 3492209313,
          team_name: "SSF",
        },
        {
          solved_at: 1636168288,
          team_id: 1145633420,
          team_name: "IrisSec",
        },
        {
          solved_at: 1636168217,
          team_id: 1912976133,
          team_name: "genin.team7",
        },
        {
          solved_at: 1636168181,
          team_id: 2664004721,
          team_name: "SolarCAT",
        },
        {
          solved_at: 1636168180,
          team_id: 882611146,
          team_name: "0x62EEN7EA",
        },
        {
          solved_at: 1636168109,
          team_id: 529685877,
          team_name: "N0013",
        },
        {
          solved_at: 1636168092,
          team_id: 2737362873,
          team_name: "Neymar Jr",
        },
        {
          solved_at: 1636168026,
          team_id: 1244107324,
          team_name: "dulceria",
        },
        {
          solved_at: 1636168003,
          team_id: 2120890133,
          team_name: "Hacker Vaillant",
        },
        {
          solved_at: 1636167947,
          team_id: 1112195614,
          team_name: "noraneco",
        },
        {
          solved_at: 1636167945,
          team_id: 867055920,
          team_name: "OurHeung",
        },
        {
          solved_at: 1636167939,
          team_id: 3271805176,
          team_name: "c0d3_h4cki05_",
        },
        {
          solved_at: 1636167900,
          team_id: 973272136,
          team_name: "[418]TeapotTeam",
        },
        {
          solved_at: 1636167887,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636167867,
          team_id: 3738361639,
          team_name: "JRP",
        },
        {
          solved_at: 1636167851,
          team_id: 3416608250,
          team_name: "KXTI_SSGS",
        },
        {
          solved_at: 1636167831,
          team_id: 3282792478,
          team_name: "Qub3icles",
        },
        {
          solved_at: 1636167823,
          team_id: 4168588043,
          team_name: "1nf1n1ty",
        },
        {
          solved_at: 1636167801,
          team_id: 454143327,
          team_name: "a24",
        },
        {
          solved_at: 1636167794,
          team_id: 683538886,
          team_name: "HOAX",
        },
        {
          solved_at: 1636167793,
          team_id: 1976801730,
          team_name: "DLC",
        },
        {
          solved_at: 1636167743,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636167726,
          team_id: 3192549727,
          team_name: "BlackBird",
        },
        {
          solved_at: 1636167708,
          team_id: 3338287823,
          team_name: "n03tAck",
        },
        {
          solved_at: 1636167701,
          team_id: 2576226177,
          team_name: "sm1le",
        },
        {
          solved_at: 1636167673,
          team_id: 1366395221,
          team_name: "satgate",
        },
        {
          solved_at: 1636167647,
          team_id: 830413516,
          team_name: "bl4ckp4r4d1s3",
        },
        {
          solved_at: 1636167642,
          team_id: 1939124177,
          team_name: "SaturnX",
        },
        {
          solved_at: 1636167638,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636167637,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636167634,
          team_id: 2269318528,
          team_name: "visemo",
        },
        {
          solved_at: 1636167632,
          team_id: 1403295035,
          team_name: "Wani Hackase",
        },
        {
          solved_at: 1636167627,
          team_id: 2113234022,
          team_name: "Sapp",
        },
        {
          solved_at: 1636167625,
          team_id: 2960658274,
          team_name: "blockchain",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3185466810,
      name: "qunknown",
      flag: "",
      category: "misc",
      description:
        "\u003cp\u003eI learned No-Cloning Theorem today. Can't we copy even a single qubit really?\u003c/p\u003e \u003ccode\u003enc misc.bsidesahmedabad.in 10907\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 392,
      tags: ["quantum"],
      attachments: [
        {
          name: "qunknown_f69b45758d8aff4e8d33f1fd2011170c.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/36ef300c-6473-4e0f-8cad-b0a0eefe3bbf/qunknown_f69b45758d8aff4e8d33f1fd2011170c.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636216134,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636198590,
          team_id: 171428256,
          team_name: "SiBears",
        },
        {
          solved_at: 1636188437,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636181140,
          team_id: 3210500832,
          team_name: "idek",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3224520613,
      name: "Collapsed License",
      flag: "",
      category: "reversing",
      description:
        "\u003cp\u003eIn 21XX, 0.00000001% of humanity purchased the license of this software, which means there should be at least one valid license key. Is it easy for you to crack one of them?\u003c/p\u003e \u003ccode\u003enc rev.bsidesahmedabad.in 10765\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 392,
      tags: [],
      attachments: [
        {
          name: "collapsed_license_512d4d93e901711883e4cfd238b6035a.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/2b360a40-6f31-4f9d-ad6d-e00215d6df40/collapsed_license_512d4d93e901711883e4cfd238b6035a.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636250047,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636206975,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636203000,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636202919,
          team_id: 1481176295,
          team_name: "mode13h",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3359320973,
      name: "BabyBOF:RCE",
      flag: "",
      category: "pwn",
      description:
        "\u003cp\u003eGive me your feedback on this challenge.\u003c/p\u003e \u003ccode\u003enc pwn2.bsidesahmedabad.in 9001\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 111,
      tags: ["warmup"],
      attachments: [
        {
          name: "babybof_rce_a26b1e8d6a3df4715bd8f4486442275f.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/a0153280-343e-470c-9cb8-b008fdd0d183/babybof_rce_a26b1e8d6a3df4715bd8f4486442275f.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636253555,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636248158,
          team_id: 853626162,
          team_name: "Flaggermeister",
        },
        {
          solved_at: 1636247037,
          team_id: 1180065274,
          team_name: "5upernova",
        },
        {
          solved_at: 1636244344,
          team_id: 1112195614,
          team_name: "noraneco",
        },
        {
          solved_at: 1636236968,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636236421,
          team_id: 2355642345,
          team_name: "tester",
        },
        {
          solved_at: 1636228085,
          team_id: 171428256,
          team_name: "SiBears",
        },
        {
          solved_at: 1636222258,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636219576,
          team_id: 867055920,
          team_name: "OurHeung",
        },
        {
          solved_at: 1636218307,
          team_id: 578032760,
          team_name: "_N00b3R__",
        },
        {
          solved_at: 1636218215,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636217415,
          team_id: 2506986509,
          team_name: "0x0a",
        },
        {
          solved_at: 1636216126,
          team_id: 1548936822,
          team_name: "ri5e",
        },
        {
          solved_at: 1636216054,
          team_id: 3319446585,
          team_name: "guetsec",
        },
        {
          solved_at: 1636212015,
          team_id: 2593291415,
          team_name: "m1z0r3",
        },
        {
          solved_at: 1636210794,
          team_id: 3872718519,
          team_name: "TamilCTF",
        },
        {
          solved_at: 1636210005,
          team_id: 4168588043,
          team_name: "1nf1n1ty",
        },
        {
          solved_at: 1636207335,
          team_id: 3991741576,
          team_name: "krzysztof1222",
        },
        {
          solved_at: 1636207056,
          team_id: 2162170792,
          team_name: "The Flat Network Society",
        },
        {
          solved_at: 1636206535,
          team_id: 1398520620,
          team_name: "TEAM0001",
        },
        {
          solved_at: 1636201812,
          team_id: 3774532032,
          team_name: "acdwas",
        },
        {
          solved_at: 1636201069,
          team_id: 1658853301,
          team_name: "Ph4nt0m_tr0up3",
        },
        {
          solved_at: 1636199755,
          team_id: 1427225631,
          team_name: "EchoSec",
        },
        {
          solved_at: 1636198751,
          team_id: 3471078127,
          team_name: "fl4gs4b33rs",
        },
        {
          solved_at: 1636196662,
          team_id: 1673786134,
          team_name: "whateverittakes",
        },
        {
          solved_at: 1636196210,
          team_id: 4179973424,
          team_name: "105",
        },
        {
          solved_at: 1636195156,
          team_id: 1124451295,
          team_name: "hoge",
        },
        {
          solved_at: 1636193826,
          team_id: 3039301393,
          team_name: "ShroomZ",
        },
        {
          solved_at: 1636193502,
          team_id: 3192549727,
          team_name: "BlackBird",
        },
        {
          solved_at: 1636193304,
          team_id: 1739062591,
          team_name: "N4N",
        },
        {
          solved_at: 1636192546,
          team_id: 491928779,
          team_name: "TeamSharky",
        },
        {
          solved_at: 1636192010,
          team_id: 1045701151,
          team_name: "ec",
        },
        {
          solved_at: 1636191252,
          team_id: 344174345,
          team_name: "uetctf",
        },
        {
          solved_at: 1636189402,
          team_id: 4055297429,
          team_name: "CyberSlacker",
        },
        {
          solved_at: 1636188741,
          team_id: 3346668497,
          team_name: "K1mCh1W@rr10r",
        },
        {
          solved_at: 1636188697,
          team_id: 3047485153,
          team_name: "Nupakachi",
        },
        {
          solved_at: 1636187361,
          team_id: 3458480292,
          team_name: "kisaragi",
        },
        {
          solved_at: 1636186947,
          team_id: 4086347094,
          team_name: "y011d4",
        },
        {
          solved_at: 1636186323,
          team_id: 2672811704,
          team_name: "ssssss",
        },
        {
          solved_at: 1636185435,
          team_id: 1730531735,
          team_name: "lexsd6",
        },
        {
          solved_at: 1636185004,
          team_id: 2813555526,
          team_name: "zr0pts",
        },
        {
          solved_at: 1636184552,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636184411,
          team_id: 3339996365,
          team_name: "etc2020",
        },
        {
          solved_at: 1636183950,
          team_id: 113229465,
          team_name: "Capture the Swag",
        },
        {
          solved_at: 1636183894,
          team_id: 3272554389,
          team_name: "efiens",
        },
        {
          solved_at: 1636183623,
          team_id: 174986101,
          team_name: "m1t0",
        },
        {
          solved_at: 1636183526,
          team_id: 3146712183,
          team_name: "Ph0en1x",
        },
        {
          solved_at: 1636182596,
          team_id: 3477465534,
          team_name: "AvenaQuaker",
        },
        {
          solved_at: 1636182422,
          team_id: 1381340366,
          team_name: "C4C",
        },
        {
          solved_at: 1636181560,
          team_id: 622903063,
          team_name: "KUDoS",
        },
        {
          solved_at: 1636181479,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636181178,
          team_id: 2093620421,
          team_name: "Zzer0",
        },
        {
          solved_at: 1636180753,
          team_id: 3621645696,
          team_name: "traP",
        },
        {
          solved_at: 1636180193,
          team_id: 2759966904,
          team_name: "Weak But Leet",
        },
        {
          solved_at: 1636180165,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636177826,
          team_id: 921602238,
          team_name: "Infinite loop",
        },
        {
          solved_at: 1636177774,
          team_id: 2081766852,
          team_name: "NAVER Cloud",
        },
        {
          solved_at: 1636177741,
          team_id: 2586139551,
          team_name: "H25",
        },
        {
          solved_at: 1636177570,
          team_id: 775534884,
          team_name: "Leak Challenge",
        },
        {
          solved_at: 1636177146,
          team_id: 3499120459,
          team_name: "Jump2Flag",
        },
        {
          solved_at: 1636176638,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636176174,
          team_id: 882611146,
          team_name: "0x62EEN7EA",
        },
        {
          solved_at: 1636175741,
          team_id: 2096971403,
          team_name: "\\/(54",
        },
        {
          solved_at: 1636175333,
          team_id: 3674451148,
          team_name: "PwN_3v3rY7h1nG",
        },
        {
          solved_at: 1636175103,
          team_id: 3338287823,
          team_name: "n03tAck",
        },
        {
          solved_at: 1636174926,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636173587,
          team_id: 2657819930,
          team_name: "16j",
        },
        {
          solved_at: 1636173448,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636172947,
          team_id: 2395038263,
          team_name: "Red Knights",
        },
        {
          solved_at: 1636170247,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636170098,
          team_id: 3975109599,
          team_name: "MoeCafe",
        },
        {
          solved_at: 1636169604,
          team_id: 3492209313,
          team_name: "SSF",
        },
        {
          solved_at: 1636169106,
          team_id: 3253676919,
          team_name: "binExplorer",
        },
        {
          solved_at: 1636168618,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636168436,
          team_id: 2700172517,
          team_name: "讃州中学勇者部",
        },
        {
          solved_at: 1636168284,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636168102,
          team_id: 1939124177,
          team_name: "SaturnX",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3443755021,
      name: "padnote",
      flag: "",
      category: "pwn",
      description:
        "\u003cp\u003eI proudly released the world most secure note after aggressively tested the source code with AFL and CodeQL, and didn't find any bugs.\u003c/p\u003e \u003ccode\u003enc pwn.bsidesahmedabad.in 9003\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 239,
      tags: [],
      attachments: [
        {
          name: "padnote_485b73c7e75ff06fa19f95e097f1b32c.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/b80385ee-c5ca-4c1a-8930-4e12d36f6715/padnote_485b73c7e75ff06fa19f95e097f1b32c.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636249469,
          team_id: 3047485153,
          team_name: "Nupakachi",
        },
        {
          solved_at: 1636248941,
          team_id: 1045701151,
          team_name: "ec",
        },
        {
          solved_at: 1636244436,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636240926,
          team_id: 2162170792,
          team_name: "The Flat Network Society",
        },
        {
          solved_at: 1636232495,
          team_id: 344174345,
          team_name: "uetctf",
        },
        {
          solved_at: 1636218968,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636216162,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636205060,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636201045,
          team_id: 3975109599,
          team_name: "MoeCafe",
        },
        {
          solved_at: 1636195125,
          team_id: 1124451295,
          team_name: "hoge",
        },
        {
          solved_at: 1636194107,
          team_id: 2759966904,
          team_name: "Weak But Leet",
        },
        {
          solved_at: 1636191021,
          team_id: 3492209313,
          team_name: "SSF",
        },
        {
          solved_at: 1636190359,
          team_id: 921602238,
          team_name: "Infinite loop",
        },
        {
          solved_at: 1636187784,
          team_id: 2093620421,
          team_name: "Zzer0",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3817990360,
      name: "Roda",
      flag: "",
      category: "web",
      description:
        '\u003cp\u003eI made an \u003ca href="http://web.bsidesahmedabad.in:8080/"\u003eimage uploader\u003c/a\u003e. It is easy to use; just drag and drop, and share the URL with your friends!\u003c/p\u003e \u003cp\u003eIf you find a suspicious image, please report it to the admin. The admin will check it.\u003c/p\u003e\n',
      author: "st98",
      score: 200,
      tags: [],
      attachments: [
        {
          name: "roda_1fcc5923ea213c01886ae2d67a509689.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/1b0a1d8e-0bba-4c98-9fb9-b7685f338b10/roda_1fcc5923ea213c01886ae2d67a509689.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636253817,
          team_id: 2096971403,
          team_name: "\\/(54",
        },
        {
          solved_at: 1636237042,
          team_id: 4074013277,
          team_name: "CodeNames",
        },
        {
          solved_at: 1636234829,
          team_id: 1976801730,
          team_name: "DLC",
        },
        {
          solved_at: 1636220252,
          team_id: 2162170792,
          team_name: "The Flat Network Society",
        },
        {
          solved_at: 1636215127,
          team_id: 2973741978,
          team_name: "xof5566",
        },
        {
          solved_at: 1636215117,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636213517,
          team_id: 171428256,
          team_name: "SiBears",
        },
        {
          solved_at: 1636211545,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636208857,
          team_id: 3242025157,
          team_name: "datsoa",
        },
        {
          solved_at: 1636206237,
          team_id: 1068142739,
          team_name: "pain",
        },
        {
          solved_at: 1636204127,
          team_id: 2008624396,
          team_name: "Underrated",
        },
        {
          solved_at: 1636194468,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636193002,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636190036,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636189559,
          team_id: 3621645696,
          team_name: "traP",
        },
        {
          solved_at: 1636186910,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636186306,
          team_id: 3896971770,
          team_name: "byc_404",
        },
        {
          solved_at: 1636179303,
          team_id: 1939124177,
          team_name: "SaturnX",
        },
        {
          solved_at: 1636178349,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636178002,
          team_id: 2869414462,
          team_name: "padoru padoru!!!!",
        },
        {
          solved_at: 1636175564,
          team_id: 622903063,
          team_name: "KUDoS",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3902500811,
      name: "floorsa",
      flag: "",
      category: "crypto",
      description:
        "\u003cp\u003eSomething about the private key is leaking but with error.\u003c/p\u003e\n",
      author: "ptr-yudai, keymoon",
      score: 178,
      tags: [],
      attachments: [
        {
          name: "floorsa_8365eeb55b7ef6b9461a8485314d1d32.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/15e35612-778a-4538-9e19-ea8c86953e5e/floorsa_8365eeb55b7ef6b9461a8485314d1d32.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636246456,
          team_id: 3182524107,
          team_name: "[  ]",
        },
        {
          solved_at: 1636238538,
          team_id: 1481176295,
          team_name: "mode13h",
        },
        {
          solved_at: 1636221290,
          team_id: 1827878259,
          team_name: "nyahello",
        },
        {
          solved_at: 1636217066,
          team_id: 1726847822,
          team_name: "Bruh",
        },
        {
          solved_at: 1636214996,
          team_id: 873809443,
          team_name: "wiwam845",
        },
        {
          solved_at: 1636210253,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636203939,
          team_id: 1417124198,
          team_name: "SDSLabs",
        },
        {
          solved_at: 1636201772,
          team_id: 910075692,
          team_name: "warlock_rootx",
        },
        {
          solved_at: 1636201094,
          team_id: 1948909126,
          team_name: "Practice",
        },
        {
          solved_at: 1636199639,
          team_id: 1068142739,
          team_name: "pain",
        },
        {
          solved_at: 1636197443,
          team_id: 3505750332,
          team_name: "Shikataganai",
        },
        {
          solved_at: 1636196851,
          team_id: 3884940328,
          team_name: "./Vespiary",
        },
        {
          solved_at: 1636191958,
          team_id: 3504564412,
          team_name: "kasiatutej",
        },
        {
          solved_at: 1636191243,
          team_id: 4055297429,
          team_name: "CyberSlacker",
        },
        {
          solved_at: 1636188346,
          team_id: 2425641918,
          team_name: "r3kapig",
        },
        {
          solved_at: 1636185191,
          team_id: 1529586063,
          team_name: "TSG",
        },
        {
          solved_at: 1636185094,
          team_id: 2028804799,
          team_name: "N30Z30N",
        },
        {
          solved_at: 1636184902,
          team_id: 1739062591,
          team_name: "N4N",
        },
        {
          solved_at: 1636182578,
          team_id: 3621645696,
          team_name: "traP",
        },
        {
          solved_at: 1636182222,
          team_id: 1119727928,
          team_name: "DarkArmy",
        },
        {
          solved_at: 1636176795,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636175749,
          team_id: 2308110065,
          team_name: "WaterDrop",
        },
        {
          solved_at: 1636175673,
          team_id: 1976801730,
          team_name: "DLC",
        },
        {
          solved_at: 1636175453,
          team_id: 4038631232,
          team_name: "Hermes",
        },
        {
          solved_at: 1636171865,
          team_id: 3210500832,
          team_name: "idek",
        },
        {
          solved_at: 1636171164,
          team_id: 4086347094,
          team_name: "y011d4",
        },
        {
          solved_at: 1636169727,
          team_id: 3467100769,
          team_name: "Utaha",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
    {
      id: 3950178220,
      name: "catflap",
      flag: "",
      category: "reversing",
      description:
        "\u003cp\u003eI made a small pet door for my cat.\u003c/p\u003e \u003ccode\u003enc rev2.bsidesahmedabad.in 10029\u003c/code\u003e\n",
      author: "ptr-yudai",
      score: 427,
      tags: [],
      attachments: [
        {
          name: "catflap_1aea2179e9380df94b1386910a92d463.tar.gz",
          url:
            "https://s3.amazonaws.com/bsidesahm/76cfc411-d33e-4f3d-9903-9d0882430bf1/catflap_1aea2179e9380df94b1386910a92d463.tar.gz",
        },
      ],
      solved_by: [
        {
          solved_at: 1636252393,
          team_id: 133217961,
          team_name: "Thehackerscrew",
        },
        {
          solved_at: 1636243719,
          team_id: 254494508,
          team_name: "Black Bauhinia",
        },
        {
          solved_at: 1636220976,
          team_id: 1481176295,
          team_name: "mode13h",
        },
      ],
      is_open: true,
      is_running: false,
      is_survey: false,
    },
  ]);

export default useTasks;
