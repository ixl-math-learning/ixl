const LocalGameEncoder = window.LocalGameEncoder || {
    createEncodedLink: function(path) {
        return path;
    }
};

function makeScramjetLink(url) {
    return '__SCRAMJET__' + url;
}
const gamesData = [
{
    title: "Roblox",
	ipcloak: false,
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCv-Adr-2z52bl4rbFKmjqwXfwLEyLFqfe-6lRD7ZP7HmtJKEmIpox6RJmXynlOMBee3c54B3YoeqNC_ilZfO8wOEaszdh9o8yL4TwY3cqm6QlNRX8WfPNcR5CsFGE38Ku4yKxfoniVUzS3952Z3ykY1eSZAyMQb5eMsA?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  makeScramjetLink("https://studyimages.com")
},
{
    title: "Agar.io",
    imgSrc: "/img/gameimg/Agario.png",
    link:  LocalGameEncoder.createEncodedLink("/local games/Agar.io/index.html")
},
{
    title: "Among us",
    imgSrc: "/img/gameimg/Amoungus.png",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamemonetize.co/luye5rleios737wp2o9wjq7h577gl937")
},
{
    title: "Slow Roads",
    imgSrc: "/img/gameimg/SlowRoads.png",
    link: LocalGameEncoder.createEncodedLink("/local games/slowroads/index.html")
},
{
    title: "Suika Game",
    imgSrc: "/img/gameimg/suikagame.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/watermelongame/index.html")
},
{
    title: "Moto X3M 1",
    imgSrc: "/img/gameimg/motox3m.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/motox3m1/index.html")
},
{
    title: "Moto X3M 2",
    imgSrc: "/img/gameimg/motox3m2.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/moto-x3m2/index.html")
},
{
    title: "Spacebar Clicker",
    imgSrc: "/img/gameimg/spacebarclicker.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/spacebarclicker/index.html")
},
{
    title: "Slope",
    imgSrc: "/img/gameimg/slopegame.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/slope-game-main/index.html")

},
{
    title: "Happy Wheels",
    imgSrc: "/img/gameimg/happywheels.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/happywheels-fixed/index.html")
},
{
    title: "G</x>un Mayhem",
    imgSrc: "/img/gameimg/gunmayhem.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/gunmayhem/index.html")
},
{
    title: "Snow Rider",
    imgSrc: "/img/gameimg/snowrider.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/snowrider3d/index.html")
},
{
    title: "Happy Glass",
    imgSrc: "/img/gameimg/happyglass.avif",
    link: LocalGameEncoder.createEncodedLink("/local games/happyfilledglass/lagged.com/api/play2/happy-glass6/index.html")
},
{
    title: "M</x>inec</x>raft",
    imgSrc: "/img/gameimg/minecraft.avif",
    link: LocalGameEncoder.createEncodedLink("/local games/Eaglercraft_1.12_Offline_en_US.html")
},
{
    title: "Dino Game",
    imgSrc: "/img/gameimg/dinogame.avif",
    link: LocalGameEncoder.createEncodedLink("/local games/dino/index.html")
},
{
    title: "BitLife",
    imgSrc: "/img/gameimg/bitlife.png",
    link: LocalGameEncoder.createEncodedLink("/local games/bitlife/index.html")
},
{
    title: "Cook</x>i</x>e Clic</x>ker",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAQjEx2at-wBokr69I4c06cSBDEGp8ieguMRKa5_HCB4ElwMLG5PCxIuMmeRNeF91B-9tGidfkRUMvzt7cvPOq9v9WOIw67UCcAVTTssI9x8A6zlTwpzdR5x_Z-PyVKmjh1ry8PYCk0uTegl6StH4Qv1Pvez5LEt6cfXw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Cookie Clicker.html"
},
{
    title: "Id</x>le Brea</x>kout",
    imgSrc: "/img/gameimg/idle-breakout-logo.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/idle-breakout-web/index.html")
},
{
    title: "Wordle Unlimited",
    imgSrc: "/img/gameimg/wordle.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/wordle/index.html")
},
{
    title: "Cu</x>t T</x>he R</x>ope",
    imgSrc: "/img/gameimg/CutTheRope.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/cuttherope/index.html")
},
{
    title: "Le</x>arn to F</x>ly",
    imgSrc: "https://image.spreadshirtmedia.com/image-server/v1/compositions/T812A1PA4267PT17X37Y50D11330543W27177H19067/views/1,width=500,height=500,appearanceId=1,backgroundColor=468bd2,noPt=true/learn-to-fly-mens-premium-t-shirt.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/learntofly/index.html")
},
{
    title: "Fireboy and Watergirl 1",
    imgSrc: "https://kizicdn.com/system/thumbs/big_tile_thumb/9/thumb300_FBWG1_300x300.jpg?1556198405",
    link: LocalGameEncoder.createEncodedLink("/local games/fireboywatergirl/index.html")
},
{
    title: "Mr. Mine",
    imgSrc: "/img/gameimg/mrmine.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/mr-mine/index.html")
},
{
    title: "Time Sho</x>oter 2",
    imgSrc: "/img/gameimg/TimeShooter2.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/timeshooter/index.html")
},
{
    title: "OvO",
    imgSrc: "/img/gameimg/OVO.png",
    link: LocalGameEncoder.createEncodedLink("/local games/ovo/index.html")
},
{
    title: "The Impossible Quiz",
    imgSrc: "/img/gameimg/theimpossiblequiz.png",
    link: LocalGameEncoder.createEncodedLink("/local games/theimpossiblequiz/index.html")
},
{
    title: "Tunnel Rush",
    imgSrc: "/img/gameimg/tunnelrush2.png",
    link: LocalGameEncoder.createEncodedLink("/local games/tunnelrush/index.html")
},
{
    title: "Vex 8",
    imgSrc: "/img/gameimg/vex8.png",
    link: LocalGameEncoder.createEncodedLink("/local games/vex7/index.html")
},
{
    title: "Rooftop Snipers",
    imgSrc: "/img/gameimg/rooftopsnipers.png",
    link: LocalGameEncoder.createEncodedLink("/local games/rooftopsnipers/index.html")
},
{
    title: "FNAF",
    imgSrc: "/img/gameimg/fnaf.png",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://run3.io/popgame/fnaf/fnaf1")
},
{
    title: "Neon Swing",
    imgSrc: "/img/gameimg/neonswing.png",
    link: LocalGameEncoder.createEncodedLink("/local games/stickman-hook/index.html")
},
{
    title: "Basketball Stars",
    imgSrc: "/img/gameimg/basketballstars.png",
    link: LocalGameEncoder.createEncodedLink("/local games/basketball-stars/index.html")
},
{
    title: "FNAF 2",
    imgSrc: "/img/gameimg/fnaf2.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/fnaf2/index.html")
},
{
    title: "FNAF 3",
    imgSrc: "/img/gameimg/fnaf3.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/fnaf3/index.html")
},
{
    title: "FNAF 4",
    imgSrc: "/img/gameimg/fnaf4.webp",
    link: LocalGameEncoder.createEncodedLink("/local games/fnaf4/index.html")
},
{
    title: "Monkey Mart",
    imgSrc: "/img/gameimg/monkeymark.png",
    link: LocalGameEncoder.createEncodedLink("/local games/monkeymart/index.html")
},
{
    title: "Flappy Bird",
    imgSrc: "/img/gameimg/flappybird.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/flappybird/index.html")
},
{
    title: "FNF",
    imgSrc: "/img/gameimg/fnf.jpg",
    link: LocalGameEncoder.createEncodedLink("/local games/friday-night-funkin-poki/index.html")
},
{
    title: "Silk",
    imgSrc: "/img/gameimg/silk.jpeg",
    link: LocalGameEncoder.createEncodedLink("/local games/weavesilk/index.html")
},
{
    title: "Drift Boss",
    imgSrc: "/img/gameimg/drift-boss1.png",
    link: LocalGameEncoder.createEncodedLink("/local games/drift-boss/index.html")
},
{
    title: "Subway Surfers",
    imgSrc: "/img/gameimg/subway-surfers.png",
    link: LocalGameEncoder.createEncodedLink("/local games/subway-surfers/index.html")
},
{
    title: "Temple Run",
    imgSrc: "/img/gameimg/templerun.png",
    link: LocalGameEncoder.createEncodedLink("/local games/templerun/index.html")
},
{
    title: "Google Snake",
    imgSrc: "/img/gameimg/google-snake-icon-filled-256.png",
    link: LocalGameEncoder.createEncodedLink("/local games/googlesnake/index.html")
},
{
    title: "Drift Hunters",
    imgSrc: "/img/gameimg/drifthunters.png",
    link: __uv$config.prefix + __uv$config.encodeUrl(location.origin + "/local games/drift-hunters-main/index.html")
},
{
    title: "Ngon",
    imgSrc: "/img/gameimg/ngon_title.gif",
    link: LocalGameEncoder.createEncodedLink("/local games/ngon/index.html")
},
{
    title: "Crossy Road",
    imgSrc: "https://lh7-us.googleusercontent.com/q9pQl7MZG2X6QYEVsGMYZp5PoalmJCY0bK9o5wcNEhEhN6pWmDTutZNwmEhfNVUIhqKAGlt6VNjGOInVSkkphG8D8uyx0gF2KVzXTt3LLF9OyBSiI3XGb2PZsM6HPHRol1nfALe6m20v7xrFGsT2J43-dBnueA",
    link: LocalGameEncoder.createEncodedLink("/local games/crossyroad/index.html")
},
{
    title: "Run 3",
    imgSrc: "https://lh7-us.googleusercontent.com/6avdW0W2-vTEubtnOORUqELyCbi-axinh-m-R1b7ZXKG6y4kLz18WYO20gQ3Ml4FRXAZAdlH6_s6ADOoowHf6ReiZXbmfdwCiaVBEV59uGb0LQx9qq1vAX41DpNU7rA7AKlqJYc76fjPcCqKCD-8PLW-p5H8Xw",
    link: LocalGameEncoder.createEncodedLink("/local games/run3/index.html")
},
{
    title: "CSGO Clicker",
    imgSrc: "https://lh7-us.googleusercontent.com/1wvdccj2d9ah0y09HW1yjisqyHVasjE5FQfMlx2VtT_NRR2C7xNesoEW1rcu4-gZXXX5UtqyMz2jdm8Ze92VHmAb0kPsnZcw6Hbmk_d5o4yNo7U5uK2L6etRycOyqppy7fEOAHONB4AUgxu-vp-c0m3m1W5zbw",
    link: LocalGameEncoder.createEncodedLink("/local games/csgoclicker/index.html")
},
{
    title: "Bad Time Sim",
    imgSrc: "https://lh7-us.googleusercontent.com/mBlISAzKsz0xx5ZSEBstU7rGyMaL2zZPKDmZ-ZTRnb9c6NxfMBKkaF1Hfc4fTO0svWeokE1UyIQLzDZliz6LEfDMEvAMXQtZzQ3HjFWZ9qljNJj7nKIFMpvDXrgETdka6QEbDHXZpl-JHMuAVsRhhVAoaWFlnw",
    link: LocalGameEncoder.createEncodedLink("/local games/badtimesimulator/index.html")
},
{
    title: "Getaway Sho</x>otout",
    imgSrc: "https://lh7-us.googleusercontent.com/fxmVYqxAHuq9zf7lE33Yy0nLKNiaChEmbEpfzm1MN_SyN24JPFaqDJU_nrEE5WmG4Qt8gPNUbLOI_UnrTwMfD1rKa7BF99M5sp6Z-VUeRoRXrJpgVfaOaUHH2r4iSt1XGWsH31iq_KDkuoUGxuFoxvkcJGadiA",
    link: LocalGameEncoder.createEncodedLink("/local games/getawayshooter/index.html")
},
{
    title: "2048 Cupcakes",
    imgSrc: "https://lh7-us.googleusercontent.com/fxRTAwBXjNG3k_l2NxwgkLClWqbFvXWws76FeW8KS5D8b4Py5zwd8IePuw9_KKggqzppFGENNBlsiLihiBI5eFUBtwamxZeDyxK1ck6qJPR3uKlNJtojOI7-OLm6NqBAHG4ctoHM3hPISkU8lxd7bR-Cw-_ucA",
    link: LocalGameEncoder.createEncodedLink("/local games/2048cup/index.html")
},
{
    title: "Tube Jumpers",
    imgSrc: "https://lh7-us.googleusercontent.com/THZEgS16ulDmx9iZPCHuRwCoU0N2c9-PF4WewqWph98dDi_quwk389OO6ia7tg2_r-WTN94HrlQh2Ejao_MV_8DLgZY1YHxZPfziyADp1HG-2vFQXLibYiG7ZQUgZ-XkPeOfJqD-OyO7rMO1AcRTYoP3bh2sLQ",
    link: LocalGameEncoder.createEncodedLink("/local games/tube-jumpers/index.html")
},
{
    title: "Slope Run",
    imgSrc: "https://lh7-us.googleusercontent.com/Gb8hdT5a8UzWV0lU4WZx7LWViY8SqULyzwwjQcfBA43vo-pMKOcveBSuk0_633Rb9pkR-UHxF9ItMsdLYdLs1qrDlw0vGK-1YJrEaqExpcIDhLz-XQdAs87JnT4bop6cvD-DJ9VPiUihOi8t_pBsXIXztj5bxw",
    link: LocalGameEncoder.createEncodedLink("/local games/slope-run-gamedistribution/index.html")
},
{
    title: "Geomatry Dash",
    imgSrc: "https://lh7-us.googleusercontent.com/xzhOGM4wjIJKEp5B80TXpg4LArOEXtTVosOj98RMbNdzdtQBMitXKakY6kzTuaHJQoJa2TI--LQseSXSaGecSUUYRbACHQ3-M0R87sXCC_nWy0q0ovn8sXna5ZbHDSZKQBccX1w95MT5KwGdjoMm5wuTIKHiOw",
    link: LocalGameEncoder.createEncodedLink("/local games/geometrydash/index.html")
},
{
    title: "Duck Life",
    imgSrc: "https://lh7-us.googleusercontent.com/MT7Kp6m_Bbb-HHM29S7ow2cl1YvC6LKI0OSg3nLEVXTg0YffNRsRPeU41O-mqz-bn8Cg84yDtrrJXSUGVj2JeMp10Ddslxs9TX5z3mu_qNrF1uKb2BTL5bN3B9bLf7EMunzY3cJQOg9z09gDSZahVTlUk3g5UQ",
    link: LocalGameEncoder.createEncodedLink("/local games/ducklife/index.html")
},
{
    title: "Duck Life 4",
    imgSrc: "https://lh7-us.googleusercontent.com/z8atGY8NONZpEpxoOyyHo94FjI4bu8dekjNFrbBPAE1UBlhbd51FUzu2tMCcXSWYc99E1OEFsAYVHLbQXgPgQoxGPkbcCutGRwLRSnxA58YJh679uJgaFYT1jyJWY4fGWA-c76f5jSPzKfJ8giZGvHk-ILvLxw",
    link: "/onlylocal/html/237.html"
},
{
    title: "Duck Life Space",
    imgSrc: "https://lh7-us.googleusercontent.com/PH_XPFbty-8F-XCtG5H6tu39RBP-ga9Izjem7Fj6dmSqcCaCKLXhgSQmpSb2VOcHc5AGnlFHfNRM2rycwHSDDNwp-SQPq8SZj4lLWsITVTUo-W-Cat6mlAggu6lV3IOJMkvhZ3eYOiDUe_w24qxmRGOlJjWTNA",
    link: LocalGameEncoder.createEncodedLink("/local games/ducklife6/index.html")
},
{
    title: "Gladihoppers",
    imgSrc: "https://lh7-us.googleusercontent.com/DBHR_BJ45z_j2rshMggVz_uGCz4ZzfzDJNCdtetUdaCXWR7ITxJfq7wNES9sLqAFkxCz67Cd_HN1j8jJzZJAefj_JwvOJRXDZDy51faxFRiVIznXm09HJuO9GgLN9JFThlRtSfSqIhEAoJRdnszgyDsSybrguA",
    link: LocalGameEncoder.createEncodedLink("/local games/gladihoppers/index.html")
},
{
    title: "Ragdoll Archers",
    imgSrc: "https://lh7-us.googleusercontent.com/V0oeuxrpTGrOAdC0HMtztXnG6v-W0AMSC4ozjjK5-GbmylDDfismz5ylhEkKsHG7vJCc4WxQ2OLcHY8QEZCQftc0adJDjw_Ia2KvpNeonq2RzXTgz6x6DAroDVp-M-i5c8FQwPmnzQizzxIs0yVVBZzxrRzhlQ",
    link: LocalGameEncoder.createEncodedLink("/local games/ragdollar/index.html")
},
{
    title: "Funny Shooter 2",
    imgSrc: "https://lh7-us.googleusercontent.com/4E55AJwZrKouLKIWNiY4An-bf9UjmuR_b68Bz3v34iyyioUqD8Zp2MzqQzp_xCNkYw8ND1A368P1ntd0vBERkWVKszzM6MkgUst1b4dqTehf3USQkRC4hMqBM0cfm29Mi1r5UkpTDdkSxhsRYTyyhJn9SGnNEw",
    link: LocalGameEncoder.createEncodedLink("/local games/funnyshooter2/index.html")
},
{
    title: "Rodha",
    imgSrc: "https://lh7-us.googleusercontent.com/OF4fKFD4AbftL81PKtjYbFnTgxWDpth5EEhxICylwAwwJqKIyFKQjTL05HxlQyxbvr-jW8EXGMP-MK5nFM1QozZ_2Qyed8pwTGmPmUhw2UqX7YtKTx5iMldSY9Rg1kVCZ9y5OWUmwlOJVZ_x-G-9WC-fPJbsLA",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.mathplayground.com/rodha-new-3/index.html")
},
{
    title: "Baldis Basics",
    imgSrc: "https://lh7-us.googleusercontent.com/Iafhnkg3uzMv7lLK99ADN1O0tunCQwc0JLhuvYEhJrH6SiIgxVXhEUVHGEVrgC3KIATkNx5H0LHfq8-strKG-g4fsuoeRzjbQPJVCCzA063nQkqnk1nTEihZJaRv-4qDPXaMfDUcFPbvgaGFcTduBOsK8yq2kA",
    link: LocalGameEncoder.createEncodedLink("/local games/baldis-basics/index.html")
},
{
    title: "Mario Games",
    imgSrc: "https://lh7-us.googleusercontent.com/9gBn_-diXW0qiyzxP1M3D65mJgpeZ7RqM2mSy2HwTz78-cd7HY0HEra0of4EhWsrOHBMoMzwEMWlBCPD0v-M59XTbuR9vCnByqM2QA_wBv_qeETzKCVIedkDRi7yEo4jnCJqu4sSeOANEPEg-Ej7VOmm9HTPdw",
    link: LocalGameEncoder.createEncodedLink("/local games/mario/index.html")
},
{
    title: "EggyCar",
    imgSrc: "https://lh7-us.googleusercontent.com/XzQmqFIMuI1P7JPJYEMDsaVvnyUEx3Yi-yHMb56pAWDDP6BS9L7nhz-9Z6qGfcqqU7SK3-dLuBVBBd7ptmx-zFOm5jK3Nba_o8I8pNAq3-NpNcInyXFJJ1woU3a-jDQ9zONSio91O_5QCYVWAqn-_vIgMW7rCQ",
    link: LocalGameEncoder.createEncodedLink("/local games/eggycar-poki/index.html")
},
{
    title: "Papa's Cheeseria",
    imgSrc: "https://lh7-us.googleusercontent.com/vvyk1JdsAgFsPPE4lTjaW2KeG9Yf1C49WBvdZNZWQr2vyIChl5XCIy7DCByd8estWUjxVYBWowhFV11oqIqdw2IDtj-Mqjl2eqNBraif34wCjkhUT2OYtCPweDFTk_YQiOHufRMUqsT3Z7_kcTVqptmnvrOQPg",
    link: LocalGameEncoder.createEncodedLink("/local games/papas-cheeseria-freezenova/index.html")
},
{
    title: "Papa's Freezeria",
    imgSrc: "https://lh7-us.googleusercontent.com/oqGyMLvZptjeWaKEcJa0IHF_OzZmtKZ4-CEm0eIO-hNtacbgZCgrqPztf-MRxUr6lodNhwJnb2qfX2AHQtaiYybOtIQtylifGyUpg11BY9e9BdIH8vEwOgAGoRpricltz9D54dnbs5ieSefqLr5zo9M_kp7LcQ",
    link: LocalGameEncoder.createEncodedLink("/local games/papasfreezeria/index.html")
},
{
    title: "Doge Miner",
    imgSrc: "https://lh7-us.googleusercontent.com/vp_mx6o4SrOHlgzoIBWO0inGCWEO3XX7WPD2JZqpz_NWBcLH6tIUoW9zUolo2SpzFKcbtDMBhayCH14LwGNQXurcfIyeDpwla2wMfseS_ZLYvgIQG_92sFF36BQyWD1p80qWbL3OJ60b0CwEZZZiu5qKrfzJqg",
    link: LocalGameEncoder.createEncodedLink("/local games/dogeminer/index.html")
},
{
    title: "Super Orb Collector",
    imgSrc: "https://lh7-us.googleusercontent.com/Ge18u1hdxEoVA7YJahOCstBSJ5E0dIi-_0Ps9mWCYMXQoFIsZ-VfWCEmkDInxX_Tebac2cAnBbdMOGy-wOMIxxI4jNM0o0aJqQWvVcCWYL53eMWUELeNHkF2WvvWfLvp17cXXSekcw5jO6vXxcLRzrD5TkpR4swwIVnDW8nfBhEktTZMFBD8WN1vKKOMH69XLsmFWA0D?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/orbcollector/html-classic.itch.zone/html/1514220/indexaf55.html")
},
{
    title: "Bloons Tower Defense",
    imgSrc: "https://lh7-us.googleusercontent.com/MG61ryfsIFHqeOglDcH5qGEzHwNqBsJdSGVJA1Q_A65WL3QgIteLefelKseMqf7oAtMTCes4ABYkFyWzxGq3rBM4C8Tsfc6iar8hXwLLH6tH24HH7r1f1XIBqEklb07JabqNU8PJAv9uq6KbTMfXfU3aV8EAPxoloEu9f4ny0Xmf6aQc5DYX_mWbZjPBGrdAmqHN6549?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/bloonstowerdefence/index.html")
},
{
    title: "Space Wave",
    imgSrc: "https://lh7-us.googleusercontent.com/4supg0ReRZsQvGZGVeqpJ3nUENg_Er3FchO5mGUBY52j1D0xxsDhBW-j5MAiWeoivJSyxJu-hR_KE2Nqw8pOMjb6FuQKI2Lejpzo7udmDx9PGZs4hhkZRY1HFJ80zzf9waxIDSLQJ5AycB_irXZ4yGcJ1IZyGN12idR4DVJV45T0QJ6jbNZTyg6H2HVVPsNtDWRf5Siu?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("local games/space-waves/index.html")
},
{
    title: "Super Liquid Soccer",
    imgSrc: "https://lh7-us.googleusercontent.com/9awxqJ3gZ5kMMU1p7v_tjBIuNU_Q3g0a7xnhupHxXDFkjYs6whvHj3z1tR3NLg3NnY7GQWvx1mJLy_3dxgFf2vo-YFrs2FSNA2frDBEKha2rbdpW9hjVoKOQfCjqCwPySig7z2sFPXXU8NmpW2UNS6EgFDo31XmPiwcMJnsHiBNKXLbo5afZinH9X6JfD4auC-qLzFkP?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://superliquidsoccer.gitlab.io/file/")
},
{
    title: "Bit Planes",
    imgSrc: "https://lh7-us.googleusercontent.com/7_KB7ktxTYY29d_TQnnEk1-oo-2c69hMAtp1AWvIwWoSaky4Xp68WbeBeDueKUqCvvNadYIACMeKxILJ3YnybGscdD7gR_qzRUBsd58JR3fXZbYx4f1bg_yy--Glph-CdSq-6uN-vqifMwHox-hX8tNHoE5FC5c6CtWMhNa6olBW1vl7jkCZJb0-Jl5pInBWDS-Os5NK?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/bit-planes/index.html")
},
{
    title: "Connect 4",
    imgSrc: "https://lh7-us.googleusercontent.com/5VfCfVupllfGOuK_XfTGctmjzxDktv_lgYD12Xsf1wFaojcRVkt_R32sq9arCHdWMYCm-KT4C6KX4u3ZLIoM-tZMwrJmeqEHecVeGw3TGB80gr4XQvw9Z7wwLmhAveD9KSRN9Zew4A2lisD3HbK3n7QHRlnxvu8C0OJl_rubtdbWNqsVNIt8Gc61yCt4cJNMMv3E3gH?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/connect4-main/index.html")
},
{
    title: "Wheelie Bike",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDHRzh80n6-i5ZpIFzKttxVEmBFQoV05ShUlS6095RiAEL59RhRQ18Io3F7pM45hxPqRQKXP7Hx1-FUNz8RO0JVXCIjIUZ1ZGMHIgT_zCZdqvSgvGLGnGglgR-s3YT51l8NKuWQcBeIU_dlD2Hv987wP4P5a78ybtnBPA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/wheelie-bike-gamedistribution/index.html")
},
 {

    title: "CoreBall",

    imgSrc: "/img/gameimg/coreball.jpg",

    link: LocalGameEncoder.createEncodedLink("/local games/core-ball-web/index.html")

},
{

    title: "Papa's Pizzeria",

    imgSrc: "https://lh7-us.googleusercontent.com/xlAFdWg3NsJ2FnvB2HLNRhdMJayauFsKICNWfBKCv6OFymWJOgaxz8xG25d0BpRmmjNivG7AH__vC9QMM1bxSx3XBVAeLnT_GR6i3l6rUmO6v1fUBUsKZVsFmYlsv3DM-IggICm_m9cxoYKzjo3-y1Lhei1Wqg",

    link: LocalGameEncoder.createEncodedLink("/local games/papas-pizzeria-main/index.html")

},
{

    title: "House of Hazards",

    imgSrc: "https://lh7-us.googleusercontent.com/6fQmRC7Le6oqmBNIPFBW5QKyRvKE4qubVXlPU1s1lhM3vR32I75hUcCwSs32NpHdHq4YafutCj2KXAXGluJLzPgzdD1Adbsz8-UF27_ymBCMgLwuSQWI6q-0ETJL28B_KaEbsKeoLdQZ6h-akidcb2GSv09xgw",

    link: LocalGameEncoder.createEncodedLink("/local games/house-of-hazards-main/index.html")

},
{

    title: "Basketball Legends",

    imgSrc: "https://lh7-us.googleusercontent.com/0nwyFoEcn-ISiCZwdyIdyVVRuVYIVgoqXEbMGtyx2pYQwIoyv-EMYmeVtz1_UZHY5t8YSO-e09wE9WYTymvkqTixPqjHepJgXExnhc_4SBOATtY_b7onEebJMTXG2CSE6FpJeCi6UK9KuQ51XUwgNxG4qTxFZ5j-nQ9BiaZxVCydE1M28x4IHOfHQ4dm2uEzj2g_qbyu?key=yj4V8pHW144VjA9YlEbf1Q",

    link: LocalGameEncoder.createEncodedLink("/local games/basketball-legends-main/index.html")

},
{

    title: "Soccer Legends",

    imgSrc: "https://lh7-us.googleusercontent.com/BOFW1ZerubL2OaBLXFFS-Ns2OWRr_yO1gGqCJPSckN5jnlpKxChw-fbKiHrJ4iIQMVbJRwxARPvqzR8OukN6KmFQfaOkV1rZlLY3ghMmZKuKmeLsBi2rdfYmY3u_0oXSOqpffNAgrs-7RUYjtK8ecj6YR1zEDiXK-hYOkFUKnySdslg2l1I74Sngv5j3D1Au9fLmymBe?key=yj4V8pHW144VjA9YlEbf1Q",

    link: LocalGameEncoder.createEncodedLink("/local games/soccer-legends-main/index.html")

},
{

    title: "Ragdoll Hit",

    imgSrc: "https://lh7-us.googleusercontent.com/fMYsrt3Lp6FlRyA8pbx7xwJjLXmDXn34b-OAhBulIDVrrdqV8d3WADtoGJABgu9iTv_dTWZNICKUw_uzGyvJjOoQfu4FVmi6sMkHeP58PpraePdNwXRyNnCP6L_gwWD7UQO1TvCKR-5Z5MvZ_39RmIfgJClczi7rBkaMJk68FnUX4tXBN9_wBOJXvHasRcjv2I0-",

    link: LocalGameEncoder.createEncodedLink("/local games/freetoplayz.github.io_1768602647/ragdoll-hit/index.html")

},
{

    title: "A Dance Of Fire And Ice",

    imgSrc: "https://lh7-us.googleusercontent.com/OnLUO5_5ONgtJrsEW_iPLtX86ILb9O-M-4s1Ae7zALw25b0gucoF7xraNHojCKzmOpXTNIp0cuGsQkB1jJ9pbQWRx9JMgEmwpQZ7E8RDNSoyLzaUE6r-6vOJKouFUzzFxp_CZHHBmRguZr6JB5bZmbL1HDrhoA",

    link: LocalGameEncoder.createEncodedLink("/local games/a-dance-of-fire-and-ice/index.html")

},
{
    title: "A Small World Cup",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAIaO3RG2si5yf7K9Rwm5m-YmIotES4L9NCAocMB9F4p1DyhRQCCvhZdVbDgF6ZtV2NKsgRs0ANUlUtSxrPKOo1vQRpwFxbHYMCELtTqWH1bbQwBjhQOPn44vZ0VsMU4H5OjQ6CaWfLrfF0bsz-QRqPtVn4TCuv0Un3mA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/a-small-world-cup-freezenova/index.html")
},
{

    title: "Tanuki Sunset",

    imgSrc: "/img/gameimg/tanukisunset.png",

    link: LocalGameEncoder.createEncodedLink("/local games/tanuki-sunset-main/index.html")

},
{

    title: "Gun Spin",

    imgSrc: "/img/gameimg/gunspin.png",

    link: LocalGameEncoder.createEncodedLink("/local games/gun-spin/index.html")

},
{

    title: "Papery Planes",

    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAu0RuoTt5BJ_GjxyG7t8NNZjdFnDOnvm8tfDpsZn-5N8BChXRhvLPl-0-NLziDqufB-sLNh6WUg2gN0bQKa0yFbKQJTPcqVh96u997lLnWuQYDQrfQXq7mWJau5-VpM77Nwa8O1eS8wPAHS1jSX3Sz9zIGdeajXGZ6mA?key=yj4V8pHW144VjA9YlEbf1Q",

    link: LocalGameEncoder.createEncodedLink("/local games/papery-planes/index.html")

},
{
    title: "Aquapark io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVACcca3js0BWVDYPVb5HN7dl8nFi7ZsuE-Peeyor0VmrcgSN_iayJmCAj81YwnZK3dIAZsTUe_HEMzd6J5q9gxyrWCrX7CNqtgtwByQuCWk1Bkt6mXm0PpEaK4z2wgyp7oPBZ6DW60K9YeccLq9q0QBtpCkl3-8rfoxoA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/aquapark-io/index.html")
},
{
    title: "Apple Shooter",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCsqU4fwyDtFpqsw1CLI5hoeThJ5HyLMkLc4kE0RZCS7mvkAP__BeaEMdP2I6Wdjpoi-8BewN3hug5lpABfbKaNflOGlovQWcorJcXTQa6oERfhB697SXYkgHw94lY8FI5OEAF_pP3efbmaSBkVkKkUSmSDK_WIwxhxvQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/apple-shooter/index.html")
},
{
    title: "Italian Brainrot",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBnbUkKWuWutWTF4vSkAah7BI60Ganfn7mqXhRapqJDlibvtv6dt3wK0s2k13BjQdmo6z_JMW3l6uk-CgNl6JG_H_83BQeg3ufnOzNvm9JZo4Bru6ExcuGMj96HKGZD6qe9HrsMuz7uyvCyqbS9QSbCv4R-64UTardFBQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/italian Brainrot/g.igroutka.ru/games/8/zPWB0Z3MWEWki3/files/games/h1/italian-brainrot-obby-parkour-v01i/index.html")
},
{
	title: "Candy Crush",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAsktKQ83NcyrjJfkUY8abzkhXjwXCRjvl-vkyPRU1xrtilFOm3MOkhzswulxBpLfUHeEJ_TjXeAisyHHFTjdGGxWo81Yi-H6C1FEOl2_4omNccDbI8qsVbrHlO4KPw7PjEkwxTd-hjQEhE1PtrnafVKmrEtZI6zblt?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamemonetize.co/ushitaltif0ig5by3w54p4cy9sd3yptt")
},
{
	title: "People Playground",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBgveh38ngxS2cbAY17KqTfqB0iCY9B-hhrkQGZ_WlP-M9R0_MGZsJpL2O7mV9oRIDC3vib7ZnH12NlkhPGFJGHZqXmcE2sGmVSNsJxTZ5ue1CuseLMt-kk_tXuTBzzJchZbDL2Uap5qEXtvD1KSe8nXKZ9V9K5tdln?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/people-playground/index.html")
},
{
	title: "Bacon May Die",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDCFwC0bnsnIIEZCcY0QsF2XkUdXqsKm4ylI-2mY3kPA6CWp2Gy2YWBRQGqC30moMiG6mKaKjB7ulYHjzD6qM2V4Ef9kvn7J4v2JPtwKO5tG3Qv8rgQ-0oK7iLTlHu2B6c-joH6tWrPwH_3kZ6IJk1bkfzIHqzxWrxqXw?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/bacon-may-die/index.html")
},
{
	title: "Burrito Bison",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDLKqjWkGifEb5Iys2_kaj66bP_bvtCuLjIgO9XIZWw21FALTHr55n3zYcv0S20pexP1BZEPhgKMFiL70MHXjsM_E_VoAazZAsAbl6SGJdDfv_C2HrDGX17vTZYGBna6M8sYxk6kg4fUlYEXiSbvshGnFFS5HlgPLS2?key=yj4V8pHW144VjA9YlEbf1Q",
	link: "/onlylocal/html/78.html"
},
{
	title: "Astro Survivors",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCwust-kszswliG-xvv95FSvnNdF5LAPY2f7y--J6cZ8f3MlobAjdUeDUIeAlutFzipQgJGKse3ScqgkVEV8m6Ih-Tdh4stWiLpFeuowQyWRccHsr95hD3BaVI0Q4ToUfyjEPNcmBj0ZjC7HBoMVltEVSEnSu1HzKLJ?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://g.igroutka.ru/games/942/HQ5sOKj0NiXxlzEw/cf80519a-7254-4dba-aa36-e3b0fd968e0c/index.html")
},
{
	title: "Choir",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAtOytfV4LFvg2Jr-Jng6rV054K0yJ1YSpUPqF7KQp0FQIiEwngcHir4xqgs-5jCg7u8TD-keGS5kVtjcGg3Rex-SlPV3zOvvhsaWURoHmQ00DMgAAL7d54s9nXlg3MlxneGNK7qW3inqO0c526JGEMkN9hogV5lCsdBA?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/choir/index.html")
},
{
	title: "Z-Type",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDiUzYU0ImhaNlYwv_F_n4kQEdUCj-_sO6xtYZS1-GjAdJ2a1edI0pijwx8CfUHxUSqKt1s5Be11oXF8UAuAJW7xDy1Aim_cDRv2SB3jE3q6X7lgyJ-Im0l-un82Uir9swy2AJRCIu2OlpixTb-UdZNJxIpOZEROeYg0A?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://zty.pe")
},
{
	title: "Blumgi Slime",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB3MFrETiEzoQ0b34jt7H3eaxNbtdHFrBW_GAFnt2vvFtFWVB_kcqwTToHObP3_tHffnFjaeGcr0ho8xc5wBRv4c2M417CEf51taIF2af5Vb99xdUJvXvYCbvInaqbC9naQyJXOSr5UKzVKN4y2O8l06MHxIZz7DGY30w?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/BlumgiSlime/index.html")
},
{
	title: "Powerline.io",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDJODf4x5RDJAxsP1Q90AYENw7DZPBRnD9BM8CgT-8OTKJdfgjyojoZRTD0uDa5DamKgtdMiGd9nAhG1UHvFYU7OB-w3wg462zVhde3Xv1YcKrYEqdKauiYFL49RcaZxFLFIJZc6DDHHP81LyS-xsq65fbigIKW58_G?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://powerline.io/#2cs0")
},
{
	title: "Slither.io",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDdkGZAD-8S-CkVFddtEAapZZDHnTDelNQJuGJUfa3cLAHzae85hPg8g9UCSm3dLH5wnfxQTCAJAvXlFTiQnxy5X1qMDoPzqIyJ4FoFMepvgeExm7Mf1v2LTEsZasYa490x9YObyXqxs2VmO7OEWuy1zoxu6oAIDxZkzQ?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("http://slither.com/io")
},
{
    title: "Geomatry Dash Meltdown",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBUnoydSBLBHQhoHizTlJncRu0xAX3UWWN5Y-T-BbkmVi2bcYAsTwKawnOOa2Uu5goTlodgJ94qFZP3wrEiuryyEeGLo6cw7LgeCefp-5w75-rdoypG-BFZur0UnZS_H7sNfXe3YdFIqTIEOjW5cmsPuFDeLY2Jb_EakA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/geomdmelt/index.html")
},
{
    title: "Geometry Dash Subzero",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBAI0S9A4GQt0PfoEqyNx13KP5k6WCRS-HBv4c2J8KWEwt7oSf8J9SpQonQUJmsdF9X9VPPbJC2NT5ufACQ4aSSZ3DUtiwFnYxbGOIbmvbgl0Yhove9rZOtay2DHU5CL_qfagzRd4PHrdTYsHOu6uY0DYZ4LHqbAInMnw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/geometry-dash-subzero-main/index.html")
},
{
    title: "Papa's Burgeria",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVA17XoyyakwcrPjie6eQG-x4FGm6u-Fmyzp-M36iq-OzvbxEy9HbR8CuB9ZnHpU3qUBU-xDNhF0bMzZKqs5sNObvx9MHGPBs0H1aKLP1EIZr6EKbqfbZlZBSkuwa4mD5N5gM2UZmiXdblu0PcAVW8pofZE3D3fyHsWQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/burgpapa/papa-s-burgeria.game-files.crazygames.com/ruffle/papa-s-burgeria/4/papasburgeria_v2.html")
},
{
    title: "Papa's Taco Mia",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCuORrJmseHk6ubvKYfYMJtaaOFilVQKwSm5eNGCPeWjartL-Yqih08llNWQUZN0sSg8KEs5sBXU077Yq29gr6JP6Iz0J-KDVmjtZVbLts_ft50z5rERSgZlYVU7I9RStq6jIO-n3kObI51hiCQOPLSUOHJEfSJQcBT?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/papatacomia/papas-taco-mia.game-files.crazygames.com/ruffle/papas-taco-mia/4/game.html")
},
{
    title: "Football Legends",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDcgK2nWW3AIuEB9TbprrBN9_-Ey-zwVsyg9NKv_aklzqRHKFZ6Mkb02iQXWM6PvbtUTYyKJEUWFd0CtfqY-_QvugivxA2HsM3_krrqdOzXEW0XTkY-kHE1NGkpTQdsATi_ulfTY56-yrachY_prIVPiTIOWRR2Ki3tOQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/footballleg/unblocked-games.s3.amazonaws.com/games/2024/more/football-legends/index.html")
},
{
    title: "Papa's Pancakeria",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBdh86BOGnuVsdxVtkBGsCfnxiHyILQo0Lkp2ZCeIecI28xPoS2VyLyYJDTOxl420hE5EXBSPXGtnUtd-boKBh2Q7T3WLfOMo9hlW54iKiYTAA8r2qeyO1u46GFBoAJ3pBN3soh49WMEt0NWGR9N-ZWrgAWJ3Z1AcBCGQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/papaspank/papas-pancakeria.game-files.crazygames.com/ruffle/papapancakeria.html")
},
{
    title: "Paper.io 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCmIxB-BuP-woS3mWu-CC-7FMdxe7FWRVcLdjeiZz1BW1UsQ9FQpHl37zt9VKPUMRkDyfk4X0PqeCK0tQy5hPjVAZ3Z3cgypx3Xfy7pXYX-sx_fAKYgfl4pa5g3Go6_k348LfPiM-564dXfFlRb-fg-zKpZ6S1fhsdr?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/SSiiggmmaa/games.voodoo.io/paperio2/index.html")
},
{
    title: "Papas Wingeria",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB7rK85XmKOqwuKC9HLL554YUMlqxrNLNiKvNeP5u6yMhUZce-MiLBrOMhSyxEYlY5XyW6nBqmBglL5xkZ4Ox8k9GUzd-l1RdbzJvvJIKm3_uTjEAAw6yxN6y0wnq1TczhTsM7RBwXoswputEZ1JcHmcsTyxeeIDM91Tw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/wingertiaa/papas-wingeria.game-files.crazygames.com/ruffle/papaswingeria.html")
},
{
	title: "Viola The Bird",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDCFwBgfvvxKhHuq2IKgBDMbyygsPi1CkwsBwtrAlqn7819etE4SDfWROZkZsw0mcRRKkbHu2LRyr2ruxwDnuCCyWnLVOikhM_93K3uF69rSmdVadpGK-vhg9TfzEQvAd16iuS6Y0HS5pUhvx8ASWogqT1s7T5IWnalDA?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://gacembed.withgoogle.com/viola-the-bird")
},
{
	title: "Blob Opera",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAZxkmpwEgHPK9OfYhKbg9xFwbnKk0Krd9knzAdjj_Kr5NuOZFaWL6aqhQPC0KlVn_edSv7WEIBL08DKTXR5dU0pcEEpc5Bpew-fagxnVSyLW6CAhO-xz-IREtqlnEP8wzw4QoJKl8w1AxQ6CT5XA-kWECu7UzbjkD99g?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://gacembed.withgoogle.com/blob-opera#")
},
{
	title: "Chess Online",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCblWGGwK_nVbdv2jMR5SgYdYL0EOLkh7in_7LwKY9djvQahZNhvRP6XCy6SzWnhx7RAn-TfN6Ef1f41gY_lrmlBtkorAU7k3ApVeidMNrLSS9RfQnlg9nmf1LIgaW7M_43W19DC_0_7oWS9vpQ23iwWIgJs_OQeReXkw?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://chess.coolmathgames.com")
},
{
    title: "No Game",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDfj8Sag7ovXBQo1mSSrh8HiD93-3Tekb6KaP2uXbPi2p9LntYJk8c96Ijp9pNTfMWa20Ubnw5SxxmPdxDtGE0ywNpRz14R-TXF-dSgz3SGVW12UHBa0TwM3CG3ceJjERwWCPu6owS9MGSQG0vMpjUzFW-q7ggO-fxfjg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/notagame/index.html")
},
{
    title: "Grow a Garden",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCQep8gmGMYsxpzEJZQsjKeHvtg-20QB3nuURVuzsDZJHml1bwyVVsWxoAuWLoKVzwn0o0qwdH-joio_WtjQsdow56OFwwUzJOgOx2bksk-yYOITXGWufqd8Mr58kbi5yHo4xFBVkcG_hATPAvvlqrwxgD53nCEBvf-?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Growden.io.html"
},
{
    title: "Chess",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDG8_8MjWhfpwcBw4GXCeQYna--wkX7XBjxwbnqTTFydnMXEx99AzQcVup61bEP977PabkNZ-T7psmalWra4R0H6mhD0qy6RZ2clAINvWqDKkEMEREwwXcv9c-yRy2aRa1UfnMD70E5DeWFxsDGd676XExHdWurSFPjcA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/chees/index.html")
},
{
    title: "Doodle Jump",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAHl5zte_Ua4pa4ie8Hjy13tOfPdKUJRN8w1EmnwQLV_gL9CUVifN9kafjh0WNYvTmJ8z8wG2Z-_DN4IsZjHnATnOG66EaPMmdl4ppgXjWNLkxiOq1eyHb363sb-IQKY4QUIz3oCLv3x500d7Xbszfty_jmdwsXUbfn5w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/doodlejump/index.html")
},
{
    title: "The Worlds Hardest Game",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBv97_-u2DMnIFaIkBJIAytn-GR1gUUv9DdW9Gh1Y5nrepjMgdqaIOsF1XU6ZDAG2XZGtLOD8iNX6nR-BlkImrd3VNYwvVOqAcGVJ2qwa7woJ5aOQyW7s5VsD3v8-45u4Sa0ns-d7s-uP9e44TwT8MKuC0N1B73aQCZ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/worldshardestgame/index.html")
},
{
    title: "The Worlds Hardest Game 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB4dt7QPmXdDYszK1UhBw3V_wnATlADIl6GbJST-Fz2CAP8YIaG6tEWaPZB7NXh8YhHgr0aFq4LrdI2LKbRcGCkFfL9gJ6tYYf5H9cHKJvPvx-kpTtk98_h50KVQP--FTAkY5oxH3-26jHic-kICrySQlxreq61RLZj?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/worldhardestgame2/index.html")
},
{
    title: "Boxing Random",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAwovWoKvq6C5SDJm6Ox7cN2Z1VqhaFpsT7zGiLHC_PYkUF5M-N68gFMkT--wtABB67ZypN2rVy3ylZKW3iPQygiwXJroHNXRMMtyS-OpG4TZzwynKGlYiVLDAkSuMYEPXRbE_7mh1QTXWOg6EhUXcDDTTkcb4afZF1JA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://boxing-random.gitlab.io/file")
},
{
    title: "Slime Laboratory",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDc0ZZ_DQwkaQbxRbWubUGfs2uUCnblNzxCjdz14YjgM33De5J01sV5Gdyt5Eb00qd10KJAQfvPVv1C9JhoRGmCRAZWuGyZKzKFdpGee8jtZnPjF97D7hgDR4t5X0HSJPlEVCUIOAG7rMajb-mqTFhZrrybJprQ2VEMLQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.coolmathgames.com/sites/default/files/public_games/53088")
},
{
    title: "Adventure Drivers",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDwE1nBLu5KI6MRbwBWsmTAIfQaznU6PM3ND8fFmMADA5o06mDoCzeRL8GMu5oArCnpYc1RmgKaGDbACg5Zfpj3bC5_tpjon4U4BTSWIREoPbcoe9MBRqrPSLNlDv-c4P6lPUN0egSoim03QFrIuWDrT9ret6sl4GlD4w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/adventure-drivers/index.html")
},
{
    title: "REPO (REAL)",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAxxc85DZ6kxhjs2U3bSlLXpGj-2kLSpSO4Al6_kzOpewjUMSRltDLvdk85kuoG_VqQCJ0jCFMNS-BRO38M1i0a37rT6RJYOeiQNe2YtHZSWh4R4yOfbwD1PV_jOjoXfQNlj1OFS3GkdQqOezYVHtkYBLZxes8DFeRKEw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/repo/index.html")
},
{
    title: "Shogun Showdown",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBoLQeYPZdKFpN8FOldZBf_FqDAVWf-LjYnPVI7mXonC4ikVTdBI9LcD14H3Leh2BJ2vz2dz3ZQ7Wixlkv3YcdJJ8vWSD58QmmpIbxiPE_EGSaLtl_JqQmPKZ4Y9LtGUdCh1vkQDrnpQEYNnjXhgfygLuYgUIpCpnAoOw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamenora.com/ShogunShowdown_WebGL/?v=20250503220652")
},
{
    title: "99 Nights In The Forest",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAbK9TV5B3O_gfbJpc2LIxczk8zwy_rAXEbVhP-KTOXwieWlGu5ruf0XuyfCkG-aNQSZnAX40vLweR3PnfhYOIY7mgqW2j2tcLy6y2d2c2r1Zuo14ozKxR-KcK8PkJhi0OUByIJ38_euxTemTP-Kt04Ob2SNdQCqFj9XQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/99_nights_in_the_forest/index.html")
},
{
    title: "Nova Idle Clicker",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVC6PYgV9fMdbl87ri5650Plt1z4mlKyIT8PjrymjklGVBCmnWDcozox1_pk-rYvmiFlJx9kgllM3VyNUXj54dIE7O5FtB6vQxJK-Nc93HFwRjw_AxsS2AqzhuDsTuuMbFCq-aIgDthjbfFMWDI4RGvo7IYur-c64TeC2A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/nova-idle-clicker/index.html")
},
{
    title: "Draw The Bridge",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB0RVW67p_KKySMZlWurRaqA2pdo0l6ZZgBJhfIO_kvqOrIqia5oaoBOJ5wlhd3f6J0iuY6ECltEhymt9FMM08YHkqEK0ypA5kKKFs_7ZX8gAjPwLsreyx8zHsDErjhHyKkFWhsR10oBUqPRIYtG0vjbRdSAWEGyUiy?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/draw-the-bridge/index.html")
},
{
    title: "Basketball King",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDLiUGwmmAXA-sOHiztK-o70oicl7xR8bEOI8Mn6daQpt9cg3Z1t1O6btqnt3kGrlKP-0WhfC63IUf1_KsL-dXBpDhPziQSqKx5lThvAmMpJH-jhfL2Sem1vSz3J3u1kpLDQTJ12S0tU8IadRD9jDHPd_KR5SmKPneIFg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/basketball-king/index.html")
},
{
    title: "Football Bros",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBYZGQNgZCKaE9HrOki8v-JzOR2m7gz3az8ojbOxzrKwXIn_aR0sRJgusmW1W0djljMo1QTJP_WJx_JrFcdEiR1iMOnbUM1Dk0yniXM-v3sWbmQBvQ8Fp5mIo8eR2rTOUcgVTHj6-zOOstZOGyEVHAbGafDuR_hOosz9A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/football-bros/index.html")
},
{
    title: "StackTris",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCkh1I6TvsPCPWtub-czLtZKEHjRpfCkJHUPnBZcazK36qbcowtWztHt38vDH71gQuTtlnKuQkEGzmoBE-or7FUrEsAH6JyeiNGMzzzXMfyMN3XOQyE3-2y6h6_H8Q6n9AoepCgmztI3izfqmJBm6Ks5PRYaESQ0wWh?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/stacktris/index.html")
},
{
    title: "Zombocalypse",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDeXOKip2aD_xNp9Ex--syakx0Mg4n9DAdDsSbfk8bXJ5TQYbmWgvQeAQ3UwW66ndBEgP8vwdA1zbz4uKbgBx3RuE-IAtj3gxERisAkM3xJqKMuXRhhlw_bkmaRJ-ubYwqHedmNI1Qde5ShaBI4oSFHrd1watDlXkfA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://script.google.com/macros/s/AKfycbyAgz-IpXZmrwqBGMUE0Qi9NgCxyM7xg2Ds6e4B8RHXUwjyvQOozmj7CQiKMBVyAJ3R9Q/exec")
},
{
    title: "Zombies Coming",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBsKYPtzV1HgDUzFkJsGDi0N_P_A8q29U-Uk2PMLWRjk9LgGMwp0qDxTEfa-NhWd1V9jfaCCcTwAULVv-fvp94cJDmPSYbMySHME728qfLQlhMfTJqg7XA_NVyYhs-qoNi1yGraxQQD-fMiLthWV9Ds184o51R38n7mYQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/zombiescoming/index.html")
},
{
    title: "Hill Climber",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVClP0nPl0vSH0vaOX7F8cvJALjPbKJw1kQdMcLqj4K9lzAKIAMvVK4-bbWzPmYO8cy6I4CFQopBZHdxKbq7mUaO9NVou8t2HG2GgeUSD6BBX48hAJ-uH0zSzh7_4960hIMaA6eI5KyeLcf1aYOLhEfC_RPoXP5twLzM9A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://unblocked-games.s3.amazonaws.com/games/2025/beedo/hill-climber/index.html")
},
{
    title: "Clash of Tanks",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDLW1I-iyn_fTiDRN-nHELD-pCxaYDiLdDoGhcWZICXOrVPHqMPgMzXMqDKJkZb8XmhytDxYunLS7m5Oymskkkt5VwSbyJDYCCjrLsSOQSwF_tx9rhO1IV66v81v-8SZkBWDYBkn8vX2PW7JyV1VADr5M9qICk6LSj_JA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://unblocked-games.s3.amazonaws.com/games/2025/beedo/clash-of-tanks/index.html")
},
{
    title: "Thorn and Balloons",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVARvr3MwnmQYYny4otlqUKVvjWYzTVJd6LvmNbumAKV6Qj8ByZD_rWFOVAxJQp3JgZuw0xMfFeybFwEktZkNiPDni-TErQaAgSs2A4g1gumG1e5HQbOIp-JftEGBGFEC4X3vAOk7ZzWUWs6eulXDOaEva1XrrVXqWlA-w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/thornsandbloons/index.html"
},
{
    title: "Dip n Dice",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCMa2FMeIzeSdO7elzbYSavSsRDCNUyijBhg7rzPJeiWfbyC1yeASxV1Crf87fODrNpSkCVQlgOAOGLBdoQyS-l8kH4_vwWSRTMR9qF43JzOGKo0DB7wpixHxKyrZfrpixKKOJlf-UMT0bkAVdgEvSGnr0WehIpcLk2nA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.coolmathgames.com/sites/default/files/public_games/52546")
},
{
    title: "Getting Over It",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB0PaBrNAJX9qDF18xz0j8U38USeq75Etdkt1mAUpPCTsSqLVw8DXjpXc9LQ5I-lsFKI0cP-oCrNbw3I0WcFhE--_OXQVAgktXwGVtfzWBICBSX4JFeQsTqxWKo82ld9dryi8GlIv3ZoR9LvdsWwXErHz5iI4wZ7uqG?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/gettingoverit/index.html")
},
{
	title: "Soccer Random",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBLGr_YZ0CmTmXig0exrgwHvzOwvac0q3LntszT378BKYiR07HLu5dFR_kAwET0o7MV1U_8DiHaXrLPJqVWkXJiP-Cc8a-JbDKvZ06BMXpPzoEKgqwc-zO3HeSrC6t_fccdxEeaeg-YJIGktx8dZ1oaxbUXeyEQ6pZowg?key=yj4V8pHW144VjA9YlEbf1Q",
	link: __uv$config.prefix + __uv$config.encodeUrl("https://void.radio.am/local%20games/soccer-random/soccer-random-main/index.html")
},
{

    title: "Head Soccer",

    imgSrc: "https://play-lh.googleusercontent.com/yVRLyqu3y5wKs5WKcaeeKbTZygK-rCp6SDScAyTX4XqvJlNSi4WZzbDZf2a_zR-47g",

    link: __uv$config.prefix + __uv$config.encodeUrl("https://void.radio.am/local%20games/head-soccer-2023-main/index.html")

},
{
    title: "8 Ball Pool",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBlleTS1GJYv-KCGXIRWlwuXFkTHsZQ6aXPSoBfc0TjEgQGNjnuNc6gDueGlS-5KBbA5RS32S8jPMEm0fr95gPlK-6pJudpzt29inkLDoOblWar8AUGJnpWvx87baUtiYmwKXXFxWQ4l3k2Cq-iikfG3jTJvBRpffdx8g?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://void.radio.am/local%20games/8-ball-pool-yyggames/index.html")
},
{
    title: "2 Minute Football",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDPM-mu7l0vROyVRjK2hmfH-NDVGtLwAgfwVr2bPFYzmIqtb5kxlxF1qmVL5PvjTksq9lOAuWy47LbJ8z0jszxCgslskD3Sk8WjY38tcKEhyBEapRHE3zkaTcbb4OdnPQelHFIPcYQaIAibKXGlOfmi52cMMZ6GcGNCuw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://2864e36c-59ac-424a-9df6-fadd5b105400.poki-gdn.com/d42b27af-597a-4b82-b6fa-91196e3b5a5a/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-9b00601e7517075015f790e097620ef83abcb8c2&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2F2-minute-football-classic&hoist=yes&nonPersonalized=n&cloudsavegames=n&familyFriendly=n&categories=2%2C93%2C775%2C854%2C869%2C929&special_condition=landing&game_id=2864e36c-59ac-424a-9df6-fadd5b105400&game_version_id=d42b27af-597a-4b82-b6fa-91196e3b5a5a&inspector=0&csp=1")
},
{
    title: "Planet Clicker",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCpc0lzQ8Oc7MdMmXxJRsKMXo6CFBr3h0jtwoNl20viKLqXPJ3FGoVCmfRKfACjugQlkL8BASUvBQdt9GLjaz7RlRAWsAxxwpXoCKkJQUg18BEGbdDw1RUdaem0cEC9pyiHoz0wFytk8rc-9wtPRT-i0Dyz_jbYaHdd?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/planetclicker.html")
},
{
    title: "Poly Track",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAnHhTfnPQtyGj9JyDQ-hHtr0abztS_6_jhOJYfIXFf0ojvR03MqSmD0efjnJC0gQzZOMQl1me1K6d39GhBwWK0uZELGZ9n__hwKZ4fcc4vqqSSa0dcx1epl2tPT_awQwGJ-eIU6bA0s29FL6YdwISTJ8oZjZlxa49T?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/polytrack")
},
{
    title: "Rocket Bot Royale",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAjx1BBhREn_rd2nc6WPdb3GJtcANGnZLSlq2yFuCOSmDUFfdUthoSkt5ZQhQr-yWiNk5DPua0eg5GaN_nRLw4zqZqOyNSP0VBr1ftFr_qaRGHxHvj_pwBQcivsnVURPzvDxenkjOjIl5txkoLw3DcUbycfS_7s8egW?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://rocketbotroyale2.winterpixel.io")
},
{

    title: "Speed Stars",

    imgSrc: "https://lh7-us.googleusercontent.com/ud4mZPl0dGjWzNuTc-rEY-lKLyqoln5Tfdo9bnk9bHYR-X0WdrD_teYV6RfG2ZAEEUgTuFVQ5_Q7xTpgyBScUxuQFbX2AVjV9VdKYgWC5h06t4uHkmv7Eu7ozqDOYmlpKeln4F75Px53YOWcPqh2A5t2V2QoQek3GjBYaxsDfgEawsFvmRvtqh56m5BJvX1UlRDC0EFy?key=yj4V8pHW144VjA9YlEbf1Q",

    link: __uv$config.prefix + __uv$config.encodeUrl("https://speedstarsfree.io/game/speed-stars")

},
{

    title: "Crazy Cattle 3D",

    imgSrc: "https://lh7-us.googleusercontent.com/A2kcwkSl4mGLLMtOm6YiuSrgezQ0KxKi9k92Ju_4z8IEvQHeXYtW6KamntKutGZJES4Fa1vUH2itvpptMC4MrOywXKHkm6aFNYnX-XWo5z2V9C7OzFEjdhZlwHX8Uwca8SmG4ceF82e3Al0QyBHqwWw5UqAjhyAPf_Wl75-dkZ7_tv8hjoI7PpPHWaIVtA146y_Y0iRs?key=yj4V8pHW144VjA9YlEbf1Q",

    link: __uv$config.prefix + __uv$config.encodeUrl("https://1games.io/game/crazy-cattle-3d")

},
{
    title: "Pokemon Showdown",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDDeT4jlXqmHMfwW0MF2lPvRydPKLtLmn7NCfj5nInVP3W1TEAkg-82RgS47dMm4k88R9lm1ylTJ7kliwQC3AFvED9phSMdsl46mXjHRoDuHffN8V8mOaQRuZ-2lrcn1DEmpoAGb1jpq2bH2BVf1ErIVijf4ULHYSiwMg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://play.pokemonshowdown.com")
},
{
    title: "Opposite Day 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAPJ9D2ZZgchHSPfUO8cyXo_Dls-vNQbZb7i-AoHQDRPIm0SzyF5LVAeP7iemNjaqoOjCVvbMv5aTLoUGk2ItlyejsDh7rZVAT0xwwEfeckRVk_aySxTWS2Z-zodmoAXc7vV1EB7juqLEMizSvf7a58SVSahtZP8uIwzg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/opposite-day-2/index.html")
},
{
    title: "Slice of Zen",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCwtjWjeY3GmiKAGLYzAX0tMNIu1YuxsPQQIiaovt1DYwNIAWY88tJGeauS127gQvWE-Umd3LF_8V1mvhi_uu8aMOQhPn2C5EKDrFSex3WeRA6it6Infx9cnHZB0xrbsdeah8roTPVPa6qEdILUNJhiuTyMvVeeCUxS9w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/html5.gamedistribution.com_1761078308/rvvASMiM/1b56d068061f412c8d33add2d6251ba0/index.html")
},
{
    title: "Block Blast",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDqPAXWF4VM40ryK5_92YOAXm7Pqw3o0d-ERwzSXGD9HzXdQIk1yLaT_iCrCed1XcZSaaG-aMTzg2pccxTY2WGMZJpzCkT79bWmcyq7JkRRmsgjzyWYld54NZ1ObMOMOueFsNKDwNZ0n6o1CaTdTbB3XvH9MEUZgI8m?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/BlockBlast/index.html")
},
{
    title: "State Connect",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDWbA8-IxnfaOceU9hDHdMxOUgkEQ8VAYmaYJKudS6_BnaatZiGU5hO6sKuUM6ZvuYAYl21uX_05zYbNxh4ZeP_XRhBc4P_IIiJR1NfiGTJ9RX8ChsFTjnfOYKh36lXEcCxm9WzamINiLwnlo9hyWsnfYBJQyGQ9UofDg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://games.cdn.famobi.com/html5games/s/state-connect/v010/?fg_domain=play.famobi.com&fg_aid=A1000-10B0B&fg_uid=da3142db-c668-477a-9191-dd901305ca16&fg_pid=48fd668a-7711-4ef7-9b1d-723b3af47503&fg_beat=070&original_ref=https%3A%2F%2Fplay.famobi.com%2Fwrapper%2Fstate-connect%2FA1000-10")
},
{
    title: "Escape Road",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDP8i92TvKYozeudO8f-fO6XWlRLBzNliSq7Py6wFszTcfE4HNojybJcQgzCN69bz16SG8jRQqLj85F4vUXDKocIRyCHOaUP-XTWE2GIU7FFawi0xvODQfMTzeENwZRVSeZx1HdACO3QvAmQIeRblUlWVgL7tY3QdMi?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/html/264.html"
},
{
    title: "Bank Robbery",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAtp3kKMlvXtNg7kdQxB8OPk-cZqDVn1MB1ZSX3PyQlSmvrvbjmy4SJNq2vfGv95ZLyD3mYeGjuNHc0SbylPMRKKyexFgCHxjVPkiO6HkGj0G5598AgIfs5ZlclIn6vYP04VipBW_k7jMBiODBwb5BBsOqaN95G-ag4vA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/testgame.html")
},
{
    title: "Use Boxmen",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCEkJDFkRIXWztwxffGaB8ugkrewGaMXyAxdHCznKFNIxJpk9uiCqAZaGHAZ8wy_9mORgLMrZ18dQ8oRQl1rb6xMYVbmTcMjNqPlNKSDCWeHx_hyqCq1Y6QTNC4xZJRZOO00ipiv1c4BGeaaPTy6egKgwmUA9u4ftOfpQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://games.kidzsearch.com/computer/flashgame_data/ruffleplayer.html?game=use-boxmen-42945")
},
{
    title: "Curve Ball",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAMdgxBA_hnwOrFWTUQQ7U5Sh7kjTd821ByEL1UyLk7DIh8GoU23rGbN46v-NuAWBSZTz5sKeGS5W5HPBNaTzsnR77tHvq0iseCNby53l18Ur_WFZGI4125M9_QH3IIJjnzL5f5HBcC58eqVRlIiqQUiqCh7U0r_krZcA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://www.coolmathgames.com/sites/default/files/public_games/47965")
},
{
    title: "Short Life",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBKGf-DKFZcrwY0Shl5zf9ab3x2dHcghnJWKQaY4rHYC_ipn0es8IPNGmH27iNf_nnYItcy4pWRsvxEUkCSab73pT13ccRApDfWAkB2BAFIOL94ormDZ8uMc5DCRKjssWEejiPaFP2OEYOOHVZcSs_1HO2fk6UKg1oM0A?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://classroom8.github.io/short-life")
},
{
    title: "Flip Parkour Pro",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCoiqtld3YSqwf9qjk2hs5gjuytIJRIa_p3fxQWpba723SI948z3aVXVt5qQMUZR2kcQPUw6N46KbAgTtGb2fjOyYNzChcLBeekANNgP9__Y8ahXgTbb4DZ-DLBOpF7DxxvcNkTnwAFotDJcPNIT6c1s2arhRP6hL48?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamedistribution.com/rvvASMiM/e8938917404a4ed2b249d53d1b25faaf/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3dhY2t5ZmxpcC5pby8iLCJwYXJlbnREb21haW4iOiJ3YWNreWZsaXAuaW8iLCJ0b3BEb21haW4iOiJ3YWNreWZsaXAuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9")
},
{
    title: "Retro Bowl",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVB_jkTKN05q9bkWG4pZ0tnQX3eztMsVGCDYstrc1JIttSoPUbdtOsMSwFhGIum6ILKHlhvmC7dt8lGxiFhFDRA_qBdwPTxl_NaKFWFHyRYL5fwzH0VudwIjKqMn-h27jNuN7wOwrcpaPBufkUpZZGsw5O1kYhk-QpTAjg?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  "/onlylocal/Retro Bowl/index.html"
},
{
    title: "Clash Royale",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAZHCWOj0VI33kUwpj8joiAFq9Zpi6B_5No77BkdhNQmRiS5GgbX26M5lgx_iGnCQ6iMrRFf0tCWwfQpPC-dn-OyIJ7AZjefr8Ox_y7HuCIzls_vEQvm1LlIp7JIRWG13PC27c3LnuMEwBRKAXGjcd0S7jMW7zKsuv3?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/clash_royale/index.html")
},
{
    title: "Theme Hotel",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBooQN-Jn57VJUmCH7D_omEssMtOwusAfjMomQ6JxfeaaFeDqRj91h7S3TYBCDvVbduM2q75YyIe0TcRuQYkUZpjMDZAesDYJmf8tE7qLowliQsK1cYr_YK_ImOlE1H0Hj_z5_eCFOtzfHL5gZRarzFStvcZ1N8UMSQZA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/themehotel/index.html")
},
{
    title: "Granny V2 (Horror, Gore)",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAOCXCUUiC6jreRvHIfc7ACUY4nxESc2Cp3_ZkrvbvpvlALH_4AR8xqIWwNavnAMxCEvi2Qn0xA0QeMnaMj7IjG31ITzvXqgMUCe051GrQnKMqCN03iVk9Jgm-V6BT-t4xeN_N4WF0PYz7iF2YahD7S39dXKQHZ1a94vg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/granny-main/granny-main/index.html")
},
{
    title: "Granny",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCFc9d73m8AUDGlHlBSViBJP4BgxBbI-XscsqLbRxfzfgWuky1UUT6oNSnZZrchyK5oLRoQkqO8tffEWi6oBluKkiT5F5ebZ_Bm_RzI_lYREX-UBqmczRAXpdr4i9VkyAaanV-OuvagRAEb8bbpH3bCgoUzmfAI6Yv_?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://sz-games.github.io/Games8/GRANNY")
},
{
    title: "Friday Night Funkin VS Impostor v4",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDNLYq1rGgajNHTVov3hoRqOcMP9nB3alYSOA46c8kXn2lQucNgi4ULXD-zUhOPrRJn3ha9YULTopQZfyOEu2KS17MeOc_M_nUTbh3p6_Gy__psPTHzPZj4l9or3pckVcet6ciDCdgmhtHkxxQ2l7bND6aFska9tQiy?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  "/onlylocal/Friday Night Funkin VS Impostor v4.html"
},
{
	title: "Cluster Rush",
	imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDwPyOCqStLCoartvPpMgk8thip0LRmXpyefD0UQU9I09_qbd-qO1hU7vy1nRtWeFjiN-ACbVIxcTWP3IOnE4BBrPx8-tRyTVAS3GU61dpozqLNtGj8XfXrNu85-LGJFdxysZuLLiuFjtMe2SdiUrMbfXKRStLO9N30?key=yj4V8pHW144VjA9YlEbf1Q",
	link: LocalGameEncoder.createEncodedLink("/local games/Cluster Rush.html")
},
{
    title: "Flappy Dunk",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVD8p4RNCYP73SH2B8owesS3Ycspb_vu6sugjQxVpAhyD9mQ92BR9-Z88_da756dhmAsYEXX5MhzPM_-t_VLtOBf4delN1pbHIVkmzWj6F6V1kCyINZM6yTyh3ah-ynhF09j779uquGELT66kN_NUlerz--HnIcKGm0Jvg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/flappy-dunk-crazygames/index.html")
},
{
    title: "Big Shot Boxing",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDl3ErVv11j_rUU95mATvlzawKhxf3rXf7L3Bzt367Ku73dNUdzH1rjC-tQDfzu5RciynF3MNyttxruxqPYKLJDc17wCbrciflUOZTYW0BdU3LohucdthYgW_GTzccNCsYAoYP2ySP7txWGyiTKBeccC3GYpGrR-Ac7bQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/big-shot-boxing-main/index.html")
},
{
    title: "Protektor",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAOHIrV6S5uuAb25bcnnzkyGLRvGmUL4C6ewtO9bDGApjhfNvpq4P32dsrGpn3aQEvQlxenOIm_NmBvER174_9_S-_uCPRFvXfO_-SYaLvn3FtkXuNccVZN0y1pA409Q5BOGp9Ps0_zQ6WHeijDCgZ_7O9jM9rw649z?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/protektor/index.html")
},
{
    title: "Goober Royale",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVATROLo0tNpUj7D9SrZZO3xQJOh3tvOoFIbJQcCnYi7v_cS2vMOtdn2nMaMWpiItkn3ZoTz33U2bDToBA-HWK4vu8NuLYB6g7wCTNgyse5awLoLjZqNmkrovMyLsddRr0u7tSBP6VukNGuthsoG6WPo-AP-7JU46vwxzw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://gooberroyale.winterpixel.io")
},
{
    title: "Freehead Skate",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCl4edDhIcuyqy7HgYfOsh7XbZL2vjzR2t5Jjub8G0_UbmyIhYWlEFLz9ZsxLPi1tLTMJP-qJyyXlhH8No5hnCwnk79kTxU6e3yEyK--euTrgE_P3KM4Dk9sigAf-BR-iHQA2Mstp-tm0-zmxb-od_tQrS47vscSTMpJA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://plays.org/game/freehead-skate")
},
{
    title: "skribbl.io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVD1uds83IKSyphgSns8WGfgF8MfltkfEuxsgvAoZ7-Ml0zwEppqilFp8euvFA2-IcuWjznPGMw-5iFmg35DxysEdkGB798a7kjMkVKMavazzpYfI8NC-xR30eA60vY1LkxBtdzjirq-86LDe6EQmsqqeogb3v9sUR2W0w?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink("https://skribbl.io")
},
{
    title: "neal.fun",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDKX4SHBuFruvnmslUiih-gnlsi11k9Ph8-O2DAQnoW6mqBa54SMo-SHlIQ4UcwHG6fktysbPaMzMq6TFpbHu0cmSRtOU5cA8ERHYR-cY8THYc3q05x-eQ0q_HqyJOaoUbJPMo7_BLx4AMYPISr2S-RSuQYoWpf7VFrwA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink('https://neal.fun')
},
{
    title: "zombsroyale.io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVATDTiWyTTMwY7XHUkiyQZ_XY9i2Yd-k2UFAvZ6VU8h6msu7YqUFeA1LqHnFjeiaNIs1exZ4KfgqtF2i_yKj5nbKXU6HaADHE1xnOTw6yViYF6R3DvfN7St4oYKDzA1OeTOB669DOCB0RxWNXch2MkrUqA0t2UD5ISK?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl('https://zombsroyale.io')
},
{
    title: "yohoho.io",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVA8tb7FLtT5A90B23fU5Rd3PSFzt13ojf8O3uYY8tsACX1xzoF3UcWiHFCsS2CfxsP4a8pvTsf9oo6uJqb9cP5bbTawrmZo539HfZfrXl7Uwkm_R2lAJeeTjIuoaQEx6vd0NKt8Rq3j1_widACIlBPQMl0v3NaVIVjmdg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: makeScramjetLink('https://yohoho.io')
},
{
    title: "Online UNO",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCvsRIEpAPnKdKlWOI8nZWeTYRcABD6GTdPEFR7uHHoUiB8N-_7gHppA-gFBtly8IrKQO_0OQf9iPKeYNANi_q6DyeGaCZCor70GJcISsvMgzU0T54R3x2QYLfuWGWh_O0G0yWbJcOg9hojVtb6ZcnRZtyCbxp9O3Q1hA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://html5.gamedistribution.com/rvvASMiM/f2520bae00624e93a4f4614732fa259e/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.twoplayergames.org%2Fgame%2Funo-online&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy50d29wbGF5ZXJnYW1lcy5vcmcvZ2FtZS91bm8tb25saW5lIiwicGFyZW50RG9tYWluIjoidHdvcGxheWVyZ2FtZXMub3JnIiwidG9wRG9tYWluIjoidW5vb25saW5lLmlvIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D")
},
{
    title: "Scuffed UNO",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBHNsr0iVer5icDTvlKNn5zftyHnXaeUWMXlbh0FZmr7S7L0XlYjEciHfO1Ggc2l8lyHg38__BeOMWVK96HPViTiSALjPbAF1vkXwVB9fVFbskA67_yCaH-yFFjx-WaA-k7ZtOrCVnZ3Rdpb9DQe3VNbwt07Rc_vjK2fg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: __uv$config.prefix + __uv$config.encodeUrl("https://scuffeduno.online")
},
{
    title: "Ultrakill",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBVAkrncWEHwaQeACgRtp2BA2l5HmkQPDJHVdnt1yixMtrt-sv0KNCUA0f4IL-ITIDgWPL9pXpy6Lz5V672vDLSkzyZb2TbDo6B1oai0PZkGb3uQImJ7TzXBmVSYx0k92kJP2ZVnxiy44MXPrhBCXyeZTqmwBm_Vrsd3Q?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/ULTRAKILL.html")
},
{
    title: "67 Clicker Rizzmas",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAcXD9NIOeZSyvqqW-j0PHxgJa7ZQuKb1TZzMh_F9bNh_KwCxaZUVM07NoWBT07MHBVDhwjUSfDVv6MlxzJDB7srHymlEFkD-6IlKiwtrIM1sBzT6FtJ54yliOtLQB-3zYRDg4XvBejvm4obn1ustCD5BiihR5rvJquuQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  LocalGameEncoder.createEncodedLink("/local games/67.html")
},
{
    title: "Snow Line",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAwCoYb0h4m5g1jT7p8IXRFFXeW47DFuS4Su7ZQNO3JDu-LWK4gjUwuJVorL7LvWncP_zC9vyLk7X5wA7tZT4ep7o7n6S1Ks9JSAbDajwEjQ5y39dQU965g06ewdu562w6nMWFbqG0zcEtLhGpIaESqcVa0o0j2W43Q_Q?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  LocalGameEncoder.createEncodedLink("/local games/snowline/index.html")
},
{
    title: "Cuphead",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDIIiDSlQkG5i9PbypY3wv_JjddKGjt0OzZbsU9nYtKIAURD9slcyorj9NEqTIhEea32_Gpjl257W2KYT2LoYD5QgHBaNCROTHij6Am4g1lrEqVmFbcu57LhJ-PVQZi11kv11YT820-TuMMqjL6ouESuSDvCF_5OMiXMA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Cuphead.html"
},
{
    title: "Undertale Yellow",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBReZJ3GSVTQeGFflLXEZQt-CcTQhkS3M-Dm3cg45XLfyiWHWt4dthYgkuiEayq5JR1wk1bl9BGrojHHhvEhsKmcf-D1TshwgisVNa6r-CvcocG5lwBi-y8HQn4hTlJKC8_u4oXuVNQXr-hVHrymf2-2m6yhjizawrf6g?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Undertale Yellow.html"
},
{
    title: "Deltatraveler",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBIlRqUrq5--ewkhKYLi0qkuLR7JP48nawP7QpzlbDPnIaWiRcwduYTnqvERx_px0lfA59sKeWBgtm5QKCieAYwxGV6OTXTCn3eLsfiyN80lMSDuPsRW-3XO6_Hc4pvIuVPz_Kb0AW32pqkDf54K65v4PwWogowjJHlnA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/Deltatraveler.html"
},
{
    title: "Neon Rocket",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDgG4w1QnRcpHkT0AGWCvt7ZzOCmRS31e3sxJ7oNDZvbcKcGqutIFamS2lPfgQJapM5QHBJsWs8nFIscQ0Zu5B00T2EVqb01hDXQGcCGVlIoXnwRONCMdsAHj89kh4BoC3iAuHOzLYPOMDKWuk1UfjPlwQv929p8r_TYA?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  __uv$config.prefix + __uv$config.encodeUrl("https://www.mortgagecalculator.org/money-games/neon-rocket/")
},
{
    title: "SoundBoard",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBO0WdFhJI3ez3F0c81VA0waZhOk8xtRxOGcjgkt2m1TMmoF-9jFOxYm-LS0numKF47y6EUGx_QjBIm7g5MxDlgkMWv-qbHqmmaWOzSjzCDlz3pug7muwXxfZUIqxR3llIkp9LyIJlLZ0avQ424n3dRmx2DIbW_s56i1g?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/soundboard.html"
},
{
    title: "Cube Field",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBaqCbxnVLGgynBGffIVEpO4J3wVSgKpBEy9d25NFPJ0dQRgoY_Ht6NkInfRTUiOu0OzjMjxxMrPnfFdBPi-H6RdaCop-M2dQeaBHh_bNcYX2ekpj2hB5VC76qL9mCTkD9H9kopXhXPTLAsEDjYcDRdWt1jFmkmz_eDiw?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  __uv$config.prefix + __uv$config.encodeUrl("https://cubefield.fbrq.io/cubefield/index.html")
},
{
    title: "Sister Location",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCfT1ddkX4x5PMo-uDr4PyENDz0tvOQofZsHmQz3ykVYMjmMrUKhNDYm93krynfPCTa1nkmQsmIY3wp3Hkdt2B9u9yrKBqHEXUXgZB9kXU2Tqsd98J1ba-_w6hJzKBwZsBg8QgjVms-5wNi6xCxDDLaizCZhPVhf5qW?key=yj4V8pHW144VjA9YlEbf1Q",
    link:  LocalGameEncoder.createEncodedLink("/local games/FNAF5-gh-pages/index.html")
},
{
    title: "Jelly Drift",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVADeEmR8_dKZKurv8VIIq60gBE17d5XBO_he0bdJc0YnbmZPSu6azuNQx8uweKqXft5plmXHOsPGyr4L7QYwJ9v6o5i6iZz76_zalZTSy4JX5dRWSj-WIYSBS-rQm99PRD4MxjF5olAqWUWM6qTqlmc8d3dskARx3Y9Ag?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/jelly-drift/index.html"
},
{
    title: "Getting Over It (REAL)",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDsMTZo-UlCrTZcyL9LqItgcfXCqd-EpiS6ryEn3YpZ2GwvGdFk3csT3-NNKbtnfhWJRaNsugXVVsHUhVhQS26163MBVfL12YPy36ZKVL3ggruB2Be0uPKMua7Mqn25LgHRKg6YFUqW2OsfA25TQx0FzqLFac0W8KLUAA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: "/onlylocal/getting-over-it/index.html"
},
	{ "title": "Bowmasters", "imgSrc": "/onlylocal/covers/0.png", "link": "/BM/Bowmasters.html" },
  { "title": "Temple Run 2", "imgSrc": "/onlylocal/covers/10.png", "link": "/onlylocal/html/10.html" },
  { "title": "Stickman Hook", "imgSrc": "/onlylocal/covers/11.png", "link": "/onlylocal/html/11.html" },
  { "title": "Hide N Seek", "imgSrc": "/onlylocal/covers/16.png", "link": "/onlylocal/html/16.html" },
  { "title": "Mob Control HTML5", "imgSrc": "/onlylocal/covers/22.png", "link": "/onlylocal/html/22.html" },
  { "title": "Amaze", "imgSrc": "/onlylocal/covers/26.png", "link": "/onlylocal/html/26.html" },
  { "title": "Geometry Dash Lite (REMAKE)", "imgSrc": "/onlylocal/covers/27.png", "link": "/onlylocal/html/27.html" },
  { "title": "Bloons TD", "imgSrc": "/onlylocal/covers/71.png", "link": "/onlylocal/html/71.html" },
  { "title": "Cubefield", "imgSrc": "/onlylocal/covers/84.png", "link": "/onlylocal/html/84.html" },
  { "title": "Gunspin", "imgSrc": "/onlylocal/covers/91.png", "link": "/onlylocal/html/91.html" },
  { "title": "Moto X3M", "imgSrc": "/onlylocal/covers/96.png", "link": "/onlylocal/html/96.html" },
  { "title": "Moto X3M Winter", "imgSrc": "/onlylocal/covers/100.png", "link": "/onlylocal/html/100-f.html" },
  { "title": "The World's Hardest Game", "imgSrc": "/onlylocal/covers/103.png", "link": "/onlylocal/html/103.html" },
  { "title": "The World's Hardest Game 3", "imgSrc": "/onlylocal/covers/104.png", "link": "/onlylocal/html/104.html" },
  { "title": "The World's Hardest Game 4", "imgSrc": "/onlylocal/covers/105.png", "link": "/onlylocal/html/105.html" },
  { "title": "Snow Rider 3D", "imgSrc": "/onlylocal/covers/119.png", "link": "/onlylocal/html/119.html" },
  { "title": "Granny 2", "imgSrc": "/onlylocal/covers/125.png", "link": "/onlylocal/html/125.html" },
  { "title": "Chess Classic", "imgSrc": "/onlylocal/covers/151.png", "link": "/onlylocal/html/151.html" },
  { "title": "Draw the Line", "imgSrc": "/onlylocal/covers/152.png", "link": "/onlylocal/html/152.html" },
  { "title": "Melon Playground", "imgSrc": "/onlylocal/covers/172.png", "link": "/onlylocal/html/172.html" },
  { "title": "n-gon", "imgSrc": "/onlylocal/covers/180.png", "link": "/onlylocal/html/180.html" },
  { "title": "Minecraft 1.8.8", "imgSrc": "/onlylocal/covers/181.png", "link": "/onlylocal/html/181.html" },
  { "title": "R.E.P.O", "imgSrc": "/onlylocal/covers/195.png", "link": "/onlylocal/html/195.html" },
  { "title": "That's Not My Neighbor", "imgSrc": "/onlylocal/covers/216.png", "link": "/onlylocal/html/216.html" },
  { "title": "Chat Bot (A.|.I)", "imgSrc": "/onlylocal/covers/253.png", "link": "/onlylocal/html/253.html" },
  { "title": "A Bite at Freddy's", "imgSrc": "/onlylocal/covers/258.png", "link": "/onlylocal/html/258.html" },
  { "title": "BitPlanes", "imgSrc": "/onlylocal/covers/330.png", "link": "/onlylocal/html/330.html" },
  { "title": "Learn to Fly 2", "imgSrc": "/onlylocal/covers/341.png", "link": "/onlylocal/html/341.html" },
  { "title": "Adventure Capatalist", "imgSrc": "/onlylocal/covers/354.png", "link": "/onlylocal/html/354-a.html" },
  { "title": "Slowroads", "imgSrc": "/onlylocal/covers/369.png", "link": "/onlylocal/html/369.html" },
  { "title": "2048 Merge Run", "imgSrc": "/onlylocal/covers/375.png", "link": "/onlylocal/html/375.html" },
  { "title": "Andy's Apple Farm", "imgSrc": "/onlylocal/covers/426.png", "link": "/onlylocal/html/426.html" },
  { "title": "God's Flesh", "imgSrc": "/onlylocal/covers/434.png", "link": "/onlylocal/html/434.html" },
  { "title": "Nijika's Ahoge", "imgSrc": "/onlylocal/covers/447.png", "link": "/onlylocal/html/447-e.html" },
  { "title": "Aquapark.io", "imgSrc": "/onlylocal/covers/448.png", "link": "/onlylocal/html/448.html" },
  { "title": "Bad Time Simulator", "imgSrc": "/onlylocal/covers/472.png", "link": "/onlylocal/html/472.html" },
  { "title": "Steal A Brainrot", "imgSrc": "/onlylocal/covers/479.png", "link": "/onlylocal/html/479.html" },
  { "title": "Human Expenditure Program", "imgSrc": "/onlylocal/covers/482.png", "link": "/onlylocal/html/482-2.html" },
  { "title": "Touhou Mother", "imgSrc": "/onlylocal/covers/523.png", "link": "/onlylocal/html/523-f.html" },
  { "title": "Cat Gunner: Super Zombie Shoot", "imgSrc": "/onlylocal/covers/537.png", "link": "/onlylocal/html/537.html" },
  { "title": "Karlson", "imgSrc": "/onlylocal/covers/542.png", "link": "/onlylocal/html/542-a.html" },
  { "title": "Getting Over It with Bennett Foddy", "imgSrc": "/onlylocal/covers/557.png", "link": "/onlylocal/html/557.html" },
  { "title": "Highway Racer 2 REMASTERED", "imgSrc": "/onlylocal/covers/568.png", "link": "/onlylocal/html/568.html" },
  { "title": "Steal Brainrot Online", "imgSrc": "/onlylocal/covers/577.png", "link": "/onlylocal/html/577.html" },
  { "title": "BuildNow.gg", "imgSrc": "/onlylocal/covers/581.png", "link": "/onlylocal/html/581.html" },
  { "title": "Stone Grass Mowing Simulator", "imgSrc": "/onlylocal/covers/584-a.png", "link": "/onlylocal/html/584.html" },
  { "title": "Plants vs. Zombies 2 Gardenless", "imgSrc": "/onlylocal/covers/597.png", "link": "/onlylocal/html/597-a.html" },
  { "title": "Sonic.EXE", "imgSrc": "/onlylocal/covers/598.png", "link": "/onlylocal/html/598.html" },
  { "title": "Metal Gear Solid", "imgSrc": "/onlylocal/covers/599.png", "link": "/onlylocal/html/599.html" },
  { "title": "Schoolboy Runaway", "imgSrc": "/onlylocal/covers/605.png", "link": "/onlylocal/html/605-e.html" },
  { "title": "Sonic.EXE (ORIGINAL)", "imgSrc": "/onlylocal/covers/606.png", "link": "/onlylocal/html/606-e.html" },
  { "title": "Tattletail", "imgSrc": "/onlylocal/covers/607.png", "link": "/onlylocal/html/607-e.html" },
  { "title": "Friday Night Funkin vs Sunday Remastered HD", "imgSrc": "/onlylocal/covers/609.png", "link": "/onlylocal/html/609-a.html" },
  { "title": "Postal", "imgSrc": "/onlylocal/covers/617.png", "link": "/onlylocal/html/617-a.html" },
  { "title": "Oneshot (LEGACY)", "imgSrc": "/onlylocal/covers/622.png", "link": "/onlylocal/html/622.html" },
  { "title": "Doom 3", "imgSrc": "/onlylocal/covers/626.png", "link": "/onlylocal/html/626-f.html" },
  { "title": "Pizza Tower: Scoutdigo", "imgSrc": "/onlylocal/covers/628.png", "link": "/onlylocal/html/628-f.html" },
  { "title": "Off", "imgSrc": "/onlylocal/covers/629.png", "link": "/onlylocal/html/629.html" },
  { "title": "Endroll", "imgSrc": "/onlylocal/covers/631.png", "link": "/onlylocal/html/631-a.html" },
  { "title": "Cave Story", "imgSrc": "/onlylocal/covers/632.png", "link": "/onlylocal/html/632-a.html" },
  { "title": "BFDIA 5b: 5*30", "imgSrc": "/onlylocal/covers/638.gif", "link": "/onlylocal/html/638-f.html" },
  { "title": "Friday Night Funkin vs Nonsense", "imgSrc": "/onlylocal/covers/644.png", "link": "/onlylocal/html/644.html" },
  { "title": "Arthur's Nightmare", "imgSrc": "/onlylocal/covers/645.png", "link": "/onlylocal/html/645-e.html" },
  { "title": "Mindwave", "imgSrc": "/onlylocal/covers/648.png", "link": "/onlylocal/html/648-el.html" },
  { "title": "Milk Inside a Bag of Milk Inside a Bag of Milk", "imgSrc": "/onlylocal/covers/650.png", "link": "/onlylocal/html/650-f.html" },
  { "title": "Milk Outside A Bag Of Milk Outside A Bag Of Milk", "imgSrc": "/onlylocal/covers/651.png", "link": "/onlylocal/html/651.html" },
  { "title": "1 Date Danger", "imgSrc": "/onlylocal/covers/653.png", "link": "/onlylocal/html/653-f.html" },
  { "title": "Final Fantasy VII", "imgSrc": "/onlylocal/covers/654.png", "link": "/onlylocal/html/654.html" },
  { "title": "Goblin Goopmaxxing", "imgSrc": "/onlylocal/covers/655.png", "link": "/onlylocal/html/655.html" },
  { "title": "Rogue Sergeant The Final Operation", "imgSrc": "/onlylocal/covers/656.png", "link": "/onlylocal/html/656.html" },
  { "title": "Friday Night Funkin vs Undertale", "imgSrc": "/onlylocal/covers/657.png", "link": "/onlylocal/html/657.html" },
  { "title": "Midnight Shift", "imgSrc": "/onlylocal/covers/658.png", "link": "/onlylocal/html/658.html" },
  { "title": "Orange Roulette", "imgSrc": "/onlylocal/covers/659.png", "link": "/onlylocal/html/659.html" },
  { "title": "Please Dont Touch Anything", "imgSrc": "/onlylocal/covers/660.png", "link": "/onlylocal/html/660.html" },
  { "title": "Royal Towers: Medieval TD", "imgSrc": "/onlylocal/covers/661.png", "link": "/onlylocal/html/661.html" },
  { "title": "Going Balls", "imgSrc": "/onlylocal/covers/662.png", "link": "/onlylocal/html/662.html" },
  { "title": "3D Bolt Master", "imgSrc": "/onlylocal/covers/663.png", "link": "/onlylocal/html/663.html" },
  { "title": "Tall.io", "imgSrc": "/onlylocal/covers/664.png", "link": "/onlylocal/html/664.html" },
  { "title": "Match Triple 3D", "imgSrc": "/onlylocal/covers/665.png", "link": "/onlylocal/html/665.html" },
  { "title": "Stick War: Legacy", "imgSrc": "/onlylocal/covers/666.png", "link": "/onlylocal/html/666.html" },
  { "title": "In Stars and Time", "imgSrc": "/onlylocal/covers/667.png", "link": "/onlylocal/html/667-fix.html" },
  { "title": "Gorilla Tag", "imgSrc": "/onlylocal/covers/668.png", "link": "/onlylocal/html/668-fix2.html" },
  { "title": "Terraria", "imgSrc": "/onlylocal/covers/669.png", "link": "/onlylocal/html/669.html" },
  { "title": "Raldi's Crackhouse", "imgSrc": "/onlylocal/covers/670.png", "link": "/onlylocal/html/670.html" },
  { "title": "We Become What We Behold", "imgSrc": "/onlylocal/covers/671.png", "link": "/onlylocal/html/671.html" },
  { "title": "A Difficult Game About Climbing", "imgSrc": "/onlylocal/covers/672.png", "link": "/onlylocal/html/672-2.html" },
  { "title": "Hobo 1", "imgSrc": "/onlylocal/covers/673.png", "link": "/onlylocal/html/673.html" },
  { "title": "Hobo 2", "imgSrc": "/onlylocal/covers/674.png", "link": "/onlylocal/html/674.html" },
  { "title": "Hobo 3", "imgSrc": "/onlylocal/covers/675.png", "link": "/onlylocal/html/675.html" },
  { "title": "Hobo 4", "imgSrc": "/onlylocal/covers/676.png", "link": "/onlylocal/html/676.html" },
  { "title": "Hobo 5", "imgSrc": "/onlylocal/covers/677.png", "link": "/onlylocal/html/677.html" },
  { "title": "Hobo 6", "imgSrc": "/onlylocal/covers/678.png", "link": "/onlylocal/html/678.html" },
  { "title": "Hobo 7", "imgSrc": "/onlylocal/covers/679.png", "link": "/onlylocal/html/679.html" },
  { "title": "Kirby Super Star Ultra", "imgSrc": "/onlylocal/covers/680.png", "link": "/onlylocal/html/680.html" },
  { "title": "Cooking Mama", "imgSrc": "/onlylocal/covers/681.png", "link": "/onlylocal/html/681.html" },
  { "title": "Cooking Mama 2", "imgSrc": "/onlylocal/covers/682.png", "link": "/onlylocal/html/682.html" },
  { "title": "Cooking Mama 3", "imgSrc": "/onlylocal/covers/683.png", "link": "/onlylocal/html/683.html" },
  { "title": "Kirby Squeak Squad", "imgSrc": "/onlylocal/covers/684.png", "link": "/onlylocal/html/684.html" },
  { "title": "FIFA 11", "imgSrc": "/onlylocal/covers/685.png", "link": "/onlylocal/html/685.html" },
  { "title": "FIFA 10", "imgSrc": "/onlylocal/covers/686.png", "link": "/onlylocal/html/686.html" },
  { "title": "Pico's School (1999)", "imgSrc": "/onlylocal/covers/687.png", "link": "/onlylocal/html/687.html" },
  { "title": "Peggle", "imgSrc": "/onlylocal/covers/688.png", "link": "/onlylocal/html/688.html" },
  { "title": "Meatboy", "imgSrc": "/onlylocal/covers/689.png", "link": "/onlylocal/html/689.html" },
  { "title": "Kirby ~ Soft & Wet", "imgSrc": "/onlylocal/covers/692.png", "link": "/onlylocal/html/692.html" },
  { "title": "Half Life: Opposing Force", "imgSrc": "/onlylocal/covers/693.png", "link": "/onlylocal/html/693.html" },
  { "title": "Pokemon Firered", "imgSrc": "/onlylocal/covers/694.png", "link": "/onlylocal/html/694.html" },
  { "title": "Duck Life 8", "imgSrc": "/onlylocal/covers/695.png", "link": "/onlylocal/html/695.html" },
  { "title": "Pokemon HeartGold", "imgSrc": "/onlylocal/covers/696.png", "link": "/onlylocal/html/696.html" },
  { "title": "Bank Robbery 3", "imgSrc": "/onlylocal/covers/698.png", "link": "/onlylocal/html/698.html" },
  { "title": "Stickman Destruction", "imgSrc": "/onlylocal/covers/699.png", "link": "/onlylocal/html/699.html" },
  { "title": "FNF vs Pibby Corrupted", "imgSrc": "/onlylocal/covers/700.png", "link": "/onlylocal/html/700.html" },
  { "title": "Real Flight Simulator", "imgSrc": "/onlylocal/covers/701.png", "link": "/onlylocal/html/701.html" },
  { "title": "JavascriptPS1", "imgSrc": "/onlylocal/covers/702.png", "link": "/onlylocal/html/702.html" },
  { "title": "VS Rewrite: ROUND 2", "imgSrc": "/onlylocal/covers/703.png", "link": "/onlylocal/html/703.html" },
  { "title": "Iron Lung", "imgSrc": "/onlylocal/covers/705.png", "link": "/onlylocal/html/705-fix.html" },
  { "title": "Fear & Hunger", "imgSrc": "/onlylocal/covers/706.png", "link": "/onlylocal/html/706-fix.html" },
  { "title": "Traffic Racer", "imgSrc": "/onlylocal/covers/707.png", "link": "/onlylocal/html/707-fix.html" },
  { "title": "Needy Streamer Overload", "imgSrc": "/onlylocal/covers/708.png", "link": "/onlylocal/html/708-fix.html" },
  { "title": "Survivor.io", "imgSrc": "/onlylocal/covers/709.png", "link": "/onlylocal/html/709-fixagain.html" },
  { "title": "Five Nights at Epstein's", "imgSrc": "/onlylocal/covers/710.png", "link": "/onlylocal/html/710-fix.html" },
  { "title": "Antonblast", "imgSrc": "/onlylocal/covers/711.png", "link": "/onlylocal/html/711.html" },
  { "title": "Jumbo Mario", "imgSrc": "/onlylocal/covers/712.png", "link": "/onlylocal/html/712.html" },
  { "title": "Silent Hill", "imgSrc": "/onlylocal/covers/713.png", "link": "/onlylocal/html/713.html" },
  { "title": "Friday Night Funkin vs Tabi", "imgSrc": "/onlylocal/covers/714.png", "link": "/onlylocal/html/714.html" },
  { "title": "Friday Night Funkin vs Zardy", "imgSrc": "/onlylocal/covers/715.png", "link": "/onlylocal/html/715.html" },
  { "title": "Clover Pit", "imgSrc": "/onlylocal/covers/716.png", "link": "/onlylocal/html/716-fix2.html" },
  { "title": "Peaks of Yore", "imgSrc": "/onlylocal/covers/717.png", "link": "/onlylocal/html/717-fix2.html" },
  { "title": "Untitled Goose Game", "imgSrc": "/onlylocal/covers/718.png", "link": "/onlylocal/html/718.html" },
  { "title": "A Game About Feeding A Black Hole", "imgSrc": "/onlylocal/covers/719.png", "link": "/onlylocal/html/719.html" },
  { "title": "Roulette Hero", "imgSrc": "/onlylocal/covers/720.png", "link": "/onlylocal/html/720.html" },
  { "title": "Shift at Midnight", "imgSrc": "/onlylocal/covers/721.png", "link": "/onlylocal/html/721.html" },
  { "title": "Fused 240", "imgSrc": "/onlylocal/covers/722.png", "link": "/onlylocal/html/722.html" },
  { "title": "Brotato", "imgSrc": "/onlylocal/covers/723.png", "link": "/onlylocal/html/723.html" },
  { "title": "Endoparasitic 2", "imgSrc": "/onlylocal/covers/724.png", "link": "/onlylocal/html/724.html" },
  { "title": "ShredSauce", "imgSrc": "/onlylocal/covers/725.png", "link": "/onlylocal/html/725-ff.html" },
  { "title": "Breath of the Wild NDS", "imgSrc": "/onlylocal/covers/726.png", "link": "/onlylocal/html/726.html" },
  { "title": "Dimension Incident", "imgSrc": "/onlylocal/covers/727.png", "link": "/onlylocal/html/727.html" },
  { "title": "Fear Assessment", "imgSrc": "/onlylocal/covers/728.png", "link": "/onlylocal/html/728.html" },
  { "title": "game inside a game inside a game inside a game inside a game inside a game", "imgSrc": "/onlylocal/covers/729.png", "link": "/onlylocal/html/729.html" },
  { "title": "Cell Machine", "imgSrc": "/onlylocal/covers/730.png", "link": "/onlylocal/html/730.html" },
  { "title": "Undertale: Last Breath", "imgSrc": "/onlylocal/covers/731.png", "link": "/onlylocal/html/731.html" },
  { "title": "64 in 1 NES", "imgSrc": "/onlylocal/covers/732.png", "link": "/onlylocal/html/732.html" },
  { "title": "Tetris", "imgSrc": "/onlylocal/covers/733.png", "link": "/onlylocal/html/733.html" },
  { "title": "Christmas Massacre", "imgSrc": "/onlylocal/covers/734.png", "link": "/onlylocal/html/734.html" },
  { "title": "Famidash", "imgSrc": "/onlylocal/covers/735.png", "link": "/onlylocal/html/735.html" },
  { "title": "Super Mario Bros. Remastered", "imgSrc": "/onlylocal/covers/736.png", "link": "/onlylocal/html/736.html" },
  { "title": "Saihate Station (さいはて駅)", "imgSrc": "/onlylocal/covers/737.png", "link": "/onlylocal/html/737.html" },

	{
    title: "12 Mini Battles",
    imgSrc: "/onlylocal/covers/295.png",
    link: "/onlylocal/html/295.html"
},
{
    title: "1v1.LoL",
    imgSrc: "/onlylocal/covers/58.png",
    link: "/onlylocal/html/58.html"
},
{
    title: "3D Bowling",
    imgSrc: "/onlylocal/covers/320.png",
    link: "/onlylocal/html/320.html"
},
{
    title: "8 Ball Classic",
    imgSrc: "/onlylocal/covers/146.png",
    link: "/onlylocal/html/146.html"
},
{
    title: "Achievement Unlocked",
    imgSrc: "/onlylocal/covers/60.png",
    link: "/onlylocal/html/60.html"
},
{
    title: "Achievement Unlocked 2",
    imgSrc: "/onlylocal/covers/61.png",
    link: "/onlylocal/html/61.html"
},
{
    title: "Achievement Unlocked 3",
    imgSrc: "/onlylocal/covers/62.png",
    link: "/onlylocal/html/62.html"
},
{
    title: "Alien Hominid",
    imgSrc: "/onlylocal/covers/304.png",
    link: "/onlylocal/html/304.html"
},
{
    title: "Angry Birds",
    imgSrc: "/onlylocal/covers/63.png",
    link: "/onlylocal/html/63.html"
},
{
    title: "Angry Birds Chrome",
    imgSrc: "/onlylocal/covers/316.png",
    link: "/onlylocal/html/316.html"
},
{
    title: "Angry Birds Showdown",
    imgSrc: "/onlylocal/covers/147.png",
    link: "/onlylocal/html/147.html"
},
{
    title: "Archery World Tour",
    imgSrc: "/onlylocal/covers/148.png",
    link: "/onlylocal/html/148.html"
},
{
    title: "Attack Hole",
    imgSrc: "/onlylocal/covers/13.png",
    link: "/onlylocal/html/13.html"
},
{
    title: "Backrooms",
    imgSrc: "/onlylocal/covers/64.png",
    link: "/onlylocal/html/64.html"
},
{
    title: "Bad Ice Cream",
    imgSrc: "/onlylocal/covers/269.png",
    link: "/onlylocal/html/269.html"
},
{
    title: "Bad Ice Cream 2",
    imgSrc: "/onlylocal/covers/270.png",
    link: "/onlylocal/html/270.html"
},
{
    title: "Bad Ice Cream 3",
    imgSrc: "/onlylocal/covers/271.png",
    link: "/onlylocal/html/271.html"
},
{
    title: "Bad Parenting 1",
    imgSrc: "/onlylocal/covers/166.png",
    link: "/onlylocal/html/166.html"
},
{
    title: "Ball Blast",
    imgSrc: "/onlylocal/covers/149.png",
    link: "/onlylocal/html/149.html"
},
{
    title: "Basket Battle",
    imgSrc: "/onlylocal/covers/25.png",
    link: "/onlylocal/html/25.html"
},
{
    title: "Basket Bros",
    imgSrc: "/onlylocal/covers/285.png",
    link: "/onlylocal/html/285.html"
},
{
    title: "Basket Random",
    imgSrc: "/onlylocal/covers/66.png",
    link: "/onlylocal/html/66.html"
},
{
    title: "Basketball Frvr",
    imgSrc: "/onlylocal/covers/28.png",
    link: "/onlylocal/html/28.html"
},
{
    title: "Bazooka Boy",
    imgSrc: "/onlylocal/covers/29.png",
    link: "/onlylocal/html/29.html"
},
{
    title: "Bendy and the Ink Machine",
    imgSrc: "/onlylocal/covers/215.png",
    link: "/onlylocal/html/215.html"
},
{
    title: "BlackJack",
    imgSrc: "/onlylocal/covers/312.png",
    link: "/onlylocal/html/312.html"
},
{
    title: "Blade Ball",
    imgSrc: "/onlylocal/covers/167.png",
    link: "/onlylocal/html/167.html"
},
{
    title: "BlockPost",
    imgSrc: "/onlylocal/covers/273.png",
    link: "/onlylocal/html/273.html"
},
{
    title: "Blocky Snakes",
    imgSrc: "/onlylocal/covers/168.png",
    link: "/onlylocal/html/168.html"
},
{
    title: "Bloons TD 2",
    imgSrc: "/onlylocal/covers/72.png",
    link: "/onlylocal/html/72.html"
},
{
    title: "Bloons TD 3",
    imgSrc: "/onlylocal/covers/73.png",
    link: "/onlylocal/html/73.html"
},
{
    title: "Bloons TD 4",
    imgSrc: "/onlylocal/covers/74.png",
    link: "/onlylocal/html/74.html"
},
{
    title: "Bloons TD 5",
    imgSrc: "/onlylocal/covers/75.png",
    link: "/onlylocal/html/75.html"
},
{
    title: "Bloxorz",
    imgSrc: "/onlylocal/covers/169.png",
    link: "/onlylocal/html/169.html"
},
{
    title: "Bob The Robber 2",
    imgSrc: "/onlylocal/covers/76.png",
    link: "/onlylocal/html/76.html"
},
{
    title: "Bottle Jump 3D",
    imgSrc: "/onlylocal/covers/30.png",
    link: "/onlylocal/html/30.html"
},
{
    title: "Brawl Guys.io",
    imgSrc: "/onlylocal/covers/121.png",
    link: "/onlylocal/html/121.html"
},
{
    title: "Bridge Race",
    imgSrc: "/onlylocal/covers/14.png",
    link: "/onlylocal/html/14.html"
},
{
    title: "Buckshot Roulette",
    imgSrc: "/onlylocal/covers/205.png",
    link: "/onlylocal/html/205.html"
},
{
    title: "Build a Queen",
    imgSrc: "/onlylocal/covers/319.png",
    link: "/onlylocal/html/319.html"
},
{
    title: "Cannon Balls 3D",
    imgSrc: "/onlylocal/covers/150.png",
    link: "/onlylocal/html/150.html"
},
{
    title: "Cannon Basketball",
    imgSrc: "/onlylocal/covers/79.png",
    link: "/onlylocal/html/79.html"
},
{
    title: "Cannon Basketball 2",
    imgSrc: "/onlylocal/covers/80.png",
    link: "/onlylocal/html/80.html"
},
{
    title: "Carrom Clash",
    imgSrc: "/onlylocal/covers/202.png",
    link: "/onlylocal/html/202.html"
},
{
    title: "Cheese Chompers 3D",
    imgSrc: "/onlylocal/covers/165.png",
    link: "/onlylocal/html/165.html"
},
{
    title: "CircloO",
    imgSrc: "/onlylocal/covers/274.png",
    link: "/onlylocal/html/274.html"
},
{
    title: "CircloO 2",
    imgSrc: "/onlylocal/covers/275.png",
    link: "/onlylocal/html/275.html"
},
{
    title: "Color Match",
    imgSrc: "/onlylocal/covers/31.png",
    link: "/onlylocal/html/31.html"
},
{
    title: "Color Water Sort 3D",
    imgSrc: "/onlylocal/covers/15.png",
    link: "/onlylocal/html/15.html"
},
{
    title: "Crazy Chicken 3D",
    imgSrc: "/onlylocal/covers/255.png",
    link: "/onlylocal/html/255.html"
},
{
    title: "Crazy Kitty 3D",
    imgSrc: "/onlylocal/covers/256.png",
    link: "/onlylocal/html/256.html"
},
{
    title: "Dig Deep",
    imgSrc: "/onlylocal/covers/32.png",
    link: "/onlylocal/html/32.html"
},
{
    title: "Do NOT Take This Cat Home",
    imgSrc: "/onlylocal/covers/193.png",
    link: "/onlylocal/html/193.html"
},
{
    title: "Doki Doki Literature Club",
    imgSrc: "/onlylocal/covers/189.png",
    link: "/onlylocal/html/189.html"
},
{
    title: "DOOM",
    imgSrc: "/onlylocal/covers/203.png",
    link: "/onlylocal/html/203.html"
},
{
    title: "Dragon vs Bricks",
    imgSrc: "/onlylocal/covers/210.png",
    link: "/onlylocal/html/210.html"
},
{
    title: "Draw Climber",
    imgSrc: "/onlylocal/covers/86.png",
    link: "/onlylocal/html/86.html"
},
{
    title: "Dreadhead Parkour",
    imgSrc: "/onlylocal/covers/310.png",
    link: "/onlylocal/html/310.html"
},
{
    title: "Drive Mad",
    imgSrc: "/onlylocal/covers/35.png",
    link: "/onlylocal/html/35.html"
},
{
    title: "Driven Wild",
    imgSrc: "/onlylocal/covers/43.png",
    link: "/onlylocal/html/43.html"
},
{
    title: "Elastic Man",
    imgSrc: "/onlylocal/covers/197.png",
    link: "/onlylocal/html/197.html"
},
{
    title: "Emulator.JS",
    imgSrc: "/onlylocal/covers/87.png",
    link: "/onlylocal/html/87.html"
},
{
    title: "Endoparasitic",
    imgSrc: "/onlylocal/covers/286.png",
    link: "/onlylocal/html/286.html"
},
{
    title: "Evil Glitch",
    imgSrc: "/onlylocal/covers/277.png",
    link: "/onlylocal/html/277.html"
},
{
    title: "Fashion Battle",
    imgSrc: "/onlylocal/covers/127.png",
    link: "/onlylocal/html/127.html"
},
{
    title: "Find the Alien",
    imgSrc: "/onlylocal/covers/323.png",
    link: "/onlylocal/html/323.html"
},
{
    title: "Fork n Sausage",
    imgSrc: "/onlylocal/covers/154.png",
    link: "/onlylocal/html/154.html"
},
{
    title: "Fortzone Battle Royale",
    imgSrc: "/onlylocal/covers/120.png",
    link: "/onlylocal/html/120.html"
},
{
    title: "Fruit Ninja",
    imgSrc: "/onlylocal/covers/261.png",
    link: "/onlylocal/html/261.html"
},
{
    title: "Gobble",
    imgSrc: "/onlylocal/covers/37.png",
    link: "/onlylocal/html/37.html"
},
{
    title: "Google Baseball",
    imgSrc: "/onlylocal/covers/257.png",
    link: "/onlylocal/html/257.html"
},
{
    title: "Guess Their Answer",
    imgSrc: "/onlylocal/covers/155.png",
    link: "/onlylocal/html/155.html"
},
{
    title: "Half Life",
    imgSrc: "/onlylocal/covers/262.png",
    link: "/onlylocal/html/262.html"
},
{
    title: "Harvest.io",
    imgSrc: "/onlylocal/covers/156.png",
    link: "/onlylocal/html/156.html"
},
{
    title: "Highway Racer 2",
    imgSrc: "/onlylocal/covers/92.png",
    link: "/onlylocal/html/92.html"
},
{
    title: "Hill Climb Racing Lite",
    imgSrc: "/onlylocal/covers/157.png",
    link: "/onlylocal/html/157.html"
},
{
    title: "Hotline Miami",
    imgSrc: "/onlylocal/covers/217.png",
    link: "/onlylocal/html/217.html"
},
{
    title: "Ice Dodo",
    imgSrc: "/onlylocal/covers/5.png",
    link: "/onlylocal/html/5.html"
},
{
    title: "Idle Dice",
    imgSrc: "/onlylocal/covers/294.png",
    link: "/onlylocal/html/294.html"
},
{
    title: "Jelly Mario",
    imgSrc: "/onlylocal/covers/315.png",
    link: "/onlylocal/html/315.html"
},
{
    title: "Jetpack Joyride",
    imgSrc: "/onlylocal/covers/7.png",
    link: "/onlylocal/html/7.html"
},
{
    title: "Johnny Trigger",
    imgSrc: "/onlylocal/covers/93.png",
    link: "/onlylocal/html/93.html"
},
{
    title: "Journey Downhill",
    imgSrc: "/onlylocal/covers/94.png",
    link: "/onlylocal/html/94.html"
},
{
    title: "Kitchen Bazar",
    imgSrc: "/onlylocal/covers/325.png",
    link: "/onlylocal/html/325.html"
},
{
    title: "Line Rider",
    imgSrc: "/onlylocal/covers/95.png",
    link: "/onlylocal/html/95.html"
},
{
    title: "Little Runmo",
    imgSrc: "/onlylocal/covers/302.png",
    link: "/onlylocal/html/302.html"
},
{
    title: "Madalin Stunt Cars 2",
    imgSrc: "/onlylocal/covers/278.png",
    link: "/onlylocal/html/278.html"
},
{
    title: "Madalin Stunt Cars 3",
    imgSrc: "/onlylocal/covers/279.png",
    link: "/onlylocal/html/279.html"
},
{
    title: "Magic Tiles 3",
    imgSrc: "/onlylocal/covers/17.png",
    link: "/onlylocal/html/17.html"
},
{
    title: "Maze Speedrun",
    imgSrc: "/onlylocal/covers/324.png",
    link: "/onlylocal/html/324.html"
},
{
    title: "Minesweeper Mania",
    imgSrc: "/onlylocal/covers/313.png",
    link: "/onlylocal/html/313.html"
},
{
    title: "Monster Tracks",
    imgSrc: "/onlylocal/covers/36.png",
    link: "/onlylocal/html/36.html"
},
{
    title: "Nazi Zombies: Portable",
    imgSrc: "/onlylocal/covers/308.png",
    link: "/onlylocal/html/308.html"
},
{
    title: "Ninja vs EvilCorp",
    imgSrc: "/onlylocal/covers/101.png",
    link: "/onlylocal/html/101.html"
},
{
    title: "Offroad Mountain Bike",
    imgSrc: "/onlylocal/covers/116.png",
    link: "/onlylocal/html/116.html"
},
{
    title: "Om Nom Run",
    imgSrc: "/onlylocal/covers/328.png",
    link: "/onlylocal/html/328.html"
},
{
    title: "osu!",
    imgSrc: "/onlylocal/covers/130.png",
    link: "/onlylocal/html/130.html"
},
{
    title: "Pac-Man Superfast",
    imgSrc: "/onlylocal/covers/158.png",
    link: "/onlylocal/html/158.html"
},
{
    title: "Papers, Please",
    imgSrc: "/onlylocal/covers/187.png",
    link: "/onlylocal/html/187.html"
},
{
    title: "Parking Rush",
    imgSrc: "/onlylocal/covers/159.png",
    link: LocalGameEncoder.createEncodedLink("/local games/parkingrush/9mwf64k6r0bz/v7/index.html")
},
{
    title: "Pixel Gun Survival",
    imgSrc: "/onlylocal/covers/281.png",
    link: "/onlylocal/html/281.html"
},
{
    title: "Pizza Tower",
    imgSrc: "/onlylocal/covers/267.png",
    link: "/onlylocal/html/267.html"
},
{
    title: "Plants vs Zombies",
    imgSrc: "/onlylocal/covers/232.png",
    link: "/onlylocal/html/232.html"
},
{
    title: "Play!.js",
    imgSrc: "/onlylocal/covers/296.png",
    link: "/onlylocal/html/296.html"
},
{
    title: "Pokey Ball",
    imgSrc: "/onlylocal/covers/326.png",
    link: "/onlylocal/html/326.html"
},
{
    title: "Pou",
    imgSrc: "/onlylocal/covers/23.png",
    link: "/onlylocal/html/23.html"
},
{
    title: "Quake III Arena",
    imgSrc: "/onlylocal/covers/263.png",
    link: "/onlylocal/html/263.html"
},
{
    title: "Race Master 3D",
    imgSrc: "/onlylocal/covers/160.png",
    link: "/onlylocal/html/160.html"
},
{
    title: "Rainbow Obby",
    imgSrc: "/onlylocal/covers/307.png",
    link: "/onlylocal/html/307.html"
},
{
    title: "RE:RUN",
    imgSrc: "/onlylocal/covers/260.png",
    link: "/onlylocal/html/260.html"
},
{
    title: "Red Ball",
    imgSrc: "/onlylocal/covers/239.png",
    link: "/onlylocal/html/239.html"
},
{
    title: "Red Ball 2",
    imgSrc: "/onlylocal/covers/240.png",
    link: "/onlylocal/html/240.html"
},
{
    title: "Red Ball 3",
    imgSrc: "/onlylocal/covers/241.png",
    link: "/onlylocal/html/241.html"
},
{
    title: "Red Ball 4",
    imgSrc: "/onlylocal/covers/242.png",
    link: "/onlylocal/html/242.html"
},
{
    title: "Red Ball 4 Vol. 2",
    imgSrc: "/onlylocal/covers/243.png",
    link: "/onlylocal/html/243.html"
},
{
    title: "Red Ball 4 Vol. 3",
    imgSrc: "/onlylocal/covers/244.png",
    link: "/onlylocal/html/244.html"
},
{
    title: "Riddle School",
    imgSrc: "/onlylocal/covers/287.png",
    link: "/onlylocal/html/287.html"
},
{
    title: "Riddle School 2",
    imgSrc: "/onlylocal/covers/288.png",
    link: "/onlylocal/html/288.html"
},
{
    title: "Riddle School 3",
    imgSrc: "/onlylocal/covers/289.png",
    link: "/onlylocal/html/289.html"
},
{
    title: "Riddle School 4",
    imgSrc: "/onlylocal/covers/290.png",
    link: "/onlylocal/html/290.html"
},
{
    title: "Riddle School 5",
    imgSrc: "/onlylocal/covers/291.png",
    link: "/onlylocal/html/291.html"
},
{
    title: "Riddle Transfer",
    imgSrc: "/onlylocal/covers/292.png",
    link: "/onlylocal/html/292.html"
},
{
    title: "Riddle Transfer 2",
    imgSrc: "/onlylocal/covers/293.png",
    link: "/onlylocal/html/293.html"
},
{
    title: "Road of Fury",
    imgSrc: "/onlylocal/covers/42.png",
    link: "/onlylocal/html/42.html"
},
{
    title: "Rolly Vortex",
    imgSrc: "/onlylocal/covers/208.png",
    link: "/onlylocal/html/208.html"
},
{
    title: "Room Sort",
    imgSrc: "/onlylocal/covers/321.png",
    link: "/onlylocal/html/321.html"
},
{
    title: "Ruffle",
    imgSrc: "/onlylocal/covers/113.png",
    link: "/onlylocal/html/113.html"
},
{
    title: "Sandboxels",
    imgSrc: "/onlylocal/covers/309.png",
    link: "/onlylocal/html/309.html"
},
{
    title: "sandspiel",
    imgSrc: "/onlylocal/covers/317.png",
    link: "/onlylocal/html/317.html"
},
{
    title: "Sandtris",
    imgSrc: "/onlylocal/covers/311.png",
    link: "/onlylocal/html/311.html"
},
{
    title: "Scrap Metal 3",
    imgSrc: "/onlylocal/covers/188.png",
    link: "/onlylocal/html/188.html"
},
{
    title: "Shipo.io",
    imgSrc: "/onlylocal/covers/306.png",
    link: "/onlylocal/html/306.html"
},
{
    title: "Side Effects",
    imgSrc: "/onlylocal/covers/318.png",
    link: "/onlylocal/html/318.html"
},
{
    title: "Slice it All",
    imgSrc: "/onlylocal/covers/128.png",
    link: "/onlylocal/html/128.html"
},
{
    title: "Slime.io",
    imgSrc: "/onlylocal/covers/327.png",
    link: "/onlylocal/html/327.html"
},
{
    title: "Snowbattle.io",
    imgSrc: "/onlylocal/covers/207.png",
    link: "/onlylocal/html/207.html"
},
{
    title: "Solar Smash",
    imgSrc: "/onlylocal/covers/118.png",
    link: "/onlylocal/html/118.html"
},
{
    title: "Sprunki",
    imgSrc: "/onlylocal/covers/9.png",
    link: "/onlylocal/html/9.html"
},
{
    title: "Stacky Dash",
    imgSrc: "/onlylocal/covers/18.png",
    link: "/onlylocal/html/18.html"
},
{
    title: "State.io",
    imgSrc: "/onlylocal/covers/161.png",
    link: "/onlylocal/html/161.html"
},
{
    title: "Super Mario 63",
    imgSrc: "/onlylocal/covers/314.png",
    link: "/onlylocal/html/314.html"
},
{
    title: "Superhot",
    imgSrc: "/onlylocal/covers/233.png",
    link: "/onlylocal/html/233.html"
},
{
    title: "Supreme Duelist",
    imgSrc: "/onlylocal/covers/19.png",
    link: "/onlylocal/html/19.html"
},
{
    title: "Survival Race",
    imgSrc: "/onlylocal/covers/122.png",
    link: "/onlylocal/html/122.html"
},
{
    title: "Sushi Roll",
    imgSrc: "/onlylocal/covers/322.png",
    link: "/onlylocal/html/322.html"
},
{
    title: "Swords and Souls",
    imgSrc: "/onlylocal/covers/178.png",
    link: "/onlylocal/html/178.html"
},
{
    title: "Tall Man Run",
    imgSrc: "/onlylocal/covers/20.png",
    link: "/onlylocal/html/20.html"
},
{
    title: "Territorial.io",
    imgSrc: "/onlylocal/covers/303.png",
    link: "/onlylocal/html/303.html"
},
{
    title: "This Is The Only Level",
    imgSrc: "/onlylocal/covers/106.png",
    link: "/onlylocal/html/106.html"
},
{
    title: "This Is The Only Level 2",
    imgSrc: "/onlylocal/covers/107.png",
    link: "/onlylocal/html/107.html"
},
{
    title: "TileTopia",
    imgSrc: "/onlylocal/covers/329.png",
    link: "/onlylocal/html/329.html"
},
{
    title: "Tiny Fishing",
    imgSrc: "/onlylocal/covers/108.png",
    link: "/onlylocal/html/108.html"
},
{
    title: "Tomb Of The Mask",
    imgSrc: "/onlylocal/covers/109.png",
    link: "/onlylocal/html/109.html"
},
{
    title: "Toss The Turtle",
    imgSrc: "/onlylocal/covers/110.png",
    link: "/onlylocal/html/110.html"
},
{
    title: "Tower Crash 3D",
    imgSrc: "/onlylocal/covers/162.png",
    link: "/onlylocal/html/162.html"
},
{
    title: "Trivia Crack",
    imgSrc: "/onlylocal/covers/163.png",
    link: "/onlylocal/html/163.html"
},
{
    title: "Turbo Stars",
    imgSrc: "/onlylocal/covers/21.png",
    link: "/onlylocal/html/21.html"
},
{
    title: "Vex 1",
    imgSrc: "/onlylocal/covers/45.png",
    link: "/onlylocal/html/45.html"
},
{
    title: "Vex 2",
    imgSrc: "/onlylocal/covers/46.png",
    link: "/onlylocal/html/46.html"
},
{
    title: "Vex 3",
    imgSrc: "/onlylocal/covers/47.png",
    link: "/onlylocal/html/47.html"
},
{
    title: "Vex 3 XMAS",
    imgSrc: "/onlylocal/covers/48.png",
    link: "/onlylocal/html/48.html"
},
{
    title: "Vex 4",
    imgSrc: "/onlylocal/covers/49.png",
    link: "/onlylocal/html/49.html"
},
{
    title: "Vex 5",
    imgSrc: "/onlylocal/covers/50.png",
    link: "/onlylocal/html/50.html"
},
{
    title: "Vex 6",
    imgSrc: "/onlylocal/covers/51.png",
    link: "/onlylocal/html/51.html"
},
{
    title: "Vex 7",
    imgSrc: "/onlylocal/covers/52.png",
    link: "/onlylocal/html/52.html"
},
{
    title: "Vex Challenges",
    imgSrc: "/onlylocal/covers/54.png",
    link: "/onlylocal/html/54.html"
},
{
    title: "Vex X3M",
    imgSrc: "/onlylocal/covers/55.png",
    link: "/onlylocal/html/55.html"
},
{
    title: "Vex X3M 2",
    imgSrc: "/onlylocal/covers/56.png",
    link: "/onlylocal/html/56.html"
},
{
    title: "War The Knights",
    imgSrc: "/onlylocal/covers/284.png",
    link: "/onlylocal/html/284.html"
},
{
    title: "Wheely",
    imgSrc: "/onlylocal/covers/245.png",
    link: "/onlylocal/html/245.html"
},
{
    title: "Wheely 2",
    imgSrc: "/onlylocal/covers/246.png",
    link: "/onlylocal/html/246.html"
},
{
    title: "Wheely 3",
    imgSrc: "/onlylocal/covers/247.png",
    link: "/onlylocal/html/247.html"
},
{
    title: "Wheely 4",
    imgSrc: "/onlylocal/covers/248.png",
    link: "/onlylocal/html/248.html"
},
{
    title: "Wheely 5",
    imgSrc: "/onlylocal/covers/249.png",
    link: "/onlylocal/html/249.html"
},
{
    title: "Wheely 6",
    imgSrc: "/onlylocal/covers/250.png",
    link: "/onlylocal/html/250.html"
},
{
    title: "Wheely 7",
    imgSrc: "/onlylocal/covers/251.png",
    link: "/onlylocal/html/251.html"
},
{
    title: "Wheely 8",
    imgSrc: "/onlylocal/covers/252.png",
    link: "/onlylocal/html/252.html"
},
{
    title: "Webfishing",
    imgSrc: "/onlylocal/covers/423.png",
    link: "/onlylocal/html/423.html"
},
{
    title: "BFDI: Branches",
    imgSrc: "/onlylocal/covers/424.png",
    link: "/onlylocal/html/424.html"
},
{
    title: "Deltarune",
    imgSrc: "/onlylocal/covers/425.png",
    link: "/onlylocal/html/425.html"
},
{
    title: "Omori",
    imgSrc: "/onlylocal/covers/427-z.png",
    link: "/onlylocal/html/427-z.html"
},
{
    title: "10 Minutes Till Dawn",
    imgSrc: "/onlylocal/covers/430.png",
    link: "/onlylocal/html/430.html"
},
{
    title: "99 Balls",
    imgSrc: "/onlylocal/covers/431.png",
    link: "/onlylocal/html/431.html"
},
{
    title: "Abandoned",
    imgSrc: "/onlylocal/covers/432.png",
    link: "/onlylocal/html/432.html"
},
{
    title: "Yume Nikki",
    imgSrc: "/onlylocal/covers/433.png",
    link: "/onlylocal/html/433.html"
},
{
    title: "Hollow Knight",
    imgSrc: "/onlylocal/covers/468-a.png",
    link: "/onlylocal/html/468-a.html"
},
{
    title: "Slime Rancher",
    imgSrc: "/onlylocal/covers/591-a.png",
    link: "/onlylocal/html/591-a.html"
},
{
    title: "Sonic the Hedgehog",
    imgSrc: "/onlylocal/covers/598.png",
    link: "/onlylocal/598.html"
},
{
    title: "Growden.io",
    imgSrc: "/onlylocal/covers/603-aa.png",
    link: "/onlylocal/html/603-aa.html"
},
{
    title: "Bouncemasters",
    imgSrc: "/onlylocal/covers/437.png",
    link: "/onlylocal/html/437.html"
},
{
    title: "Yandere Simulator",
    imgSrc: "/onlylocal/covers/554.png",
    link: "/onlylocal/html/554.html"
},
{
    title: "Amongy",
    imgSrc: "/onlylocal/covers/608.png",
    link: "/onlylocal/html/608.html"
},
{
    title: "BFDIA 5b",
    imgSrc: "/onlylocal/covers/637-f.png",
    link: "/onlylocal/html/637-f.html"
},
{
    title: "Buster Jam",
    imgSrc: "/onlylocal/covers/646-fixed.png",
    link: "/onlylocal/html/646-fixed.html"
},
{
    title: "Super Smash Flash",
    imgSrc: "/onlylocal/covers/647.png",
    link: "/onlylocal/html/647.html"
},
{
    title: "Look Outside",
    imgSrc: "/onlylocal/covers/649.png",
    link: "/onlylocal/html/649.html"
},
{
    title: "Milk Inside A Bag Of Milk",
    imgSrc: "/onlylocal/covers/650.png",
    link: "/onlylocal/html/650.html"
},
{
    title: "Grand Theft Auto: Vice City",
    imgSrc: "/onlylocal/covers/652.png",
    link: "/onlylocal/html/652.html"
},
  {
    "title": "OvO 2",
    "imgSrc": "/onlylocal/covers/2.png",
    "link": "/onlylocal/html/2.html"
  },
  {
    "title": "OvO 3 Dimensions",
    "imgSrc": "/onlylocal/covers/3.png",
    "link": "/onlylocal/html/3.html"
  },
  {
    "title": "Wordle",
    "imgSrc": "/onlylocal/covers/112.png",
    "link": "/onlylocal/html/112.html"
  },
  {
    "title": "2048",
    "imgSrc": "/onlylocal/covers/114.png",
    "link": LocalGameEncoder.createEncodedLink("/local games/2048-main/index.html")
  },
  {
    "title": "Moto X3M Pool Party",
    "imgSrc": "/onlylocal/covers/124.png",
    "link": "/onlylocal/html/124.html"
  },
  {
    "title": "Granny 3",
    "imgSrc": "/onlylocal/covers/126.png",
    "link": makeScramjetLink("https://yandex.com/games/app/395267?utm_source=distrib&skip-guard=1&header=no&utm_medium=granny-games.com&flags")
  },
  {
    "title": "Big Tower Tiny Square 2",
    "imgSrc": "/onlylocal/covers/170.png",
    "link": "/onlylocal/html/170.html"
  },
  {
    "title": "World Box",
    "imgSrc": "/onlylocal/covers/174.png",
    "link": "/onlylocal/html/174.html"
  },
  {
    "title": "Run 1",
    "imgSrc": "/onlylocal/covers/175.png",
    "link": "/onlylocal/html/175.html"
  },
  {
    "title": "Run 2",
    "imgSrc": "/onlylocal/covers/176.png",
    "link": "/onlylocal/html/176.html"
  },
  {
    "title": "Minecraft 1.12.2",
    "imgSrc": "/onlylocal/covers/182.png",
    "link": "/onlylocal/html/182.html"
  },
  {
    "title": "Minecraft 1.21.4",
    "imgSrc": "/onlylocal/covers/183.png",
    "link": "/onlylocal/html/183.html"
  },
  {
    "title": "Five Nights at Freddy's: World",
    "imgSrc": "/onlylocal/covers/190.png",
    "link": "/onlylocal/html/190.html"
  },
  {
    "title": "Five Nights at Freddy's: Pizza Simulator",
    "imgSrc": "/onlylocal/covers/191.png",
    "link": "/onlylocal/html/191.html"
  },
  {
    "title": "Five Nights at Freddy's: Ultimate Custom Night",
    "imgSrc": "/onlylocal/covers/192.png",
    "link": "/onlylocal/html/192.html"
  },
  {
    "title": "Time Shooter 1",
    "imgSrc": "/onlylocal/covers/199.png",
    "link": "/onlylocal/html/199.html"
  },
  {
    "title": "Time Shooter 3: SWAT",
    "imgSrc": "/onlylocal/covers/201.png",
    "link": "/onlylocal/html/201.html"
  },
  {
    "title": "Five Nights at Winston's",
    "imgSrc": "/onlylocal/covers/204.png",
    "link": "/onlylocal/html/204.html"
  },
  {
    "title": "Draw the Hill",
    "imgSrc": "/onlylocal/covers/209.png",
    "link": makeScramjetLink("https://www.mathplayground.com/draw-the-hill/index.html")
  },
  {
    "title": "Death Run 3D",
    "imgSrc": "/onlylocal/covers/211.png",
    "link": "/onlylocal/html/211.html"
  },
  {
    "title": "Cut the Rope: Time Travel",
    "imgSrc": "/onlylocal/covers/213.png",
    "link": "/onlylocal/html/213.html"
  },
  {
    "title": "Cut the Rope: Holiday Gift",
    "imgSrc": "/onlylocal/covers/214.png",
    "link": "/onlylocal/html/214.html"
  },
  {
    "title": "Duck Life 2",
    "imgSrc": "/onlylocal/covers/235.png",
    "link": "/onlylocal/html/235.html"
  },
  {
    "title": "Duck Life 3",
    "imgSrc": "/onlylocal/covers/236.png",
    "link": "/onlylocal/html/236.html"
  },
  {
    "title": "Duck Life 5",
    "imgSrc": "/onlylocal/covers/238.png",
    "link": "/onlylocal/html/238.html"
  },
  {
    "title": "Escape Road 2",
    "imgSrc": "/onlylocal/covers/265.png",
    "link": LocalGameEncoder.createEncodedLink("/local games/escape-road2-main/index.html")
  },
  {
    "title": "Minecraft 1.5.2",
    "imgSrc": "/onlylocal/covers/297.png",
    "link": "/onlylocal/html/297.html"
  },
  {
    "title": "Minecraft Alpha 1.2.6",
    "imgSrc": "/onlylocal/covers/298.png",
    "link": "/onlylocal/html/298.html"
  },
  {
    "title": "Minecraft Beta 1.3",
    "imgSrc": "/onlylocal/covers/299.png",
    "link": "/onlylocal/html/299.html"
  },
  {
    "title": "Minecraft Beta 1.7.3",
    "imgSrc": "/onlylocal/covers/300.png",
    "link": "/onlylocal/html/300.html"
  },
  {
    "title": "Minecraft Indev",
    "imgSrc": "/onlylocal/covers/301.png",
    "link": "/onlylocal/html/301.html"
  },
  {
    "title": "Crazy Cars",
    "imgSrc": "/onlylocal/covers/331.png",
    "link": "/onlylocal/html/331.html"
  },
  {
    "title": "Fancy Pants Adventure",
    "imgSrc": "/onlylocal/covers/333.png",
    "link": "/onlylocal/html/333.html"
  },
  {
    "title": "Fancy Pants Adventure 2",
    "imgSrc": "/onlylocal/covers/334.png",
    "link": "/onlylocal/html/334.html"
  },
  {
    "title": "Fancy Pants Adventure 3",
    "imgSrc": "/onlylocal/covers/335.png",
    "link": "/onlylocal/html/335.html"
  },
  {
    "title": "Fancy Pants Adventure 4 Part 1",
    "imgSrc": "/onlylocal/covers/336.png",
    "link": "/onlylocal/html/336.html"
  },
  {
    "title": "Fancy Pants Adventure 4 Part 2",
    "imgSrc": "/onlylocal/covers/337.png",
    "link": "/onlylocal/html/337.html"
  },
  {
    "title": "Retro Bowl College",
    "imgSrc": "/onlylocal/covers/34.png",
    "link": "/onlylocal/html/34.html"
  },
  {
    "title": "Learn to Fly 3",
    "imgSrc": "/onlylocal/covers/342.png",
    "link": "/onlylocal/html/342.html"
  },
  {
    "title": "Learn to Fly Idle",
    "imgSrc": "/onlylocal/covers/343.png",
    "link": "/onlylocal/html/343.html"
  },
  {
    "title": "Raft Wars",
    "imgSrc": "/onlylocal/covers/344.png",
    "link": "/onlylocal/html/344.html"
  },
  {
    "title": "Raft Wars 2",
    "imgSrc": "/onlylocal/covers/345.png",
    "link": "/onlylocal/html/345.html"
  },
  {
    "title": "Sort the Court",
    "imgSrc": "/onlylocal/covers/346.png",
    "link": "/onlylocal/html/346.html"
  },
  {
    "title": "SpiderDoll",
    "imgSrc": "/onlylocal/covers/347.png",
    "link": "/onlylocal/html/347.html"
  },
  {
    "title": "They Are Coming",
    "imgSrc": "/onlylocal/covers/348.png",
    "link": "/onlylocal/html/348.html"
  },
  {
    "title": "Spiral Roll",
    "imgSrc": "/onlylocal/covers/349.png",
    "link": "/onlylocal/html/349.html"
  },
  {
    "title": "Binding of Issac: Wrath of the Lamb",
    "imgSrc": "/onlylocal/covers/350.png",
    "link": "/onlylocal/TheBindingofIsaac.html"
  },
  {
    "title": "Happy Sheepies",
    "imgSrc": "/onlylocal/covers/351.png",
    "link": "/onlylocal/html/351.html"
  },
  {
    "title": "DON'T YOU LECTURE ME",
    "imgSrc": "/onlylocal/covers/352.png",
    "link": "/onlylocal/html/352.html"
  },
  {
    "title": "Blumgi Rocket",
    "imgSrc": "/onlylocal/covers/353.png",
    "link": "/onlylocal/html/353.html"
  },
  {
    "title": "Dadish 2",
    "imgSrc": "/onlylocal/covers/355.png",
    "link": "/onlylocal/html/355.html"
  },
  {
    "title": "Dadish 3",
    "imgSrc": "/onlylocal/covers/356.png",
    "link": "/onlylocal/html/356.html"
  },
  {
    "title": "Dadish",
    "imgSrc": "/onlylocal/covers/357.png",
    "link": "/onlylocal/html/357.html"
  },
  {
    "title": "Dadish 3D",
    "imgSrc": "/onlylocal/covers/358.png",
    "link": "/onlylocal/html/358.html"
  },
  {
    "title": "Daily Dadish",
    "imgSrc": "/onlylocal/covers/359.png",
    "link": "/onlylocal/html/359.html"
  },
  {
    "title": "EvoWars.io",
    "imgSrc": "/onlylocal/covers/360.png",
    "link": "/onlylocal/html/360.html"
  },
  {
    "title": "Google Feud",
    "imgSrc": "/onlylocal/covers/361.png",
    "link": "/onlylocal/html/361.html"
  },
  {
    "title": "Idle Lumber Inc",
    "imgSrc": "/onlylocal/covers/363.png",
    "link": "/onlylocal/html/363.html"
  },
  {
    "title": "Idle Mining Empire",
    "imgSrc": "/onlylocal/covers/364.png",
    "link": "/onlylocal/html/364.html"
  },
  {
    "title": "JustFall.lol",
    "imgSrc": "/onlylocal/covers/365.png",
    "link": "/onlylocal/html/365.html"
  },
  {
    "title": "Merge Harvest",
    "imgSrc": "/onlylocal/covers/366.png",
    "link": "/onlylocal/html/366.html"
  },
  {
    "title": "Parking Fury 3D",
    "imgSrc": "/onlylocal/covers/367.png",
    "link": "/onlylocal/html/367.html"
  },
  {
    "title": "Slope 2",
    "imgSrc": "/onlylocal/covers/368.png",
    "link": "/onlylocal/html/368.html"
  },
  {
    "title": "Smash Karts",
    "imgSrc": "/onlylocal/covers/370.png",
    "link": "/onlylocal/html/370.html"
  },
  {
    "title": "Stickman Fight Ragdoll",
    "imgSrc": "/onlylocal/covers/371.png",
    "link": "/onlylocal/html/371.html"
  },
  {
    "title": "Stickman Boost",
    "imgSrc": "/onlylocal/covers/372.png",
    "link": "/onlylocal/html/372.html"
  },
  {
    "title": "Stickman Climb",
    "imgSrc": "/onlylocal/covers/373.png",
    "link": "/onlylocal/html/373.html"
  },
  {
    "title": "Stickman Golf",
    "imgSrc": "/onlylocal/covers/374.png",
    "link": "/onlylocal/html/374.html"
  },
  {
    "title": "Build a Big Army",
    "imgSrc": "/onlylocal/covers/376.png",
    "link": "/onlylocal/html/376.html"
  },
  {
    "title": "Build a Plane",
    "imgSrc": "/onlylocal/covers/377.png",
    "link": "/onlylocal/html/377.html"
  },
  {
    "title": "Camouflage and Sniper",
    "imgSrc": "/onlylocal/covers/378.png",
    "link": "/onlylocal/html/378.html"
  },
  {
    "title": "Car Survival 3D",
    "imgSrc": "/onlylocal/covers/379.png",
    "link": "/onlylocal/html/379.html"
  },
  {
    "title": "City Defense",
    "imgSrc": "/onlylocal/covers/380.png",
    "link": "/onlylocal/html/380.html"
  },
  {
    "title": "Clothing Shop 3D",
    "imgSrc": "/onlylocal/covers/381.png",
    "link": "/onlylocal/html/381.html"
  },
  {
    "title": "Cool Cars Run 3D",
    "imgSrc": "/onlylocal/covers/382.png",
    "link": "/onlylocal/html/382.html"
  },
  {
    "title": "Crush Cars 3D",
    "imgSrc": "/onlylocal/covers/383.png",
    "link": "/onlylocal/html/383.html"
  },
  {
    "title": "Destiny Run 3D",
    "imgSrc": "/onlylocal/covers/384.png",
    "link": "/onlylocal/html/384.html"
  },
  {
    "title": "Destroy The Car 3D",
    "imgSrc": "/onlylocal/covers/385.png",
    "link": "/onlylocal/html/385.html"
  },
  {
    "title": "Diamond Seeker",
    "imgSrc": "/onlylocal/covers/386.png",
    "link": "/onlylocal/html/386.html"
  },
  {
    "title": "Draw Joust",
    "imgSrc": "/onlylocal/covers/387.png",
    "link": "/onlylocal/html/387.html"
  },
  {
    "title": "Evolving Bombs 3D",
    "imgSrc": "/onlylocal/covers/388.png",
    "link": "/onlylocal/html/388.html"
  },
  {
    "title": "Fire and Frost Master",
    "imgSrc": "/onlylocal/covers/389.png",
    "link": "/onlylocal/html/389.html"
  },
  {
    "title": "Fitness Empire",
    "imgSrc": "/onlylocal/covers/390.png",
    "link": "/onlylocal/html/390.html"
  },
  {
    "title": "Flick Goal",
    "imgSrc": "/onlylocal/covers/391.png",
    "link": "/onlylocal/html/391.html"
  },
  {
    "title": "Flip Master",
    "imgSrc": "/onlylocal/covers/392.png",
    "link": "/onlylocal/html/392.html"
  },
  {
    "title": "Giant Wanted",
    "imgSrc": "/onlylocal/covers/393.png",
    "link": "/onlylocal/html/393.html"
  },
  {
    "title": "Gun Clone",
    "imgSrc": "/onlylocal/covers/394.png",
    "link": "/onlylocal/html/394.html"
  },
  {
    "title": "Gun Runner",
    "imgSrc": "/onlylocal/covers/395.png",
    "link": "/onlylocal/html/395.html"
  },
  {
    "title": "Kaji Run",
    "imgSrc": "/onlylocal/covers/396.png",
    "link": "/onlylocal/html/396.html"
  },
  {
    "title": "Make a SuperBoat",
    "imgSrc": "/onlylocal/covers/397.png",
    "link": "/onlylocal/html/397.html"
  },
  {
    "title": "Makeover Run",
    "imgSrc": "/onlylocal/covers/398.png",
    "link": "/onlylocal/html/398.html"
  },
  {
    "title": "Mega Car Jumps",
    "imgSrc": "/onlylocal/covers/399.png",
    "link": "/onlylocal/html/399.html"
  },
  {
    "title": "Money Rush",
    "imgSrc": "/onlylocal/covers/400.png",
    "link": "/onlylocal/html/400.html"
  },
  {
    "title": "Monster Box 3D",
    "imgSrc": "/onlylocal/covers/401.png",
    "link": "/onlylocal/html/401.html"
  },
  {
    "title": "Office Fight",
    "imgSrc": "/onlylocal/covers/402.png",
    "link": "/onlylocal/html/402.html"
  },
  {
    "title": "Robot Invasion",
    "imgSrc": "/onlylocal/covers/403.png",
    "link": "/onlylocal/html/403.html"
  },
  {
    "title": "Seat Jam 3D",
    "imgSrc": "/onlylocal/covers/404.png",
    "link": "/onlylocal/html/404.html"
  },
  {
    "title": "Shooting Master",
    "imgSrc": "/onlylocal/covers/405.png",
    "link": "/onlylocal/html/405.html"
  },
  {
    "title": "Supermarket 3D",
    "imgSrc": "/onlylocal/covers/406.png",
    "link": "/onlylocal/html/406.html"
  },
  {
    "title": "Survive to Victory",
    "imgSrc": "/onlylocal/covers/407.png",
    "link": "/onlylocal/html/407.html"
  },
  {
    "title": "Telekinesis Attack",
    "imgSrc": "/onlylocal/covers/408.png",
    "link": "/onlylocal/html/408.html"
  },
  {
    "title": "Telekinesis Car",
    "imgSrc": "/onlylocal/covers/409.png",
    "link": "/onlylocal/html/409.html"
  },
  {
    "title": "Telekinesis Drive",
    "imgSrc": "/onlylocal/covers/410.png",
    "link": "/onlylocal/html/410.html"
  },
  {
    "title": "Telekinesis",
    "imgSrc": "/onlylocal/covers/411.png",
    "link": "/onlylocal/html/411.html"
  },
  {
    "title": "Triple Match 3D",
    "imgSrc": "/onlylocal/covers/412.png",
    "link": "/onlylocal/html/412.html"
  },
  {
    "title": "Tug of War with Cars",
    "imgSrc": "/onlylocal/covers/413.png",
    "link": "/onlylocal/html/413.html"
  },
  {
    "title": "Twerk Race 3D",
    "imgSrc": "/onlylocal/covers/414.png",
    "link": "/onlylocal/html/414.html"
  },
  {
    "title": "Twisted Rope 3D",
    "imgSrc": "/onlylocal/covers/415.png",
    "link": "/onlylocal/html/415.html"
  },
  {
    "title": "Wall Crawler",
    "imgSrc": "/onlylocal/covers/416.png",
    "link": "/onlylocal/html/416.html"
  },
  {
    "title": "War Regions",
    "imgSrc": "/onlylocal/covers/417.png",
    "link": "/onlylocal/html/417.html"
  },
  {
    "title": "Weapon Craft Run",
    "imgSrc": "/onlylocal/covers/418.png",
    "link": "/onlylocal/html/418.html"
  },
  {
    "title": "Weapon Upgrade Rush",
    "imgSrc": "/onlylocal/covers/419.png",
    "link": "/onlylocal/html/419.html"
  },
  {
    "title": "Weapon Scale",
    "imgSrc": "/onlylocal/covers/420.png",
    "link": "/onlylocal/html/420.html"
  },
  {
    "title": "Rich Run 3D",
    "imgSrc": "/onlylocal/covers/421.png",
    "link": "/onlylocal/html/421.html"
  },
  {
    "title": "High Heels",
    "imgSrc": "/onlylocal/covers/422.png",
    "link": "/onlylocal/html/422.html"
  },
  {
    "title": "Awesome Tanks",
    "imgSrc": "/onlylocal/covers/436.png",
    "link": "/onlylocal/html/436.html"
  },
  {
    "title": "Awesome Tanks 2",
    "imgSrc": "/onlylocal/covers/438.png",
    "link": "/onlylocal/html/438.html"
  },
  {
    "title": "Bank Robbery 2",
    "imgSrc": "/onlylocal/covers/439.png",
    "link": "/onlylocal/html/439.html"
  },
  {
    "title": "Celeste PICO",
    "imgSrc": "/onlylocal/covers/440.png",
    "link": "/onlylocal/html/440.html"
  },
  {
    "title": "Kitty Toy",
    "imgSrc": "/onlylocal/covers/441.png",
    "link": "/onlylocal/html/441.html"
  },
  {
    "title": "Infinimoes",
    "imgSrc": "/onlylocal/covers/442.png",
    "link": "/onlylocal/html/442.html"
  },
  {
    "title": "Ages of Conflict",
    "imgSrc": "/onlylocal/covers/444.png",
    "link": "/onlylocal/html/444.html"
  },
  {
    "title": "Kindergarten",
    "imgSrc": "/onlylocal/covers/445.png",
    "link": "/onlylocal/html/445.html"
  },
  {
    "title": "Kindergarten 2",
    "imgSrc": "/onlylocal/covers/446.png",
    "link": "/onlylocal/html/446.html"
  },
  {
    "title": "City Smash",
    "imgSrc": "/onlylocal/covers/449.png",
    "link": "/onlylocal/html/449.html"
  },
  {
    "title": "Amanda the Adventurer",
    "imgSrc": "/onlylocal/covers/450.png",
    "link": "/onlylocal/html/450.html"
  },
  {
    "title": "Slender: The 8 Pages",
    "imgSrc": "/onlylocal/covers/451.png",
    "link": "/onlylocal/html/451.html"
  },
  {
    "title": "Station 141",
    "imgSrc": "/onlylocal/covers/452.png",
    "link": "/onlylocal/html/452.html"
  },
  {
    "title": "Station Saturn",
    "imgSrc": "/onlylocal/covers/453.png",
    "link": "/onlylocal/html/453.html"
  },
  {
    "title": "BLOODMONEY!",
    "imgSrc": "/onlylocal/covers/454.png",
    "link": "/onlylocal/html/454.html"
  },
  {
    "title": "BERGENTRUCK 201x",
    "imgSrc": "/onlylocal/covers/455.png",
    "link": "/onlylocal/html/455.html"
  },
  {
    "title": "Raft",
    "imgSrc": "/onlylocal/covers/457.png",
    "link": "/onlylocal/html/457.html"
  },
  {
    "title": "The Deadseat",
    "imgSrc": "/onlylocal/covers/458.png",
    "link": "/onlylocal/html/458.html"
  },
  {
    "title": "The Man In The Window",
    "imgSrc": "/onlylocal/covers/459.png",
    "link": "/onlylocal/html/459.html"
  },
  {
    "title": "Fears to Fathom: Home Alone",
    "imgSrc": "/onlylocal/covers/460.png",
    "link": "/onlylocal/html/460.html"
  },
  {
    "title": "DEAD PLATE",
    "imgSrc": "/onlylocal/covers/462.png",
    "link": "/onlylocal/html/462.html"
  },
  {
    "title": "Lacey's Flash Games",
    "imgSrc": "/onlylocal/covers/463.png",
    "link": "/onlylocal/html/463.html"
  },
  {
    "title": "Choppy Orc",
    "imgSrc": "/onlylocal/covers/464.png",
    "link": "/onlylocal/html/464.html"
  },
  {
    "title": "sandstone",
    "imgSrc": "/onlylocal/covers/469.png",
    "link": "/onlylocal/html/469.html"
  },
  {
    "title": "Madness Combat: Project Nexus (classic)",
    "imgSrc": "/onlylocal/covers/471.png",
    "link": "/onlylocal/html/471.html"
  },
  {
    "title": "Friday Night Funkin': V.S. Whitty",
    "imgSrc": "/onlylocal/covers/474.png",
    "link": "/onlylocal/html/474.html"
  },
  {
    "title": "Friday Night Funkin': B-Sides",
    "imgSrc": "/onlylocal/covers/475.png",
    "link": "/onlylocal/html/475.html"
  },
  {
    "title": "Friday Night Funkin': Vs. Hex",
    "imgSrc": "/onlylocal/covers/476.png",
    "link": "/onlylocal/html/476.html"
  },
  {
    "title": "Friday Night Funkin': Vs. Hatsune Miku",
    "imgSrc": "/onlylocal/covers/477.png",
    "link": "/onlylocal/html/477.html"
  },
  {
    "title": "Friday Night Funkin': Neo",
    "imgSrc": "/onlylocal/covers/478.png",
    "link": "/onlylocal/html/478.html"
  },
  {
    "title": "Friday Night Funkin': Sarvente's Mid-Fight Masses",
    "imgSrc": "/onlylocal/covers/480.png",
    "link": "/onlylocal/html/480.html"
  },
  {
    "title": "Friday Night Funkin': vs. Tricky",
    "imgSrc": "/onlylocal/covers/481.png",
    "link": "/onlylocal/html/481.html"
  },
  {
    "title": "Friday Night Funkin': Hit Single Real",
    "imgSrc": "/onlylocal/covers/483.png",
    "link": "/onlylocal/html/483.html"
  },
  {
    "title": "Friday Night Funkin': Creepypasta JP",
    "imgSrc": "/onlylocal/covers/484.png",
    "link": "/onlylocal/html/484.html"
  },
  {
    "title": "Friday Night Funkin': vs. Garcello",
    "imgSrc": "/onlylocal/covers/485.png",
    "link": "/onlylocal/html/485.html"
  },
  {
    "title": "Friday Night Funkin': Sonic Legacy",
    "imgSrc": "/onlylocal/covers/486.png",
    "link": "/onlylocal/html/486.html"
  },
  {
    "title": "Friday Night Funkin': vs. QT",
    "imgSrc": "/onlylocal/covers/487.png",
    "link": "/onlylocal/html/487.html"
  },
  {
    "title": "Friday Night Funkin': Mistful Crimson Morning Reboot",
    "imgSrc": "/onlylocal/covers/488.png",
    "link": "/onlylocal/html/488.html"
  },
  {
    "title": "Friday Night Funkin': Indie Cross",
    "imgSrc": "/onlylocal/covers/489.png",
    "link": "/onlylocal/html/489.html"
  },
  {
    "title": "Rooftop Snipers 2",
    "imgSrc": "/onlylocal/covers/490.png",
    "link": "/onlylocal/html/490.html"
  },
  {
    "title": "I woke up next to you again.",
    "imgSrc": "/onlylocal/covers/491.png",
    "link": "/onlylocal/html/491.html"
  },
  {
    "title": "UNDERWHEELS",
    "imgSrc": "/onlylocal/covers/492.png",
    "link": "/onlylocal/html/492.html"
  },
  {
    "title": "RigBMX",
    "imgSrc": "/onlylocal/covers/493.png",
    "link": "/onlylocal/html/493.html"
  },
  {
    "title": "RigBMX 2",
    "imgSrc": "/onlylocal/covers/494.png",
    "link": "/onlylocal/html/494.html"
  },
  {
    "title": "groon groon, babey!",
    "imgSrc": "/onlylocal/covers/495.png",
    "link": "/onlylocal/html/495.html"
  },
  {
    "title": "Friday Night Funkin': Jeffy's Endless Aethos",
    "imgSrc": "/onlylocal/covers/496.png",
    "link": "/onlylocal/html/496.html"
  },
  {
    "title": "Friday Night Funkin': vs. BOPCITY",
    "imgSrc": "/onlylocal/covers/497.png",
    "link": "/onlylocal/html/497.html"
  },
  {
    "title": "Friday Night Funkin': 17 Bucks: Floor 1",
    "imgSrc": "/onlylocal/covers/498.png",
    "link": "/onlylocal/html/498.html"
  },
  {
    "title": "Friday Night Funkin': FIRE IN THE HOLE: Lobotomy Dash Funkin'",
    "imgSrc": "/onlylocal/covers/499.png",
    "link": "/onlylocal/html/499.html"
  },
  {
    "title": "Friday Night Funkin': TWIDDLEFINGER",
    "imgSrc": "/onlylocal/covers/500.png",
    "link": "/onlylocal/html/500.html"
  },
  {
    "title": "Kindergarten 3",
    "imgSrc": "/onlylocal/covers/501.png",
    "link": "/onlylocal/html/501.html"
  },
  {
    "title": "Stick With It",
    "imgSrc": "/onlylocal/covers/502.png",
    "link": "/onlylocal/html/502.html"
  },
  {
    "title": "Five Nights at Candy's",
    "imgSrc": "/onlylocal/covers/503.png",
    "link": "/onlylocal/html/503.html"
  },
  {
    "title": "Five Nights at Candy's 2",
    "imgSrc": "/onlylocal/covers/504.png",
    "link": "/onlylocal/html/504.html"
  },
  {
    "title": "Pokemon Red",
    "imgSrc": "/onlylocal/covers/505.png",
    "link": "/onlylocal/html/505.html"
  },
  {
    "title": "Pokemon Emerald",
    "imgSrc": "/onlylocal/covers/506.png",
    "link": "/onlylocal/html/506.html"
  },
  {
    "title": "Super Mario Bros",
    "imgSrc": "/onlylocal/covers/508.png",
    "link": "/onlylocal/html/508.html"
  },
  {
    "title": "Friday Night Funkin’ Soft",
    "imgSrc": "/onlylocal/covers/509.png",
    "link": "/onlylocal/html/509.html"
  },
  {
    "title": "Tomodachi Collection",
    "imgSrc": "/onlylocal/covers/510.png",
    "link": "/onlylocal/html/510.html"
  },
  {
    "title": "Final Earth 2",
    "imgSrc": "/onlylocal/covers/512.png",
    "link": "/onlylocal/html/512.html"
  },
  {
    "title": "Swordfight!!",
    "imgSrc": "/onlylocal/covers/513.png",
    "link": "/onlylocal/html/513.html"
  },
  {
    "title": "PortaBoy+",
    "imgSrc": "/onlylocal/covers/514.png",
    "link": "/onlylocal/html/514.html"
  },
  {
    "title": "PacMan (Horror)",
    "imgSrc": "/onlylocal/covers/515.png",
    "link": "/onlylocal/html/515.html"
  },
  {
    "title": "Oshi Oshi Punch!",
    "imgSrc": "/onlylocal/covers/516.png",
    "link": "/onlylocal/html/516.html"
  },
  {
    "title": "Nubby's Number Factory",
    "imgSrc": "/onlylocal/covers/517.png",
    "link": "/onlylocal/html/517.html"
  },
  {
    "title": "Touhou: Luminous Strike",
    "imgSrc": "/onlylocal/covers/518.png",
    "link": "/onlylocal/html/518.html"
  },
  {
    "title": "Generic Fighter Maybe",
    "imgSrc": "/onlylocal/covers/519.png",
    "link": "/onlylocal/html/519.html"
  },
  {
    "title": "Dan The Man",
    "imgSrc": "/onlylocal/covers/520.png",
    "link": "/onlylocal/html/520.html"
  },
  {
    "title": "Bust a Loop",
    "imgSrc": "/onlylocal/covers/521.png",
    "link": "/onlylocal/html/521.html"
  },
  {
    "title": "Bad Monday Simulator",
    "imgSrc": "/onlylocal/covers/522.png",
    "link": "/onlylocal/html/522.html"
  },
  {
    "title": "Parappa The Rapper",
    "imgSrc": "/onlylocal/covers/524.png",
    "link": "/onlylocal/html/524.html"
  },
  {
    "title": "SpongeBob SquarePants: Land Ho!",
    "imgSrc": "/onlylocal/covers/526.png",
    "link": "/onlylocal/html/526.html"
  },
  {
    "title": "SpongeBob SquarePants: SpongeBob Run",
    "imgSrc": "/onlylocal/covers/527.png",
    "link": "/onlylocal/html/527.html"
  },
  {
    "title": "SpongeBob SquarePants: Squidward's Sizzlin' Scare",
    "imgSrc": "/onlylocal/covers/528.png",
    "link": "/onlylocal/html/528.html"
  },
  {
    "title": "SpongeBob SquarePants: Sandy's Sponge Stacker",
    "imgSrc": "/onlylocal/covers/529.png",
    "link": "/onlylocal/html/529.html"
  },
  {
    "title": "SpongeBob SquarePants: Tasty Pastry Party",
    "imgSrc": "/onlylocal/covers/530.png",
    "link": "/onlylocal/html/530.html"
  },
  {
    "title": "SpongeBob SquarePants: The Kah-Ray-Tay Squid",
    "imgSrc": "/onlylocal/covers/531.png",
    "link": "/onlylocal/html/531.html"
  },
  {
    "title": "SpongeBob SquarePants: WereSquirrel",
    "imgSrc": "/onlylocal/covers/532.png",
    "link": "/onlylocal/html/532.html"
  },
  {
    "title": "SpongeBob SquarePants: Krabby Katch",
    "imgSrc": "/onlylocal/covers/533.png",
    "link": "/onlylocal/html/533.html"
  },
  {
    "title": "Teen Titans GO!: Jump Jousts",
    "imgSrc": "/onlylocal/covers/534.png",
    "link": "/onlylocal/html/534.html"
  },
  {
    "title": "Teen Titans GO!: Jump Jousts 2",
    "imgSrc": "/onlylocal/covers/535.png",
    "link": "/onlylocal/html/535.html"
  },
  {
    "title": "Cat Connection",
    "imgSrc": "/onlylocal/covers/536.png",
    "link": "/onlylocal/html/536.html"
  },
  {
    "title": "Love Letters",
    "imgSrc": "/onlylocal/covers/538.png",
    "link": "/onlylocal/html/538.html"
  },
  {
    "title": "Chiikawa Puzzle",
    "imgSrc": "/onlylocal/covers/539.png",
    "link": "/onlylocal/html/539.html"
  },
  {
    "title": "myTeardrop",
    "imgSrc": "/onlylocal/covers/540.png",
    "link": "/onlylocal/html/540.html"
  },
  {
    "title": "Friday Night Funkin': Pibby: Apocalypse",
    "imgSrc": "/onlylocal/covers/541.png",
    "link": "/onlylocal/html/541.html"
  },
  {
    "title": "Plinko",
    "imgSrc": "/onlylocal/covers/544.png",
    "link": "/onlylocal/html/544.html"
  },
  {
    "title": "Clash Of Vikings",
    "imgSrc": "/onlylocal/covers/545.png",
    "link": "/onlylocal/html/545.html"
  },
  {
    "title": "Recoil",
    "imgSrc": "/onlylocal/covers/546.png",
    "link": "/onlylocal/html/546.html"
  },
  {
    "title": "Baseball Bros",
    "imgSrc": "/onlylocal/covers/547.png",
    "link": "/onlylocal/html/547.html"
  },
  {
    "title": "Sonic the Hedgehog 2: Community's Cut",
    "imgSrc": "/onlylocal/covers/549.png",
    "link": "/onlylocal/html/549.html"
  },
  {
    "title": "Sonic the Hedgehog 3: Angel Island Remastered",
    "imgSrc": "/onlylocal/covers/550.png",
    "link": "/onlylocal/html/550.html"
  },
  {
    "title": "Hypper Sandbox",
    "imgSrc": "/onlylocal/covers/551.png",
    "link": "/onlylocal/html/551.html"
  },
  {
    "title": "Aviamasters",
    "imgSrc": "/onlylocal/covers/552.png",
    "link": "/onlylocal/html/552.html"
  },
  {
    "title": "Rolling Sky",
    "imgSrc": "/onlylocal/covers/553.png",
    "link": "/onlylocal/html/553.html"
  },
  {
    "title": "Friday Night Funkin VS. KAPI",
    "imgSrc": "/onlylocal/covers/555.png",
    "link": "/onlylocal/html/555.html"
  },
  {
    "title": "Friday Night Funkin VS. Sky",
    "imgSrc": "/onlylocal/covers/556.png",
    "link": "/onlylocal/html/556.html"
  },
  {
    "title": "Friday Night Funkin Vs. Cyber Sensation",
    "imgSrc": "/onlylocal/covers/558.png",
    "link": "/onlylocal/html/558.html"
  },
  {
    "title": "Friday Night Funkin vs Shaggy",
    "imgSrc": "/onlylocal/covers/559.png",
    "link": "/onlylocal/html/559.html"
  },
  {
    "title": "BitGun.io",
    "imgSrc": "/onlylocal/covers/561.png",
    "link": "/onlylocal/html/561.html"
  },
  {
    "title": "Boom Slingers: Reboom",
    "imgSrc": "/onlylocal/covers/562.png",
    "link": "/onlylocal/html/562.html"
  },
  {
    "title": "CG FC 25",
    "imgSrc": "/onlylocal/covers/563.png",
    "link": "/onlylocal/html/563.html"
  },
  {
    "title": "Count Masters: Stickman Games",
    "imgSrc": "/onlylocal/covers/564.png",
    "link": "/onlylocal/html/564.html"
  },
  {
    "title": "Dalgona Candy Honeycomb Cookie",
    "imgSrc": "/onlylocal/covers/565.png",
    "link": "/onlylocal/html/565.html"
  },
  {
    "title": "Highway Racer",
    "imgSrc": "/onlylocal/covers/567.png",
    "link": "/onlylocal/html/567.html"
  },
  {
    "title": "Hula Hoop Race",
    "imgSrc": "/onlylocal/covers/569.png",
    "link": "/onlylocal/html/569.html"
  },
  {
    "title": "Jelly Restaurant",
    "imgSrc": "/onlylocal/covers/570.png",
    "link": "/onlylocal/html/570.html"
  },
  {
    "title": "Layers Roll",
    "imgSrc": "/onlylocal/covers/571.png",
    "link": "/onlylocal/html/571.html"
  },
  {
    "title": "Lazy Jumper",
    "imgSrc": "/onlylocal/covers/572.png",
    "link": "/onlylocal/html/572.html"
  },
  {
    "title": "Man Runner 2048",
    "imgSrc": "/onlylocal/covers/573.png",
    "link": "/onlylocal/html/573.html"
  },
  {
    "title": "Pottery Master",
    "imgSrc": "/onlylocal/covers/574.png",
    "link": "/onlylocal/html/574.html"
  },
  {
    "title": "Shovel 3D",
    "imgSrc": "/onlylocal/covers/575.png",
    "link": "/onlylocal/html/575.html"
  },
  {
    "title": "Sky Riders",
    "imgSrc": "/onlylocal/covers/576.png",
    "link": LocalGameEncoder.createEncodedLink("/local games/sky-riders-buk/index.html")
  },
  {
    "title": "Stickman and Guns",
    "imgSrc": "/onlylocal/covers/578.png",
    "link": "/onlylocal/html/578.html"
  },
  {
    "title": "Super Star Car",
    "imgSrc": "/onlylocal/covers/579.png",
    "link": "/onlylocal/html/579.html"
  },
  {
    "title": "Traffic Rider",
    "imgSrc": "/onlylocal/covers/580.png",
    "link": "/onlylocal/html/580.html"
  },
  {
    "title": "Friday Night Funkin': Mario's Madness",
    "imgSrc": "/onlylocal/covers/582.png",
    "link": "/onlylocal/html/582.html"
  },
  {
    "title": "Friday Night Funkin' vs Hypno Lullaby",
    "imgSrc": "/onlylocal/covers/583.png",
    "link": "/onlylocal/html/583.html"
  },
  {
    "title": "Fallout",
    "imgSrc": "/onlylocal/covers/585.png",
    "link": "/onlylocal/html/585.html"
  },
  {
    "title": "The Oregon Trail",
    "imgSrc": "/onlylocal/covers/586.png",
    "link": "/onlylocal/html/586.html"
  },
  {
    "title": "Newgrounds Rumble",
    "imgSrc": "/onlylocal/covers/587.png",
    "link": "/onlylocal/html/587.html"
  },
  {
    "title": "Super Mario 64",
    "imgSrc": "/onlylocal/covers/588.png",
    "link": "/onlylocal/html/588.html"
  },
  {
    "title": "Sonic CD",
    "imgSrc": "/onlylocal/covers/589.png",
    "link": "/onlylocal/html/589.html"
  },
  {
    "title": "Sonic Mania",
    "imgSrc": "/onlylocal/covers/590.png",
    "link": "/onlylocal/html/590.html"
  },
  {
    "title": "Pac Man World",
    "imgSrc": "/onlylocal/covers/592.png",
    "link": "/onlylocal/html/592.html"
  },
  {
    "title": "Pac Man World 2",
    "imgSrc": "/onlylocal/covers/593.png",
    "link": "/onlylocal/html/593.html"
  },
  {
    "title": "Waterworks!",
    "imgSrc": "/onlylocal/covers/594.png",
    "link": "/onlylocal/html/594.html"
  },
  {
    "title": "Shapez.io",
    "imgSrc": "/onlylocal/covers/595.png",
    "link": "/onlylocal/html/595.html"
  },
  {
    "title": "FNF Vs. Hypno's Lullaby v2",
    "imgSrc": "/onlylocal/covers/600.png",
    "link": "/onlylocal/html/600.html"
  },
  {
    "title": "FNF Vs. Sonic.EXE 3.0/4.0",
    "imgSrc": "/onlylocal/covers/601.png",
    "link": "/onlylocal/html/601.html"
  },
  {
    "title": "Doom 2",
    "imgSrc": "/onlylocal/covers/602.png",
    "link": "/onlylocal/html/602.html"
  },
  {
    "title": "Minesweeper Plus",
    "imgSrc": "/onlylocal/covers/604.png",
    "link": "/onlylocal/html/604.html"
  },
  {
    "title": "Friday Night Funkin vs Carol V2",
    "imgSrc": "/onlylocal/covers/610.png",
    "link": "/onlylocal/html/610.html"
  },
  {
    "title": "The Legend of Zelda Ocarina of Time",
    "imgSrc": "/onlylocal/covers/611.png",
    "link": "/onlylocal/html/611.html"
  },
  {
    "title": "The Legend of Zelda Majora's Mask",
    "imgSrc": "/onlylocal/covers/612.png",
    "link": "/onlylocal/html/612.html"
  },
  {
    "title": "Friday Night Funkin' Drop and Roll, but Playable",
    "imgSrc": "/onlylocal/covers/613.png",
    "link": "/onlylocal/html/613.html"
  },
  {
    "title": "Toy Rider",
    "imgSrc": "/onlylocal/covers/614.png",
    "link": "/onlylocal/html/614.html"
  },
  {
    "title": "Friday Night Funkin Vs. Dave and Bambi v3",
    "imgSrc": "/onlylocal/covers/615.png",
    "link": "/onlylocal/html/615.html-a"
  },
  {
    "title": "Friday Night Funkin’ Wednesday's Infidelity",
    "imgSrc": "/onlylocal/covers/616.png",
    "link": "/onlylocal/html/616.html"
  },
  {
    "title": "FNF vs Bob v2.0 (Bob’s Onslaught)",
    "imgSrc": "/onlylocal/covers/618.png",
    "link": "/onlylocal/html/618.html"
  },
  {
    "title": "Friday Night Funkin': Rev-Mixed",
    "imgSrc": "/onlylocal/covers/619.png",
    "link": "/onlylocal/html/619.html"
  },
  {
    "title": "Three Goblets",
    "imgSrc": "/onlylocal/covers/620.png",
    "link": "/onlylocal/html/620.html"
  },
  {
    "title": "Friday Night Funkin': Gumballs",
    "imgSrc": "/onlylocal/covers/621.png",
    "link": "/onlylocal/html/621.html"
  },
  {
    "title": "Get Yoked",
    "imgSrc": "/onlylocal/covers/625.png",
    "link": "/onlylocal/html/625.html"
  },
  {
    "title": "Tag",
    "imgSrc": "/onlylocal/covers/627.png",
    "link": "/onlylocal/html/627.html"
  },
  {
    "title": "Space Funeral",
    "imgSrc": "/onlylocal/covers/630.png",
    "link": "/onlylocal/html/630.html"
  },
  {
    "title": "Friday Night Funkin': VS. Impostor: Alternated",
    "imgSrc": "/onlylocal/covers/633.png",
    "link": "/onlylocal/html/633.html"
  },
  {
    "title": "Friday Night Funkin': Chaos Nightmare - Sonic Vs. Fleetway",
    "imgSrc": "/onlylocal/covers/634.png",
    "link": "/onlylocal/html/634.html"
  },
  {
    "title": "Spelunky Classic HD",
    "imgSrc": "/onlylocal/covers/635.png",
    "link": "/onlylocal/html/635.html"
  },
  {
    "title": "Friday Night Funkin' D-Sides",
    "imgSrc": "/onlylocal/covers/636.png",
    "link": "/onlylocal/html/636.html"
  },
  {
    "title": "Friday Night Funkin' VS Impostor B-Sides",
    "imgSrc": "/onlylocal/covers/639.png",
    "link": "/onlylocal/html/639.html"
  },
  {
    "title": "Mutilate a Doll 2",
    "imgSrc": "/onlylocal/covers/640.png",
    "link": "/onlylocal/html/640.html"
  },
  {
    "title": "Godzilla Daikaiju Battle Royale",
    "imgSrc": "/onlylocal/covers/641.png",
    "link": "/onlylocal/html/641.html"
  },
  {
    "title": "Friday Night Funkin' Sunday Night Suicide: Rookies Edition",
    "imgSrc": "/onlylocal/covers/642.png",
    "link": "/onlylocal/html/642.html"
  },
  {
    "title": "Rio Rex",
    "imgSrc": "/onlylocal/covers/643.png",
    "link": "/onlylocal/html/643.html"
  },
  {
    "title": "Baldi's Basics",
    "imgSrc": "/onlylocal/covers/65.png",
    "link": "/onlylocal/html/65.html"
  },
  {
    "title": "Big Tower Tiny Square",
    "imgSrc": "/onlylocal/covers/67.png",
    "link": "/onlylocal/html/67.html"
  },
  {
    "title": "Big NEON Tower Tiny Square",
    "imgSrc": "/onlylocal/covers/68.png",
    "link": "/onlylocal/html/68.html"
  },
  {
    "title": "Big ICE Tower Tiny Square",
    "imgSrc": "/onlylocal/covers/69.png",
    "link": "/onlylocal/html/69.html"
  },
  {
    "title": "Fireboy and Watergirl 2",
    "imgSrc": "/onlylocal/covers/88.png",
    "link": "/onlylocal/html/88.html"
  },
  {
    "title": "Fireboy and Watergirl 3",
    "imgSrc": "/onlylocal/covers/89.png",
    "link": "/onlylocal/html/89.html"
  },
  {
    "title": "Moto X3M 3",
    "imgSrc": "/onlylocal/covers/98.png",
    "link": "/onlylocal/html/98.html"
  },
  {
    "title": "Moto X3M Spooky",
    "imgSrc": "/onlylocal/covers/99.png",
    "link": "/onlylocal/html/99.html"
  },
	  { "title": "Geometry Dash Lite", "imgSrc": "/onlylocal/covers/27.png", "link": makeScramjetLink("https://geometrydash-lite.io") },
  { "title": "Moto X3M Winter", "imgSrc": "/onlylocal/covers/100.png", "link": "/onlylocal/html/100.html" },
  { "title": "Adventure Capatalist", "imgSrc": "/onlylocal/covers/354.png", "link": "/onlylocal/html/354.html" },
  { "title": "Nijika's Ahoge", "imgSrc": "/onlylocal/covers/447.png", "link": "/onlylocal/html/447.html" },
  { "title": "Animal Crossing-Wild World", "imgSrc": "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDfJ1Cp-9qBb1agO72tRRQ3hec8VHSshl3_J35n6IvzFbMkcv8m45PGZPrXweiJazfOn07XffNOhMEcO-NnwoMiF19pJlHaE8gfnAcujvkgfnoF3dzhb8dkcwD71WaICw_Iq6TlNSwQzABldnDFQqNQyOcFICBkSTo8?key=yj4V8pHW144VjA9YlEbf1Q", "link": LocalGameEncoder.createEncodedLink("/local games/clanimalcrossingwildworld.html") },
  { "title": "Unfair Mario", "imgSrc": "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCgUaI7nQ5klu3Eulq7rXsYBZVZI5837zdWTY4EkNcAGpk4VbAZ15Qq8RiGi02NGomcjWfVbInZ5KFsmMx_Sg6v0u_HJy-JP0N3c_9lZDcnHf3gm3WpsOireEGxI-v6ZcYxBidZjNdLRrgFgzFBR2IiUD-8dpsJxcul?key=yj4V8pHW144VjA9YlEbf1Q", "link": LocalGameEncoder.createEncodedLink("/local games/unfair-mario-gamemonetize/index.html") },

