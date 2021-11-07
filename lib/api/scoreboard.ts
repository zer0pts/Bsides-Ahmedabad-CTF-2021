import useSWR from "swr";

export interface TaskStat {
  points: number;
  time: number;
}

export interface ScoreFeedEntry {
  pos: number;
  team: string;
  country: string;
  score: number;
  taskStats: { [taskName: string]: TaskStat };
  team_id: number;
  last_submission: number;
}

const useScoreboard = () =>
  useSWR<ScoreFeedEntry[]>(
    "/scoreboard",
    () =>
      [
        {
          pos: 1,
          team: "./Vespiary",
          country: "JP",
          score: 4032,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636180165,
            },
            "BabyBOF:SBX": {
              points: 340,
              time: 1636196587,
            },
            "Collapsed License": {
              points: 392,
              time: 1636250047,
            },
            "ECC-RSA 2": {
              points: 304,
              time: 1636195003,
            },
            "King's License": {
              points: 304,
              time: 1636231072,
            },
            Roda: {
              points: 200,
              time: 1636186910,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636189725,
            },
            Survey: {
              points: 91,
              time: 1636193020,
            },
            Welcome: {
              points: 66,
              time: 1636180281,
            },
            "Write as a Service": {
              points: 469,
              time: 1636238368,
            },
            dlppp: {
              points: 151,
              time: 1636184947,
            },
            entrance: {
              points: 104,
              time: 1636180233,
            },
            floorsa: {
              points: 178,
              time: 1636196851,
            },
            httpsaba: {
              points: 239,
              time: 1636208273,
            },
            intersection: {
              points: 226,
              time: 1636209871,
            },
            padnote: {
              points: 239,
              time: 1636244436,
            },
            qunknown: {
              points: 392,
              time: 1636188437,
            },
          },
          team_id: 3884940328,
          last_submission: 1636250047,
        },
        {
          pos: 2,
          team: "Black Bauhinia",
          country: "HK",
          score: 3685,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636170247,
            },
            "Collapsed License": {
              points: 392,
              time: 1636203000,
            },
            "ECC-RSA 2": {
              points: 304,
              time: 1636189403,
            },
            "King's License": {
              points: 304,
              time: 1636182391,
            },
            Roda: {
              points: 200,
              time: 1636211545,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636170249,
            },
            Survey: {
              points: 91,
              time: 1636189845,
            },
            "They Were Eleven": {
              points: 427,
              time: 1636184594,
            },
            Welcome: {
              points: 66,
              time: 1636167743,
            },
            catflap: {
              points: 427,
              time: 1636243719,
            },
            dlppp: {
              points: 151,
              time: 1636171340,
            },
            entrance: {
              points: 104,
              time: 1636169199,
            },
            floorsa: {
              points: 178,
              time: 1636176795,
            },
            httpsaba: {
              points: 239,
              time: 1636222748,
            },
            intersection: {
              points: 226,
              time: 1636209085,
            },
            padnote: {
              points: 239,
              time: 1636205060,
            },
          },
          team_id: 254494508,
          last_submission: 1636243719,
        },
        {
          pos: 3,
          team: "Thehackerscrew",
          country: "",
          score: 2902,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636184552,
            },
            "BabyBOF:SBX": {
              points: 340,
              time: 1636206534,
            },
            "King's License": {
              points: 304,
              time: 1636245429,
            },
            Roda: {
              points: 200,
              time: 1636194468,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636229628,
            },
            Survey: {
              points: 91,
              time: 1636220651,
            },
            Welcome: {
              points: 66,
              time: 1636167638,
            },
            catflap: {
              points: 427,
              time: 1636252393,
            },
            dlppp: {
              points: 151,
              time: 1636208601,
            },
            entrance: {
              points: 104,
              time: 1636170006,
            },
            floorsa: {
              points: 178,
              time: 1636210253,
            },
            httpsaba: {
              points: 239,
              time: 1636226280,
            },
            intersection: {
              points: 226,
              time: 1636219697,
            },
            padnote: {
              points: 239,
              time: 1636216162,
            },
          },
          team_id: 133217961,
          last_submission: 1636252393,
        },
        {
          pos: 4,
          team: "mode13h",
          country: "NO",
          score: 2716,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636236968,
            },
            "Collapsed License": {
              points: 392,
              time: 1636202919,
            },
            "King's License": {
              points: 304,
              time: 1636228152,
            },
            Survey: {
              points: 91,
              time: 1636234983,
            },
            "They Were Eleven": {
              points: 427,
              time: 1636243626,
            },
            Welcome: {
              points: 66,
              time: 1636200639,
            },
            catflap: {
              points: 427,
              time: 1636220976,
            },
            dlppp: {
              points: 151,
              time: 1636235379,
            },
            entrance: {
              points: 104,
              time: 1636252897,
            },
            floorsa: {
              points: 178,
              time: 1636238538,
            },
            httpsaba: {
              points: 239,
              time: 1636249698,
            },
            intersection: {
              points: 226,
              time: 1636234516,
            },
          },
          team_id: 1481176295,
          last_submission: 1636252897,
        },
        {
          pos: 5,
          team: "r3kapig",
          country: "CN",
          score: 2402,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636176638,
            },
            "Collapsed License": {
              points: 392,
              time: 1636206975,
            },
            "King's License": {
              points: 304,
              time: 1636184710,
            },
            Roda: {
              points: 200,
              time: 1636193002,
            },
            Survey: {
              points: 91,
              time: 1636189740,
            },
            Welcome: {
              points: 66,
              time: 1636167637,
            },
            dlppp: {
              points: 151,
              time: 1636177576,
            },
            entrance: {
              points: 104,
              time: 1636169500,
            },
            floorsa: {
              points: 178,
              time: 1636188346,
            },
            intersection: {
              points: 226,
              time: 1636177467,
            },
            padnote: {
              points: 239,
              time: 1636218968,
            },
            pugpug: {
              points: 340,
              time: 1636236515,
            },
          },
          team_id: 2425641918,
          last_submission: 1636236515,
        },
        {
          pos: 6,
          team: "idek",
          country: "US",
          score: 2389,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636174926,
            },
            "King's License": {
              points: 304,
              time: 1636181529,
            },
            Roda: {
              points: 200,
              time: 1636190036,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636213914,
            },
            Survey: {
              points: 91,
              time: 1636192025,
            },
            Welcome: {
              points: 66,
              time: 1636167887,
            },
            dlppp: {
              points: 151,
              time: 1636168718,
            },
            entrance: {
              points: 104,
              time: 1636169327,
            },
            floorsa: {
              points: 178,
              time: 1636171865,
            },
            intersection: {
              points: 226,
              time: 1636175399,
            },
            pugpug: {
              points: 340,
              time: 1636212643,
            },
            qunknown: {
              points: 392,
              time: 1636181140,
            },
          },
          team_id: 3210500832,
          last_submission: 1636213914,
        },
        {
          pos: 7,
          team: "Hermes",
          country: "CN",
          score: 2050,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636218215,
            },
            "ECC-RSA 2": {
              points: 304,
              time: 1636192931,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636195820,
            },
            Survey: {
              points: 91,
              time: 1636199598,
            },
            "They Were Eleven": {
              points: 427,
              time: 1636179848,
            },
            Welcome: {
              points: 66,
              time: 1636199345,
            },
            dlppp: {
              points: 151,
              time: 1636174427,
            },
            entrance: {
              points: 104,
              time: 1636227289,
            },
            floorsa: {
              points: 178,
              time: 1636175453,
            },
            qunknown: {
              points: 392,
              time: 1636216134,
            },
          },
          team_id: 4038631232,
          last_submission: 1636227289,
        },
        {
          pos: 8,
          team: "The Flat Network Society",
          country: "FR",
          score: 1573,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636207056,
            },
            "BabyBOF:SBX": {
              points: 340,
              time: 1636226416,
            },
            Roda: {
              points: 200,
              time: 1636220252,
            },
            entrance: {
              points: 104,
              time: 1636202479,
            },
            httpsaba: {
              points: 239,
              time: 1636236794,
            },
            padnote: {
              points: 239,
              time: 1636240926,
            },
            pugpug: {
              points: 340,
              time: 1636218721,
            },
          },
          team_id: 2162170792,
          last_submission: 1636240926,
        },
        {
          pos: 9,
          team: "SDSLabs",
          country: "IN",
          score: 1457,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636173448,
            },
            "King's License": {
              points: 304,
              time: 1636225126,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636243476,
            },
            Survey: {
              points: 91,
              time: 1636191021,
            },
            Welcome: {
              points: 66,
              time: 1636168461,
            },
            dlppp: {
              points: 151,
              time: 1636170186,
            },
            entrance: {
              points: 104,
              time: 1636169065,
            },
            floorsa: {
              points: 178,
              time: 1636203939,
            },
            intersection: {
              points: 226,
              time: 1636178161,
            },
          },
          team_id: 1417124198,
          last_submission: 1636243476,
        },
        {
          pos: 10,
          team: "WaterDrop",
          country: "CN",
          score: 1366,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636181479,
            },
            "ECC-RSA 2": {
              points: 304,
              time: 1636183299,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636176466,
            },
            Welcome: {
              points: 66,
              time: 1636176482,
            },
            dlppp: {
              points: 151,
              time: 1636174786,
            },
            entrance: {
              points: 104,
              time: 1636180690,
            },
            floorsa: {
              points: 178,
              time: 1636175749,
            },
            intersection: {
              points: 226,
              time: 1636186345,
            },
          },
          team_id: 2308110065,
          last_submission: 1636186345,
        },
        {
          pos: 11,
          team: "nyahello",
          country: "TW",
          score: 1353,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636222258,
            },
            Roda: {
              points: 200,
              time: 1636215117,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636204886,
            },
            Survey: {
              points: 91,
              time: 1636209363,
            },
            Welcome: {
              points: 66,
              time: 1636203994,
            },
            dlppp: {
              points: 151,
              time: 1636203499,
            },
            entrance: {
              points: 104,
              time: 1636209211,
            },
            floorsa: {
              points: 178,
              time: 1636221290,
            },
            intersection: {
              points: 226,
              time: 1636253446,
            },
          },
          team_id: 1827878259,
          last_submission: 1636253446,
        },
        {
          pos: 12,
          team: "Infinite loop",
          country: "",
          score: 1246,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636177826,
            },
            Survey: {
              points: 91,
              time: 1636228271,
            },
            Welcome: {
              points: 66,
              time: 1636227796,
            },
            httpsaba: {
              points: 239,
              time: 1636182427,
            },
            padnote: {
              points: 239,
              time: 1636190359,
            },
            "shared knote": {
              points: 500,
              time: 1636226111,
            },
          },
          team_id: 921602238,
          last_submission: 1636227796,
        },
        {
          pos: 13,
          team: "DarkArmy",
          country: "IN",
          score: 1231,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636168284,
            },
            "King's License": {
              points: 304,
              time: 1636213113,
            },
            Survey: {
              points: 91,
              time: 1636201636,
            },
            Welcome: {
              points: 66,
              time: 1636168399,
            },
            dlppp: {
              points: 151,
              time: 1636181523,
            },
            entrance: {
              points: 104,
              time: 1636198193,
            },
            floorsa: {
              points: 178,
              time: 1636182222,
            },
            intersection: {
              points: 226,
              time: 1636181098,
            },
          },
          team_id: 1119727928,
          last_submission: 1636213113,
        },
        {
          pos: 14,
          team: "SiBears",
          country: "RU",
          score: 1190,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636228085,
            },
            Roda: {
              points: 200,
              time: 1636213517,
            },
            Survey: {
              points: 91,
              time: 1636201331,
            },
            Welcome: {
              points: 66,
              time: 1636185413,
            },
            entrance: {
              points: 104,
              time: 1636211586,
            },
            intersection: {
              points: 226,
              time: 1636224643,
            },
            qunknown: {
              points: 392,
              time: 1636198590,
            },
          },
          team_id: 171428256,
          last_submission: 1636228085,
        },
        {
          pos: 15,
          team: "warlock_rootx",
          country: "IN",
          score: 1153,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636253555,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636207431,
            },
            Survey: {
              points: 91,
              time: 1636195628,
            },
            Welcome: {
              points: 66,
              time: 1636172884,
            },
            dlppp: {
              points: 151,
              time: 1636198723,
            },
            entrance: {
              points: 104,
              time: 1636172848,
            },
            floorsa: {
              points: 178,
              time: 1636201772,
            },
            intersection: {
              points: 226,
              time: 1636202549,
            },
          },
          team_id: 910075692,
          last_submission: 1636253555,
        },
        {
          pos: 16,
          team: "y011d4",
          country: "JP",
          score: 1127,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636186947,
            },
            "ECC-RSA 2": {
              points: 304,
              time: 1636181914,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636177798,
            },
            Survey: {
              points: 91,
              time: 1636250130,
            },
            Welcome: {
              points: 66,
              time: 1636169242,
            },
            dlppp: {
              points: 151,
              time: 1636168747,
            },
            floorsa: {
              points: 178,
              time: 1636171164,
            },
          },
          team_id: 4086347094,
          last_submission: 1636186947,
        },
        {
          pos: 17,
          team: "TSG",
          country: "JP",
          score: 1127,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636168618,
            },
            Roda: {
              points: 200,
              time: 1636178349,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636244471,
            },
            Survey: {
              points: 91,
              time: 1636245057,
            },
            Welcome: {
              points: 66,
              time: 1636168657,
            },
            dlppp: {
              points: 151,
              time: 1636244782,
            },
            entrance: {
              points: 104,
              time: 1636244889,
            },
            floorsa: {
              points: 178,
              time: 1636185191,
            },
          },
          team_id: 1529586063,
          last_submission: 1636244889,
        },
        {
          pos: 18,
          team: "uetctf",
          country: "VN",
          score: 1099,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636191252,
            },
            "BabyBOF:SBX": {
              points: 340,
              time: 1636244329,
            },
            Welcome: {
              points: 66,
              time: 1636189789,
            },
            entrance: {
              points: 104,
              time: 1636189804,
            },
            httpsaba: {
              points: 239,
              time: 1636226669,
            },
            padnote: {
              points: 239,
              time: 1636232495,
            },
          },
          team_id: 344174345,
          last_submission: 1636244329,
        },
        {
          pos: 19,
          team: "kasiatutej",
          country: "PL",
          score: 1016,
          taskStats: {
            "ECC-RSA 2": {
              points: 304,
              time: 1636213061,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636193603,
            },
            Survey: {
              points: 91,
              time: 1636213339,
            },
            Welcome: {
              points: 66,
              time: 1636185125,
            },
            dlppp: {
              points: 151,
              time: 1636186654,
            },
            floorsa: {
              points: 178,
              time: 1636191958,
            },
          },
          team_id: 3504564412,
          last_submission: 1636213061,
        },
        {
          pos: 20,
          team: "Utaha",
          country: "TW",
          score: 1016,
          taskStats: {
            "ECC-RSA 2": {
              points: 304,
              time: 1636229361,
            },
            "SSSS.RNG": {
              points: 226,
              time: 1636173670,
            },
            Survey: {
              points: 91,
              time: 1636207502,
            },
            Welcome: {
              points: 66,
              time: 1636169031,
            },
            dlppp: {
              points: 151,
              time: 1636168956,
            },
            floorsa: {
              points: 178,
              time: 1636169727,
            },
          },
          team_id: 3467100769,
          last_submission: 1636229361,
        },
        {
          pos: 21,
          team: "padoru padoru!!!!",
          country: "IR",
          score: 1009,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636178002,
            },
            "Write as a Service": {
              points: 469,
              time: 1636216674,
            },
            pugpug: {
              points: 340,
              time: 1636193561,
            },
          },
          team_id: 2869414462,
          last_submission: 1636216674,
        },
        {
          pos: 22,
          team: "hoge",
          country: "JP",
          score: 929,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636195156,
            },
            "BabyBOF:SBX": {
              points: 340,
              time: 1636230957,
            },
            httpsaba: {
              points: 239,
              time: 1636195140,
            },
            padnote: {
              points: 239,
              time: 1636195125,
            },
          },
          team_id: 1124451295,
          last_submission: 1636230957,
        },
        {
          pos: 23,
          team: "CyberSlacker",
          country: "CN",
          score: 927,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636189402,
            },
            Survey: {
              points: 91,
              time: 1636207840,
            },
            Welcome: {
              points: 66,
              time: 1636187965,
            },
            dlppp: {
              points: 151,
              time: 1636189839,
            },
            entrance: {
              points: 104,
              time: 1636208400,
            },
            floorsa: {
              points: 178,
              time: 1636191243,
            },
            intersection: {
              points: 226,
              time: 1636213798,
            },
          },
          team_id: 4055297429,
          last_submission: 1636213798,
        },
        {
          pos: 24,
          team: "DLC",
          country: "US",
          score: 925,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636234829,
            },
            Welcome: {
              points: 66,
              time: 1636167793,
            },
            dlppp: {
              points: 151,
              time: 1636172602,
            },
            entrance: {
              points: 104,
              time: 1636227594,
            },
            floorsa: {
              points: 178,
              time: 1636175673,
            },
            intersection: {
              points: 226,
              time: 1636222259,
            },
          },
          team_id: 1976801730,
          last_submission: 1636234829,
        },
        {
          pos: 25,
          team: "Weak But Leet",
          country: "",
          score: 850,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636180193,
            },
            Survey: {
              points: 91,
              time: 1636197240,
            },
            Welcome: {
              points: 66,
              time: 1636171885,
            },
            entrance: {
              points: 104,
              time: 1636174407,
            },
            httpsaba: {
              points: 239,
              time: 1636186095,
            },
            padnote: {
              points: 239,
              time: 1636194107,
            },
          },
          team_id: 2759966904,
          last_submission: 1636194107,
        },
        {
          pos: 26,
          team: "Zzer0",
          country: "CN",
          score: 850,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636181178,
            },
            Survey: {
              points: 91,
              time: 1636201368,
            },
            Welcome: {
              points: 66,
              time: 1636205994,
            },
            entrance: {
              points: 104,
              time: 1636206726,
            },
            httpsaba: {
              points: 239,
              time: 1636200645,
            },
            padnote: {
              points: 239,
              time: 1636187784,
            },
          },
          team_id: 2093620421,
          last_submission: 1636206726,
        },
        {
          pos: 27,
          team: "traP",
          country: "JP",
          score: 810,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636180753,
            },
            Roda: {
              points: 200,
              time: 1636189559,
            },
            Welcome: {
              points: 66,
              time: 1636181642,
            },
            dlppp: {
              points: 151,
              time: 1636181597,
            },
            entrance: {
              points: 104,
              time: 1636187387,
            },
            floorsa: {
              points: 178,
              time: 1636182578,
            },
          },
          team_id: 3621645696,
          last_submission: 1636189559,
        },
        {
          pos: 28,
          team: "xof5566",
          country: "TW",
          score: 801,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636215127,
            },
            Survey: {
              points: 91,
              time: 1636215344,
            },
            Welcome: {
              points: 66,
              time: 1636215249,
            },
            entrance: {
              points: 104,
              time: 1636211844,
            },
            pugpug: {
              points: 340,
              time: 1636210599,
            },
          },
          team_id: 2973741978,
          last_submission: 1636215249,
        },
        {
          pos: 29,
          team: "Bruh",
          country: "US",
          score: 781,
          taskStats: {
            "SSSS.RNG": {
              points: 226,
              time: 1636238214,
            },
            dlppp: {
              points: 151,
              time: 1636212967,
            },
            floorsa: {
              points: 178,
              time: 1636217066,
            },
            intersection: {
              points: 226,
              time: 1636211453,
            },
          },
          team_id: 1726847822,
          last_submission: 1636238214,
        },
        {
          pos: 30,
          team: "Nupakachi",
          country: "VN",
          score: 759,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636188697,
            },
            Welcome: {
              points: 66,
              time: 1636179866,
            },
            entrance: {
              points: 104,
              time: 1636179473,
            },
            httpsaba: {
              points: 239,
              time: 1636251828,
            },
            padnote: {
              points: 239,
              time: 1636249469,
            },
          },
          team_id: 3047485153,
          last_submission: 1636251828,
        },
        {
          pos: 31,
          team: "JustMe",
          country: "US",
          score: 716,
          taskStats: {
            "ECC-RSA 2": {
              points: 304,
              time: 1636205325,
            },
            Survey: {
              points: 91,
              time: 1636252441,
            },
            Welcome: {
              points: 66,
              time: 1636200761,
            },
            dlppp: {
              points: 151,
              time: 1636179056,
            },
            entrance: {
              points: 104,
              time: 1636203038,
            },
          },
          team_id: 983991622,
          last_submission: 1636205325,
        },
        {
          pos: 32,
          team: "byc_404",
          country: "",
          score: 710,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636186306,
            },
            Welcome: {
              points: 66,
              time: 1636186372,
            },
            entrance: {
              points: 104,
              time: 1636186338,
            },
            pugpug: {
              points: 340,
              time: 1636208293,
            },
          },
          team_id: 3896971770,
          last_submission: 1636208293,
        },
        {
          pos: 33,
          team: "N4N",
          country: "CN",
          score: 701,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636193304,
            },
            Survey: {
              points: 91,
              time: 1636190260,
            },
            Welcome: {
              points: 66,
              time: 1636178709,
            },
            dlppp: {
              points: 151,
              time: 1636192199,
            },
            entrance: {
              points: 104,
              time: 1636212381,
            },
            floorsa: {
              points: 178,
              time: 1636184902,
            },
          },
          team_id: 1739062591,
          last_submission: 1636212381,
        },
        {
          pos: 34,
          team: "pain",
          country: "VN",
          score: 699,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636206237,
            },
            Welcome: {
              points: 66,
              time: 1636198067,
            },
            dlppp: {
              points: 151,
              time: 1636178774,
            },
            entrance: {
              points: 104,
              time: 1636173385,
            },
            floorsa: {
              points: 178,
              time: 1636199639,
            },
          },
          team_id: 1068142739,
          last_submission: 1636206237,
        },
        {
          pos: 35,
          team: "Wani Hackase",
          country: "JP",
          score: 638,
          taskStats: {
            "SSSS.RNG": {
              points: 226,
              time: 1636187374,
            },
            Survey: {
              points: 91,
              time: 1636190864,
            },
            Welcome: {
              points: 66,
              time: 1636167632,
            },
            dlppp: {
              points: 151,
              time: 1636173809,
            },
            entrance: {
              points: 104,
              time: 1636186535,
            },
          },
          team_id: 1403295035,
          last_submission: 1636187374,
        },
        {
          pos: 36,
          team: "zr0pts",
          country: "",
          score: 621,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636185004,
            },
            "BabyBOF:SBX": {
              points: 340,
              time: 1636224448,
            },
            Welcome: {
              points: 66,
              time: 1636181680,
            },
            entrance: {
              points: 104,
              time: 1636190148,
            },
          },
          team_id: 2813555526,
          last_submission: 1636224448,
        },
        {
          pos: 37,
          team: "n03tAck",
          country: "CN",
          score: 598,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636175103,
            },
            Survey: {
              points: 91,
              time: 1636196323,
            },
            Welcome: {
              points: 66,
              time: 1636167708,
            },
            entrance: {
              points: 104,
              time: 1636173126,
            },
            intersection: {
              points: 226,
              time: 1636175246,
            },
          },
          team_id: 3338287823,
          last_submission: 1636175246,
        },
        {
          pos: 38,
          team: "SaturnX",
          country: "KR",
          score: 572,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636168102,
            },
            Roda: {
              points: 200,
              time: 1636179303,
            },
            Survey: {
              points: 91,
              time: 1636200484,
            },
            Welcome: {
              points: 66,
              time: 1636167642,
            },
            entrance: {
              points: 104,
              time: 1636168627,
            },
          },
          team_id: 1939124177,
          last_submission: 1636179303,
        },
        {
          pos: 39,
          team: "KUDoS",
          country: "JP",
          score: 572,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636181560,
            },
            Roda: {
              points: 200,
              time: 1636175564,
            },
            Survey: {
              points: 91,
              time: 1636200954,
            },
            Welcome: {
              points: 66,
              time: 1636169195,
            },
            entrance: {
              points: 104,
              time: 1636170390,
            },
          },
          team_id: 622903063,
          last_submission: 1636181560,
        },
        {
          pos: 40,
          team: "\\/(54",
          country: "VN",
          score: 572,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636175741,
            },
            Roda: {
              points: 200,
              time: 1636253817,
            },
            Survey: {
              points: 91,
              time: 1636227047,
            },
            Welcome: {
              points: 66,
              time: 1636190514,
            },
            entrance: {
              points: 104,
              time: 1636170072,
            },
          },
          team_id: 2096971403,
          last_submission: 1636253817,
        },
        {
          pos: 41,
          team: "wiwam845",
          country: "",
          score: 555,
          taskStats: {
            "SSSS.RNG": {
              points: 226,
              time: 1636215006,
            },
            dlppp: {
              points: 151,
              time: 1636214986,
            },
            floorsa: {
              points: 178,
              time: 1636214996,
            },
          },
          team_id: 873809443,
          last_submission: 1636215006,
        },
        {
          pos: 42,
          team: "Ph0en1x",
          country: "CN",
          score: 523,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636183526,
            },
            Survey: {
              points: 91,
              time: 1636191334,
            },
            Welcome: {
              points: 66,
              time: 1636176583,
            },
            dlppp: {
              points: 151,
              time: 1636192399,
            },
            entrance: {
              points: 104,
              time: 1636176042,
            },
          },
          team_id: 3146712183,
          last_submission: 1636192399,
        },
        {
          pos: 43,
          team: "Red Knights",
          country: "IN",
          score: 523,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636172947,
            },
            Survey: {
              points: 91,
              time: 1636191831,
            },
            Welcome: {
              points: 66,
              time: 1636172340,
            },
            dlppp: {
              points: 151,
              time: 1636201338,
            },
            entrance: {
              points: 104,
              time: 1636171303,
            },
          },
          team_id: 2395038263,
          last_submission: 1636201338,
        },
        {
          pos: 44,
          team: "0x62EEN7EA",
          country: "JP",
          score: 523,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636176174,
            },
            Survey: {
              points: 91,
              time: 1636226784,
            },
            Welcome: {
              points: 66,
              time: 1636168180,
            },
            dlppp: {
              points: 151,
              time: 1636207001,
            },
            entrance: {
              points: 104,
              time: 1636178505,
            },
          },
          team_id: 882611146,
          last_submission: 1636207001,
        },
        {
          pos: 45,
          team: "OurHeung",
          country: "KR",
          score: 523,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636219576,
            },
            Survey: {
              points: 91,
              time: 1636204372,
            },
            Welcome: {
              points: 66,
              time: 1636167945,
            },
            dlppp: {
              points: 151,
              time: 1636177775,
            },
            entrance: {
              points: 104,
              time: 1636202051,
            },
          },
          team_id: 867055920,
          last_submission: 1636219576,
        },
        {
          pos: 46,
          team: "5upernova",
          country: "CN",
          score: 523,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636247037,
            },
            Survey: {
              points: 91,
              time: 1636197779,
            },
            Welcome: {
              points: 66,
              time: 1636195201,
            },
            dlppp: {
              points: 151,
              time: 1636251644,
            },
            entrance: {
              points: 104,
              time: 1636197682,
            },
          },
          team_id: 1180065274,
          last_submission: 1636251644,
        },
        {
          pos: 47,
          team: "CodeNames",
          country: "IL",
          score: 461,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636237042,
            },
            Survey: {
              points: 91,
              time: 1636210910,
            },
            Welcome: {
              points: 66,
              time: 1636209794,
            },
            entrance: {
              points: 104,
              time: 1636213728,
            },
          },
          team_id: 4074013277,
          last_submission: 1636237042,
        },
        {
          pos: 48,
          team: "ShroomZ",
          country: "PL",
          score: 454,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636193826,
            },
            entrance: {
              points: 104,
              time: 1636197441,
            },
            httpsaba: {
              points: 239,
              time: 1636243731,
            },
          },
          team_id: 3039301393,
          last_submission: 1636243731,
        },
        {
          pos: 49,
          team: "1nf1n1ty",
          country: "IN",
          score: 419,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636210005,
            },
            Survey: {
              points: 91,
              time: 1636197924,
            },
            Welcome: {
              points: 66,
              time: 1636167823,
            },
            dlppp: {
              points: 151,
              time: 1636175744,
            },
          },
          team_id: 4168588043,
          last_submission: 1636210005,
        },
        {
          pos: 50,
          team: "m1z0r3",
          country: "JP",
          score: 419,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636212015,
            },
            Survey: {
              points: 91,
              time: 1636252573,
            },
            Welcome: {
              points: 66,
              time: 1636168774,
            },
            dlppp: {
              points: 151,
              time: 1636168647,
            },
          },
          team_id: 2593291415,
          last_submission: 1636212015,
        },
        {
          pos: 51,
          team: "SSF",
          country: "KR",
          score: 416,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636169604,
            },
            Welcome: {
              points: 66,
              time: 1636168297,
            },
            padnote: {
              points: 239,
              time: 1636191021,
            },
          },
          team_id: 3492209313,
          last_submission: 1636191021,
        },
        {
          pos: 52,
          team: "whateverittakes",
          country: "IT",
          score: 416,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636196662,
            },
            Welcome: {
              points: 66,
              time: 1636216188,
            },
            httpsaba: {
              points: 239,
              time: 1636206249,
            },
          },
          team_id: 1673786134,
          last_submission: 1636216188,
        },
        {
          pos: 53,
          team: "dtl",
          country: "RU",
          score: 412,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636210549,
            },
            Welcome: {
              points: 66,
              time: 1636210252,
            },
            dlppp: {
              points: 151,
              time: 1636211531,
            },
            entrance: {
              points: 104,
              time: 1636209737,
            },
          },
          team_id: 3178544619,
          last_submission: 1636211531,
        },
        {
          pos: 54,
          team: "N30Z30N",
          country: "JP",
          score: 395,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168441,
            },
            dlppp: {
              points: 151,
              time: 1636167927,
            },
            floorsa: {
              points: 178,
              time: 1636185094,
            },
          },
          team_id: 2028804799,
          last_submission: 1636185094,
        },
        {
          pos: 55,
          team: "Shikataganai",
          country: "",
          score: 395,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636253969,
            },
            dlppp: {
              points: 151,
              time: 1636195138,
            },
            floorsa: {
              points: 178,
              time: 1636197443,
            },
          },
          team_id: 3505750332,
          last_submission: 1636253969,
        },
        {
          pos: 56,
          team: "BlackBird",
          country: "JP",
          score: 372,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636193502,
            },
            Survey: {
              points: 91,
              time: 1636194820,
            },
            Welcome: {
              points: 66,
              time: 1636167726,
            },
            entrance: {
              points: 104,
              time: 1636174042,
            },
          },
          team_id: 3192549727,
          last_submission: 1636193502,
        },
        {
          pos: 57,
          team: "H25",
          country: "ID",
          score: 372,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636177741,
            },
            Survey: {
              points: 91,
              time: 1636195607,
            },
            Welcome: {
              points: 66,
              time: 1636169118,
            },
            entrance: {
              points: 104,
              time: 1636194999,
            },
          },
          team_id: 2586139551,
          last_submission: 1636194999,
        },
        {
          pos: 58,
          team: "Jump2Flag",
          country: "FR",
          score: 372,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636177146,
            },
            Survey: {
              points: 91,
              time: 1636205919,
            },
            Welcome: {
              points: 66,
              time: 1636195868,
            },
            entrance: {
              points: 104,
              time: 1636193349,
            },
          },
          team_id: 3499120459,
          last_submission: 1636195868,
        },
        {
          pos: 59,
          team: "Capture the Swag",
          country: "AU",
          score: 372,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636183950,
            },
            Survey: {
              points: 91,
              time: 1636204663,
            },
            Welcome: {
              points: 66,
              time: 1636182847,
            },
            entrance: {
              points: 104,
              time: 1636204589,
            },
          },
          team_id: 113229465,
          last_submission: 1636204589,
        },
        {
          pos: 60,
          team: "fl4gs4b33rs",
          country: "",
          score: 372,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636198751,
            },
            Survey: {
              points: 91,
              time: 1636216225,
            },
            Welcome: {
              points: 66,
              time: 1636194642,
            },
            entrance: {
              points: 104,
              time: 1636215715,
            },
          },
          team_id: 3471078127,
          last_submission: 1636215715,
        },
        {
          pos: 61,
          team: "MoeCafe",
          country: "VN",
          score: 350,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636170098,
            },
            padnote: {
              points: 239,
              time: 1636201045,
            },
          },
          team_id: 3975109599,
          last_submission: 1636201045,
        },
        {
          pos: 62,
          team: "ssssss",
          country: "TW",
          score: 350,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636186323,
            },
            httpsaba: {
              points: 239,
              time: 1636224681,
            },
          },
          team_id: 2672811704,
          last_submission: 1636224681,
        },
        {
          pos: 63,
          team: "ec",
          country: "JP",
          score: 350,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636192010,
            },
            padnote: {
              points: 239,
              time: 1636248941,
            },
          },
          team_id: 1045701151,
          last_submission: 1636248941,
        },
        {
          pos: 64,
          team: "tyulpan",
          country: "UA",
          score: 308,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636230622,
            },
            Welcome: {
              points: 66,
              time: 1636205385,
            },
            dlppp: {
              points: 151,
              time: 1636207935,
            },
          },
          team_id: 2415564418,
          last_submission: 1636207935,
        },
        {
          pos: 65,
          team: "Underrated",
          country: "VN",
          score: 304,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636204127,
            },
            entrance: {
              points: 104,
              time: 1636182934,
            },
          },
          team_id: 2008624396,
          last_submission: 1636204127,
        },
        {
          pos: 66,
          team: "efiens",
          country: "VN",
          score: 281,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636183894,
            },
            Welcome: {
              points: 66,
              time: 1636169596,
            },
            entrance: {
              points: 104,
              time: 1636170640,
            },
          },
          team_id: 3272554389,
          last_submission: 1636183894,
        },
        {
          pos: 67,
          team: "K1mCh1W@rr10r",
          country: "KR",
          score: 281,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636188741,
            },
            Welcome: {
              points: 66,
              time: 1636170156,
            },
            entrance: {
              points: 104,
              time: 1636178426,
            },
          },
          team_id: 3346668497,
          last_submission: 1636188741,
        },
        {
          pos: 68,
          team: "TEAM0001",
          country: "GB",
          score: 281,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636206535,
            },
            Welcome: {
              points: 66,
              time: 1636195201,
            },
            entrance: {
              points: 104,
              time: 1636208622,
            },
          },
          team_id: 1398520620,
          last_submission: 1636208622,
        },
        {
          pos: 69,
          team: "tester",
          country: "VN",
          score: 281,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636236421,
            },
            Welcome: {
              points: 66,
              time: 1636176871,
            },
            entrance: {
              points: 104,
              time: 1636174157,
            },
          },
          team_id: 2355642345,
          last_submission: 1636236421,
        },
        {
          pos: 70,
          team: "m1t0",
          country: "JP",
          score: 268,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636183623,
            },
            Survey: {
              points: 91,
              time: 1636196854,
            },
            Welcome: {
              points: 66,
              time: 1636183773,
            },
          },
          team_id: 174986101,
          last_submission: 1636183773,
        },
        {
          pos: 71,
          team: "105",
          country: "TN",
          score: 268,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636196210,
            },
            Survey: {
              points: 91,
              time: 1636210217,
            },
            Welcome: {
              points: 66,
              time: 1636210087,
            },
          },
          team_id: 4179973424,
          last_submission: 1636210087,
        },
        {
          pos: 72,
          team: "TamilCTF",
          country: "IN",
          score: 268,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636210794,
            },
            Survey: {
              points: 91,
              time: 1636207261,
            },
            Welcome: {
              points: 66,
              time: 1636207302,
            },
          },
          team_id: 3872718519,
          last_submission: 1636210794,
        },
        {
          pos: 73,
          team: "ri5e",
          country: "AM",
          score: 268,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636216126,
            },
            Survey: {
              points: 91,
              time: 1636204219,
            },
            Welcome: {
              points: 66,
              time: 1636182801,
            },
          },
          team_id: 1548936822,
          last_submission: 1636216126,
        },
        {
          pos: 74,
          team: "0x0a",
          country: "DE",
          score: 268,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636217415,
            },
            Survey: {
              points: 91,
              time: 1636229221,
            },
            Welcome: {
              points: 66,
              time: 1636190969,
            },
          },
          team_id: 2506986509,
          last_submission: 1636217415,
        },
        {
          pos: 75,
          team: "noraneco",
          country: "JP",
          score: 268,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636244344,
            },
            Survey: {
              points: 91,
              time: 1636204426,
            },
            Welcome: {
              points: 66,
              time: 1636167947,
            },
          },
          team_id: 1112195614,
          last_submission: 1636244344,
        },
        {
          pos: 76,
          team: "Flaggermeister",
          country: "ES",
          score: 268,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636248158,
            },
            Survey: {
              points: 91,
              time: 1636199602,
            },
            Welcome: {
              points: 66,
              time: 1636199259,
            },
          },
          team_id: 853626162,
          last_submission: 1636248158,
        },
        {
          pos: 77,
          team: "datsoa",
          country: "IN",
          score: 266,
          taskStats: {
            Roda: {
              points: 200,
              time: 1636208857,
            },
            Welcome: {
              points: 66,
              time: 1636209223,
            },
          },
          team_id: 3242025157,
          last_submission: 1636209223,
        },
        {
          pos: 78,
          team: "satgate",
          country: "IQ",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636196488,
            },
            Welcome: {
              points: 66,
              time: 1636167673,
            },
            entrance: {
              points: 104,
              time: 1636172472,
            },
          },
          team_id: 1366395221,
          last_submission: 1636172472,
        },
        {
          pos: 79,
          team: "Cypher",
          country: "IN",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192233,
            },
            Welcome: {
              points: 66,
              time: 1636170396,
            },
            entrance: {
              points: 104,
              time: 1636174535,
            },
          },
          team_id: 3151208928,
          last_submission: 1636174535,
        },
        {
          pos: 80,
          team: "Hacking Help",
          country: "IN",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636196866,
            },
            Welcome: {
              points: 66,
              time: 1636171800,
            },
            entrance: {
              points: 104,
              time: 1636177054,
            },
          },
          team_id: 972005752,
          last_submission: 1636177054,
        },
        {
          pos: 81,
          team: "n00b3r",
          country: "VN",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636203418,
            },
            Welcome: {
              points: 66,
              time: 1636182919,
            },
            entrance: {
              points: 104,
              time: 1636183957,
            },
          },
          team_id: 259468897,
          last_submission: 1636183957,
        },
        {
          pos: 82,
          team: "SecCoder",
          country: "CN",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636189726,
            },
            Welcome: {
              points: 66,
              time: 1636176136,
            },
            entrance: {
              points: 104,
              time: 1636188174,
            },
          },
          team_id: 3250583928,
          last_submission: 1636188174,
        },
        {
          pos: 83,
          team: "UECTF",
          country: "JP",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636194346,
            },
            Welcome: {
              points: 66,
              time: 1636181851,
            },
            entrance: {
              points: 104,
              time: 1636195353,
            },
          },
          team_id: 1921236215,
          last_submission: 1636195353,
        },
        {
          pos: 84,
          team: "NIS",
          country: "JP",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636205391,
            },
            Welcome: {
              points: 66,
              time: 1636180262,
            },
            entrance: {
              points: 104,
              time: 1636214452,
            },
          },
          team_id: 2059953111,
          last_submission: 1636214452,
        },
        {
          pos: 85,
          team: "smol.ppt",
          country: "ZA",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636210651,
            },
            Welcome: {
              points: 66,
              time: 1636210585,
            },
            entrance: {
              points: 104,
              time: 1636216666,
            },
          },
          team_id: 2346546474,
          last_submission: 1636216666,
        },
        {
          pos: 86,
          team: "azki",
          country: "PH",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636218118,
            },
            Welcome: {
              points: 66,
              time: 1636168607,
            },
            entrance: {
              points: 104,
              time: 1636217871,
            },
          },
          team_id: 1725631347,
          last_submission: 1636217871,
        },
        {
          pos: 87,
          team: "The Imperium",
          country: "RU",
          score: 261,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636207557,
            },
            Welcome: {
              points: 66,
              time: 1636207110,
            },
            entrance: {
              points: 104,
              time: 1636229387,
            },
          },
          team_id: 3966291763,
          last_submission: 1636229387,
        },
        {
          pos: 88,
          team: "Practice",
          country: "IN",
          score: 244,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636201456,
            },
            floorsa: {
              points: 178,
              time: 1636201094,
            },
          },
          team_id: 1948909126,
          last_submission: 1636201456,
        },
        {
          pos: 89,
          team: "saluu",
          country: "VN",
          score: 217,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636178060,
            },
            dlppp: {
              points: 151,
              time: 1636212483,
            },
          },
          team_id: 2534886826,
          last_submission: 1636212483,
        },
        {
          pos: 90,
          team: "Yellow",
          country: "",
          score: 217,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636226349,
            },
            dlppp: {
              points: 151,
              time: 1636225998,
            },
          },
          team_id: 3382483827,
          last_submission: 1636226349,
        },
        {
          pos: 91,
          team: "guetsec",
          country: "CN",
          score: 215,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636216054,
            },
            entrance: {
              points: 104,
              time: 1636178526,
            },
          },
          team_id: 3319446585,
          last_submission: 1636216054,
        },
        {
          pos: 92,
          team: "AvenaQuaker",
          country: "",
          score: 215,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636182596,
            },
            entrance: {
              points: 104,
              time: 1636220114,
            },
          },
          team_id: 3477465534,
          last_submission: 1636220114,
        },
        {
          pos: 93,
          team: "i",
          country: "IN",
          score: 195,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192604,
            },
            entrance: {
              points: 104,
              time: 1636188525,
            },
          },
          team_id: 345769827,
          last_submission: 1636188525,
        },
        {
          pos: 94,
          team: "[  ]",
          country: "",
          score: 178,
          taskStats: {
            floorsa: {
              points: 178,
              time: 1636246456,
            },
          },
          team_id: 3182524107,
          last_submission: 1636246456,
        },
        {
          pos: 95,
          team: "讃州中学勇者部",
          country: "JP",
          score: 177,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636168436,
            },
            Welcome: {
              points: 66,
              time: 1636171786,
            },
          },
          team_id: 2700172517,
          last_submission: 1636171786,
        },
        {
          pos: 96,
          team: "C4C",
          country: "KR",
          score: 177,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636182422,
            },
            Welcome: {
              points: 66,
              time: 1636183173,
            },
          },
          team_id: 1381340366,
          last_submission: 1636183173,
        },
        {
          pos: 97,
          team: "acdwas",
          country: "PL",
          score: 177,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636201812,
            },
            Welcome: {
              points: 66,
              time: 1636200379,
            },
          },
          team_id: 3774532032,
          last_submission: 1636201812,
        },
        {
          pos: 98,
          team: "krzysztof1222",
          country: "PL",
          score: 177,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636207335,
            },
            Welcome: {
              points: 66,
              time: 1636207395,
            },
          },
          team_id: 3991741576,
          last_submission: 1636207395,
        },
        {
          pos: 99,
          team: "_N00b3R__",
          country: "IN",
          score: 177,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636218307,
            },
            Welcome: {
              points: 66,
              time: 1636209566,
            },
          },
          team_id: 578032760,
          last_submission: 1636218307,
        },
        {
          pos: 100,
          team: "IrisSec",
          country: "US",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168288,
            },
            entrance: {
              points: 104,
              time: 1636168581,
            },
          },
          team_id: 1145633420,
          last_submission: 1636168581,
        },
        {
          pos: 101,
          team: "visemo",
          country: "VN",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167634,
            },
            entrance: {
              points: 104,
              time: 1636172369,
            },
          },
          team_id: 2269318528,
          last_submission: 1636172369,
        },
        {
          pos: 102,
          team: "miku",
          country: "JP",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636172606,
            },
            entrance: {
              points: 104,
              time: 1636173260,
            },
          },
          team_id: 660195450,
          last_submission: 1636173260,
        },
        {
          pos: 103,
          team: "higota",
          country: "KR",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636170145,
            },
            entrance: {
              points: 104,
              time: 1636178713,
            },
          },
          team_id: 1045081418,
          last_submission: 1636178713,
        },
        {
          pos: 104,
          team: "ethan",
          country: "HK",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636177835,
            },
            entrance: {
              points: 104,
              time: 1636183965,
            },
          },
          team_id: 819208901,
          last_submission: 1636183965,
        },
        {
          pos: 105,
          team: "FEB",
          country: "ID",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636191916,
            },
            entrance: {
              points: 104,
              time: 1636191793,
            },
          },
          team_id: 186957549,
          last_submission: 1636191916,
        },
        {
          pos: 106,
          team: "mr_robot",
          country: "IN",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636184111,
            },
            entrance: {
              points: 104,
              time: 1636193318,
            },
          },
          team_id: 3430926056,
          last_submission: 1636193318,
        },
        {
          pos: 107,
          team: "🍣🐱‍🚀🍣",
          country: "JP",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636195685,
            },
            entrance: {
              points: 104,
              time: 1636197267,
            },
          },
          team_id: 2134836658,
          last_submission: 1636197267,
        },
        {
          pos: 108,
          team: "puchak",
          country: "IN",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636205502,
            },
            entrance: {
              points: 104,
              time: 1636215960,
            },
          },
          team_id: 2178523733,
          last_submission: 1636215960,
        },
        {
          pos: 109,
          team: "Ksa",
          country: "SA",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636221725,
            },
            entrance: {
              points: 104,
              time: 1636213190,
            },
          },
          team_id: 1347313875,
          last_submission: 1636221725,
        },
        {
          pos: 110,
          team: "MonkOnMars",
          country: "MY",
          score: 170,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636228036,
            },
            entrance: {
              points: 104,
              time: 1636233592,
            },
          },
          team_id: 3632724317,
          last_submission: 1636233592,
        },
        {
          pos: 111,
          team: "blockchain",
          country: "US",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636212654,
            },
            Welcome: {
              points: 66,
              time: 1636167625,
            },
          },
          team_id: 2960658274,
          last_submission: 1636167625,
        },
        {
          pos: 112,
          team: "JRP",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636193810,
            },
            Welcome: {
              points: 66,
              time: 1636167867,
            },
          },
          team_id: 3738361639,
          last_submission: 1636167867,
        },
        {
          pos: 113,
          team: "[418]TeapotTeam",
          country: "FR",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636196465,
            },
            Welcome: {
              points: 66,
              time: 1636167900,
            },
          },
          team_id: 973272136,
          last_submission: 1636167900,
        },
        {
          pos: 114,
          team: "aj_hack",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636191681,
            },
            Welcome: {
              points: 66,
              time: 1636168345,
            },
          },
          team_id: 4003734013,
          last_submission: 1636168345,
        },
        {
          pos: 115,
          team: "H@ck3r9!rl",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636207079,
            },
            Welcome: {
              points: 66,
              time: 1636168396,
            },
          },
          team_id: 3220933017,
          last_submission: 1636168396,
        },
        {
          pos: 116,
          team: "BOISQWERTY",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636252735,
            },
            Welcome: {
              points: 66,
              time: 1636168874,
            },
          },
          team_id: 1459020183,
          last_submission: 1636168874,
        },
        {
          pos: 117,
          team: "TechLovers",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636193353,
            },
            Welcome: {
              points: 66,
              time: 1636169210,
            },
          },
          team_id: 3085754517,
          last_submission: 1636169210,
        },
        {
          pos: 118,
          team: "xSpark",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636199092,
            },
            Welcome: {
              points: 66,
              time: 1636169216,
            },
          },
          team_id: 807108695,
          last_submission: 1636169216,
        },
        {
          pos: 119,
          team: "Moriya101",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192042,
            },
            Welcome: {
              points: 66,
              time: 1636169687,
            },
          },
          team_id: 332378111,
          last_submission: 1636169687,
        },
        {
          pos: 120,
          team: "Exodus",
          country: "RU",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636202425,
            },
            Welcome: {
              points: 66,
              time: 1636171284,
            },
          },
          team_id: 507445937,
          last_submission: 1636171284,
        },
        {
          pos: 121,
          team: "BitBuster",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636190592,
            },
            Welcome: {
              points: 66,
              time: 1636171364,
            },
          },
          team_id: 3010620646,
          last_submission: 1636171364,
        },
        {
          pos: 122,
          team: "Wayf4r3rs",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636213912,
            },
            Welcome: {
              points: 66,
              time: 1636171370,
            },
          },
          team_id: 3246974543,
          last_submission: 1636171370,
        },
        {
          pos: 123,
          team: "Knight Squad",
          country: "BD",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636208535,
            },
            Welcome: {
              points: 66,
              time: 1636172329,
            },
          },
          team_id: 1359305130,
          last_submission: 1636172329,
        },
        {
          pos: 124,
          team: "Reloaded",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636213717,
            },
            Welcome: {
              points: 66,
              time: 1636172588,
            },
          },
          team_id: 1601893875,
          last_submission: 1636172588,
        },
        {
          pos: 125,
          team: "h4xt3r_0ffic4l",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636203707,
            },
            Welcome: {
              points: 66,
              time: 1636174835,
            },
          },
          team_id: 3210318901,
          last_submission: 1636174835,
        },
        {
          pos: 126,
          team: "Parakram",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192825,
            },
            Welcome: {
              points: 66,
              time: 1636175950,
            },
          },
          team_id: 2749407841,
          last_submission: 1636175950,
        },
        {
          pos: 127,
          team: "Congo",
          country: "",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636226345,
            },
            Welcome: {
              points: 66,
              time: 1636177027,
            },
          },
          team_id: 2659660501,
          last_submission: 1636177027,
        },
        {
          pos: 128,
          team: "joyuriz",
          country: "PH",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636224461,
            },
            Welcome: {
              points: 66,
              time: 1636177060,
            },
          },
          team_id: 2344151863,
          last_submission: 1636177060,
        },
        {
          pos: 129,
          team: "Federal_Bonk_Investigations",
          country: "BD",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636247262,
            },
            Welcome: {
              points: 66,
              time: 1636180261,
            },
          },
          team_id: 1852641254,
          last_submission: 1636180261,
        },
        {
          pos: 130,
          team: "0x9747",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636199367,
            },
            Welcome: {
              points: 66,
              time: 1636180970,
            },
          },
          team_id: 3869978104,
          last_submission: 1636180970,
        },
        {
          pos: 131,
          team: "CYCLONE",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636233811,
            },
            Welcome: {
              points: 66,
              time: 1636183882,
            },
          },
          team_id: 3819635610,
          last_submission: 1636183882,
        },
        {
          pos: 132,
          team: "T3N4CI0US",
          country: "KR",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192930,
            },
            Welcome: {
              points: 66,
              time: 1636187010,
            },
          },
          team_id: 36426655,
          last_submission: 1636187010,
        },
        {
          pos: 133,
          team: "TeamMahi",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636190133,
            },
            Welcome: {
              points: 66,
              time: 1636187134,
            },
          },
          team_id: 2751196234,
          last_submission: 1636187134,
        },
        {
          pos: 134,
          team: "secta",
          country: "RU",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636228948,
            },
            Welcome: {
              points: 66,
              time: 1636187155,
            },
          },
          team_id: 1925081894,
          last_submission: 1636187155,
        },
        {
          pos: 135,
          team: "0xRoot",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636198194,
            },
            Welcome: {
              points: 66,
              time: 1636187549,
            },
          },
          team_id: 265674100,
          last_submission: 1636187549,
        },
        {
          pos: 136,
          team: "PeakyBlinders",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636193757,
            },
            Welcome: {
              points: 66,
              time: 1636187713,
            },
          },
          team_id: 1048880857,
          last_submission: 1636187713,
        },
        {
          pos: 137,
          team: "SubUrban",
          country: "ES",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636195179,
            },
            Welcome: {
              points: 66,
              time: 1636188109,
            },
          },
          team_id: 2737646122,
          last_submission: 1636188109,
        },
        {
          pos: 138,
          team: "3331",
          country: "DE",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636189576,
            },
            Welcome: {
              points: 66,
              time: 1636189656,
            },
          },
          team_id: 2284462457,
          last_submission: 1636189656,
        },
        {
          pos: 139,
          team: "I'm a teapot",
          country: "PK",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192130,
            },
            Welcome: {
              points: 66,
              time: 1636189743,
            },
          },
          team_id: 1829063269,
          last_submission: 1636189743,
        },
        {
          pos: 140,
          team: "GUN",
          country: "RU",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636222949,
            },
            Welcome: {
              points: 66,
              time: 1636190197,
            },
          },
          team_id: 2956914945,
          last_submission: 1636190197,
        },
        {
          pos: 141,
          team: "potatoes",
          country: "MY",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192486,
            },
            Welcome: {
              points: 66,
              time: 1636190916,
            },
          },
          team_id: 3374100332,
          last_submission: 1636190916,
        },
        {
          pos: 142,
          team: "/bin/chicken",
          country: "AU",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636192115,
            },
            Welcome: {
              points: 66,
              time: 1636192143,
            },
          },
          team_id: 2457235057,
          last_submission: 1636192143,
        },
        {
          pos: 143,
          team: "Esoteric",
          country: "TH",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636208138,
            },
            Welcome: {
              points: 66,
              time: 1636192964,
            },
          },
          team_id: 908442783,
          last_submission: 1636192964,
        },
        {
          pos: 144,
          team: "Tipiak",
          country: "FR",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636197404,
            },
            Welcome: {
              points: 66,
              time: 1636193542,
            },
          },
          team_id: 1663131742,
          last_submission: 1636193542,
        },
        {
          pos: 145,
          team: "OnlyFeet",
          country: "US",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636193630,
            },
            Welcome: {
              points: 66,
              time: 1636193584,
            },
          },
          team_id: 3854859085,
          last_submission: 1636193584,
        },
        {
          pos: 146,
          team: "ducks0ci3ty",
          country: "",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636196996,
            },
            Welcome: {
              points: 66,
              time: 1636194518,
            },
          },
          team_id: 1346778000,
          last_submission: 1636194518,
        },
        {
          pos: 147,
          team: "cyberbangla",
          country: "BD",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636196749,
            },
            Welcome: {
              points: 66,
              time: 1636196344,
            },
          },
          team_id: 1387280916,
          last_submission: 1636196344,
        },
        {
          pos: 148,
          team: "Learners_",
          country: "",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636196320,
            },
            Welcome: {
              points: 66,
              time: 1636196470,
            },
          },
          team_id: 2256720649,
          last_submission: 1636196470,
        },
        {
          pos: 149,
          team: "D4rkM0d3",
          country: "VN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636198426,
            },
            Welcome: {
              points: 66,
              time: 1636198486,
            },
          },
          team_id: 2193738324,
          last_submission: 1636198486,
        },
        {
          pos: 150,
          team: "MTMzN25vb2Jz",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636199224,
            },
            Welcome: {
              points: 66,
              time: 1636199121,
            },
          },
          team_id: 786119574,
          last_submission: 1636199121,
        },
        {
          pos: 151,
          team: "NewLine",
          country: "RO",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636209999,
            },
            Welcome: {
              points: 66,
              time: 1636200102,
            },
          },
          team_id: 3082095667,
          last_submission: 1636200102,
        },
        {
          pos: 152,
          team: "Shreyansh0x01",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636200929,
            },
            Welcome: {
              points: 66,
              time: 1636200712,
            },
          },
          team_id: 3166241054,
          last_submission: 1636200712,
        },
        {
          pos: 153,
          team: "Hunter’s Fury",
          country: "BD",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636203196,
            },
            Welcome: {
              points: 66,
              time: 1636202529,
            },
          },
          team_id: 1739647002,
          last_submission: 1636202529,
        },
        {
          pos: 154,
          team: "N0000B",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636201868,
            },
            Welcome: {
              points: 66,
              time: 1636202780,
            },
          },
          team_id: 2665403067,
          last_submission: 1636202780,
        },
        {
          pos: 155,
          team: "BawaH98",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636219470,
            },
            Welcome: {
              points: 66,
              time: 1636208089,
            },
          },
          team_id: 3168754783,
          last_submission: 1636208089,
        },
        {
          pos: 156,
          team: "/upb/hack",
          country: "DE",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636208504,
            },
            Welcome: {
              points: 66,
              time: 1636208522,
            },
          },
          team_id: 3059958433,
          last_submission: 1636208522,
        },
        {
          pos: 157,
          team: "Cyber Ghosts",
          country: "BD",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636209856,
            },
            Welcome: {
              points: 66,
              time: 1636209328,
            },
          },
          team_id: 139287741,
          last_submission: 1636209328,
        },
        {
          pos: 158,
          team: "nexus",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636211337,
            },
            Welcome: {
              points: 66,
              time: 1636209872,
            },
          },
          team_id: 1974864609,
          last_submission: 1636209872,
        },
        {
          pos: 159,
          team: "Asmodeus",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636213154,
            },
            Welcome: {
              points: 66,
              time: 1636212819,
            },
          },
          team_id: 3909385811,
          last_submission: 1636212819,
        },
        {
          pos: 160,
          team: "blackend",
          country: "TH",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636212953,
            },
            Welcome: {
              points: 66,
              time: 1636213123,
            },
          },
          team_id: 1656670824,
          last_submission: 1636213123,
        },
        {
          pos: 161,
          team: "vikrantbatra05",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636214032,
            },
            Welcome: {
              points: 66,
              time: 1636213824,
            },
          },
          team_id: 3902253471,
          last_submission: 1636213824,
        },
        {
          pos: 162,
          team: "CyberSpace",
          country: "",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636214505,
            },
            Welcome: {
              points: 66,
              time: 1636214530,
            },
          },
          team_id: 3191773525,
          last_submission: 1636214530,
        },
        {
          pos: 163,
          team: "Slab Allocator",
          country: "IT",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636216167,
            },
            Welcome: {
              points: 66,
              time: 1636217415,
            },
          },
          team_id: 1078066185,
          last_submission: 1636217415,
        },
        {
          pos: 164,
          team: "BackMoon",
          country: "UG",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636224233,
            },
            Welcome: {
              points: 66,
              time: 1636220947,
            },
          },
          team_id: 3777984699,
          last_submission: 1636220947,
        },
        {
          pos: 165,
          team: "Xephyrus",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636225518,
            },
            Welcome: {
              points: 66,
              time: 1636225643,
            },
          },
          team_id: 303884082,
          last_submission: 1636225643,
        },
        {
          pos: 166,
          team: "PatagoniaHack",
          country: "AR",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636235786,
            },
            Welcome: {
              points: 66,
              time: 1636232959,
            },
          },
          team_id: 2096083613,
          last_submission: 1636232959,
        },
        {
          pos: 167,
          team: "HB_SK",
          country: "BD",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636240576,
            },
            Welcome: {
              points: 66,
              time: 1636240075,
            },
          },
          team_id: 1398943354,
          last_submission: 1636240075,
        },
        {
          pos: 168,
          team: "hak1mlukha",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636240601,
            },
            Welcome: {
              points: 66,
              time: 1636240465,
            },
          },
          team_id: 3242857836,
          last_submission: 1636240465,
        },
        {
          pos: 169,
          team: "meltdown",
          country: "MX",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636242392,
            },
            Welcome: {
              points: 66,
              time: 1636242023,
            },
          },
          team_id: 1011202775,
          last_submission: 1636242023,
        },
        {
          pos: 170,
          team: "stankc",
          country: "HR",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636249918,
            },
            Welcome: {
              points: 66,
              time: 1636249829,
            },
          },
          team_id: 2665408067,
          last_submission: 1636249829,
        },
        {
          pos: 171,
          team: "deepakp9757",
          country: "IN",
          score: 157,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636253822,
            },
            Welcome: {
              points: 66,
              time: 1636253130,
            },
          },
          team_id: 69620785,
          last_submission: 1636253130,
        },
        {
          pos: 172,
          team: "pcspcs@21cn.com",
          country: "",
          score: 151,
          taskStats: {
            dlppp: {
              points: 151,
              time: 1636188260,
            },
          },
          team_id: 705094065,
          last_submission: 1636188260,
        },
        {
          pos: 173,
          team: "binExplorer",
          country: "US",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636169106,
            },
          },
          team_id: 3253676919,
          last_submission: 1636169106,
        },
        {
          pos: 174,
          team: "16j",
          country: "CN",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636173587,
            },
          },
          team_id: 2657819930,
          last_submission: 1636173587,
        },
        {
          pos: 175,
          team: "PwN_3v3rY7h1nG",
          country: "VN",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636175333,
            },
          },
          team_id: 3674451148,
          last_submission: 1636175333,
        },
        {
          pos: 176,
          team: "Leak Challenge",
          country: "VN",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636177570,
            },
          },
          team_id: 775534884,
          last_submission: 1636177570,
        },
        {
          pos: 177,
          team: "NAVER Cloud",
          country: "KR",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636177774,
            },
          },
          team_id: 2081766852,
          last_submission: 1636177774,
        },
        {
          pos: 178,
          team: "etc2020",
          country: "SG",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636184411,
            },
          },
          team_id: 3339996365,
          last_submission: 1636184411,
        },
        {
          pos: 179,
          team: "lexsd6",
          country: "TW",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636185435,
            },
          },
          team_id: 1730531735,
          last_submission: 1636185435,
        },
        {
          pos: 180,
          team: "kisaragi",
          country: "JP",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636187361,
            },
          },
          team_id: 3458480292,
          last_submission: 1636187361,
        },
        {
          pos: 181,
          team: "TeamSharky",
          country: "IN",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636192546,
            },
          },
          team_id: 491928779,
          last_submission: 1636192546,
        },
        {
          pos: 182,
          team: "EchoSec",
          country: "CN",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636199755,
            },
          },
          team_id: 1427225631,
          last_submission: 1636199755,
        },
        {
          pos: 183,
          team: "Ph4nt0m_tr0up3",
          country: "VN",
          score: 111,
          taskStats: {
            "BabyBOF:RCE": {
              points: 111,
              time: 1636201069,
            },
          },
          team_id: 1658853301,
          last_submission: 1636201069,
        },
        {
          pos: 184,
          team: "PIS",
          country: "VN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636170468,
            },
          },
          team_id: 2336640453,
          last_submission: 1636170468,
        },
        {
          pos: 185,
          team: "Phantom",
          country: "IN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636174688,
            },
          },
          team_id: 3160756113,
          last_submission: 1636174688,
        },
        {
          pos: 186,
          team: "onlyWeb",
          country: "IN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636176869,
            },
          },
          team_id: 1788285842,
          last_submission: 1636176869,
        },
        {
          pos: 187,
          team: "tranvantrui097@gmail.com",
          country: "VN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636178634,
            },
          },
          team_id: 3882204788,
          last_submission: 1636178634,
        },
        {
          pos: 188,
          team: "BIT CRIMINALS",
          country: "IN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636180066,
            },
          },
          team_id: 3530739591,
          last_submission: 1636180066,
        },
        {
          pos: 189,
          team: "ninetynine",
          country: "IN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636186793,
            },
          },
          team_id: 4194126813,
          last_submission: 1636186793,
        },
        {
          pos: 190,
          team: "UnderDog",
          country: "VN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636187248,
            },
          },
          team_id: 885380306,
          last_submission: 1636187248,
        },
        {
          pos: 191,
          team: "aboba",
          country: "AF",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636203654,
            },
          },
          team_id: 3453710168,
          last_submission: 1636203654,
        },
        {
          pos: 192,
          team: "A5537",
          country: "RU",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636205770,
            },
          },
          team_id: 4112913692,
          last_submission: 1636205770,
        },
        {
          pos: 193,
          team: "helloworlds",
          country: "EG",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636216140,
            },
          },
          team_id: 4120948831,
          last_submission: 1636216140,
        },
        {
          pos: 194,
          team: "Slonser",
          country: "RU",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636217381,
            },
          },
          team_id: 2924359168,
          last_submission: 1636217381,
        },
        {
          pos: 195,
          team: "M1h4n1k",
          country: "RU",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636217990,
            },
          },
          team_id: 251258744,
          last_submission: 1636217990,
        },
        {
          pos: 196,
          team: "TryAgainDz",
          country: "DZ",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636220521,
            },
          },
          team_id: 3772775219,
          last_submission: 1636220521,
        },
        {
          pos: 197,
          team: "me_alone",
          country: "",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636229380,
            },
          },
          team_id: 384684839,
          last_submission: 1636229380,
        },
        {
          pos: 198,
          team: "2fast",
          country: "TN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636233752,
            },
          },
          team_id: 157802858,
          last_submission: 1636233752,
        },
        {
          pos: 199,
          team: "tachy0ne",
          country: "IN",
          score: 104,
          taskStats: {
            entrance: {
              points: 104,
              time: 1636235773,
            },
          },
          team_id: 3751957875,
          last_submission: 1636235773,
        },
        {
          pos: 200,
          team: "AccesDenieD",
          country: "KR",
          score: 91,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636194331,
            },
          },
          team_id: 1359990231,
          last_submission: 0,
        },
        {
          pos: 200,
          team: "TCTN",
          country: "CN",
          score: 91,
          taskStats: {
            Survey: {
              points: 91,
              time: 1636214282,
            },
          },
          team_id: 1886926175,
          last_submission: 0,
        },
        {
          pos: 202,
          team: "Sapp",
          country: "CN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167627,
            },
          },
          team_id: 2113234022,
          last_submission: 1636167627,
        },
        {
          pos: 203,
          team: "bl4ckp4r4d1s3",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167647,
            },
          },
          team_id: 830413516,
          last_submission: 1636167647,
        },
        {
          pos: 204,
          team: "sm1le",
          country: "VN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167701,
            },
          },
          team_id: 2576226177,
          last_submission: 1636167701,
        },
        {
          pos: 205,
          team: "HOAX",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167794,
            },
          },
          team_id: 683538886,
          last_submission: 1636167794,
        },
        {
          pos: 206,
          team: "a24",
          country: "JP",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167801,
            },
          },
          team_id: 454143327,
          last_submission: 1636167801,
        },
        {
          pos: 207,
          team: "Qub3icles",
          country: "BD",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167831,
            },
          },
          team_id: 3282792478,
          last_submission: 1636167831,
        },
        {
          pos: 208,
          team: "KXTI_SSGS",
          country: "RU",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167851,
            },
          },
          team_id: 3416608250,
          last_submission: 1636167851,
        },
        {
          pos: 209,
          team: "c0d3_h4cki05_",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636167939,
            },
          },
          team_id: 3271805176,
          last_submission: 1636167939,
        },
        {
          pos: 210,
          team: "Hacker Vaillant",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168003,
            },
          },
          team_id: 2120890133,
          last_submission: 1636168003,
        },
        {
          pos: 211,
          team: "dulceria",
          country: "CU",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168026,
            },
          },
          team_id: 1244107324,
          last_submission: 1636168026,
        },
        {
          pos: 212,
          team: "Neymar Jr",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168092,
            },
          },
          team_id: 2737362873,
          last_submission: 1636168092,
        },
        {
          pos: 213,
          team: "N0013",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168109,
            },
          },
          team_id: 529685877,
          last_submission: 1636168109,
        },
        {
          pos: 214,
          team: "SolarCAT",
          country: "",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168181,
            },
          },
          team_id: 2664004721,
          last_submission: 1636168181,
        },
        {
          pos: 215,
          team: "genin.team7",
          country: "US",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168217,
            },
          },
          team_id: 1912976133,
          last_submission: 1636168217,
        },
        {
          pos: 216,
          team: "devplusinfosec",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168424,
            },
          },
          team_id: 799832172,
          last_submission: 1636168424,
        },
        {
          pos: 217,
          team: "eternal noobs",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168453,
            },
          },
          team_id: 550127680,
          last_submission: 1636168453,
        },
        {
          pos: 218,
          team: "Hacker404",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168455,
            },
          },
          team_id: 1302342880,
          last_submission: 1636168455,
        },
        {
          pos: 219,
          team: "Hunt2behuntee",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168570,
            },
          },
          team_id: 3962255306,
          last_submission: 1636168570,
        },
        {
          pos: 220,
          team: "Team Qword",
          country: "VN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636168918,
            },
          },
          team_id: 2019423887,
          last_submission: 1636168918,
        },
        {
          pos: 221,
          team: "FSOCIETY00",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636169244,
            },
          },
          team_id: 266176777,
          last_submission: 1636169244,
        },
        {
          pos: 222,
          team: "SomeThing",
          country: "TO",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636169405,
            },
          },
          team_id: 3030418697,
          last_submission: 1636169405,
        },
        {
          pos: 223,
          team: "yu1hpa",
          country: "JP",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636169449,
            },
          },
          team_id: 2968091824,
          last_submission: 1636169449,
        },
        {
          pos: 224,
          team: "KartikeyVinayak",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636169703,
            },
          },
          team_id: 990935966,
          last_submission: 1636169703,
        },
        {
          pos: 225,
          team: "temp_Priv8corp",
          country: "FR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636170293,
            },
          },
          team_id: 205509429,
          last_submission: 1636170293,
        },
        {
          pos: 226,
          team: "DDLJ",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636170374,
            },
          },
          team_id: 4271675896,
          last_submission: 1636170374,
        },
        {
          pos: 227,
          team: "@CryptoH0x1",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636170928,
            },
          },
          team_id: 2639259878,
          last_submission: 1636170928,
        },
        {
          pos: 228,
          team: "BugEaters",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636171001,
            },
          },
          team_id: 164182415,
          last_submission: 1636171001,
        },
        {
          pos: 229,
          team: "atomicx001",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636171415,
            },
          },
          team_id: 311762328,
          last_submission: 1636171415,
        },
        {
          pos: 230,
          team: "GG-WP",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636171572,
            },
          },
          team_id: 2730068197,
          last_submission: 1636171572,
        },
        {
          pos: 231,
          team: "underdawgs",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636172448,
            },
          },
          team_id: 294686247,
          last_submission: 1636172448,
        },
        {
          pos: 232,
          team: "pakekoding",
          country: "ID",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636172750,
            },
          },
          team_id: 660582825,
          last_submission: 1636172750,
        },
        {
          pos: 233,
          team: "NoobHacker",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636172968,
            },
          },
          team_id: 1644835522,
          last_submission: 1636172968,
        },
        {
          pos: 234,
          team: "APT1337",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636173377,
            },
          },
          team_id: 1405498108,
          last_submission: 1636173377,
        },
        {
          pos: 235,
          team: "Pa0x73cal",
          country: "FR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636174033,
            },
          },
          team_id: 3417790035,
          last_submission: 1636174033,
        },
        {
          pos: 236,
          team: "Easter Eggs",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636174466,
            },
          },
          team_id: 3192224714,
          last_submission: 1636174466,
        },
        {
          pos: 237,
          team: "victorem",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636174532,
            },
          },
          team_id: 2518579009,
          last_submission: 1636174532,
        },
        {
          pos: 238,
          team: "Cipher0k",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636174805,
            },
          },
          team_id: 1785875874,
          last_submission: 1636174805,
        },
        {
          pos: 239,
          team: "Bugsters",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636174940,
            },
          },
          team_id: 3857893297,
          last_submission: 1636174940,
        },
        {
          pos: 240,
          team: "GSOD",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636175333,
            },
          },
          team_id: 515486577,
          last_submission: 1636175333,
        },
        {
          pos: 241,
          team: "Checker",
          country: "VN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636175403,
            },
          },
          team_id: 4229725661,
          last_submission: 1636175403,
        },
        {
          pos: 242,
          team: "h3ck3r",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636176282,
            },
          },
          team_id: 954346838,
          last_submission: 1636176282,
        },
        {
          pos: 243,
          team: "Ashes",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636176413,
            },
          },
          team_id: 2541664866,
          last_submission: 1636176413,
        },
        {
          pos: 244,
          team: "black_pearl",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636176496,
            },
          },
          team_id: 2176707971,
          last_submission: 1636176496,
        },
        {
          pos: 245,
          team: "Team Captain",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636176635,
            },
          },
          team_id: 1971152773,
          last_submission: 1636176635,
        },
        {
          pos: 246,
          team: "RimaL878",
          country: "MA",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636177251,
            },
          },
          team_id: 1441743395,
          last_submission: 1636177251,
        },
        {
          pos: 247,
          team: "Anyhow",
          country: "SG",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636177322,
            },
          },
          team_id: 3089574214,
          last_submission: 1636177322,
        },
        {
          pos: 248,
          team: "RPCA Cyber Club",
          country: "TH",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636177822,
            },
          },
          team_id: 2899701042,
          last_submission: 1636177822,
        },
        {
          pos: 249,
          team: "b3lug4_4nd_h3ck3r",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636177890,
            },
          },
          team_id: 2847332051,
          last_submission: 1636177890,
        },
        {
          pos: 250,
          team: "let's hack ",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636178207,
            },
          },
          team_id: 2964749799,
          last_submission: 1636178207,
        },
        {
          pos: 251,
          team: "Ravanan",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636178593,
            },
          },
          team_id: 850340116,
          last_submission: 1636178593,
        },
        {
          pos: 252,
          team: "shellpwn",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636178595,
            },
          },
          team_id: 2226060818,
          last_submission: 1636178595,
        },
        {
          pos: 253,
          team: "A1",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636179041,
            },
          },
          team_id: 1633830535,
          last_submission: 1636179041,
        },
        {
          pos: 254,
          team: "kgrzk",
          country: "JP",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636179373,
            },
          },
          team_id: 2635363621,
          last_submission: 1636179373,
        },
        {
          pos: 255,
          team: "KDS",
          country: "GT",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636180798,
            },
          },
          team_id: 2459555940,
          last_submission: 1636180798,
        },
        {
          pos: 256,
          team: "ShellSpider",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636182459,
            },
          },
          team_id: 2338804801,
          last_submission: 1636182459,
        },
        {
          pos: 257,
          team: "HugsForBugs",
          country: "",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636183386,
            },
          },
          team_id: 2684501590,
          last_submission: 1636183386,
        },
        {
          pos: 258,
          team: "Noobs",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636184124,
            },
          },
          team_id: 55898088,
          last_submission: 1636184124,
        },
        {
          pos: 259,
          team: "priyansh",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636184225,
            },
          },
          team_id: 3533288391,
          last_submission: 1636184225,
        },
        {
          pos: 260,
          team: "INDIA",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636184488,
            },
          },
          team_id: 2806140004,
          last_submission: 1636184488,
        },
        {
          pos: 261,
          team: "square_r00t",
          country: "BD",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636184991,
            },
          },
          team_id: 680423275,
          last_submission: 1636184991,
        },
        {
          pos: 262,
          team: "The White Rose",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636185116,
            },
          },
          team_id: 2328665335,
          last_submission: 1636185116,
        },
        {
          pos: 263,
          team: "sbstm",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636185141,
            },
          },
          team_id: 1310067364,
          last_submission: 1636185141,
        },
        {
          pos: 264,
          team: "just a team",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636185220,
            },
          },
          team_id: 1854906491,
          last_submission: 1636185220,
        },
        {
          pos: 265,
          team: "robots.txt",
          country: "BD",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636185384,
            },
          },
          team_id: 4080756232,
          last_submission: 1636185384,
        },
        {
          pos: 266,
          team: "macfarlane789@googlemail.com",
          country: "CR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636186856,
            },
          },
          team_id: 3302142500,
          last_submission: 1636186856,
        },
        {
          pos: 267,
          team: "betterway",
          country: "",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636186990,
            },
          },
          team_id: 3227021584,
          last_submission: 1636186990,
        },
        {
          pos: 268,
          team: "sicada",
          country: "AU",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636187829,
            },
          },
          team_id: 4203100656,
          last_submission: 1636187829,
        },
        {
          pos: 269,
          team: "h4ck7u5",
          country: "DE",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636189326,
            },
          },
          team_id: 2527902856,
          last_submission: 1636189326,
        },
        {
          pos: 270,
          team: "qwertyuio",
          country: "RO",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636189936,
            },
          },
          team_id: 850262999,
          last_submission: 1636189936,
        },
        {
          pos: 271,
          team: "Team VENOM",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636189961,
            },
          },
          team_id: 3042175664,
          last_submission: 1636189961,
        },
        {
          pos: 272,
          team: "legend",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636190475,
            },
          },
          team_id: 3448020889,
          last_submission: 1636190475,
        },
        {
          pos: 273,
          team: "TP_101",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636191792,
            },
          },
          team_id: 1842969155,
          last_submission: 1636191792,
        },
        {
          pos: 274,
          team: "Team 1337",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636191877,
            },
          },
          team_id: 255087058,
          last_submission: 1636191877,
        },
        {
          pos: 275,
          team: "s111",
          country: "IR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636194951,
            },
          },
          team_id: 1258668072,
          last_submission: 1636194951,
        },
        {
          pos: 276,
          team: "1nf053c80y",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636195082,
            },
          },
          team_id: 1355594742,
          last_submission: 1636195082,
        },
        {
          pos: 277,
          team: "legendkiller",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636196412,
            },
          },
          team_id: 730860615,
          last_submission: 1636196412,
        },
        {
          pos: 278,
          team: "brian kamikaze",
          country: "ID",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636196676,
            },
          },
          team_id: 1743832722,
          last_submission: 1636196676,
        },
        {
          pos: 279,
          team: "INDIVIUAL",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636197095,
            },
          },
          team_id: 1720320723,
          last_submission: 1636197095,
        },
        {
          pos: 280,
          team: "Dvirel",
          country: "IL",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636198338,
            },
          },
          team_id: 796116559,
          last_submission: 1636198338,
        },
        {
          pos: 281,
          team: "3H",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636198875,
            },
          },
          team_id: 1393464965,
          last_submission: 1636198875,
        },
        {
          pos: 282,
          team: "c0rp5",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636199110,
            },
          },
          team_id: 2968284995,
          last_submission: 1636199110,
        },
        {
          pos: 283,
          team: "Lazydexter",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636199726,
            },
          },
          team_id: 3503783282,
          last_submission: 1636199726,
        },
        {
          pos: 284,
          team: "bluehens",
          country: "US",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636199750,
            },
          },
          team_id: 3787737408,
          last_submission: 1636199750,
        },
        {
          pos: 285,
          team: "jeongwon119",
          country: "KR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636200816,
            },
          },
          team_id: 1685372857,
          last_submission: 1636200816,
        },
        {
          pos: 286,
          team: "WNS",
          country: "RU",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636200986,
            },
          },
          team_id: 4110172808,
          last_submission: 1636200986,
        },
        {
          pos: 287,
          team: "S4V4G3 H4CK3R",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636201790,
            },
          },
          team_id: 492437162,
          last_submission: 1636201790,
        },
        {
          pos: 288,
          team: "Godzilla",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636202306,
            },
          },
          team_id: 3839360136,
          last_submission: 1636202306,
        },
        {
          pos: 289,
          team: "fwf",
          country: "FR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636202810,
            },
          },
          team_id: 2180362545,
          last_submission: 1636202810,
        },
        {
          pos: 290,
          team: "nomnom",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636203672,
            },
          },
          team_id: 102638275,
          last_submission: 1636203672,
        },
        {
          pos: 291,
          team: "GGoverflow",
          country: "CA",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636203772,
            },
          },
          team_id: 1694837077,
          last_submission: 1636203772,
        },
        {
          pos: 292,
          team: "LamDyoMong",
          country: "KR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636203957,
            },
          },
          team_id: 3062839499,
          last_submission: 1636203957,
        },
        {
          pos: 293,
          team: "pseudorandom",
          country: "JP",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636207545,
            },
          },
          team_id: 2063513816,
          last_submission: 1636207545,
        },
        {
          pos: 294,
          team: "PenProphecy",
          country: "DE",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636208957,
            },
          },
          team_id: 2008587273,
          last_submission: 1636208957,
        },
        {
          pos: 295,
          team: "lulzash",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636209488,
            },
          },
          team_id: 3783969092,
          last_submission: 1636209488,
        },
        {
          pos: 296,
          team: "I5E",
          country: "JP",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636209692,
            },
          },
          team_id: 214878015,
          last_submission: 1636209692,
        },
        {
          pos: 297,
          team: "HackInSolo",
          country: "FR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636211321,
            },
          },
          team_id: 2049110878,
          last_submission: 1636211321,
        },
        {
          pos: 298,
          team: "UIT.W3",
          country: "VN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636211528,
            },
          },
          team_id: 3256157244,
          last_submission: 1636211528,
        },
        {
          pos: 299,
          team: "Soona Paana",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636214276,
            },
          },
          team_id: 2798646439,
          last_submission: 1636214276,
        },
        {
          pos: 300,
          team: "hambone",
          country: "US",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636215307,
            },
          },
          team_id: 2336387157,
          last_submission: 1636215307,
        },
        {
          pos: 301,
          team: "team_darkLord",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636215436,
            },
          },
          team_id: 3998456263,
          last_submission: 1636215436,
        },
        {
          pos: 302,
          team: "gruf",
          country: "US",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636217177,
            },
          },
          team_id: 1499378842,
          last_submission: 1636217177,
        },
        {
          pos: 303,
          team: "randoms",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636217689,
            },
          },
          team_id: 1347675455,
          last_submission: 1636217689,
        },
        {
          pos: 304,
          team: "karmic-folks",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636218549,
            },
          },
          team_id: 2227840579,
          last_submission: 1636218549,
        },
        {
          pos: 305,
          team: "letmein",
          country: "",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636220166,
            },
          },
          team_id: 3456005096,
          last_submission: 1636220166,
        },
        {
          pos: 306,
          team: "RandomTeam",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636220584,
            },
          },
          team_id: 13852655,
          last_submission: 1636220584,
        },
        {
          pos: 307,
          team: "TQI",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636220873,
            },
          },
          team_id: 425918709,
          last_submission: 1636220873,
        },
        {
          pos: 308,
          team: "χor",
          country: "FR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636221143,
            },
          },
          team_id: 4192674556,
          last_submission: 1636221143,
        },
        {
          pos: 309,
          team: "mravtechinfo",
          country: "IN",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636222869,
            },
          },
          team_id: 3959905709,
          last_submission: 1636222869,
        },
        {
          pos: 310,
          team: '\u003cscript\u003ealert("Ping")\u003c/script\u003e',
          country: "PL",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636224547,
            },
          },
          team_id: 3338147546,
          last_submission: 1636224547,
        },
        {
          pos: 311,
          team: "Yeonmi/\\_/\\- Solist",
          country: "NL",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636231040,
            },
          },
          team_id: 3447763286,
          last_submission: 1636231040,
        },
        {
          pos: 312,
          team: "T4ng0_t34m",
          country: "AR",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636231487,
            },
          },
          team_id: 985840763,
          last_submission: 1636231487,
        },
        {
          pos: 313,
          team: "1337Sec",
          country: "",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636238091,
            },
          },
          team_id: 1962296259,
          last_submission: 1636238091,
        },
        {
          pos: 314,
          team: "chin_ctf",
          country: "JP",
          score: 66,
          taskStats: {
            Welcome: {
              points: 66,
              time: 1636253172,
            },
          },
          team_id: 3161994786,
          last_submission: 1636253172,
        },
      ] as ScoreFeedEntry[]
  );

export default useScoreboard;