{
    title: "Transporter",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAdn7DCE_8rlKagTuDjkPY-aAi_h6t524LpJiJHh1nyrm6JTdsbcgFSUWi2nDlTooQWoTwgjGy1PaBWXAEvTxdCA2CFwoD-Oh0DdrHFlZEwq26CKMT2--rQX-tVohN4CHBI194QbnecEUogJfh27A-LqmoqnE6wf8PXGA?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/transporter_offline/index.html")
},
{
    title: "Drive Monster",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDvO-PDV_DVBlBuRexrMHiBNrCM5pCH6XMgNTetjGUyk034DJk3jbrN6aKHbTFrCK6DXzf3IyMITEyadXAj--xiw_aaktMKTtW0t-qwX0e8rqIMqftIYHbC2hwilp6JlqNRK_I7t1V-7eCpMRL2U0t-6sYKK6UKp953?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_61F6D3F355639936/index.html")
},
{
    title: "Trukking 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAa5p7vFtJwJBBqq61ka0dIpGzu2-UsFMGIdCn_y0BK1FbbBIG9p8ZQV3QJouauZQfW1J1G8mGxgS--aI7pRl09kSzaCQMwfr8BqmjsEi2U4cmPHU1g5rdNAJ7xf3LdYJ398vO1aPxuen7tn3EsYGG0s0M2anOmHKox?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5FD3C9C84173F88B/index.html")
},
{
    title: "Drive Mad 2",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCJpizEFzapiUrYeepke3aV1Idu7v_gdS120Eb4Uia6ByMmXHCBEWuOvZLC3LJhT8w-n22RUK4Trq0hngfz3FBf7qxFICEeHsqTT78puhiYfx39KybaELywClEwSOML5-7D7yPCWqwI_GN7IVj0wQUswkgzvdiwB-VTDw?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5DECAAB70F71EA92/index.html")
},
{
    title: "Drive Mad 3",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDfWxOTjQh3nvdeq1P2GPoAdqtvVRE4Hj-uqtU5eDYVrVEQ0utgnmaiTwG0aF8UtHpZFHu_HeZJwETfb15ne0g5IfI0CaCXnoVnPys8LkCZaUUWKeQpusxP-MjRGiiIGfsvHVMimnWJuANVh58P76hFL6oKMG74ELNCOQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_6380C7C8A113965B/index.html")
},
{
    title: "Drive Mad 4",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCdtDQf0ZvNycejgC0Ua2MODKppUeVlgd87bmbKV72w_fJX_8V4H3SJ4W_-77n1rXQn_t6gDpledczyKx9htSPF-AcEDFKXObDq31heGdrj8_we8HgoeT8hKgn09p5RNR2cCC_afrjtfnzay8pgzcVVTlW60Q_VyHoBIQ?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5DFEEE25B4B7FA54/index.html")
},
{
    title: "Drive Mad 5",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCJeDzd4_eGJWPA7F9yGPbMRJlLCr80G80kaQvM8G9O2jBi0i2TCdjm-X7lNkyDZ8OzR98AOrFEaQuxjNQ5NneDgVuZfc4cprWgJBPBZLyCQrN_NeKmI_9K9IVH60oq-vxDtD8GEg1YB1L-bbBuj0gI0XLPanQZDnTt_Q?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_642C47A8C1A2D22A/index.html")
},
{
    title: "Drive Mad 6",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVC2GWJg-Qt-7UByxzsDwArLlfv-LXR-fX90M_iTQE86Ss_NqMhMo5INu-TGdED3EQtjPTINzGKwT8HKUcPM8qT2rNtGkgg_WEaSzgAHnNwNDlVvqkOlKm7UQTQUJV69gcYsTavDw_KMt2h2zIK0Nrk2NcExJopCsJae?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_5DEFB9809F1DF18A/index.html")
},
{
    title: "Drive Mad 7",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVCrrPEg5TAd3tLeSOubtzI013Eya-W6CLfOjyh1hiAbbPplHCHsP0ZmHIvGcX5sXIIa0fcYgPbFuMAyd5fPfhOc4tM2hqI3OCWMJwJUeqdgi701WNrwV56HOHkZaI45V_BrkrYoHj7BU7ILcmYUvl-GJSIAv1RuzBHaew?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_62635FFF69389BB6/index.html")
},
{
    title: "Drive Mad 8",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVAtQXQTXDPFqD0PvU9yRTBPnAe6j1swpa3ifgdvtw0hWX5sPrqIqklDY-OpLk1K7vu_yuXbF5-APFJZyiI27aozgcfMatX9uWvdOyEDrV3AW1ai12z4FXwBbnPQhhlAzcC9f4qPh14GHCgobV9W3TLrh07-vKYlnPKZcg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_6518E1D1F060C2E2/index.html")
},
{
    title: "Drive Mad 9",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDeaxtG9YdNoxK7Z8yvIgZ3LmHQoIuuvdYesF9WmxnjuAHNGMiRNtGRxr-0QRRneNp2y8z30D60bvZ_UzHZ0g9JLdzZqRIQXAIeSqV1ogSbKXkC34MYuf-2FJQ21giqtrtPDtkwhp4_xj0qMrhAU035Qm56dJSeGlH_Gg?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_62B9ECA89D0E0332/index.html")
},
{
    title: "Drive Mad 10",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBEVFgz96zKCbiKnRI4bxsc-f40HD40gbyYmixyMOOn0hR0oF20SdrPE5FpoLyt4cL-TDdn1DngWUtgaipHUbSnKTL1MFry6fUb1-o5gPviASB6dUj5XRULCmp-ito42ice6XR08XstFHdHLqEvYaDQER_Jw5VCm5zb?key=yj4V8pHW144VjA9YlEbf1Q",
    link: LocalGameEncoder.createEncodedLink("/local games/fancade_62C6ADDFC8478935/index.html")
},
{
    title: "Soccer Game",
    imgSrc: "https://lh7-rt.googleusercontent.com/formsz/AN7BsVD8k9ezTqWMjKwsfF5txAWY_ozRxLAFp4Hnph6Ut_tSWORtwaFEvOZsEUB5bbw3d2awqAk8j3KksjyoJS_tR7lvIQXBEq5rYkOpvZrnIEcGAlevdUkQZSgmmiMzS3QnILrSA569FaUpKdZmfFFcv1YZf4-yq5LlS76WgA?key=XMoM0FYxMS5kPOJMGtjyBg",
    link: LocalGameEncoder.createEncodedLink("/local games/soccer_game.html")
},
    {
        title: "1 on 1 Basketball",
        imgSrc: "/img/gameimg/1on1basketball.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/1-on-1-basketball/game.html")
    },
    {
        title: "2048 Cuteness Edition",
        imgSrc: "/img/gameimg/2048cutenessedition.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/2048-cuteness-edition/game.html")
    },
    {
        title: "2048 Game",
        imgSrc: "/img/gameimg/2048game.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/2048-game/game.html")
    },
    {
        title: "2048 Minecraft",
        imgSrc: "/img/gameimg/2048minecraft.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/2048-minecraft/game.html")
    },
    {
        title: "3D Santa Run",
        imgSrc: "/img/gameimg/3dsantarun.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/3d-santa-run/game.html")
    },
    {
        title: "40xEscape",
        imgSrc: "/img/gameimg/40xescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/40xescape.swf")
    },
    {
        title: "60 Seconds Burger Run",
        imgSrc: "/img/gameimg/60secondsburgerrun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/60-seconds-burger-run/game.html")
    },
    {
        title: "60 Seconds Santa Run",
        imgSrc: "/img/gameimg/60secondssantarun.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/60-seconds-santa-run/game.html")
    },
    {
        title: "67 Clicker",
        imgSrc: "/img/gameimg/67clicker.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/67-clicker/game.html")
    },
    {
        title: "A Missing Shepherd",
        imgSrc: "/img/gameimg/amissingshepherd.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/a-missing-shepherd/game.html")
    },
    {
        title: "Addition Bubble Pop",
        imgSrc: "/img/gameimg/additionbubblepop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/addition-bubble-pop/game.html")
    },
    {
        title: "Addition Jeep",
        imgSrc: "/img/gameimg/additionjeep.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/addition-jeep/game.html")
    },
    {
        title: "Air Balloon Rally",
        imgSrc: "/img/gameimg/airballoonrally.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/airballoonrally.swf")
    },
    {
        title: "Air Hockey",
        imgSrc: "/img/gameimg/airhockey.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/air-hockey/game.html")
    },
    {
        title: "Algebra Run",
        imgSrc: "/img/gameimg/algebrarun.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/algebra-run/game.html")
    },
    {
        title: "Algebra Run Lite",
        imgSrc: "/img/gameimg/algebrarunlite.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/algebra-run-lite/game.html")
    },
    {
        title: "Algebra Run Meltdown",
        imgSrc: "/img/gameimg/algebrarunmeltdown.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/algebra-run-meltdown/game.html")
    },
    {
        title: "Algebra Run Subzero",
        imgSrc: "/img/gameimg/algebrarunsubzero.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/algebra-run-subzero/game.html")
    },
    {
        title: "Algebra Run World Toxic Factory",
        imgSrc: "/img/gameimg/algebrarunworldtoxicfactory.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/algebra-run-world-toxic-factory/game.html")
    },
    {
        title: "Amazing Escape Atlantis",
        imgSrc: "/img/gameimg/amazingescapeatlantis.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapeatlantis.swf")
    },
    {
        title: "Amazing Escape Castle",
        imgSrc: "/img/gameimg/amazingescapecastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapecastle.swf")
    },
    {
        title: "Amazing Escape Ghost Town",
        imgSrc: "/img/gameimg/amazingescapeghosttown.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapeghosttown.swf")
    },
    {
        title: "Amazing Escape Island",
        imgSrc: "/img/gameimg/amazingescapeisland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapeisland.swf")
    },
    {
        title: "Amazing Escape Maze",
        imgSrc: "/img/gameimg/amazingescapemaze.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapemaze.swf")
    },
    {
        title: "Amazing Escape North Pole",
        imgSrc: "/img/gameimg/amazingescapenorthpole.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/amazing-escape-north-pole/game.html")
    },
    {
        title: "Amazing Escape Pyramid",
        imgSrc: "/img/gameimg/amazingescapepyramid.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapepyramid.swf")
    },
    {
        title: "Amazing Escape Ruins",
        imgSrc: "/img/gameimg/amazingescaperuins.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescaperuins.swf")
    },
    {
        title: "Amazing Escape School",
        imgSrc: "/img/gameimg/amazingescapeschool.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapeschool.swf")
    },
    {
        title: "Amazing Escape Spring Garden",
        imgSrc: "/img/gameimg/amazingescapespringgarden.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amazingescapespringgarden.swf")
    },
    {
        title: "American Football Challenge",
        imgSrc: "/img/gameimg/americanfootballchallenge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/american-football-challenge/game.html")
    },
    {
        title: "American Football Kicks",
        imgSrc: "/img/gameimg/americanfootballkicks.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/american-football-kicks/game.html")
    },
    {
        title: "Amuse Park",
        imgSrc: "/img/gameimg/amusepark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/amusepark.swf")
    },
    {
        title: "Angry Animals",
        imgSrc: "/img/gameimg/angryanimals.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/angry-animals/game.html")
    },
    {
        title: "Angry Animals 2",
        imgSrc: "/img/gameimg/angryanimals2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/angryanimals2.swf")
    },
    {
        title: "Anikas Odyssey",
        imgSrc: "/img/gameimg/anikasodyssey.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/anikasodyssey.swf")
    },
    {
        title: "Animal Raceway",
        imgSrc: "/img/gameimg/animalraceway.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/animalraceway.swf")
    },
    {
        title: "Aqua Thief",
        imgSrc: "/img/gameimg/aquathief.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/aqua-thief/game.html")
    },
    {
        title: "Aquatic Rescue",
        imgSrc: "/img/gameimg/aquaticrescue.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/aquatic-rescue/game.html")
    },
    {
        title: "Are You Human",
        imgSrc: "/img/gameimg/areyouhuman.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/are-you-human/game.html")
    },
    {
        title: "Atomic Puzzle",
        imgSrc: "/img/gameimg/atomicpuzzle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/atomicpuzzle.swf")
    },
    {
        title: "Backgammon",
        imgSrc: "/img/gameimg/backgammon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/backgammon/game.html")
    },
    {
        title: "Backyard Baseball",
        imgSrc: "/img/gameimg/backyardbaseball.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/backyard-baseball/game.html")
    },
    {
        title: "Baking Apple Pie",
        imgSrc: "/img/gameimg/bakingapplepie.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/bakingapplepie.swf")
    },
    {
        title: "Balloon Math",
        imgSrc: "/img/gameimg/balloonmath.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/balloon-math/game.html")
    },
    {
        title: "Baseball Pro",
        imgSrc: "/img/gameimg/baseballpro.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/baseball-pro/game.html")
    },
    {
        title: "Basket Balls",
        imgSrc: "/img/gameimg/basketballs.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/basket-balls/game.html")
    },
    {
        title: "Basket Balls Level Pack",
        imgSrc: "/img/gameimg/basketballslevelpack.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/basketballslevelpack.swf")
    },
    {
        title: "Basket Goal",
        imgSrc: "/img/gameimg/basketgoal.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/basket-goal/game.html")
    },
    {
        title: "Basketball Mania",
        imgSrc: "/img/gameimg/basketballmania.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/basketball-mania/game.html")
    },
    {
        title: "Battleship",
        imgSrc: "/img/gameimg/battleship.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/battleship/game.html")
    },
    {
        title: "Beach Soccer",
        imgSrc: "/img/gameimg/beachsoccer.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/beach-soccer/game.html")
    },
    {
        title: "Beach Town Escape",
        imgSrc: "/img/gameimg/beachtownescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/beachtownescape.swf")
    },
    {
        title: "Big Block Puzzle",
        imgSrc: "/img/gameimg/bigblockpuzzle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/big-block-puzzle/game.html")
    },
    {
        title: "Bike Hero",
        imgSrc: "/img/gameimg/bikehero.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/bike-hero/game.html")
    },
    {
        title: "Bitcoin Clicker",
        imgSrc: "/img/gameimg/bitcoinclicker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/bitcoin-clicker/game.html")
    },
    {
        title: "BIZ WIZ",
        imgSrc: "/img/gameimg/bizwiz.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/biz-wiz/game.html")
    },
    {
        title: "Block Master",
        imgSrc: "/img/gameimg/blockmaster.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/blockmaster.swf")
    },
    {
        title: "Bloons Tower Defense 2",
        imgSrc: "/img/gameimg/bloonstowerdefense2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/bloonstowerdefense2.swf")
    },
    {
        title: "Bloons Tower Defense 3",
        imgSrc: "/img/gameimg/bloonstowerdefense3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/bloons-tower-defense-3/game.html")
    },
    {
        title: "Blue and Pink",
        imgSrc: "/img/gameimg/blueandpink.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/blue-and-pink/game.html")
    },
    {
        title: "Boomers Words Quiz",
        imgSrc: "/img/gameimg/boomerswordsquiz.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/boomers-words-quiz/game.html")
    },
    {
        title: "Bouncing Balls",
        imgSrc: "/img/gameimg/bouncingballs.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/bouncing-balls/game.html")
    },
    {
        title: "Breakfast Cooking",
        imgSrc: "/img/gameimg/breakfastcooking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/breakfastcooking.swf")
    },
    {
        title: "Bridge Crossing",
        imgSrc: "/img/gameimg/bridgecrossing.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/bridge-crossing/game.html")
    },
    {
        title: "Briker",
        imgSrc: "/img/gameimg/briker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/briker.swf")
    },
    {
        title: "Briker 2",
        imgSrc: "/img/gameimg/briker2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/briker2.swf")
    },
    {
        title: "Build The Bridge",
        imgSrc: "/img/gameimg/buildthebridge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/build-the-bridge/game.html")
    },
    {
        title: "Burger Time",
        imgSrc: "/img/gameimg/burgertime.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/burger-time/game.html")
    },
    {
        title: "Bus Parking",
        imgSrc: "/img/gameimg/busparking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/bus-parking/game.html")
    },
    {
        title: "Business Fun",
        imgSrc: "/img/gameimg/businessfun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/businessfun.swf")
    },
    {
        title: "Calculator Balance",
        imgSrc: "/img/gameimg/calculatorbalance.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/calculator-balance/game.html")
    },
    {
        title: "Calculus Game 1-1",
        imgSrc: "/img/gameimg/calculusgame11.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/calculus-game-1-1/game.html")
    },
    {
        title: "Candy Clicker",
        imgSrc: "/img/gameimg/candyclicker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/candy-clicker/game.html")
    },
    {
        title: "Candy Clicker 2",
        imgSrc: "/img/gameimg/candyclicker2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/candy-clicker-2/game.html")
    },
    {
        title: "Candy Fun",
        imgSrc: "/img/gameimg/candyfun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/candyfun.swf")
    },
    {
        title: "Capybara Clicker",
        imgSrc: "/img/gameimg/capybaraclicker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/capybara-clicker/game.html")
    },
    {
        title: "Car Park Challenge",
        imgSrc: "/img/gameimg/carparkchallenge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/carparkchallenge.swf")
    },
    {
        title: "Car Park Chaos",
        imgSrc: "/img/gameimg/carparkchaos.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/carparkchaos.swf")
    },
    {
        title: "Car Rush",
        imgSrc: "/img/gameimg/carrush.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/car-rush/game.html")
    },
    {
        title: "Cargo Bridge Xmas Level Pack",
        imgSrc: "/img/gameimg/cargobridgexmaslevelpack.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/cargo-bridge-xmas-level-pack/game.html")
    },
    {
        title: "Cargo Shipment",
        imgSrc: "/img/gameimg/cargoshipment.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/cargoshipment.swf")
    },
    {
        title: "Cargo Shipment Chicago",
        imgSrc: "/img/gameimg/cargoshipmentchicago.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/cargoshipmentchicago.swf")
    },
    {
        title: "Carnival Fun",
        imgSrc: "/img/gameimg/carnivalfun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/carnivalfun.swf")
    },
    {
        title: "Carpenter's Cut",
        imgSrc: "/img/gameimg/carpenterscut.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/carpenterscut.swf")
    },
    {
        title: "Carrot Crave",
        imgSrc: "/img/gameimg/carrotcrave.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/carrot-crave/game.html")
    },
    {
        title: "Caveman",
        imgSrc: "/img/gameimg/caveman.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/caveman/game.html")
    },
    {
        title: "Chat Noir",
        imgSrc: "/img/gameimg/chatnoir.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/chatnoir.swf")
    },
    {
        title: "Checkers",
        imgSrc: "/img/gameimg/checkers.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/checkers/game.html")
    },
    {
        title: "Christmas Memory",
        imgSrc: "/img/gameimg/christmasmemory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/christmas-memory/game.html")
    },
    {
        title: "Christmas Tree Light Up",
        imgSrc: "/img/gameimg/christmastreelightup.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/christmas-tree-light-up/game.html")
    },
    {
        title: "Civiballs",
        imgSrc: "/img/gameimg/civiballs.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/civiballs/game.html")
    },
    {
        title: "Civiballs 2",
        imgSrc: "/img/gameimg/civiballs2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/civiballs-2/game.html")
    },
    {
        title: "Civiballs Xmas Levels Pack",
        imgSrc: "/img/gameimg/civiballsxmaslevelspack.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/civiballs-xmas-levels-pack/game.html")
    },
    {
        title: "Classic Car Parking",
        imgSrc: "/img/gameimg/classiccarparking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/classiccarparking.swf")
    },
    {
        title: "Classic Snake",
        imgSrc: "/img/gameimg/classicsnake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/classic-snake/game.html")
    },
    {
        title: "Cliff Diving",
        imgSrc: "/img/gameimg/cliffdiving.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/cliff-diving/game.html")
    },
    {
        title: "Climbable Arrow",
        imgSrc: "/img/gameimg/climbablearrow.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/climbable-arrow/game.html")
    },
    {
        title: "Coffee Shop Game",
        imgSrc: "/img/gameimg/coffeeshopgame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/coffee-shop-game/game.html")
    },
    {
        title: "Color Block Jam",
        imgSrc: "/img/gameimg/colorblockjam.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/color-block-jam/game.html")
    },
    {
        title: "Color Cleaner",
        imgSrc: "/img/gameimg/colorcleaner.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/colorcleaner.swf")
    },
    {
        title: "Color Fill",
        imgSrc: "/img/gameimg/colorfill.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/color-fill/game.html")
    },
    {
        title: "Color Flip",
        imgSrc: "/img/gameimg/colorflip.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/color-flip/game.html")
    },
    {
        title: "Combination Lock",
        imgSrc: "/img/gameimg/combinationlock.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/combination-lock/game.html")
    },
    {
        title: "Concert Parking",
        imgSrc: "/img/gameimg/concertparking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/concertparking.swf")
    },
    {
        title: "Count The Cubes",
        imgSrc: "/img/gameimg/countthecubes.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/count-the-cubes/game.html")
    },
    {
        title: "Court Clash Basketball",
        imgSrc: "/img/gameimg/courtclashbasketball.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/court-clash-basketball/game.html")
    },
    {
        title: "Crossword",
        imgSrc: "/img/gameimg/crossword.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/crossword.swf")
    },
    {
        title: "Cubeform",
        imgSrc: "/img/gameimg/cubeform.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/cubeform/game.html")
    },
    {
        title: "cubeNet",
        imgSrc: "/img/gameimg/cubenet.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/cubenet/game.html")
    },
    {
        title: "Custom Car Shop",
        imgSrc: "/img/gameimg/customcarshop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/customcarshop.swf")
    },
    {
        title: "Cycle Sprint",
        imgSrc: "/img/gameimg/cyclesprint.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/cycle-sprint/game.html")
    },
    {
        title: "Dark Room",
        imgSrc: "/img/gameimg/darkroom.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/dark-room/game.html")
    },
    {
        title: "Day Trader",
        imgSrc: "/img/gameimg/daytrader.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/day-trader/game.html")
    },
    {
        title: "Desk Movement",
        imgSrc: "/img/gameimg/deskmovement.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/deskmovement.swf")
    },
    {
        title: "Destress Game",
        imgSrc: "/img/gameimg/destressgame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/destress-game/game.html")
    },
    {
        title: "DICEWARS",
        imgSrc: "/img/gameimg/dicewars.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/dicewars.swf")
    },
    {
        title: "Digitle",
        imgSrc: "/img/gameimg/digitle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/digitle/game.html")
    },
    {
        title: "Diner City",
        imgSrc: "/img/gameimg/dinercity.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/dinercity.swf")
    },
    {
        title: "Dobble",
        imgSrc: "/img/gameimg/dobble.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/dobble.swf")
    },
    {
        title: "Doctor Acorn",
        imgSrc: "/img/gameimg/doctoracorn.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/doctoracorn.swf")
    },
    {
        title: "Doggnation",
        imgSrc: "/img/gameimg/doggnation.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/doggnation.swf")
    },
    {
        title: "Dominoes",
        imgSrc: "/img/gameimg/dominoes.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/dominoes/game.html")
    },
    {
        title: "Donut Empire",
        imgSrc: "/img/gameimg/donutempire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/donutempire.swf")
    },
    {
        title: "Donut Stand",
        imgSrc: "/img/gameimg/donutstand.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/donut-stand/game.html")
    },
    {
        title: "Doughnuts Recipe",
        imgSrc: "/img/gameimg/doughnutsrecipe.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/doughnutsrecipe.swf")
    },
    {
        title: "Draw Surfer",
        imgSrc: "/img/gameimg/drawsurfer.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/draw-surfer/game.html")
    },
    {
        title: "Draw The Rest",
        imgSrc: "/img/gameimg/drawtherest.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/draw-the-rest/game.html")
    },
    {
        title: "Draw to Smash",
        imgSrc: "/img/gameimg/drawtosmash.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/draw-to-smash/game.html")
    },
    {
        title: "Dreidel Game",
        imgSrc: "/img/gameimg/dreidelgame.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/dreidel-game/game.html")
    },
    {
        title: "Dress Up Math",
        imgSrc: "/img/gameimg/dressupmath.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/dress-up-math/game.html")
    },
    {
        title: "Drift Bus",
        imgSrc: "/img/gameimg/driftbus.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/drift-bus/game.html")
    },
    {
        title: "Driverless Car",
        imgSrc: "/img/gameimg/driverlesscar.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/driverless-car/game.html")
    },
    {
        title: "DuBlox",
        imgSrc: "/img/gameimg/dublox.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/dublox/game.html")
    },
    {
        title: "Duck Duck Clicker",
        imgSrc: "/img/gameimg/duckduckclicker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/duck-duck-clicker/game.html")
    },
    {
        title: "Duck Duck Clicker 3D",
        imgSrc: "/img/gameimg/duckduckclicker3d.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/duck-duck-clicker-3d/game.html")
    },
    {
        title: "Duck Life 2 World Champion",
        imgSrc: "/img/gameimg/ducklife2worldchampion.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/duck-life-2-world-champion/game.html")
    },
    {
        title: "Duck Life 3 Evolution",
        imgSrc: "/img/gameimg/ducklife3evolution.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/duck-life-3-evolution/game.html")
    },
    {
        title: "Duck Life 5 Treasure Hunt",
        imgSrc: "/img/gameimg/ducklife5treasurehunt.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/duck-life-5-treasure-hunt/game.html")
    },
    {
        title: "Duck Life 6 Space",
        imgSrc: "/img/gameimg/ducklife6space.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/duck-life-6-space/game.html")
    },
    {
        title: "Duck Think Outside the Flock",
        imgSrc: "/img/gameimg/duckthinkoutsidetheflock.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/duckthinkoutsidetheflock.swf")
    },
    {
        title: "Dune Buggy",
        imgSrc: "/img/gameimg/dunebuggy.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/dune-buggy/game.html")
    },
    {
        title: "Dunkers",
        imgSrc: "/img/gameimg/dunkers.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/dunkers/game.html")
    },
    {
        title: "Easter Clicker",
        imgSrc: "/img/gameimg/easterclicker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/easter-clicker/game.html")
    },
    {
        title: "Easter Memory",
        imgSrc: "/img/gameimg/eastermemory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/easter-memory/game.html")
    },
    {
        title: "Electric Box",
        imgSrc: "/img/gameimg/electricbox.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/electricbox.swf")
    },
    {
        title: "Electric Box 2",
        imgSrc: "/img/gameimg/electricbox2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/electricbox2.swf")
    },
    {
        title: "Electron Dash",
        imgSrc: "/img/gameimg/electrondash.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/electron-dash/game.html")
    },
    {
        title: "Element Merge",
        imgSrc: "/img/gameimg/elementmerge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/element-merge/game.html")
    },
    {
        title: "Escape Beijing",
        imgSrc: "/img/gameimg/escapebeijing.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-beijing/game.html")
    },
    {
        title: "Escape Berlin",
        imgSrc: "/img/gameimg/escapeberlin.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-berlin/game.html")
    },
    {
        title: "Escape Cairo",
        imgSrc: "/img/gameimg/escapecairo.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-cairo/game.html")
    },
    {
        title: "Escape Istanbul",
        imgSrc: "/img/gameimg/escapeistanbul.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-istanbul/game.html")
    },
    {
        title: "Escape London",
        imgSrc: "/img/gameimg/escapelondon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-london/game.html")
    },
    {
        title: "Escape Moscow",
        imgSrc: "/img/gameimg/escapemoscow.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-moscow/game.html")
    },
    {
        title: "Escape Plan Dragon Castle",
        imgSrc: "/img/gameimg/escapeplandragoncastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/escapeplandragoncastle.swf")
    },
    {
        title: "Escape Plan Ghost House",
        imgSrc: "/img/gameimg/escapeplanghosthouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/escapeplanghosthouse.swf")
    },
    {
        title: "Escape Plan North Pole",
        imgSrc: "/img/gameimg/escapeplannorthpole.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-plan-north-pole/game.html")
    },
    {
        title: "Escape Plan Office",
        imgSrc: "/img/gameimg/escapeplanoffice.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/escapeplanoffice.swf")
    },
    {
        title: "Escape Prague",
        imgSrc: "/img/gameimg/escapeprague.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-prague/game.html")
    },
    {
        title: "Escape Santiago",
        imgSrc: "/img/gameimg/escapesantiago.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/escape-santiago/game.html")
    },
    {
        title: "Escape The Candy Factory",
        imgSrc: "/img/gameimg/escapethecandyfactory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/escapethecandyfactory.swf")
    },
    {
        title: "Expert Parking",
        imgSrc: "/img/gameimg/expertparking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/expertparking.swf")
    },
    {
        title: "Factor Feeder",
        imgSrc: "/img/gameimg/factorfeeder.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/factor-feeder/game.html")
    },
    {
        title: "Factory Balls",
        imgSrc: "/img/gameimg/factoryballs.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/factoryballs.swf")
    },
    {
        title: "Factory Balls 2",
        imgSrc: "/img/gameimg/factoryballs2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/factoryballs2.swf")
    },
    {
        title: "Factory Balls 3",
        imgSrc: "/img/gameimg/factoryballs3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/factoryballs3.swf")
    },
    {
        title: "Factory Balls Forever",
        imgSrc: "/img/gameimg/factoryballsforever.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/factory-balls-forever/game.html")
    },
    {
        title: "Factory Balls the Christmas Edition",
        imgSrc: "/img/gameimg/factoryballsthechristmasedition.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/factory-balls-the-christmas-edition/game.html")
    },
    {
        title: "Fall Beans",
        imgSrc: "/img/gameimg/fallbeans.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/fall-beans/game.html")
    },
    {
        title: "Falling Cubes",
        imgSrc: "/img/gameimg/fallingcubes.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/falling-cubes/game.html")
    },
    {
        title: "Fancy Diver",
        imgSrc: "/img/gameimg/fancydiver.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/fancy-diver/game.html")
    },
    {
        title: "Fantastic Chef Blueberry Muffins",
        imgSrc: "/img/gameimg/fantasticchefblueberrymuffins.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/fantasticchefblueberrymuffins.swf")
    },
    {
        title: "Fantastic Chef Chocolate Cake",
        imgSrc: "/img/gameimg/fantasticchefchocolatecake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/fantasticchefchocolatecake.swf")
    },
    {
        title: "Fantastic Chef Peach Cobbler",
        imgSrc: "/img/gameimg/fantasticchefpeachcobbler.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/fantasticchefpeachcobbler.swf")
    },
    {
        title: "Fantastic Contraption 2",
        imgSrc: "/img/gameimg/fantasticcontraption2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/fantasticcontraption2.swf")
    },
    {
        title: "Farm Harvest Multiplication Game",
        imgSrc: "/img/gameimg/farmharvestmultiplicationgame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/farm-harvest-multiplication-game/game.html")
    },
    {
        title: "Feed The Figures",
        imgSrc: "/img/gameimg/feedthefigures.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/feed-the-figures/game.html")
    },
    {
        title: "Feed The Figures 2",
        imgSrc: "/img/gameimg/feedthefigures2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/feed-the-figures-2/game.html")
    },
    {
        title: "Find HQ Backyard",
        imgSrc: "/img/gameimg/findhqbackyard.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-backyard/game.html")
    },
    {
        title: "Find HQ Beach House",
        imgSrc: "/img/gameimg/findhqbeachhouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqbeachhouse.swf")
    },
    {
        title: "Find HQ Bowling Alley",
        imgSrc: "/img/gameimg/findhqbowlingalley.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqbowlingalley.swf")
    },
    {
        title: "Find HQ Camp",
        imgSrc: "/img/gameimg/findhqcamp.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqcamp.swf")
    },
    {
        title: "Find HQ Carnival",
        imgSrc: "/img/gameimg/findhqcarnival.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqcarnival.swf")
    },
    {
        title: "Find HQ Castle",
        imgSrc: "/img/gameimg/findhqcastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-castle/game.html")
    },
    {
        title: "Find HQ Cave",
        imgSrc: "/img/gameimg/findhqcave.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-cave/game.html")
    },
    {
        title: "Find HQ Denver",
        imgSrc: "/img/gameimg/findhqdenver.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-denver/game.html")
    },
    {
        title: "Find HQ Farm",
        imgSrc: "/img/gameimg/findhqfarm.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqfarm.swf")
    },
    {
        title: "Find HQ Fire Station",
        imgSrc: "/img/gameimg/findhqfirestation.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqfirestation.swf")
    },
    {
        title: "Find HQ Fun House",
        imgSrc: "/img/gameimg/findhqfunhouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-fun-house/game.html")
    },
    {
        title: "Find HQ Game Center",
        imgSrc: "/img/gameimg/findhqgamecenter.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqgamecenter.swf")
    },
    {
        title: "Find HQ Glacier National Park",
        imgSrc: "/img/gameimg/findhqglaciernationalpark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-glacier-national-park/game.html")
    },
    {
        title: "Find HQ Great Smoky Mountains",
        imgSrc: "/img/gameimg/findhqgreatsmokymountains.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-great-smoky-mountains/game.html")
    },
    {
        title: "Find HQ Gym",
        imgSrc: "/img/gameimg/findhqgym.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/findhqgym.swf")
    },
    {
        title: "Find HQ Honolulu",
        imgSrc: "/img/gameimg/findhqhonolulu.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-honolulu/game.html")
    },
    {
        title: "Find HQ Hospital",
        imgSrc: "/img/gameimg/findhqhospital.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqhospital.swf")
    },
    {
        title: "Find HQ Joshua Tree",
        imgSrc: "/img/gameimg/findhqjoshuatree.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-joshua-tree/game.html")
    },
    {
        title: "Find HQ Lab",
        imgSrc: "/img/gameimg/findhqlab.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqlab.swf")
    },
    {
        title: "Find HQ Library",
        imgSrc: "/img/gameimg/findhqlibrary.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqlibrary.swf")
    },
    {
        title: "Find HQ Lighthouse",
        imgSrc: "/img/gameimg/findhqlighthouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqlighthouse.swf")
    },
    {
        title: "Find HQ Los Angeles",
        imgSrc: "/img/gameimg/findhqlosangeles.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-los-angeles/game.html")
    },
    {
        title: "Find HQ Miami",
        imgSrc: "/img/gameimg/findhqmiami.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-miami/game.html")
    },
    {
        title: "Find HQ Nashville",
        imgSrc: "/img/gameimg/findhqnashville.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-nashville/game.html")
    },
    {
        title: "Find HQ Neighborhood",
        imgSrc: "/img/gameimg/findhqneighborhood.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-neighborhood/game.html")
    },
    {
        title: "Find HQ New York",
        imgSrc: "/img/gameimg/findhqnewyork.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-new-york/game.html")
    },
    {
        title: "Find HQ Pirate Ship",
        imgSrc: "/img/gameimg/findhqpirateship.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqpirateship.swf")
    },
    {
        title: "Find HQ San Francisco",
        imgSrc: "/img/gameimg/findhqsanfrancisco.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-san-francisco/game.html")
    },
    {
        title: "Find HQ Santa Fe",
        imgSrc: "/img/gameimg/findhqsantafe.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-santa-fe/game.html")
    },
    {
        title: "Find HQ Ski Lodge",
        imgSrc: "/img/gameimg/findhqskilodge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqskilodge.swf")
    },
    {
        title: "Find HQ Space Lab",
        imgSrc: "/img/gameimg/findhqspacelab.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqspacelab.swf")
    },
    {
        title: "Find HQ Temple",
        imgSrc: "/img/gameimg/findhqtemple.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqtemple.swf")
    },
    {
        title: "Find HQ The Forest",
        imgSrc: "/img/gameimg/findhqtheforest.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqtheforest.swf")
    },
    {
        title: "Find HQ The Hotel",
        imgSrc: "/img/gameimg/findhqthehotel.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqthehotel.swf")
    },
    {
        title: "Find HQ The Mall",
        imgSrc: "/img/gameimg/findhqthemall.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqthemall.swf")
    },
    {
        title: "Find HQ The Pyramid",
        imgSrc: "/img/gameimg/findhqthepyramid.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqthepyramid.swf")
    },
    {
        title: "Find HQ The Resort",
        imgSrc: "/img/gameimg/findhqtheresort.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqtheresort.swf")
    },
    {
        title: "Find HQ The School",
        imgSrc: "/img/gameimg/findhqtheschool.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqtheschool.swf")
    },
    {
        title: "Find HQ The Theater",
        imgSrc: "/img/gameimg/findhqthetheater.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/findhqthetheater.swf")
    },
    {
        title: "Find HQ Washington DC",
        imgSrc: "/img/gameimg/findhqwashingtondc.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-washington-dc/game.html")
    },
    {
        title: "Find HQ Yellowstone",
        imgSrc: "/img/gameimg/findhqyellowstone.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-yellowstone/game.html")
    },
    {
        title: "Find HQ Yosemite",
        imgSrc: "/img/gameimg/findhqyosemite.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-hq-yosemite/game.html")
    },
    {
        title: "Find Me",
        imgSrc: "/img/gameimg/findme.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-me/game.html")
    },
    {
        title: "Find My Baseball Bathroom",
        imgSrc: "/img/gameimg/findmybaseballbathroom.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-baseball-bathroom/game.html")
    },
    {
        title: "Find My Baseball Tower",
        imgSrc: "/img/gameimg/findmybaseballtower.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-baseball-tower/game.html")
    },
    {
        title: "Find My Beach Ball Beach",
        imgSrc: "/img/gameimg/findmybeachballbeach.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-beach-ball-beach/game.html")
    },
    {
        title: "Find My Dodgeball Kitchen",
        imgSrc: "/img/gameimg/findmydodgeballkitchen.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-dodgeball-kitchen/game.html")
    },
    {
        title: "Find My Football Hotel",
        imgSrc: "/img/gameimg/findmyfootballhotel.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-football-hotel/game.html")
    },
    {
        title: "Find My Soccer Ball Alcatraz",
        imgSrc: "/img/gameimg/findmysoccerballalcatraz.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-soccer-ball-alcatraz/game.html")
    },
    {
        title: "Find My Softball Backyard",
        imgSrc: "/img/gameimg/findmysoftballbackyard.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-softball-backyard/game.html")
    },
    {
        title: "Find My Volleyball New York",
        imgSrc: "/img/gameimg/findmyvolleyballnewyork.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/find-my-volleyball-new-york/game.html")
    },
    {
        title: "fire boy and water girl Forest Temple 3",
        imgSrc: "/img/gameimg/fireboyandwatergirlforesttemple3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/fire-boy-and-water-girl-forest-temple-3/game.html")
    },
    {
        title: "fire boy and water girl in the Light Temple 2",
        imgSrc: "/img/gameimg/fireboyandwatergirlinthelighttemple2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/fire-boy-and-water-girl-in-the-light-temple-2/game.html")
    },
    {
        title: "Flappy Factors",
        imgSrc: "/img/gameimg/flappyfactors.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/flappy-factors/game.html")
    },
    {
        title: "Flappy Multiples",
        imgSrc: "/img/gameimg/flappymultiples.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/flappy-multiples/game.html")
    },
    {
        title: "Flappy Reindeer",
        imgSrc: "/img/gameimg/flappyreindeer.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/flappy-reindeer/game.html")
    },
    {
        title: "Flip Duck",
        imgSrc: "/img/gameimg/flipduck.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/flip-duck/game.html")
    },
    {
        title: "Flush",
        imgSrc: "/img/gameimg/flush.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/flush/game.html")
    },
    {
        title: "Food Truck Fun",
        imgSrc: "/img/gameimg/foodtruckfun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/foodtruckfun.swf")
    },
    {
        title: "Footgolf",
        imgSrc: "/img/gameimg/footgolf.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/footgolf/game.html")
    },
    {
        title: "Formula Rush",
        imgSrc: "/img/gameimg/formularush.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/formula-rush/game.html")
    },
    {
        title: "Four Colors",
        imgSrc: "/img/gameimg/fourcolors.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/four-colors/game.html")
    },
    {
        title: "Fraction Poker",
        imgSrc: "/img/gameimg/fractionpoker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/fraction-poker/game.html")
    },
    {
        title: "Fractions Timed Tests",
        imgSrc: "/img/gameimg/fractionstimedtests.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/fractions-timed-tests/game.html")
    },
    {
        title: "Freaking Math",
        imgSrc: "/img/gameimg/freakingmath.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/freaking-math/game.html")
    },
    {
        title: "Freecell Solitaire",
        imgSrc: "/img/gameimg/freecellsolitaire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/freecell-solitaire/game.html")
    },
    {
        title: "Freekick Training",
        imgSrc: "/img/gameimg/freekicktraining.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/freekick-training/game.html")
    },
    {
        title: "Frog Corral",
        imgSrc: "/img/gameimg/frogcorral.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/frog-corral/game.html")
    },
    {
        title: "Frog Leap",
        imgSrc: "/img/gameimg/frogleap.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/frog-leap/game.html")
    },
    {
        title: "Full Moon",
        imgSrc: "/img/gameimg/fullmoon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/fullmoon.swf")
    },
    {
        title: "Gen X Words Quiz",
        imgSrc: "/img/gameimg/genxwordsquiz.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/gen-x-words-quiz/game.html")
    },
    {
        title: "Gen Z Words Quiz",
        imgSrc: "/img/gameimg/genzwordsquiz.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/gen-z-words-quiz/game.html")
    },
    {
        title: "Geometry Rash",
        imgSrc: "/img/gameimg/geometryrash.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/geometry-rash/game.html")
    },
    {
        title: "Germies",
        imgSrc: "/img/gameimg/germies.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/germies/game.html")
    },
    {
        title: "Gingerbread House Escape",
        imgSrc: "/img/gameimg/gingerbreadhouseescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/gingerbreadhouseescape.swf")
    },
    {
        title: "Gingerbread Maker",
        imgSrc: "/img/gameimg/gingerbreadmaker.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/gingerbread-maker/game.html")
    },
    {
        title: "Glitch",
        imgSrc: "/img/gameimg/glitch.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/glitch/game.html")
    },
    {
        title: "Goat Crossing",
        imgSrc: "/img/gameimg/goatcrossing.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/goat-crossing/game.html")
    },
    {
        title: "Goldburger To Go",
        imgSrc: "/img/gameimg/goldburgertogo.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/goldburger-to-go/game.html")
    },
    {
        title: "Golf Field 2",
        imgSrc: "/img/gameimg/golffield2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/golf-field-2/game.html")
    },
    {
        title: "Grammar Fun",
        imgSrc: "/img/gameimg/grammarfun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grammar-fun/game.html")
    },
    {
        title: "Grammar Ninja",
        imgSrc: "/img/gameimg/grammarninja.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/grammarninja.swf")
    },
    {
        title: "Graphing Gala",
        imgSrc: "/img/gameimg/graphinggala.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/graphinggala.swf")
    },
    {
        title: "Graveyard Snake",
        imgSrc: "/img/gameimg/graveyardsnake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/graveyard-snake/game.html")
    },
    {
        title: "Grayscale Escape Christmas",
        imgSrc: "/img/gameimg/grayscaleescapechristmas.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grayscale-escape-christmas/game.html")
    },
    {
        title: "Great Adviser",
        imgSrc: "/img/gameimg/greatadviser.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/great-adviser/game.html")
    },
    {
        title: "Grow Castle",
        imgSrc: "/img/gameimg/growcastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grow-castle/game.html")
    },
    {
        title: "Grow Cube",
        imgSrc: "/img/gameimg/growcube.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/growcube.swf")
    },
    {
        title: "Grow Farm",
        imgSrc: "/img/gameimg/growfarm.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grow-farm/game.html")
    },
    {
        title: "Grow Island",
        imgSrc: "/img/gameimg/growisland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/growisland.swf")
    },
    {
        title: "Grow Nano Vol 3",
        imgSrc: "/img/gameimg/grownanovol3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/grownanovol3.swf")
    },
    {
        title: "Grow Park",
        imgSrc: "/img/gameimg/growpark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/growpark.swf")
    },
    {
        title: "Grow School",
        imgSrc: "/img/gameimg/growschool.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grow-school/game.html")
    },
    {
        title: "Grow Tower",
        imgSrc: "/img/gameimg/growtower.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/growtower.swf")
    },
    {
        title: "Grow Tree",
        imgSrc: "/img/gameimg/growtree.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grow-tree/game.html")
    },
    {
        title: "Grow Valley",
        imgSrc: "/img/gameimg/growvalley.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/growvalley.swf")
    },
    {
        title: "Grow Water Park",
        imgSrc: "/img/gameimg/growwaterpark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grow-water-park/game.html")
    },
    {
        title: "Grow Zoo",
        imgSrc: "/img/gameimg/growzoo.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/grow-zoo/game.html")
    },
    {
        title: "Growmi",
        imgSrc: "/img/gameimg/growmi.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/growmi/game.html")
    },
    {
        title: "Guess Word",
        imgSrc: "/img/gameimg/guessword.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/guess-word/game.html")
    },
    {
        title: "Halloween Knife",
        imgSrc: "/img/gameimg/halloweenknife.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/halloween-knife/game.html")
    },
    {
        title: "Halloween Memory",
        imgSrc: "/img/gameimg/halloweenmemory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/halloween-memory/game.html")
    },
    {
        title: "Happy Filled Glass",
        imgSrc: "/img/gameimg/happyfilledglass.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/happy-filled-glass/game.html")
    },
    {
        title: "Happy Filled Glass 2",
        imgSrc: "/img/gameimg/happyfilledglass2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/happy-filled-glass-2/game.html")
    },
    {
        title: "Happy Filled Glass 3",
        imgSrc: "/img/gameimg/happyfilledglass3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/happy-filled-glass-3/game.html")
    },
    {
        title: "Happy Filled Glass 4",
        imgSrc: "/img/gameimg/happyfilledglass4.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/happy-filled-glass-4/game.html")
    },
    {
        title: "Happy Mart",
        imgSrc: "/img/gameimg/happymart.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/happymart.swf")
    },
    {
        title: "Happy Tower",
        imgSrc: "/img/gameimg/happytower.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/happytower.swf")
    },
    {
        title: "Haunt The House",
        imgSrc: "/img/gameimg/hauntthehouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/haunt-the-house/game.html")
    },
    {
        title: "Head Soccer 2026",
        imgSrc: "/img/gameimg/headsoccer2026.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/head-soccer-2026/game.html")
    },
    {
        title: "Helix Jump",
        imgSrc: "/img/gameimg/helixjump.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/helix-jump/game.html")
    },
    {
        title: "Hex Wars",
        imgSrc: "/img/gameimg/hexwars.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hex-wars/game.html")
    },
    {
        title: "Hide Caesar",
        imgSrc: "/img/gameimg/hidecaesar.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hide-caesar/game.html")
    },
    {
        title: "Hockey Shootout",
        imgSrc: "/img/gameimg/hockeyshootout.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hockey-shootout/game.html")
    },
    {
        title: "Home Sheep Home",
        imgSrc: "/img/gameimg/homesheephome.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/homesheephome.swf")
    },
    {
        title: "Hoo Goo",
        imgSrc: "/img/gameimg/hoogoo.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hoogoo/game.html")
    },
    {
        title: "Hoo Pi Gallery",
        imgSrc: "/img/gameimg/hoopigallery.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hoo-pi-gallery/game.html")
    },
    {
        title: "Hooda Bridge",
        imgSrc: "/img/gameimg/hoodabridge.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-bridge/game.html")
    },
    {
        title: "Hooda Dissection",
        imgSrc: "/img/gameimg/hoodadissection.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-dissection/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Aquarium",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtripaquarium.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-aquarium/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Arcade",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtriparcade.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-arcade/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Beach",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtripbeach.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-beach/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Chicken Farm",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtripchickenfarm.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-chicken-farm/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Cookie Factory",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtripcookiefactory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-cookie-factory/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Dino Land",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtripdinoland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-dino-land/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Ice Cream Shop",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtripicecreamshop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-ice-cream-shop/game.html")
    },
    {
        title: "Hooda Escape 3rd Grade Field Trip Summer Camp",
        imgSrc: "/img/gameimg/hoodaescape3rdgradefieldtripsummercamp.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-3rd-grade-field-trip-summer-camp/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Airfield",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtripairfield.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-airfield/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Ancient Ruins",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtripancientruins.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-ancient-ruins/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Castle",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtripcastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-castle/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Museum",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtripmuseum.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-museum/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Nature Park",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtripnaturepark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-nature-park/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Pyramid",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtrippyramid.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-pyramid/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Trampoline Park",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtriptrampolinepark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-trampoline-park/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Water Park",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtripwaterpark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-water-park/game.html")
    },
    {
        title: "Hooda Escape 6th Grade Field Trip Zoo",
        imgSrc: "/img/gameimg/hoodaescape6thgradefieldtripzoo.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-6th-grade-field-trip-zoo/game.html")
    },
    {
        title: "Hooda Escape Adelaide 2024",
        imgSrc: "/img/gameimg/hoodaescapeadelaide2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-adelaide-2024/game.html")
    },
    {
        title: "Hooda Escape Airfield",
        imgSrc: "/img/gameimg/hoodaescapeairfield.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-airfield/game.html")
    },
    {
        title: "Hooda Escape Alabama",
        imgSrc: "/img/gameimg/hoodaescapealabama.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-alabama/game.html")
    },
    {
        title: "Hooda Escape Alabama 2022",
        imgSrc: "/img/gameimg/hoodaescapealabama2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-alabama-2022/game.html")
    },
    {
        title: "Hooda Escape Alaska",
        imgSrc: "/img/gameimg/hoodaescapealaska.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-alaska/game.html")
    },
    {
        title: "Hooda Escape Alaska 2022",
        imgSrc: "/img/gameimg/hoodaescapealaska2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-alaska-2022/game.html")
    },
    {
        title: "Hooda Escape Albuquerque 2023",
        imgSrc: "/img/gameimg/hoodaescapealbuquerque2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-albuquerque-2023/game.html")
    },
    {
        title: "Hooda Escape Apple Orchard 2023",
        imgSrc: "/img/gameimg/hoodaescapeappleorchard2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-apple-orchard-2023/game.html")
    },
    {
        title: "Hooda Escape Aquarium 2024",
        imgSrc: "/img/gameimg/hoodaescapeaquarium2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-aquarium-2024/game.html")
    },
    {
        title: "Hooda Escape Arizona",
        imgSrc: "/img/gameimg/hoodaescapearizona.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-arizona/game.html")
    },
    {
        title: "Hooda Escape Arizona 2022",
        imgSrc: "/img/gameimg/hoodaescapearizona2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-arizona-2022/game.html")
    },
    {
        title: "Hooda Escape Arkansas",
        imgSrc: "/img/gameimg/hoodaescapearkansas.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-arkansas/game.html")
    },
    {
        title: "Hooda Escape Arkansas 2022",
        imgSrc: "/img/gameimg/hoodaescapearkansas2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-arkansas-2022/game.html")
    },
    {
        title: "Hooda Escape Art Museum 2023",
        imgSrc: "/img/gameimg/hoodaescapeartmuseum2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-art-museum-2023/game.html")
    },
    {
        title: "Hooda Escape Atlanta 2023",
        imgSrc: "/img/gameimg/hoodaescapeatlanta2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-atlanta-2023/game.html")
    },
    {
        title: "Hooda Escape Augusta",
        imgSrc: "/img/gameimg/hoodaescapeaugusta.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-augusta/game.html")
    },
    {
        title: "Hooda Escape Austin 2023",
        imgSrc: "/img/gameimg/hoodaescapeaustin2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-austin-2023/game.html")
    },
    {
        title: "Hooda Escape Australian Capital Territory 2024",
        imgSrc: "/img/gameimg/hoodaescapeaustraliancapitalterritory2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-australian-capital-territory-2024/game.html")
    },
    {
        title: "Hooda Escape Auto Factory",
        imgSrc: "/img/gameimg/hoodaescapeautofactory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-auto-factory/game.html")
    },
    {
        title: "Hooda Escape Auto Shop",
        imgSrc: "/img/gameimg/hoodaescapeautoshop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-auto-shop/game.html")
    },
    {
        title: "Hooda Escape Ballpark 2023",
        imgSrc: "/img/gameimg/hoodaescapeballpark2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ballpark-2023/game.html")
    },
    {
        title: "Hooda Escape Baltimore 2023",
        imgSrc: "/img/gameimg/hoodaescapebaltimore2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-baltimore-2023/game.html")
    },
    {
        title: "Hooda Escape Birthday Party 2024",
        imgSrc: "/img/gameimg/hoodaescapebirthdayparty2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-birthday-party-2024/game.html")
    },
    {
        title: "Hooda Escape Boise",
        imgSrc: "/img/gameimg/hoodaescapeboise.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-boise/game.html")
    },
    {
        title: "Hooda Escape Boston 2023",
        imgSrc: "/img/gameimg/hoodaescapeboston2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-boston-2023/game.html")
    },
    {
        title: "Hooda Escape Bowling 2024",
        imgSrc: "/img/gameimg/hoodaescapebowling2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-bowling-2024/game.html")
    },
    {
        title: "Hooda Escape Brisbane 2024",
        imgSrc: "/img/gameimg/hoodaescapebrisbane2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-brisbane-2024/game.html")
    },
    {
        title: "Hooda Escape Bullet Train",
        imgSrc: "/img/gameimg/hoodaescapebullettrain.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-bullet-train/game.html")
    },
    {
        title: "Hooda Escape Cabin 2023",
        imgSrc: "/img/gameimg/hoodaescapecabin2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-cabin-2023/game.html")
    },
    {
        title: "Hooda Escape Calgary 2024",
        imgSrc: "/img/gameimg/hoodaescapecalgary2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-calgary-2024/game.html")
    },
    {
        title: "Hooda Escape California",
        imgSrc: "/img/gameimg/hoodaescapecalifornia.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-california/game.html")
    },
    {
        title: "Hooda Escape California 2022",
        imgSrc: "/img/gameimg/hoodaescapecalifornia2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-california-2022/game.html")
    },
    {
        title: "Hooda Escape Camp 2023",
        imgSrc: "/img/gameimg/hoodaescapecamp2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-camp-2023/game.html")
    },
    {
        title: "Hooda Escape Central Park 2024",
        imgSrc: "/img/gameimg/hoodaescapecentralpark2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-central-park-2024/game.html")
    },
    {
        title: "Hooda Escape Charlotte 2023",
        imgSrc: "/img/gameimg/hoodaescapecharlotte2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-charlotte-2023/game.html")
    },
    {
        title: "Hooda Escape Cheyenne",
        imgSrc: "/img/gameimg/hoodaescapecheyenne.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-cheyenne/game.html")
    },
    {
        title: "Hooda Escape Chicago 2023",
        imgSrc: "/img/gameimg/hoodaescapechicago2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-chicago-2023/game.html")
    },
    {
        title: "Hooda Escape Colorado",
        imgSrc: "/img/gameimg/hoodaescapecolorado.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-colorado/game.html")
    },
    {
        title: "Hooda Escape Colorado 2022",
        imgSrc: "/img/gameimg/hoodaescapecolorado2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-colorado-2022/game.html")
    },
    {
        title: "Hooda Escape Colorado Springs 2023",
        imgSrc: "/img/gameimg/hoodaescapecoloradosprings2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-colorado-springs-2023/game.html")
    },
    {
        title: "Hooda Escape Columbia",
        imgSrc: "/img/gameimg/hoodaescapecolumbia.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-columbia/game.html")
    },
    {
        title: "Hooda Escape Columbus 2023",
        imgSrc: "/img/gameimg/hoodaescapecolumbus2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-columbus-2023/game.html")
    },
    {
        title: "Hooda Escape Concert Venue 2023",
        imgSrc: "/img/gameimg/hoodaescapeconcertvenue2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-concert-venue-2023/game.html")
    },
    {
        title: "Hooda Escape Connecticut",
        imgSrc: "/img/gameimg/hoodaescapeconnecticut.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-connecticut/game.html")
    },
    {
        title: "Hooda Escape Connecticut 2022",
        imgSrc: "/img/gameimg/hoodaescapeconnecticut2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-connecticut-2022/game.html")
    },
    {
        title: "Hooda Escape Corn Maze",
        imgSrc: "/img/gameimg/hoodaescapecornmaze.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-corn-maze/game.html")
    },
    {
        title: "Hooda Escape Corn Maze 2023",
        imgSrc: "/img/gameimg/hoodaescapecornmaze2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-corn-maze-2023/game.html")
    },
    {
        title: "Hooda Escape County Fair 2023",
        imgSrc: "/img/gameimg/hoodaescapecountyfair2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-county-fair-2023/game.html")
    },
    {
        title: "Hooda Escape Dallas 2023",
        imgSrc: "/img/gameimg/hoodaescapedallas2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-dallas-2023/game.html")
    },
    {
        title: "Hooda Escape Darwin 2024",
        imgSrc: "/img/gameimg/hoodaescapedarwin2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-darwin-2024/game.html")
    },
    {
        title: "Hooda Escape Delaware",
        imgSrc: "/img/gameimg/hoodaescapedelaware.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-delaware/game.html")
    },
    {
        title: "Hooda Escape Delaware 2022",
        imgSrc: "/img/gameimg/hoodaescapedelaware2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-delaware-2022/game.html")
    },
    {
        title: "Hooda Escape Denver 2023",
        imgSrc: "/img/gameimg/hoodaescapedenver2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-denver-2023/game.html")
    },
    {
        title: "Hooda Escape Detroit 2023",
        imgSrc: "/img/gameimg/hoodaescapedetroit2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-detroit-2023/game.html")
    },
    {
        title: "Hooda Escape Dog Park 2024",
        imgSrc: "/img/gameimg/hoodaescapedogpark2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-dog-park-2024/game.html")
    },
    {
        title: "Hooda Escape Easter Egg Hunt 2024",
        imgSrc: "/img/gameimg/hoodaescapeeasteregghunt2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-easter-egg-hunt-2024/game.html")
    },
    {
        title: "Hooda Escape Edmonton 2024",
        imgSrc: "/img/gameimg/hoodaescapeedmonton2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-edmonton-2024/game.html")
    },
    {
        title: "Hooda Escape El Paso 2023",
        imgSrc: "/img/gameimg/hoodaescapeelpaso2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-el-paso-2023/game.html")
    },
    {
        title: "Hooda Escape Family BBQ 2023",
        imgSrc: "/img/gameimg/hoodaescapefamilybbq2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-family-bbq-2023/game.html")
    },
    {
        title: "Hooda Escape Farm 2023",
        imgSrc: "/img/gameimg/hoodaescapefarm2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-farm-2023/game.html")
    },
    {
        title: "Hooda Escape FBI 2024",
        imgSrc: "/img/gameimg/hoodaescapefbi2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-fbi-2024/game.html")
    },
    {
        title: "Hooda Escape Fire Station 2024",
        imgSrc: "/img/gameimg/hoodaescapefirestation2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-fire-station-2024/game.html")
    },
    {
        title: "Hooda Escape Fisherman Island",
        imgSrc: "/img/gameimg/hoodaescapefishermanisland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-fisherman-island/game.html")
    },
    {
        title: "Hooda Escape Florida",
        imgSrc: "/img/gameimg/hoodaescapeflorida.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-florida/game.html")
    },
    {
        title: "Hooda Escape Florida 2022",
        imgSrc: "/img/gameimg/hoodaescapeflorida2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-florida-2022/game.html")
    },
    {
        title: "Hooda Escape Football Stadium 2023",
        imgSrc: "/img/gameimg/hoodaescapefootballstadium2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-football-stadium-2023/game.html")
    },
    {
        title: "Hooda Escape Fort Worth 2023",
        imgSrc: "/img/gameimg/hoodaescapefortworth2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-fort-worth-2023/game.html")
    },
    {
        title: "Hooda Escape Fresno 2023",
        imgSrc: "/img/gameimg/hoodaescapefresno2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-fresno-2023/game.html")
    },
    {
        title: "Hooda Escape Fyre Festival",
        imgSrc: "/img/gameimg/hoodaescapefyrefestival.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-fyre-festival/game.html")
    },
    {
        title: "Hooda Escape Garden Maze 2023",
        imgSrc: "/img/gameimg/hoodaescapegardenmaze2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-garden-maze-2023/game.html")
    },
    {
        title: "Hooda Escape Georgia",
        imgSrc: "/img/gameimg/hoodaescapegeorgia.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-georgia/game.html")
    },
    {
        title: "Hooda Escape Georgia 2022",
        imgSrc: "/img/gameimg/hoodaescapegeorgia2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-georgia-2022/game.html")
    },
    {
        title: "Hooda Escape Ghost House",
        imgSrc: "/img/gameimg/hoodaescapeghosthouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ghost-house/game.html")
    },
    {
        title: "Hooda Escape Grandma's House",
        imgSrc: "/img/gameimg/hoodaescapegrandmashouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-grandmas-house/game.html")
    },
    {
        title: "Hooda Escape Hamilton 2024",
        imgSrc: "/img/gameimg/hoodaescapehamilton2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-hamilton-2024/game.html")
    },
    {
        title: "Hooda Escape Haunted House 2023",
        imgSrc: "/img/gameimg/hoodaescapehauntedhouse2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-haunted-house-2023/game.html")
    },
    {
        title: "Hooda Escape Haunted House 2024",
        imgSrc: "/img/gameimg/hoodaescapehauntedhouse2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-haunted-house-2024/game.html")
    },
    {
        title: "Hooda Escape Hawaii",
        imgSrc: "/img/gameimg/hoodaescapehawaii.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-hawaii/game.html")
    },
    {
        title: "Hooda Escape Hawaii 2022",
        imgSrc: "/img/gameimg/hoodaescapehawaii2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-hawaii-2022/game.html")
    },
    {
        title: "Hooda Escape Hike 2023",
        imgSrc: "/img/gameimg/hoodaescapehike2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-hike-2023/game.html")
    },
    {
        title: "Hooda Escape Hobart 2024",
        imgSrc: "/img/gameimg/hoodaescapehobart2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-hobart-2024/game.html")
    },
    {
        title: "Hooda Escape Homecoming 2023",
        imgSrc: "/img/gameimg/hoodaescapehomecoming2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-homecoming-2023/game.html")
    },
    {
        title: "Hooda Escape Houston 2023",
        imgSrc: "/img/gameimg/hoodaescapehouston2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-houston-2023/game.html")
    },
    {
        title: "Hooda Escape Hunting Lodge",
        imgSrc: "/img/gameimg/hoodaescapehuntinglodge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-hunting-lodge/game.html")
    },
    {
        title: "Hooda Escape Ice Cream Shop",
        imgSrc: "/img/gameimg/hoodaescapeicecreamshop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ice-cream-shop/game.html")
    },
    {
        title: "Hooda Escape Ice Skating 2023",
        imgSrc: "/img/gameimg/hoodaescapeiceskating2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ice-skating-2023/game.html")
    },
    {
        title: "Hooda Escape Idaho",
        imgSrc: "/img/gameimg/hoodaescapeidaho.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-idaho/game.html")
    },
    {
        title: "Hooda Escape Idaho 2022",
        imgSrc: "/img/gameimg/hoodaescapeidaho2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-idaho-2022/game.html")
    },
    {
        title: "Hooda Escape Illinois",
        imgSrc: "/img/gameimg/hoodaescapeillinois.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-illinois/game.html")
    },
    {
        title: "Hooda Escape Illinois 2022",
        imgSrc: "/img/gameimg/hoodaescapeillinois2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-illinois-2022/game.html")
    },
    {
        title: "Hooda Escape Indiana",
        imgSrc: "/img/gameimg/hoodaescapeindiana.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-indiana/game.html")
    },
    {
        title: "Hooda Escape Indiana 2022",
        imgSrc: "/img/gameimg/hoodaescapeindiana2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-indiana-2022/game.html")
    },
    {
        title: "Hooda Escape Indianapolis",
        imgSrc: "/img/gameimg/hoodaescapeindianapolis.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-indianapolis/game.html")
    },
    {
        title: "Hooda Escape Indianapolis 2023",
        imgSrc: "/img/gameimg/hoodaescapeindianapolis2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-indianapolis-2023/game.html")
    },
    {
        title: "Hooda Escape Iowa",
        imgSrc: "/img/gameimg/hoodaescapeiowa.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-iowa/game.html")
    },
    {
        title: "Hooda Escape Iowa 2022",
        imgSrc: "/img/gameimg/hoodaescapeiowa2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-iowa-2022/game.html")
    },
    {
        title: "Hooda Escape Jackson",
        imgSrc: "/img/gameimg/hoodaescapejackson.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-jackson/game.html")
    },
    {
        title: "Hooda Escape Jacksonville 2023",
        imgSrc: "/img/gameimg/hoodaescapejacksonville2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-jacksonville-2023/game.html")
    },
    {
        title: "Hooda Escape Jersey Shore",
        imgSrc: "/img/gameimg/hoodaescapejerseyshore.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-jersey-shore/game.html")
    },
    {
        title: "Hooda Escape Juneau",
        imgSrc: "/img/gameimg/hoodaescapejuneau.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-juneau/game.html")
    },
    {
        title: "Hooda Escape Jungle 2024",
        imgSrc: "/img/gameimg/hoodaescapejungle2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-jungle-2024/game.html")
    },
    {
        title: "Hooda Escape Kansas",
        imgSrc: "/img/gameimg/hoodaescapekansas.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-kansas/game.html")
    },
    {
        title: "Hooda Escape Kansas 2022",
        imgSrc: "/img/gameimg/hoodaescapekansas2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-kansas-2022/game.html")
    },
    {
        title: "Hooda Escape Kansas City 2023",
        imgSrc: "/img/gameimg/hoodaescapekansascity2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-kansas-city-2023/game.html")
    },
    {
        title: "Hooda Escape Kentucky",
        imgSrc: "/img/gameimg/hoodaescapekentucky.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-kentucky/game.html")
    },
    {
        title: "Hooda Escape Kentucky 2022",
        imgSrc: "/img/gameimg/hoodaescapekentucky2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-kentucky-2022/game.html")
    },
    {
        title: "Hooda Escape King's Landing",
        imgSrc: "/img/gameimg/hoodaescapekingslanding.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-kings-landing/game.html")
    },
    {
        title: "Hooda Escape Kitchener 2024",
        imgSrc: "/img/gameimg/hoodaescapekitchener2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-kitchener-2024/game.html")
    },
    {
        title: "Hooda Escape Las Vegas 2023",
        imgSrc: "/img/gameimg/hoodaescapelasvegas2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-las-vegas-2023/game.html")
    },
    {
        title: "Hooda Escape Lazy River 2023",
        imgSrc: "/img/gameimg/hoodaescapelazyriver2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-lazy-river-2023/game.html")
    },
    {
        title: "Hooda Escape Library 2024",
        imgSrc: "/img/gameimg/hoodaescapelibrary2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-library-2024/game.html")
    },
    {
        title: "Hooda Escape Little Rock",
        imgSrc: "/img/gameimg/hoodaescapelittlerock.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-little-rock/game.html")
    },
    {
        title: "Hooda Escape London 2024",
        imgSrc: "/img/gameimg/hoodaescapelondon2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-london-2024/game.html")
    },
    {
        title: "Hooda Escape Los Angeles 2023",
        imgSrc: "/img/gameimg/hoodaescapelosangeles2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-los-angeles-2023/game.html")
    },
    {
        title: "Hooda Escape Louisiana",
        imgSrc: "/img/gameimg/hoodaescapelouisiana.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-louisiana/game.html")
    },
    {
        title: "Hooda Escape Louisiana 2022",
        imgSrc: "/img/gameimg/hoodaescapelouisiana2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-louisiana-2022/game.html")
    },
    {
        title: "Hooda Escape Louisville 2023",
        imgSrc: "/img/gameimg/hoodaescapelouisville2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-louisville-2023/game.html")
    },
    {
        title: "Hooda Escape Madison",
        imgSrc: "/img/gameimg/hoodaescapemadison.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-madison/game.html")
    },
    {
        title: "Hooda Escape Maine",
        imgSrc: "/img/gameimg/hoodaescapemaine.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-maine/game.html")
    },
    {
        title: "Hooda Escape Maine 2022",
        imgSrc: "/img/gameimg/hoodaescapemaine2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-maine-2022/game.html")
    },
    {
        title: "Hooda Escape Maryland",
        imgSrc: "/img/gameimg/hoodaescapemaryland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-maryland/game.html")
    },
    {
        title: "Hooda Escape Maryland 2022",
        imgSrc: "/img/gameimg/hoodaescapemaryland2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-maryland-2022/game.html")
    },
    {
        title: "Hooda Escape Massachusetts",
        imgSrc: "/img/gameimg/hoodaescapemassachusetts.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-massachusetts/game.html")
    },
    {
        title: "Hooda Escape Massachusetts 2022",
        imgSrc: "/img/gameimg/hoodaescapemassachusetts2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-massachusetts-2022/game.html")
    },
    {
        title: "Hooda Escape Math Mansion",
        imgSrc: "/img/gameimg/hoodaescapemathmansion.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-math-mansion/game.html")
    },
    {
        title: "Hooda Escape Melbourne 2024",
        imgSrc: "/img/gameimg/hoodaescapemelbourne2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-melbourne-2024/game.html")
    },
    {
        title: "Hooda Escape Memphis 2023",
        imgSrc: "/img/gameimg/hoodaescapememphis2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-memphis-2023/game.html")
    },
    {
        title: "Hooda Escape Mesa 2023",
        imgSrc: "/img/gameimg/hoodaescapemesa2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-mesa-2023/game.html")
    },
    {
        title: "Hooda Escape Michigan",
        imgSrc: "/img/gameimg/hoodaescapemichigan.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-michigan/game.html")
    },
    {
        title: "Hooda Escape Michigan 2022",
        imgSrc: "/img/gameimg/hoodaescapemichigan2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-michigan-2022/game.html")
    },
    {
        title: "Hooda Escape Milwaukee 2023",
        imgSrc: "/img/gameimg/hoodaescapemilwaukee2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-milwaukee-2023/game.html")
    },
    {
        title: "Hooda Escape Minnesota",
        imgSrc: "/img/gameimg/hoodaescapeminnesota.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-minnesota/game.html")
    },
    {
        title: "Hooda Escape Minnesota 2022",
        imgSrc: "/img/gameimg/hoodaescapeminnesota2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-minnesota-2022/game.html")
    },
    {
        title: "Hooda Escape Mississippi",
        imgSrc: "/img/gameimg/hoodaescapemississippi.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-mississippi/game.html")
    },
    {
        title: "Hooda Escape Mississippi 2022",
        imgSrc: "/img/gameimg/hoodaescapemississippi2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-mississippi-2022/game.html")
    },
    {
        title: "Hooda Escape Missouri",
        imgSrc: "/img/gameimg/hoodaescapemissouri.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-missouri/game.html")
    },
    {
        title: "Hooda Escape Missouri 2022",
        imgSrc: "/img/gameimg/hoodaescapemissouri2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-missouri-2022/game.html")
    },
    {
        title: "Hooda Escape Montana",
        imgSrc: "/img/gameimg/hoodaescapemontana.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-montana/game.html")
    },
    {
        title: "Hooda Escape Montana 2022",
        imgSrc: "/img/gameimg/hoodaescapemontana2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-montana-2022/game.html")
    },
    {
        title: "Hooda Escape Montreal 2024",
        imgSrc: "/img/gameimg/hoodaescapemontreal2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-montreal-2024/game.html")
    },
    {
        title: "Hooda Escape Motorhome",
        imgSrc: "/img/gameimg/hoodaescapemotorhome.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-motorhome/game.html")
    },
    {
        title: "Hooda Escape Nashville 2023",
        imgSrc: "/img/gameimg/hoodaescapenashville2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-nashville-2023/game.html")
    },
    {
        title: "Hooda Escape Nature Walk 2023",
        imgSrc: "/img/gameimg/hoodaescapenaturewalk2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-nature-walk-2023/game.html")
    },
    {
        title: "Hooda Escape Nebraska",
        imgSrc: "/img/gameimg/hoodaescapenebraska.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-nebraska/game.html")
    },
    {
        title: "Hooda Escape Nebraska 2022",
        imgSrc: "/img/gameimg/hoodaescapenebraska2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-nebraska-2022/game.html")
    },
    {
        title: "Hooda Escape Nevada",
        imgSrc: "/img/gameimg/hoodaescapenevada.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-nevada/game.html")
    },
    {
        title: "Hooda Escape Nevada 2022",
        imgSrc: "/img/gameimg/hoodaescapenevada2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-nevada-2022/game.html")
    },
    {
        title: "Hooda Escape Neverland",
        imgSrc: "/img/gameimg/hoodaescapeneverland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapeneverland.swf")
    },
    {
        title: "Hooda Escape New Hampshire",
        imgSrc: "/img/gameimg/hoodaescapenewhampshire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-hampshire/game.html")
    },
    {
        title: "Hooda Escape New Hampshire 2022",
        imgSrc: "/img/gameimg/hoodaescapenewhampshire2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-hampshire-2022/game.html")
    },
    {
        title: "Hooda Escape New Jersey",
        imgSrc: "/img/gameimg/hoodaescapenewjersey.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-jersey/game.html")
    },
    {
        title: "Hooda Escape New Jersey 2022",
        imgSrc: "/img/gameimg/hoodaescapenewjersey2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-jersey-2022/game.html")
    },
    {
        title: "Hooda Escape New Mexico",
        imgSrc: "/img/gameimg/hoodaescapenewmexico.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-mexico/game.html")
    },
    {
        title: "Hooda Escape New Mexico 2022",
        imgSrc: "/img/gameimg/hoodaescapenewmexico2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-mexico-2022/game.html")
    },
    {
        title: "Hooda Escape New Years Eve 2023",
        imgSrc: "/img/gameimg/hoodaescapenewyearseve2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-years-eve-2023/game.html")
    },
    {
        title: "Hooda Escape New York",
        imgSrc: "/img/gameimg/hoodaescapenewyork.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-york/game.html")
    },
    {
        title: "Hooda Escape New York 2022",
        imgSrc: "/img/gameimg/hoodaescapenewyork2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-york-2022/game.html")
    },
    {
        title: "Hooda Escape New York City 2023",
        imgSrc: "/img/gameimg/hoodaescapenewyorkcity2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-new-york-city-2023/game.html")
    },
    {
        title: "Hooda Escape North Carolina",
        imgSrc: "/img/gameimg/hoodaescapenorthcarolina.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-north-carolina/game.html")
    },
    {
        title: "Hooda Escape North Carolina 2022",
        imgSrc: "/img/gameimg/hoodaescapenorthcarolina2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-north-carolina-2022/game.html")
    },
    {
        title: "Hooda Escape North Dakota",
        imgSrc: "/img/gameimg/hoodaescapenorthdakota.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-north-dakota/game.html")
    },
    {
        title: "Hooda Escape North Dakota 2022",
        imgSrc: "/img/gameimg/hoodaescapenorthdakota2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-north-dakota-2022/game.html")
    },
    {
        title: "Hooda Escape North Pole 2023",
        imgSrc: "/img/gameimg/hoodaescapenorthpole2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-north-pole-2023/game.html")
    },
    {
        title: "Hooda Escape Ohio",
        imgSrc: "/img/gameimg/hoodaescapeohio.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ohio/game.html")
    },
    {
        title: "Hooda Escape Ohio 2022",
        imgSrc: "/img/gameimg/hoodaescapeohio2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ohio-2022/game.html")
    },
    {
        title: "Hooda Escape Oklahoma",
        imgSrc: "/img/gameimg/hoodaescapeoklahoma.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-oklahoma/game.html")
    },
    {
        title: "Hooda Escape Oklahoma 2022",
        imgSrc: "/img/gameimg/hoodaescapeoklahoma2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-oklahoma-2022/game.html")
    },
    {
        title: "Hooda Escape Oklahoma City 2023",
        imgSrc: "/img/gameimg/hoodaescapeoklahomacity2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-oklahoma-city-2023/game.html")
    },
    {
        title: "Hooda Escape Olympia",
        imgSrc: "/img/gameimg/hoodaescapeolympia.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-olympia/game.html")
    },
    {
        title: "Hooda Escape Oregon",
        imgSrc: "/img/gameimg/hoodaescapeoregon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-oregon/game.html")
    },
    {
        title: "Hooda Escape Oregon 2022",
        imgSrc: "/img/gameimg/hoodaescapeoregon2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-oregon-2022/game.html")
    },
    {
        title: "Hooda Escape Ottawa 2024",
        imgSrc: "/img/gameimg/hoodaescapeottawa2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ottawa-2024/game.html")
    },
    {
        title: "Hooda Escape Parade 2023",
        imgSrc: "/img/gameimg/hoodaescapeparade2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-parade-2023/game.html")
    },
    {
        title: "Hooda Escape Pennsylvania",
        imgSrc: "/img/gameimg/hoodaescapepennsylvania.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-pennsylvania/game.html")
    },
    {
        title: "Hooda Escape Pennsylvania 2022",
        imgSrc: "/img/gameimg/hoodaescapepennsylvania2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-pennsylvania-2022/game.html")
    },
    {
        title: "Hooda Escape Perth 2024",
        imgSrc: "/img/gameimg/hoodaescapeperth2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-perth-2024/game.html")
    },
    {
        title: "Hooda Escape Pet Shop",
        imgSrc: "/img/gameimg/hoodaescapepetshop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-pet-shop/game.html")
    },
    {
        title: "Hooda Escape Petting Zoo 2024",
        imgSrc: "/img/gameimg/hoodaescapepettingzoo2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-petting-zoo-2024/game.html")
    },
    {
        title: "Hooda Escape Philadelphia 2023",
        imgSrc: "/img/gameimg/hoodaescapephiladelphia2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-philadelphia-2023/game.html")
    },
    {
        title: "Hooda Escape Phoenix",
        imgSrc: "/img/gameimg/hoodaescapephoenix.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-phoenix/game.html")
    },
    {
        title: "Hooda Escape Phoenix 2023",
        imgSrc: "/img/gameimg/hoodaescapephoenix2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-phoenix-2023/game.html")
    },
    {
        title: "Hooda Escape Pizza Shop 2024",
        imgSrc: "/img/gameimg/hoodaescapepizzashop2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-pizza-shop-2024/game.html")
    },
    {
        title: "Hooda Escape Playground 2024",
        imgSrc: "/img/gameimg/hoodaescapeplayground2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-playground-2024/game.html")
    },
    {
        title: "Hooda Escape Police Station 2024",
        imgSrc: "/img/gameimg/hoodaescapepolicestation2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-police-station-2024/game.html")
    },
    {
        title: "Hooda Escape Portland 2023",
        imgSrc: "/img/gameimg/hoodaescapeportland2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-portland-2023/game.html")
    },
    {
        title: "Hooda Escape Prison 2023",
        imgSrc: "/img/gameimg/hoodaescapeprison2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-prison-2023/game.html")
    },
    {
        title: "Hooda Escape Pumpkin Patch 2023",
        imgSrc: "/img/gameimg/hoodaescapepumpkinpatch2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-pumpkin-patch-2023/game.html")
    },
    {
        title: "Hooda Escape Pumpkin Patch 2024",
        imgSrc: "/img/gameimg/hoodaescapepumpkinpatch2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-pumpkin-patch-2024/game.html")
    },
    {
        title: "Hooda Escape Quebec City 2024",
        imgSrc: "/img/gameimg/hoodaescapequebeccity2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-quebec-city-2024/game.html")
    },
    {
        title: "Hooda Escape Red Room 2024",
        imgSrc: "/img/gameimg/hoodaescaperedroom2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-red-room-2024/game.html")
    },
    {
        title: "Hooda Escape Red's Grandma's House",
        imgSrc: "/img/gameimg/hoodaescaperedsgrandmashouse.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescaperedsgrandmashouse.swf")
    },
    {
        title: "Hooda Escape Rhode Island",
        imgSrc: "/img/gameimg/hoodaescaperhodeisland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-rhode-island/game.html")
    },
    {
        title: "Hooda Escape Rhode Island 2022",
        imgSrc: "/img/gameimg/hoodaescaperhodeisland2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-rhode-island-2022/game.html")
    },
    {
        title: "Hooda Escape Rocket Ship",
        imgSrc: "/img/gameimg/hoodaescaperocketship.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-rocket-ship/game.html")
    },
    {
        title: "Hooda Escape Sacramento",
        imgSrc: "/img/gameimg/hoodaescapesacramento.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-sacramento/game.html")
    },
    {
        title: "Hooda Escape Sacramento 2023",
        imgSrc: "/img/gameimg/hoodaescapesacramento2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-sacramento-2023/game.html")
    },
    {
        title: "Hooda Escape Salem",
        imgSrc: "/img/gameimg/hoodaescapesalem.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-salem/game.html")
    },
    {
        title: "Hooda Escape San Antonio 2023",
        imgSrc: "/img/gameimg/hoodaescapesanantonio2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-san-antonio-2023/game.html")
    },
    {
        title: "Hooda Escape San Diego 2023",
        imgSrc: "/img/gameimg/hoodaescapesandiego2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-san-diego-2023/game.html")
    },
    {
        title: "Hooda Escape San Francisco 2023",
        imgSrc: "/img/gameimg/hoodaescapesanfrancisco2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-san-francisco-2023/game.html")
    },
    {
        title: "Hooda Escape San Jose 2023",
        imgSrc: "/img/gameimg/hoodaescapesanjose2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-san-jose-2023/game.html")
    },
    {
        title: "Hooda Escape Science Museum 2023",
        imgSrc: "/img/gameimg/hoodaescapesciencemuseum2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-science-museum-2023/game.html")
    },
    {
        title: "Hooda Escape Seattle 2023",
        imgSrc: "/img/gameimg/hoodaescapeseattle2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-seattle-2023/game.html")
    },
    {
        title: "Hooda Escape Sherwood Forest",
        imgSrc: "/img/gameimg/hoodaescapesherwoodforest.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapesherwoodforest.swf")
    },
    {
        title: "Hooda Escape Ship",
        imgSrc: "/img/gameimg/hoodaescapeship.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ship/game.html")
    },
    {
        title: "Hooda Escape Shopping Mall 2023",
        imgSrc: "/img/gameimg/hoodaescapeshoppingmall2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-shopping-mall-2023/game.html")
    },
    {
        title: "Hooda Escape Skate Park",
        imgSrc: "/img/gameimg/hoodaescapeskatepark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapeskatepark.swf")
    },
    {
        title: "Hooda Escape Ski Lodge 2024",
        imgSrc: "/img/gameimg/hoodaescapeskilodge2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ski-lodge-2024/game.html")
    },
    {
        title: "Hooda Escape Snow Storm 2024",
        imgSrc: "/img/gameimg/hoodaescapesnowstorm2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-snow-storm-2024/game.html")
    },
    {
        title: "Hooda Escape South Carolina",
        imgSrc: "/img/gameimg/hoodaescapesouthcarolina.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-south-carolina/game.html")
    },
    {
        title: "Hooda Escape South Carolina 2022",
        imgSrc: "/img/gameimg/hoodaescapesouthcarolina2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-south-carolina-2022/game.html")
    },
    {
        title: "Hooda Escape South Dakota",
        imgSrc: "/img/gameimg/hoodaescapesouthdakota.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-south-dakota/game.html")
    },
    {
        title: "Hooda Escape South Dakota 2022",
        imgSrc: "/img/gameimg/hoodaescapesouthdakota2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-south-dakota-2022/game.html")
    },
    {
        title: "Hooda Escape Spooky Farm",
        imgSrc: "/img/gameimg/hoodaescapespookyfarm.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-spooky-farm/game.html")
    },
    {
        title: "Hooda Escape Spring Garden 2024",
        imgSrc: "/img/gameimg/hoodaescapespringgarden2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-spring-garden-2024/game.html")
    },
    {
        title: "Hooda Escape Submarine",
        imgSrc: "/img/gameimg/hoodaescapesubmarine.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-submarine/game.html")
    },
    {
        title: "Hooda Escape Subway 2024",
        imgSrc: "/img/gameimg/hoodaescapesubway2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-subway-2024/game.html")
    },
    {
        title: "Hooda Escape Summer School 2023",
        imgSrc: "/img/gameimg/hoodaescapesummerschool2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-summer-school-2023/game.html")
    },
    {
        title: "Hooda Escape Sydney 2024",
        imgSrc: "/img/gameimg/hoodaescapesydney2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-sydney-2024/game.html")
    },
    {
        title: "Hooda Escape Tallahassee",
        imgSrc: "/img/gameimg/hoodaescapetallahassee.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-tallahassee/game.html")
    },
    {
        title: "Hooda Escape Tennessee",
        imgSrc: "/img/gameimg/hoodaescapetennessee.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-tennessee/game.html")
    },
    {
        title: "Hooda Escape Tennessee 2022",
        imgSrc: "/img/gameimg/hoodaescapetennessee2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-tennessee-2022/game.html")
    },
    {
        title: "Hooda Escape Texas",
        imgSrc: "/img/gameimg/hoodaescapetexas.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-texas/game.html")
    },
    {
        title: "Hooda Escape Texas 2022",
        imgSrc: "/img/gameimg/hoodaescapetexas2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-texas-2022/game.html")
    },
    {
        title: "Hooda Escape Thanksgiving 2023",
        imgSrc: "/img/gameimg/hoodaescapethanksgiving2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-thanksgiving-2023/game.html")
    },
    {
        title: "Hooda Escape The Wicked Step Sisters",
        imgSrc: "/img/gameimg/hoodaescapethewickedstepsisters.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapethewickedstepsisters.swf")
    },
    {
        title: "Hooda Escape Topeka",
        imgSrc: "/img/gameimg/hoodaescapetopeka.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-topeka/game.html")
    },
    {
        title: "Hooda Escape Toronto 2024",
        imgSrc: "/img/gameimg/hoodaescapetoronto2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-toronto-2024/game.html")
    },
    {
        title: "Hooda Escape Train Station",
        imgSrc: "/img/gameimg/hoodaescapetrainstation.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapetrainstation.swf")
    },
    {
        title: "Hooda Escape Trampoline Park 2024",
        imgSrc: "/img/gameimg/hoodaescapetrampolinepark2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-trampoline-park-2024/game.html")
    },
    {
        title: "Hooda Escape Trick or Treat 2023",
        imgSrc: "/img/gameimg/hoodaescapetrickortreat2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-trick-or-treat-2023/game.html")
    },
    {
        title: "Hooda Escape Trick or Treat 2024",
        imgSrc: "/img/gameimg/hoodaescapetrickortreat2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-trick-or-treat-2024/game.html")
    },
    {
        title: "Hooda Escape Tucson 2023",
        imgSrc: "/img/gameimg/hoodaescapetucson2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-tucson-2023/game.html")
    },
    {
        title: "Hooda Escape Ufo",
        imgSrc: "/img/gameimg/hoodaescapeufo.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-ufo/game.html")
    },
    {
        title: "Hooda Escape Utah",
        imgSrc: "/img/gameimg/hoodaescapeutah.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-utah/game.html")
    },
    {
        title: "Hooda Escape Utah 2022",
        imgSrc: "/img/gameimg/hoodaescapeutah2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-utah-2022/game.html")
    },
    {
        title: "Hooda Escape Valentine's Day 2024",
        imgSrc: "/img/gameimg/hoodaescapevalentinesday2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-valentines-day-2024/game.html")
    },
    {
        title: "Hooda Escape Vancouver 2024",
        imgSrc: "/img/gameimg/hoodaescapevancouver2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-vancouver-2024/game.html")
    },
    {
        title: "Hooda Escape Vermont",
        imgSrc: "/img/gameimg/hoodaescapevermont.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-vermont/game.html")
    },
    {
        title: "Hooda Escape Vermont 2022",
        imgSrc: "/img/gameimg/hoodaescapevermont2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-vermont-2022/game.html")
    },
    {
        title: "Hooda Escape Virginia",
        imgSrc: "/img/gameimg/hoodaescapevirginia.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-virginia/game.html")
    },
    {
        title: "Hooda Escape Virginia 2022",
        imgSrc: "/img/gameimg/hoodaescapevirginia2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-virginia-2022/game.html")
    },
    {
        title: "Hooda Escape Washington",
        imgSrc: "/img/gameimg/hoodaescapewashington.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-washington/game.html")
    },
    {
        title: "Hooda Escape Washington 2022",
        imgSrc: "/img/gameimg/hoodaescapewashington2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-washington-2022/game.html")
    },
    {
        title: "Hooda Escape Washington DC 2023",
        imgSrc: "/img/gameimg/hoodaescapewashingtondc2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-washington-dc-2023/game.html")
    },
    {
        title: "Hooda Escape Water Park",
        imgSrc: "/img/gameimg/hoodaescapewaterpark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-water-park/game.html")
    },
    {
        title: "Hooda Escape Water Park 2023",
        imgSrc: "/img/gameimg/hoodaescapewaterpark2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-water-park-2023/game.html")
    },
    {
        title: "Hooda Escape West Virginia",
        imgSrc: "/img/gameimg/hoodaescapewestvirginia.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-west-virginia/game.html")
    },
    {
        title: "Hooda Escape West Virginia 2022",
        imgSrc: "/img/gameimg/hoodaescapewestvirginia2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-west-virginia-2022/game.html")
    },
    {
        title: "Hooda Escape Winnipeg 2024",
        imgSrc: "/img/gameimg/hoodaescapewinnipeg2024.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-winnipeg-2024/game.html")
    },
    {
        title: "Hooda Escape Wisconsin",
        imgSrc: "/img/gameimg/hoodaescapewisconsin.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-wisconsin/game.html")
    },
    {
        title: "Hooda Escape Wisconsin 2022",
        imgSrc: "/img/gameimg/hoodaescapewisconsin2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-wisconsin-2022/game.html")
    },
    {
        title: "Hooda Escape With Aladdin's Lamp",
        imgSrc: "/img/gameimg/hoodaescapewithaladdinslamp.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithaladdinslamp.swf")
    },
    {
        title: "Hooda Escape With Beauty",
        imgSrc: "/img/gameimg/hoodaescapewithbeauty.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithbeauty.swf")
    },
    {
        title: "Hooda Escape With Frank",
        imgSrc: "/img/gameimg/hoodaescapewithfrank.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithfrank.swf")
    },
    {
        title: "Hooda Escape With Goldilocks",
        imgSrc: "/img/gameimg/hoodaescapewithgoldilocks.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithgoldilocks.swf")
    },
    {
        title: "Hooda Escape with Hansel and Gretel",
        imgSrc: "/img/gameimg/hoodaescapewithhanselandgretel.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-with-hansel-and-gretel/game.html")
    },
    {
        title: "Hooda Escape with Jack",
        imgSrc: "/img/gameimg/hoodaescapewithjack.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithjack.swf")
    },
    {
        title: "Hooda Escape With Rapunzel",
        imgSrc: "/img/gameimg/hoodaescapewithrapunzel.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithrapunzel.swf")
    },
    {
        title: "Hooda Escape With Snow White",
        imgSrc: "/img/gameimg/hoodaescapewithsnowwhite.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithsnowwhite.swf")
    },
    {
        title: "Hooda Escape With Spooky",
        imgSrc: "/img/gameimg/hoodaescapewithspooky.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-with-spooky/game.html")
    },
    {
        title: "Hooda Escape With Tom",
        imgSrc: "/img/gameimg/hoodaescapewithtom.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewithtom.swf")
    },
    {
        title: "Hooda Escape Wonderland",
        imgSrc: "/img/gameimg/hoodaescapewonderland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodaescapewonderland.swf")
    },
    {
        title: "Hooda Escape Wyoming",
        imgSrc: "/img/gameimg/hoodaescapewyoming.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-wyoming/game.html")
    },
    {
        title: "Hooda Escape Wyoming 2022",
        imgSrc: "/img/gameimg/hoodaescapewyoming2022.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-wyoming-2022/game.html")
    },
    {
        title: "Hooda Escape Zoo 2023",
        imgSrc: "/img/gameimg/hoodaescapezoo2023.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-escape-zoo-2023/game.html")
    },
    {
        title: "Hooda Find HQ Donut Shop",
        imgSrc: "/img/gameimg/hoodafindhqdonutshop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/hoodafindhqdonutshop.swf")
    },
    {
        title: "Hooda Find HQ Fort",
        imgSrc: "/img/gameimg/hoodafindhqfort.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/hoodafindhqfort.swf")
    },
    {
        title: "Hooda Find HQ Park",
        imgSrc: "/img/gameimg/hoodafindhqpark.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodafindhqpark.swf")
    },
    {
        title: "Hooda Find HQ Police Station",
        imgSrc: "/img/gameimg/hoodafindhqpolicestation.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/hoodafindhqpolicestation.swf")
    },
    {
        title: "Hooda Find HQ Subway",
        imgSrc: "/img/gameimg/hoodafindhqsubway.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/hoodafindhqsubway.swf")
    },
    {
        title: "Hooda Grow Aquarium",
        imgSrc: "/img/gameimg/hoodagrowaquarium.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-grow-aquarium/game.html")
    },
    {
        title: "Hooda Grow Canyon",
        imgSrc: "/img/gameimg/hoodagrowcanyon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodagrowcanyon.swf")
    },
    {
        title: "Hooda Grow City",
        imgSrc: "/img/gameimg/hoodagrowcity.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-grow-city/game.html")
    },
    {
        title: "Hooda Grow Mountain",
        imgSrc: "/img/gameimg/hoodagrowmountain.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodagrowmountain.swf")
    },
    {
        title: "Hooda Grow Rocket",
        imgSrc: "/img/gameimg/hoodagrowrocket.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-grow-rocket/game.html")
    },
    {
        title: "Hooda Math Defense",
        imgSrc: "/img/gameimg/hoodamathdefense.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-defense/game.html")
    },
    {
        title: "Hooda Math Escape Room Albany",
        imgSrc: "/img/gameimg/hoodamathescaperoomalbany.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodamathescaperoomalbany.swf")
    },
    {
        title: "Hooda Math Escape Room Annapolis",
        imgSrc: "/img/gameimg/hoodamathescaperoomannapolis.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-annapolis/game.html")
    },
    {
        title: "Hooda Math Escape Room Atlanta",
        imgSrc: "/img/gameimg/hoodamathescaperoomatlanta.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-atlanta/game.html")
    },
    {
        title: "Hooda Math Escape Room Austin",
        imgSrc: "/img/gameimg/hoodamathescaperoomaustin.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-austin/game.html")
    },
    {
        title: "Hooda Math Escape Room Baton Rouge",
        imgSrc: "/img/gameimg/hoodamathescaperoombatonrouge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-baton-rouge/game.html")
    },
    {
        title: "Hooda Math Escape Room Bismarck",
        imgSrc: "/img/gameimg/hoodamathescaperoombismarck.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-bismarck/game.html")
    },
    {
        title: "Hooda Math Escape Room Boston",
        imgSrc: "/img/gameimg/hoodamathescaperoomboston.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-boston/game.html")
    },
    {
        title: "Hooda Math Escape Room Carson City",
        imgSrc: "/img/gameimg/hoodamathescaperoomcarsoncity.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-carson-city/game.html")
    },
    {
        title: "Hooda Math Escape Room Charleston",
        imgSrc: "/img/gameimg/hoodamathescaperoomcharleston.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-charleston/game.html")
    },
    {
        title: "Hooda Math Escape Room Columbus",
        imgSrc: "/img/gameimg/hoodamathescaperoomcolumbus.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-columbus/game.html")
    },
    {
        title: "Hooda Math Escape Room Concord",
        imgSrc: "/img/gameimg/hoodamathescaperoomconcord.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-concord/game.html")
    },
    {
        title: "Hooda Math Escape Room Des Moines",
        imgSrc: "/img/gameimg/hoodamathescaperoomdesmoines.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-des-moines/game.html")
    },
    {
        title: "Hooda Math Escape Room Dover",
        imgSrc: "/img/gameimg/hoodamathescaperoomdover.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-dover/game.html")
    },
    {
        title: "Hooda Math Escape Room Frankfort",
        imgSrc: "/img/gameimg/hoodamathescaperoomfrankfort.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-frankfort/game.html")
    },
    {
        title: "Hooda Math Escape Room Halloween SLC",
        imgSrc: "/img/gameimg/hoodamathescaperoomhalloweenslc.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodamathescaperoomhalloweenslc.swf")
    },
    {
        title: "Hooda Math Escape Room Harrisburg",
        imgSrc: "/img/gameimg/hoodamathescaperoomharrisburg.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-harrisburg/game.html")
    },
    {
        title: "Hooda Math Escape Room Hartford",
        imgSrc: "/img/gameimg/hoodamathescaperoomhartford.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-hartford/game.html")
    },
    {
        title: "Hooda Math Escape Room Helena",
        imgSrc: "/img/gameimg/hoodamathescaperoomhelena.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-helena/game.html")
    },
    {
        title: "Hooda Math Escape Room Jefferson City",
        imgSrc: "/img/gameimg/hoodamathescaperoomjeffersoncity.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-jefferson-city/game.html")
    },
    {
        title: "Hooda Math Escape Room Lansing",
        imgSrc: "/img/gameimg/hoodamathescaperoomlansing.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-lansing/game.html")
    },
    {
        title: "Hooda Math Escape Room Lincoln",
        imgSrc: "/img/gameimg/hoodamathescaperoomlincoln.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-lincoln/game.html")
    },
    {
        title: "Hooda Math Escape Room Montgomery",
        imgSrc: "/img/gameimg/hoodamathescaperoommontgomery.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-montgomery/game.html")
    },
    {
        title: "Hooda Math Escape Room Montpelier",
        imgSrc: "/img/gameimg/hoodamathescaperoommontpelier.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-montpelier/game.html")
    },
    {
        title: "Hooda Math Escape Room Oklahoma City",
        imgSrc: "/img/gameimg/hoodamathescaperoomoklahomacity.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-oklahoma-city/game.html")
    },
    {
        title: "Hooda Math Escape Room Pierre",
        imgSrc: "/img/gameimg/hoodamathescaperoompierre.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-pierre/game.html")
    },
    {
        title: "Hooda Math Escape Room Providence",
        imgSrc: "/img/gameimg/hoodamathescaperoomprovidence.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-providence/game.html")
    },
    {
        title: "Hooda Math Escape Room PSL",
        imgSrc: "/img/gameimg/hoodamathescaperoompsl.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-psl/game.html")
    },
    {
        title: "Hooda Math Escape Room Raleigh",
        imgSrc: "/img/gameimg/hoodamathescaperoomraleigh.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-raleigh/game.html")
    },
    {
        title: "Hooda Math Escape Room Richmond",
        imgSrc: "/img/gameimg/hoodamathescaperoomrichmond.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-richmond/game.html")
    },
    {
        title: "Hooda Math Escape Room Salt Lake City",
        imgSrc: "/img/gameimg/hoodamathescaperoomsaltlakecity.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-salt-lake-city/game.html")
    },
    {
        title: "Hooda Math Escape Room Springfield",
        imgSrc: "/img/gameimg/hoodamathescaperoomspringfield.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-springfield/game.html")
    },
    {
        title: "Hooda Math Escape Room St Paul",
        imgSrc: "/img/gameimg/hoodamathescaperoomstpaul.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-st-paul/game.html")
    },
    {
        title: "Hooda Math Escape Room Trenton",
        imgSrc: "/img/gameimg/hoodamathescaperoomtrenton.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-math-escape-room-trenton/game.html")
    },
    {
        title: "Hooda Remover",
        imgSrc: "/img/gameimg/hoodaremover.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-remover/game.html")
    },
    {
        title: "Hooda Room Escape 1",
        imgSrc: "/img/gameimg/hoodaroomescape1.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-room-escape-1/game.html")
    },
    {
        title: "Hooda Room Escape 2",
        imgSrc: "/img/gameimg/hoodaroomescape2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-room-escape-2/game.html")
    },
    {
        title: "Hooda Room Escape 3",
        imgSrc: "/img/gameimg/hoodaroomescape3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-room-escape-3/game.html")
    },
    {
        title: "Hooda Room Escape 4",
        imgSrc: "/img/gameimg/hoodaroomescape4.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-room-escape-4/game.html")
    },
    {
        title: "Hooda Room Escape 5",
        imgSrc: "/img/gameimg/hoodaroomescape5.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-room-escape-5/game.html")
    },
    {
        title: "Hooda Slice It",
        imgSrc: "/img/gameimg/hoodasliceit.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-slice-it/game.html")
    },
    {
        title: "Hooda Stacker",
        imgSrc: "/img/gameimg/hoodastacker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-stacker/game.html")
    },
    {
        title: "Hooda Stacker 2",
        imgSrc: "/img/gameimg/hoodastacker2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-stacker-2/game.html")
    },
    {
        title: "Hooda Tiny Fishing",
        imgSrc: "/img/gameimg/hoodatinyfishing.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-tiny-fishing/game.html")
    },
    {
        title: "Hooda Tunnel",
        imgSrc: "/img/gameimg/hoodatunnel.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hooda-tunnel/game.html")
    },
    {
        title: "Hooda What",
        imgSrc: "/img/gameimg/hoodawhat.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodawhat.swf")
    },
    {
        title: "Hooda What 2",
        imgSrc: "/img/gameimg/hoodawhat2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/hoodawhat2.swf")
    },
    {
        title: "Hoodas Drive Thru",
        imgSrc: "/img/gameimg/hoodasdrivethru.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hoodas-drive-thru/game.html")
    },
    {
        title: "Hot Java",
        imgSrc: "/img/gameimg/hotjava.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hot-java/game.html")
    },
    {
        title: "Hotel Hooda",
        imgSrc: "/img/gameimg/hotelhooda.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/hotel-hooda/game.html")
    },
    {
        title: "House Painter",
        imgSrc: "/img/gameimg/housepainter.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/house-painter/game.html")
    },
    {
        title: "How Smart Are You",
        imgSrc: "/img/gameimg/howsmartareyou.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/how-smart-are-you/game.html")
    },
    {
        title: "Ice Cream Truck",
        imgSrc: "/img/gameimg/icecreamtruck.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/ice-cream-truck/game.html")
    },
    {
        title: "Icy Purple Head 2",
        imgSrc: "/img/gameimg/icypurplehead2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/icy-purple-head-2/game.html")
    },
    {
        title: "Icy Purple Head 3",
        imgSrc: "/img/gameimg/icypurplehead3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/icy-purple-head-3/game.html")
    },
    {
        title: "Icy Purple Head Super Slide",
        imgSrc: "/img/gameimg/icypurpleheadsuperslide.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/icy-purple-head-super-slide/game.html")
    },
    {
        title: "Infinite Craft",
        imgSrc: "/img/gameimg/infinitecraft.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/infinite-craft/game.html")
    },
    {
        title: "Inn Keeper",
        imgSrc: "/img/gameimg/innkeeper.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/inn-keeper/game.html")
    },
    {
        title: "Integer Tilt",
        imgSrc: "/img/gameimg/integertilt.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/integer-tilt/game.html")
    },
    {
        title: "Integers Timed Tests",
        imgSrc: "/img/gameimg/integerstimedtests.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/integers-timed-tests/game.html")
    },
    {
        title: "Into Space",
        imgSrc: "/img/gameimg/intospace.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/intospace.swf")
    },
    {
        title: "Italian Brainrot Clicker",
        imgSrc: "/img/gameimg/italianbrainrotclicker.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/italian-brainrot-clicker/game.html")
    },
    {
        title: "Jelly Slice",
        imgSrc: "/img/gameimg/jellyslice.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/jelly-slice/game.html")
    },
    {
        title: "Klondike Solitaire",
        imgSrc: "/img/gameimg/klondikesolitaire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/klondike-solitaire/game.html")
    },
    {
        title: "Lava Snake",
        imgSrc: "/img/gameimg/lavasnake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/lava-snake/game.html")
    },
    {
        title: "Lemonade Stand",
        imgSrc: "/img/gameimg/lemonadestand.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/lemonade-stand/game.html")
    },
    {
        title: "Level Devil Trap Path",
        imgSrc: "/img/gameimg/leveldeviltrappath.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/level-devil-trap-path/game.html")
    },
    {
        title: "Light Bot",
        imgSrc: "/img/gameimg/lightbot.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/lightbot.swf")
    },
    {
        title: "Lighto",
        imgSrc: "/img/gameimg/lighto.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/lighto/game.html")
    },
    {
        title: "Line Bounder",
        imgSrc: "/img/gameimg/linebounder.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/linebounder.swf")
    },
    {
        title: "Line To Bathroom",
        imgSrc: "/img/gameimg/linetobathroom.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/line-to-bathroom/game.html")
    },
    {
        title: "Line To Cashier",
        imgSrc: "/img/gameimg/linetocashier.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/line-to-cashier/game.html")
    },
    {
        title: "Liquid Measure",
        imgSrc: "/img/gameimg/liquidmeasure.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/liquidmeasure.swf")
    },
    {
        title: "Liquid Sort",
        imgSrc: "/img/gameimg/liquidsort.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/liquid-sort/game.html")
    },
    {
        title: "Little Alchemy",
        imgSrc: "/img/gameimg/littlealchemy.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/little-alchemy/game.html")
    },
    {
        title: "Loot The King",
        imgSrc: "/img/gameimg/loottheking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/loot-the-king/game.html")
    },
    {
        title: "Lost Head",
        imgSrc: "/img/gameimg/losthead.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/lost-head/game.html")
    },
    {
        title: "Love Balls",
        imgSrc: "/img/gameimg/loveballs.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/love-balls/game.html")
    },
    {
        title: "Low's Adventures",
        imgSrc: "/img/gameimg/lowsadventures.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/lows-adventures/game.html")
    },
    {
        title: "Low's Adventures 2",
        imgSrc: "/img/gameimg/lowsadventures2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/lows-adventures-2/game.html")
    },
    {
        title: "Low's Adventures 3",
        imgSrc: "/img/gameimg/lowsadventures3.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/lows-adventures-3/game.html")
    },
    {
        title: "Magic Pen",
        imgSrc: "/img/gameimg/magicpen.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/magic-pen/game.html")
    },
    {
        title: "Magic Pen 2",
        imgSrc: "/img/gameimg/magicpen2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/magic-pen-2/game.html")
    },
    {
        title: "Make Challah",
        imgSrc: "/img/gameimg/makechallah.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/makechallah.swf")
    },
    {
        title: "Make Chocolate Cake",
        imgSrc: "/img/gameimg/makechocolatecake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/makechocolatecake.swf")
    },
    {
        title: "Mansion Mogul",
        imgSrc: "/img/gameimg/mansionmogul.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mansionmogul.swf")
    },
    {
        title: "Math Duck",
        imgSrc: "/img/gameimg/mathduck.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/math-duck/game.html")
    },
    {
        title: "Math Snake",
        imgSrc: "/img/gameimg/mathsnake.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/math-snake/game.html")
    },
    {
        title: "Math Timed Tests",
        imgSrc: "/img/gameimg/mathtimedtests.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/math-timed-tests/game.html")
    },
    {
        title: "Math Timed Tests 2",
        imgSrc: "/img/gameimg/mathtimedtests2.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/math-timed-tests-2/game.html")
    },
    {
        title: "Meal Masters",
        imgSrc: "/img/gameimg/mealmasters.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mealmasters.swf")
    },
    {
        title: "Meal Masters 2",
        imgSrc: "/img/gameimg/mealmasters2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mealmasters2.swf")
    },
    {
        title: "Meal Masters 3",
        imgSrc: "/img/gameimg/mealmasters3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mealmasters3.swf")
    },
    {
        title: "Measure and Mix Blueberry Muffins",
        imgSrc: "/img/gameimg/measureandmixblueberrymuffins.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/measureandmixblueberrymuffins.swf")
    },
    {
        title: "Measure and Mix Chocolate Cake",
        imgSrc: "/img/gameimg/measureandmixchocolatecake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/measureandmixchocolatecake.swf")
    },
    {
        title: "Measure and Mix Chocolate Chip Cookies",
        imgSrc: "/img/gameimg/measureandmixchocolatechipcookies.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/measureandmixchocolatechipcookies.swf")
    },
    {
        title: "Measure and Mix Donuts",
        imgSrc: "/img/gameimg/measureandmixdonuts.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/measureandmixdonuts.swf")
    },
    {
        title: "Measure and Mix Fudge Brownies",
        imgSrc: "/img/gameimg/measureandmixfudgebrownies.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/measureandmixfudgebrownies.swf")
    },
    {
        title: "Measure and Mix Pancakes",
        imgSrc: "/img/gameimg/measureandmixpancakes.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/measureandmixpancakes.swf")
    },
    {
        title: "Measure and Mix Pretzels",
        imgSrc: "/img/gameimg/measureandmixpretzels.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/measureandmixpretzels.swf")
    },
    {
        title: "Mega Mall Madness",
        imgSrc: "/img/gameimg/megamallmadness.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/megamall-madness/game.html")
    },
    {
        title: "Melody's Adventure",
        imgSrc: "/img/gameimg/melodysadventure.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/melodys-adventure/game.html")
    },
    {
        title: "Merge the Numbers",
        imgSrc: "/img/gameimg/mergethenumbers.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/merge-the-numbers/game.html")
    },
    {
        title: "Millennials Words Quiz",
        imgSrc: "/img/gameimg/millennialswordsquiz.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/millennials-words-quiz/game.html")
    },
    {
        title: "Mini Golf",
        imgSrc: "/img/gameimg/minigolf.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/mini-golf/game.html")
    },
    {
        title: "Mini Putt",
        imgSrc: "/img/gameimg/miniputt.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/mini-putt/game.html")
    },
    {
        title: "Mini Putt 2",
        imgSrc: "/img/gameimg/miniputt2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/miniputt2.swf")
    },
    {
        title: "Mini Putt 3",
        imgSrc: "/img/gameimg/miniputt3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/mini-putt-3/game.html")
    },
    {
        title: "Mini Train",
        imgSrc: "/img/gameimg/minitrain.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/minitrain.swf")
    },
    {
        title: "Miniclip Baseball",
        imgSrc: "/img/gameimg/miniclipbaseball.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/miniclip-baseball/game.html")
    },
    {
        title: "Mixed World",
        imgSrc: "/img/gameimg/mixedworld.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/mixed-world/game.html")
    },
    {
        title: "Moborz",
        imgSrc: "/img/gameimg/moborz.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/moborz/game.html")
    },
    {
        title: "Monsterland",
        imgSrc: "/img/gameimg/monsterland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/monsterland/game.html")
    },
    {
        title: "Monsterland 2",
        imgSrc: "/img/gameimg/monsterland2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/monsterland-2/game.html")
    },
    {
        title: "Monsterland Challenge",
        imgSrc: "/img/gameimg/monsterlandchallenge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/monsterland-challenge/game.html")
    },
    {
        title: "Montgolfier",
        imgSrc: "/img/gameimg/montgolfier.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/montgolfier.swf")
    },
    {
        title: "Moto Flyer",
        imgSrc: "/img/gameimg/motoflyer.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/moto-flyer/game.html")
    },
    {
        title: "Motocross Challenge",
        imgSrc: "/img/gameimg/motocrosschallenge.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/motocross-challenge/game.html")
    },
    {
        title: "Motorcycle Tycoon",
        imgSrc: "/img/gameimg/motorcycletycoon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/motorcycletycoon.swf")
    },
    {
        title: "Mountain Bike Runner",
        imgSrc: "/img/gameimg/mountainbikerunner.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/mountain-bike-runner/game.html")
    },
    {
        title: "Mouse Trap",
        imgSrc: "/img/gameimg/mousetrap.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/mouse-trap/game.html")
    },
    {
        title: "Move The Pin",
        imgSrc: "/img/gameimg/movethepin.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/move-the-pin/game.html")
    },
    {
        title: "Mr Smith Pics and Words",
        imgSrc: "/img/gameimg/mrsmithpicsandwords.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/mr-smith-pics-and-words/game.html")
    },
    {
        title: "Multiplication Bubble Pop",
        imgSrc: "/img/gameimg/multiplicationbubblepop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/multiplication-bubble-pop/game.html")
    },
    {
        title: "Multiplication Game",
        imgSrc: "/img/gameimg/multiplicationgame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/multiplication-game/game.html")
    },
    {
        title: "Multiplication Skydiver",
        imgSrc: "/img/gameimg/multiplicationskydiver.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/multiplication-skydiver/game.html")
    },
    {
        title: "Munchie Bob",
        imgSrc: "/img/gameimg/munchiebob.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/munchie-bob/game.html")
    },
    {
        title: "Must Escape Lighthouse Island",
        imgSrc: "/img/gameimg/mustescapelighthouseisland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapelighthouseisland.swf")
    },
    {
        title: "Must Escape The Bakery",
        imgSrc: "/img/gameimg/mustescapethebakery.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethebakery.swf")
    },
    {
        title: "Must Escape The Burger Joint",
        imgSrc: "/img/gameimg/mustescapetheburgerjoint.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapetheburgerjoint.swf")
    },
    {
        title: "Must Escape The Castle",
        imgSrc: "/img/gameimg/mustescapethecastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethecastle.swf")
    },
    {
        title: "Must Escape The Clock Tower",
        imgSrc: "/img/gameimg/mustescapetheclocktower.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapetheclocktower.swf")
    },
    {
        title: "Must Escape The Factory",
        imgSrc: "/img/gameimg/mustescapethefactory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethefactory.swf")
    },
    {
        title: "Must Escape The Farm",
        imgSrc: "/img/gameimg/mustescapethefarm.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethefarm.swf")
    },
    {
        title: "Must Escape The Fortress",
        imgSrc: "/img/gameimg/mustescapethefortress.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethefortress.swf")
    },
    {
        title: "Must Escape The Ice Castle",
        imgSrc: "/img/gameimg/mustescapetheicecastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapetheicecastle.swf")
    },
    {
        title: "Must Escape The Ice Cave",
        imgSrc: "/img/gameimg/mustescapetheicecave.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapetheicecave.swf")
    },
    {
        title: "Must Escape The Island",
        imgSrc: "/img/gameimg/mustescapetheisland.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapetheisland.swf")
    },
    {
        title: "Must Escape The Museum",
        imgSrc: "/img/gameimg/mustescapethemuseum.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethemuseum.swf")
    },
    {
        title: "Must Escape The Pet Shop",
        imgSrc: "/img/gameimg/mustescapethepetshop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethepetshop.swf")
    },
    {
        title: "Must Escape The Playground",
        imgSrc: "/img/gameimg/mustescapetheplayground.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapetheplayground.swf")
    },
    {
        title: "Must Escape The Rooftop",
        imgSrc: "/img/gameimg/mustescapetherooftop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapetherooftop.swf")
    },
    {
        title: "Must Escape The Sewer",
        imgSrc: "/img/gameimg/mustescapethesewer.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethesewer.swf")
    },
    {
        title: "Must Escape The Shopping Mall",
        imgSrc: "/img/gameimg/mustescapetheshoppingmall.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/must-escape-the-shopping-mall/game.html")
    },
    {
        title: "Must Escape The Subway",
        imgSrc: "/img/gameimg/mustescapethesubway.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethesubway.swf")
    },
    {
        title: "Must Escape The Temple",
        imgSrc: "/img/gameimg/mustescapethetemple.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethetemple.swf")
    },
    {
        title: "Must Escape The Wizard's Castle",
        imgSrc: "/img/gameimg/mustescapethewizardscastle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/mustescapethewizardscastle.swf")
    },
    {
        title: "Ninja Balloons",
        imgSrc: "/img/gameimg/ninjaballoons.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/ninja-balloons/game.html")
    },
    {
        title: "Ninja Frog",
        imgSrc: "/img/gameimg/ninjafrog.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/ninja-frog/game.html")
    },
    {
        title: "Ninja Painter",
        imgSrc: "/img/gameimg/ninjapainter.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/ninjapainter.swf")
    },
    {
        title: "Ninja Painter 2",
        imgSrc: "/img/gameimg/ninjapainter2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/ninjapainter2.swf")
    },
    {
        title: "Number Eaters",
        imgSrc: "/img/gameimg/numbereaters.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/number-eaters/game.html")
    },
    {
        title: "Number Snake",
        imgSrc: "/img/gameimg/numbersnake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/number-snake/game.html")
    },
    {
        title: "Oblong",
        imgSrc: "/img/gameimg/oblong.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/oblong/game.html")
    },
    {
        title: "Omit Orange",
        imgSrc: "/img/gameimg/omitorange.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/omit-orange/game.html")
    },
    {
        title: "Omit Orange 2",
        imgSrc: "/img/gameimg/omitorange2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/omit-orange-2/game.html")
    },
    {
        title: "Open Restaurant",
        imgSrc: "/img/gameimg/openrestaurant.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/open-restaurant/game.html")
    },
    {
        title: "Opposite Day",
        imgSrc: "/img/gameimg/oppositeday.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/opposite-day/game.html")
    },
    {
        title: "Orange",
        imgSrc: "/img/gameimg/orange.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/orange/game.html")
    },
    {
        title: "Painter's Guild",
        imgSrc: "/img/gameimg/paintersguild.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/paintersguild.swf")
    },
    {
        title: "Papa Louie",
        imgSrc: "/img/gameimg/papalouie.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/papa-louie/game.html")
    },
    {
        title: "Papa Louie 2",
        imgSrc: "/img/gameimg/papalouie2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/papa-louie-2/game.html")
    },
    {
        title: "Papa Louie 3",
        imgSrc: "/img/gameimg/papalouie3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/papa-louie-3/game.html")
    },
    {
        title: "Parking Fury",
        imgSrc: "/img/gameimg/parkingfury.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/parking-fury/game.html")
    },
    {
        title: "Parking Fury 2",
        imgSrc: "/img/gameimg/parkingfury2.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/parkingfury2.swf")
    },
    {
        title: "Parking Fury 3",
        imgSrc: "/img/gameimg/parkingfury3.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/parking-fury-3/game.html")
    },
    {
        title: "Parking Lot",
        imgSrc: "/img/gameimg/parkinglot.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/parkinglot.swf")
    },
    {
        title: "Parking Lot 2",
        imgSrc: "/img/gameimg/parkinglot2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/parkinglot2.swf")
    },
    {
        title: "Parking Lot 3",
        imgSrc: "/img/gameimg/parkinglot3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/parkinglot3.swf")
    },
    {
        title: "Parking Virtuoso",
        imgSrc: "/img/gameimg/parkingvirtuoso.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/parkingvirtuoso.swf")
    },
    {
        title: "Penalty Kicks",
        imgSrc: "/img/gameimg/penaltykicks.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/penalty-kicks/game.html")
    },
    {
        title: "Penalty Mania",
        imgSrc: "/img/gameimg/penaltymania.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/penalty-mania/game.html")
    },
    {
        title: "Penguin Pass",
        imgSrc: "/img/gameimg/penguinpass.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/penguinpass.swf")
    },
    {
        title: "Pentapuzzle",
        imgSrc: "/img/gameimg/pentapuzzle.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pentapuzzle/game.html")
    },
    {
        title: "Pet Stand",
        imgSrc: "/img/gameimg/petstand.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pet-stand/game.html")
    },
    {
        title: "Phantomb",
        imgSrc: "/img/gameimg/phantomb.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/phantomb/game.html")
    },
    {
        title: "Phit",
        imgSrc: "/img/gameimg/phit.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/phit.swf")
    },
    {
        title: "Piano Tiles",
        imgSrc: "/img/gameimg/pianotiles.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/piano-tiles/game.html")
    },
    {
        title: "PiMon",
        imgSrc: "/img/gameimg/pimon.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pimon/game.html")
    },
    {
        title: "Pirate Treasure Quotient Game",
        imgSrc: "/img/gameimg/piratetreasurequotientgame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pirate-treasure-quotient-game/game.html")
    },
    {
        title: "Pizza Party",
        imgSrc: "/img/gameimg/pizzaparty.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pizza-party/game.html")
    },
    {
        title: "Planet-F",
        imgSrc: "/img/gameimg/planetf.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/planetf.swf")
    },
    {
        title: "Pocket Change",
        imgSrc: "/img/gameimg/pocketchange.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/pocketchange.swf")
    },
    {
        title: "Pocket Drift",
        imgSrc: "/img/gameimg/pocketdrift.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pocket-drift/game.html")
    },
    {
        title: "Poker Dice Solitaire",
        imgSrc: "/img/gameimg/pokerdicesolitaire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/poker-dice-solitaire/game.html")
    },
    {
        title: "Pop The Lock",
        imgSrc: "/img/gameimg/popthelock.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pop-the-lock/game.html")
    },
    {
        title: "Popcorn Master",
        imgSrc: "/img/gameimg/popcornmaster.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/popcorn-master/game.html")
    },
    {
        title: "Popsicle Clicker",
        imgSrc: "/img/gameimg/popsicleclicker.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/popsicle-clicker/game.html")
    },
    {
        title: "Prime Factor Tree Game",
        imgSrc: "/img/gameimg/primefactortreegame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/prime-factor-tree-game/game.html")
    },
    {
        title: "Princess Math",
        imgSrc: "/img/gameimg/princessmath.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/princess-math/game.html")
    },
    {
        title: "Prose and Motion",
        imgSrc: "/img/gameimg/proseandmotion.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/proseandmotion.swf")
    },
    {
        title: "Pumpkin Patch Multiplication",
        imgSrc: "/img/gameimg/pumpkinpatchmultiplication.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pumpkin-patch-multiplication/game.html")
    },
    {
        title: "Pumpkin Remover",
        imgSrc: "/img/gameimg/pumpkinremover.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/pumpkinremover.swf")
    },
    {
        title: "Pumpkin Remover 2",
        imgSrc: "/img/gameimg/pumpkinremover2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/pumpkinremover2.swf")
    },
    {
        title: "Pumpkin Remover 3",
        imgSrc: "/img/gameimg/pumpkinremover3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://flash.hoodamath.com/flash/pumpkinremover3.swf")
    },
    {
        title: "Puppet Hockey",
        imgSrc: "/img/gameimg/puppethockey.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/puppet-hockey/game.html")
    },
    {
        title: "Pursuit of Hat",
        imgSrc: "/img/gameimg/pursuitofhat.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/pursuitofhat.swf")
    },
    {
        title: "Pursuit of Hat 2",
        imgSrc: "/img/gameimg/pursuitofhat2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/pursuitofhat2.swf")
    },
    {
        title: "Pyramid Solitaire",
        imgSrc: "/img/gameimg/pyramidsolitaire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/pyramid-solitaire/game.html")
    },
    {
        title: "Rabbit Run Adventure",
        imgSrc: "/img/gameimg/rabbitrunadventure.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/rabbit-run-adventure/game.html")
    },
    {
        title: "Rain Words",
        imgSrc: "/img/gameimg/rainwords.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/rainwords.swf")
    },
    {
        title: "Real Estate Fun",
        imgSrc: "/img/gameimg/realestatefun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/realestatefun.swf")
    },
    {
        title: "Rearrange Letters",
        imgSrc: "/img/gameimg/rearrangeletters.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/rearrange-letters/game.html")
    },
    {
        title: "Record Shop Tycoon",
        imgSrc: "/img/gameimg/recordshoptycoon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/recordshoptycoon.swf")
    },
    {
        title: "Red Ball 1",
        imgSrc: "/img/gameimg/redball1.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/red-ball-1/game.html")
    },
    {
        title: "Red Ball 4 Volume 2",
        imgSrc: "/img/gameimg/redball4volume2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/red-ball-4-volume-2/game.html")
    },
    {
        title: "Red Ball 4 Volume 3",
        imgSrc: "/img/gameimg/redball4volume3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/redball4volume3.swf")
    },
    {
        title: "Red Remover",
        imgSrc: "/img/gameimg/redremover.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/redremover.swf")
    },
    {
        title: "Red Remover Player Pack",
        imgSrc: "/img/gameimg/redremoverplayerpack.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/redremoverplayerpack.swf")
    },
    {
        title: "Resizer",
        imgSrc: "/img/gameimg/resizer.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/resizer/game.html")
    },
    {
        title: "Resort Empire",
        imgSrc: "/img/gameimg/resortempire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/resortempire.swf")
    },
    {
        title: "Retro Ping Pong",
        imgSrc: "/img/gameimg/retropingpong.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/retro-ping-pong/game.html")
    },
    {
        title: "Retro Snake",
        imgSrc: "/img/gameimg/retrosnake.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/retro-snake/game.html")
    },
    {
        title: "Reverse Parking",
        imgSrc: "/img/gameimg/reverseparking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/reverseparking.swf")
    },
    {
        title: "Reversi",
        imgSrc: "/img/gameimg/reversi.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/reversi/game.html")
    },
    {
        title: "Rise Higher",
        imgSrc: "/img/gameimg/risehigher.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/rise-higher/game.html")
    },
    {
        title: "Road Shops",
        imgSrc: "/img/gameimg/roadshops.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/roadshops.swf")
    },
    {
        title: "Rollercoaster Creator",
        imgSrc: "/img/gameimg/rollercoastercreator.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/rollercoaster-creator/game.html")
    },
    {
        title: "Rollercoaster Creator 2",
        imgSrc: "/img/gameimg/rollercoastercreator2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/rollercoastercreator2.swf")
    },
    {
        title: "Rolling Ball 3D",
        imgSrc: "/img/gameimg/rollingball3d.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/rolling-ball-3d/game.html")
    },
    {
        title: "Root Collector",
        imgSrc: "/img/gameimg/rootcollector.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/rootcollector.swf")
    },
    {
        title: "Rotate and Roll",
        imgSrc: "/img/gameimg/rotateandroll.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/rotate-and-roll/game.html")
    },
    {
        title: "Rotate and Roll Players Pack",
        imgSrc: "/img/gameimg/rotateandrollplayerspack.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/rotateandrollplayerspack.swf")
    },
    {
        title: "Sand Grid",
        imgSrc: "/img/gameimg/sandgrid.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sand-grid/game.html")
    },
    {
        title: "Sand Trap",
        imgSrc: "/img/gameimg/sandtrap.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sand-trap/game.html")
    },
    {
        title: "Santa Run 2",
        imgSrc: "/img/gameimg/santarun2.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/santa-run-2/game.html")
    },
    {
        title: "Santa Run 3",
        imgSrc: "/img/gameimg/santarun3.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/santa-run-3/game.html")
    },
    {
        title: "Save My Robotos",
        imgSrc: "/img/gameimg/savemyrobotos.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/save-my-robotos/game.html")
    },
    {
        title: "Shop Empire 2",
        imgSrc: "/img/gameimg/shopempire2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/shopempire2.swf")
    },
    {
        title: "Shopping Cart Dash",
        imgSrc: "/img/gameimg/shoppingcartdash.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/shoppingcartdash.swf")
    },
    {
        title: "Shopping City",
        imgSrc: "/img/gameimg/shoppingcity.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/shoppingcity.swf")
    },
    {
        title: "Shopping Corner",
        imgSrc: "/img/gameimg/shoppingcorner.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/shoppingcorner.swf")
    },
    {
        title: "Shopping Mall",
        imgSrc: "/img/gameimg/shoppingmall.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/shopping-mall/game.html")
    },
    {
        title: "Shopping Street",
        imgSrc: "/img/gameimg/shoppingstreet.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/shoppingstreet.swf")
    },
    {
        title: "Shortcut Race",
        imgSrc: "/img/gameimg/shortcutrace.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/shortcut-race/game.html")
    },
    {
        title: "Skate King",
        imgSrc: "/img/gameimg/skateking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/skate-king/game.html")
    },
    {
        title: "Skater Math",
        imgSrc: "/img/gameimg/skatermath.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/skater-math/game.html")
    },
    {
        title: "Ski Maniacs",
        imgSrc: "/img/gameimg/skimaniacs.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/ski-maniacs/game.html")
    },
    {
        title: "Ski Slopes",
        imgSrc: "/img/gameimg/skislopes.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/ski-slopes/game.html")
    },
    {
        title: "Sky Speedster",
        imgSrc: "/img/gameimg/skyspeedster.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sky-speedster/game.html")
    },
    {
        title: "Slalom Ski",
        imgSrc: "/img/gameimg/slalomski.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/slalom-ski/game.html")
    },
    {
        title: "Sling Drift",
        imgSrc: "/img/gameimg/slingdrift.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sling-drift/game.html")
    },
    {
        title: "Slither Math",
        imgSrc: "/img/gameimg/slithermath.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/slither-math/game.html")
    },
    {
        title: "Slope Intercept Surround",
        imgSrc: "/img/gameimg/slopeinterceptsurround.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/slope-intercept-surround/game.html")
    },
    {
        title: "Snake Trap",
        imgSrc: "/img/gameimg/snaketrap.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snake-trap/game.html")
    },
    {
        title: "Snakes and Ladders",
        imgSrc: "/img/gameimg/snakesandladders.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snakes-and-ladders/game.html")
    },
    {
        title: "Sneaky Castle Escape",
        imgSrc: "/img/gameimg/sneakycastleescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/sneakycastleescape.swf")
    },
    {
        title: "Snoring",
        imgSrc: "/img/gameimg/snoring.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snoring/game.html")
    },
    {
        title: "Snoring Wild West",
        imgSrc: "/img/gameimg/snoringwildwest.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snoring-wild-west/game.html")
    },
    {
        title: "Snoring Winter Edition",
        imgSrc: "/img/gameimg/snoringwinteredition.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snoring-winter-edition/game.html")
    },
    {
        title: "Snow Line 2",
        imgSrc: "/img/gameimg/snowline2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snow-line-2/game.html")
    },
    {
        title: "Snow Storm Escape",
        imgSrc: "/img/gameimg/snowstormescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snow-storm-escape/game.html")
    },
    {
        title: "Snowball Fort Escape",
        imgSrc: "/img/gameimg/snowballfortescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/snowball-fort-escape/game.html")
    },
    {
        title: "Soccer Balls 2",
        imgSrc: "/img/gameimg/soccerballs2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/soccerballs2.swf")
    },
    {
        title: "Soccer Balls 2 Level Pack",
        imgSrc: "/img/gameimg/soccerballs2levelpack.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/soccerballs2levelpack.swf")
    },
    {
        title: "Soccer Star",
        imgSrc: "/img/gameimg/soccerstar.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/soccer-star/game.html")
    },
    {
        title: "Soflo Wheelie Life",
        imgSrc: "/img/gameimg/soflowheelielife.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/soflo-wheelie-life/game.html")
    },
    {
        title: "Space Miner",
        imgSrc: "/img/gameimg/spaceminer.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/space-miner/game.html")
    },
    {
        title: "Speed Cube",
        imgSrc: "/img/gameimg/speedcube.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/speed-cube/game.html")
    },
    {
        title: "Spill The Sand",
        imgSrc: "/img/gameimg/spillthesand.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/spill-the-sand/game.html")
    },
    {
        title: "Spinner's Luck",
        imgSrc: "/img/gameimg/spinnersluck.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/spinnersluck.swf")
    },
    {
        title: "Split Ball",
        imgSrc: "/img/gameimg/splitball.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/split-ball/game.html")
    },
    {
        title: "Spooky Night Escape",
        imgSrc: "/img/gameimg/spookynightescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/spookynightescape.swf")
    },
    {
        title: "Sports Heads Basketball",
        imgSrc: "/img/gameimg/sportsheadsbasketball.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sports-heads-basketball/game.html")
    },
    {
        title: "Spring Garden Escape",
        imgSrc: "/img/gameimg/springgardenescape.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/springgardenescape.swf")
    },
    {
        title: "Sprout",
        imgSrc: "/img/gameimg/sprout.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/sprout.swf")
    },
    {
        title: "Stack Game",
        imgSrc: "/img/gameimg/stackgame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/stack-game/game.html")
    },
    {
        title: "Stacky Duck",
        imgSrc: "/img/gameimg/stackyduck.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/stacky-duck/game.html")
    },
    {
        title: "Starlight",
        imgSrc: "/img/gameimg/starlight.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/starlight.swf")
    },
    {
        title: "Starlight 2",
        imgSrc: "/img/gameimg/starlight2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/starlight2.swf")
    },
    {
        title: "Stick Ninja",
        imgSrc: "/img/gameimg/stickninja.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/stick-ninja/game.html")
    },
    {
        title: "Street Basketball",
        imgSrc: "/img/gameimg/streetbasketball.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/street-basketball/game.html")
    },
    {
        title: "Sudoku",
        imgSrc: "/img/gameimg/sudoku.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sudoku/game.html")
    },
    {
        title: "Sugar Sugar",
        imgSrc: "/img/gameimg/sugarsugar.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sugar-sugar/game.html")
    },
    {
        title: "Sugar Sugar 3",
        imgSrc: "/img/gameimg/sugarsugar3.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/sugarsugar3.swf")
    },
    {
        title: "Suit Up",
        imgSrc: "/img/gameimg/suitup.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/suit-up/game.html")
    },
    {
        title: "Super Number Defense",
        imgSrc: "/img/gameimg/supernumberdefense.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/super-number-defense/game.html")
    },
    {
        title: "Super Santa Kicker",
        imgSrc: "/img/gameimg/supersantakicker.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/super-santa-kicker/game.html")
    },
    {
        title: "Super Stacker",
        imgSrc: "/img/gameimg/superstacker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/superstacker.swf")
    },
    {
        title: "Super Stacker 2",
        imgSrc: "/img/gameimg/superstacker2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/super-stacker-2/game.html")
    },
    {
        title: "Sweety Memory",
        imgSrc: "/img/gameimg/sweetymemory.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/sweety-memory/game.html")
    },
    {
        title: "Swing Monkey",
        imgSrc: "/img/gameimg/swingmonkey.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/swing-monkey/game.html")
    },
    {
        title: "Swing Robber",
        imgSrc: "/img/gameimg/swingrobber.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/swing-robber/game.html")
    },
    {
        title: "Tap Supermarket",
        imgSrc: "/img/gameimg/tapsupermarket.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/tap-supermarket/game.html")
    },
    {
        title: "Tap Tap Tennis",
        imgSrc: "/img/gameimg/taptaptennis.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/tap-tap-tennis/game.html")
    },
    {
        title: "Target SOE",
        imgSrc: "/img/gameimg/targetsoe.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/target-soe/game.html")
    },
    {
        title: "Taxi Driver 3D",
        imgSrc: "/img/gameimg/taxidriver3d.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/taxi-driver-3d/game.html")
    },
    {
        title: "Teleporting Kittens",
        imgSrc: "/img/gameimg/teleportingkittens.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/teleporting-kittens/game.html")
    },
    {
        title: "Ten Pin Bowling",
        imgSrc: "/img/gameimg/tenpinbowling.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/tenpinbowling.swf")
    },
    {
        title: "Thanksgiving Turkey",
        imgSrc: "/img/gameimg/thanksgivingturkey.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/thanksgivingturkey.swf")
    },
    {
        title: "The Constructor",
        imgSrc: "/img/gameimg/theconstructor.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/theconstructor.swf")
    },
    {
        title: "The Roots of Life",
        imgSrc: "/img/gameimg/therootsoflife.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/therootsoflife.swf")
    },
    {
        title: "The Travelling Salesman",
        imgSrc: "/img/gameimg/thetravellingsalesman.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/thetravellingsalesman.swf")
    },
    {
        title: "Tic Tac Toe",
        imgSrc: "/img/gameimg/tictactoe.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/tic-tac-toe/game.html")
    },
    {
        title: "Time Punch",
        imgSrc: "/img/gameimg/timepunch.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/time-punch/game.html")
    },
    {
        title: "Timmys Gems",
        imgSrc: "/img/gameimg/timmysgems.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/timmys-gems/game.html")
    },
    {
        title: "Tinysasters",
        imgSrc: "/img/gameimg/tinysasters.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/tinysasters.swf")
    },
    {
        title: "Touch Shapes",
        imgSrc: "/img/gameimg/touchshapes.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/touch-shapes/game.html")
    },
    {
        title: "Touchdown Rush",
        imgSrc: "/img/gameimg/touchdownrush.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/touchdown-rush/game.html")
    },
    {
        title: "Trade West",
        imgSrc: "/img/gameimg/tradewest.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/tradewest.swf")
    },
    {
        title: "Train X7",
        imgSrc: "/img/gameimg/trainx7.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/train-x7/game.html")
    },
    {
        title: "Transformation Golf",
        imgSrc: "/img/gameimg/transformationgolf.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/transformation-golf/game.html")
    },
    {
        title: "Transformation Golf 2",
        imgSrc: "/img/gameimg/transformationgolf2.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/transformation-golf-2/game.html")
    },
    {
        title: "Transforming Blockies",
        imgSrc: "/img/gameimg/transformingblockies.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/transforming-blockies/game.html")
    },
    {
        title: "Tribute to Grow",
        imgSrc: "/img/gameimg/tributetogrow.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/tributetogrow.swf")
    },
    {
        title: "Trick or Suite",
        imgSrc: "/img/gameimg/trickorsuite.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/trickorsuite.swf")
    },
    {
        title: "Tripeaks Solitaire",
        imgSrc: "/img/gameimg/tripeakssolitaire.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/tripeaks-solitaire/game.html")
    },
    {
        title: "Tronix",
        imgSrc: "/img/gameimg/tronix.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/tronix/game.html")
    },
    {
        title: "Truck Stop Parking",
        imgSrc: "/img/gameimg/truckstopparking.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/truckstopparking.swf")
    },
    {
        title: "Turkey Fling",
        imgSrc: "/img/gameimg/turkeyfling.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/turkey-fling/game.html")
    },
    {
        title: "Unloop",
        imgSrc: "/img/gameimg/unloop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/unloop/game.html")
    },
    {
        title: "Unscrew It",
        imgSrc: "/img/gameimg/unscrewit.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/unscrew-it/game.html")
    },
    {
        title: "Uphill Rush",
        imgSrc: "/img/gameimg/uphillrush.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/uphill-rush/game.html")
    },
    {
        title: "Vampire Physics",
        imgSrc: "/img/gameimg/vampirephysics.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/vampirephysics.swf")
    },
    {
        title: "Village Fun",
        imgSrc: "/img/gameimg/villagefun.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/villagefun.swf")
    },
    {
        title: "Wacky Wordsearch",
        imgSrc: "/img/gameimg/wackywordsearch.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wackywordsearch.swf")
    },
    {
        title: "Water Rider 3D",
        imgSrc: "/img/gameimg/waterrider3d.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/water-rider-3d/game.html")
    },
    {
        title: "Watermelon Game",
        imgSrc: "/img/gameimg/watermelongame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/watermelon-game/game.html")
    },
    {
        title: "What Animal Are You",
        imgSrc: "/img/gameimg/whatanimalareyou.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/what-animal-are-you/game.html")
    },
    {
        title: "What Do We Do Now",
        imgSrc: "/img/gameimg/whatdowedonow.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/what-do-we-do-now/game.html")
    },
    {
        title: "Whopper Clicker",
        imgSrc: "/img/gameimg/whopperclicker.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/whopper-clicker/game.html")
    },
    {
        title: "WindFall Tycoon",
        imgSrc: "/img/gameimg/windfalltycoon.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/windfalltycoon.swf")
    },
    {
        title: "Wonderputt",
        imgSrc: "/img/gameimg/wonderputt.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/wonderputt/game.html")
    },
    {
        title: "Word Builder",
        imgSrc: "/img/gameimg/wordbuilder.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordbuilder.swf")
    },
    {
        title: "Word Finder",
        imgSrc: "/img/gameimg/wordfinder.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordfinder.swf")
    },
    {
        title: "Word Master",
        imgSrc: "/img/gameimg/wordmaster.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordmaster.swf")
    },
    {
        title: "Word Matching",
        imgSrc: "/img/gameimg/wordmatching.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordmatching.swf")
    },
    {
        title: "Word Plex",
        imgSrc: "/img/gameimg/wordplex.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordplex.swf")
    },
    {
        title: "Word Pop",
        imgSrc: "/img/gameimg/wordpop.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordpop.swf")
    },
    {
        title: "Word Search 2000",
        imgSrc: "/img/gameimg/wordsearch2000.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordsearch2000.swf")
    },
    {
        title: "Word Tower",
        imgSrc: "/img/gameimg/wordtower.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/wordtower.swf")
    },
    {
        title: "World Class Chef Italy",
        imgSrc: "/img/gameimg/worldclasschefitaly.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/worldclasschefitaly.swf")
    },
    {
        title: "World Class Chef Turkey",
        imgSrc: "/img/gameimg/worldclasschefturkey.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/worldclasschefturkey.swf")
    },
    {
        title: "World Class Chef USA",
        imgSrc: "/img/gameimg/worldclasschefusa.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/flash/worldclasschefusa.swf")
    },
    {
        title: "World's Hardest Game",
        imgSrc: "/img/gameimg/worldshardestgame.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/worlds-hardest-game/game.html")
    },
    {
        title: "Worms",
        imgSrc: "/img/gameimg/worms.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/worms/game.html")
    },
    {
        title: "Zen Words",
        imgSrc: "/img/gameimg/zenwords.jpg",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://www.hoodamath.com/mobile/games/zen-words/game.html")
    },

   ];
export { gamesData };
