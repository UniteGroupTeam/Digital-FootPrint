const products = [
    {
        id: 50,
        name: "Club de Fortnite (PC / Play / Nintendo)",
        price: 68.00,
        category: "fortnite-club",
        type: "selectable",
        icon: "fas fa-desktop, fab fa-playstation, fas fa-gamepad",
        badge: "Más Barato",
        description: "Obtén los beneficios del Club de Fortnite en tu cuenta de PC, PlayStation o Nintendo. Sin necesidad de cuenta de Xbox vinculada. Incluye el Pase de Batalla actual, 1,000 pavos cada mes y skins exclusivas.",
        variants: [
            { name: "1 Mes", price: 68.00 },
            { name: "4 Meses", price: 180.00 },
            { name: "12 Meses", price: 356.00 }
        ]
    },
    {
        id: 51,
        name: "Club de Fortnite (Solo Xbox)",
        price: 105.00,
        category: "fortnite-club",
        type: "selectable",
        icon: "fab fa-xbox",
        badge: "Directo",
        description: "Suscripción al Club de Fortnite exclusiva para cuentas vinculadas a Xbox. Proceso rápido y directo. Incluye todos los beneficios mensuales: skins, pavos y pase de batalla.",
        variants: [
            { name: "1 Mes", price: 105.00 },
            { name: "3 Meses", price: 220.00 },
            { name: "6 Meses", price: 398.00 },
            { name: "12 Meses", price: 705.00 }
        ]
    },
    {
        id: 40,
        name: "ROBUX (Carga por Grupo)",
        price: 160.00,
        category: "robux-group",
        type: "calculator",
        icon: "fas fa-users, fas fa-desktop, fas fa-mobile-alt",
        badge: "Más Rápido",
        description: "Recarga de Robux vía Grupo. Entrega instantánea si ya estás en el grupo (requiere 15 días de permanencia inicial)."
    },
    {
        id: 41,
        name: "ROBUX (Vía Gamepass)",
        price: 175.00,
        category: "robux-gamepass",
        type: "calculator",
        icon: "fas fa-ticket-alt, fas fa-desktop, fas fa-mobile-alt",
        badge: "Sin Grupo",
        description: "Recarga de Robux vía Gamepass. Debes enviarnos el link de tu Gamepass. Los Robux se reflejan de 5 a 7 días."
    },
    {
        id: 30,
        name: "PAVOS (Cuenta Principal)",
        price: 134.00,
        category: "fortnite-principal",
        type: "selectable",
        icon: "fas fa-desktop, fab fa-playstation, fab fa-xbox, fas fa-mobile-alt",
        badge: "Garantizado",
        description: "Recarga de Pavos directamente en tu cuenta principal.\n\n✅ **PLATAFORMAS**: PC, PlayStation, Xbox y Mobile.\n❌ **NO DISPONIBLE**: Nintendo Switch.\n\nProceso 100% seguro y sin riesgos para tu cuenta.",
        variants: [
            { name: "1,000 V-Bucks", price: 134.00 },
            { name: "2,800 V-Bucks", price: 300.00 },
            { name: "5,000 V-Bucks", price: 435.00 },
            { name: "13,500 V-Bucks", price: 845.00 },
            { name: "27,000 V-Bucks", price: 1560.00 }
        ]
    },
    {
        id: 10,
        name: "3,000 PAVOS (3 Cuentas de 1K)",
        price: 130.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "$43.3 c/u",
        description: "Lote para revendedores: 3 cuentas de 1,000 pavos cada una.\n\n🎮 **Plataformas**: Xbox, PlayStation, PC y Nintendo."
    },
    {
        id: 11,
        name: "4,500 PAVOS (3 Cuentas de 1.5K)",
        price: 204.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "$68 c/u",
        description: "Lote para revendedores: 3 cuentas de 1,500 pavos cada una.\n\n🎮 **Plataformas**: Xbox, PlayStation, PC y Nintendo."
    },
    {
        id: 12,
        name: "4,800 PAVOS (3 Cuentas de 1.6K)",
        price: 245.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "$81.6 c/u",
        description: "Lote para revendedores: 3 cuentas de 1,600 pavos cada una.\n\n🎮 **Plataformas**: Xbox, PlayStation, PC y Nintendo."
    },
    {
        id: 13,
        name: "5,000 PAVOS (5 Cuentas de 1K)",
        price: 200.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "$40 c/u",
        description: "Lote para revendedores: 5 cuentas de 1,000 pavos cada una.\n\n🎮 **Plataformas**: Xbox, PlayStation, PC y Nintendo."
    },
    {
        id: 14,
        name: "6,600 PAVOS (3 Cuentas de 2.2K)",
        price: 335.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "$111.6 c/u",
        description: "Lote para revendedores: 3 cuentas de 2,200 pavos cada una.\n\n🎮 **Plataformas**: Xbox, PlayStation, PC y Nintendo."
    },
    {
        id: 15,
        name: "10,200 PAVOS (3 Cuentas de 3.4K)",
        price: 595.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "$198.3 c/u",
        description: "Lote para revendedores: 3 cuentas de 3,400 pavos cada una.\n\n🎮 **Plataformas**: Xbox, PlayStation, PC y Nintendo."
    },
    // --- CUENTAS REGALO / FA ---
    {
        id: 20,
        name: "CUENTAS PAVOS (Vía Regalo)",
        price: 53.00,
        oldPrice: 80.00,
        category: "fortnite",
        type: "selectable",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "OFERTA",
        description: "Cuentas nuevas con pavos listos para enviar artículos vía regalo a tu cuenta principal.\n\n🎮 **Plataformas**: Xbox, PlayStation, PC y Nintendo.\n✨ **Uso**: Ideales para auto-regalarte skins, pases o gestos.",
        variants: [
            { name: "1,000 V-Bucks", price: 53.00 },
            { name: "1,600 V-Bucks", price: 126.00 },
            { name: "2,200 V-Bucks", price: 196.00 },
            { name: "3,400 V-Bucks", price: 296.00 }
        ]
    },
    /* PERFILES (Lego) */
    {
        id: 60,
        name: "Max (Perfiles)",
        price: 35.00,
        category: "streaming",
        type: "selectable",
        icon: "fas fa-tv, fas fa-mobile-alt",
        badge: "Premium",
        description: "Perfiles garantizados de Max.",
        variants: [
            { name: "Max Estandar", price: 35.00 },
            { name: "Max Platino", price: 45.00 }
        ]
    },
    {
        id: 61,
        name: "Disney Premium (Perfil)",
        price: 49.00,
        category: "streaming",
        icon: "fas fa-tv, fas fa-mobile-alt",
        badge: "Vip",
        description: "Disney Premium con acceso total."
    },
    {
        id: 62,
        name: "Vix Anual (Perfil)",
        price: 45.00,
        category: "streaming",
        icon: "fas fa-film",
        description: "Acceso anual a Vix mediante perfil personal."
    },
    {
        id: 63,
        name: "Paramount (Perfiles)",
        price: 25.00,
        category: "streaming",
        type: "selectable",
        icon: "fas fa-tv",
        description: "Perfiles de Paramount+.",
        variants: [
            { name: "1 Mes", price: 25.00 },
            { name: "2 Meses", price: 37.00 }
        ]
    },
    {
        id: 64,
        name: "Crunchyroll Mega Fan (Perfil)",
        price: 31.00,
        category: "streaming",
        type: "selectable",
        icon: "fas fa-film",
        description: "Perfiles de Crunchyroll Mega Fan.",
        variants: [
            { name: "1 Mes", price: 31.00 },
            { name: "Anual", price: 75.00 }
        ]
    },
    {
        id: 65,
        name: "Apple TV (Perfil)",
        price: 40.00,
        category: "streaming",
        icon: "fas fa-apple-alt",
        description: "Perfil personal para Apple TV."
    },
    {
        id: 66,
        name: "Super Duolingo (Invitación)",
        price: 30.00,
        category: "streaming",
        icon: "fas fa-language",
        description: "Suscripción Super Duolingo."
    },
    {
        id: 73,
        name: "YouTube Premium (Personal)",
        price: 30.00,
        category: "streaming",
        type: "selectable",
        icon: "fab fa-youtube",
        description: "YouTube Premium directo a tu cuenta personal.",
        variants: [
            { name: "1 Mes Invitación", price: 30.00 },
            { name: "1 Mes Familiar", price: 55.00 },
            { name: "3 Meses", price: 85.00 },
            { name: "1 Año", price: 280.00 }
        ]
    },
    {
        id: 74,
        name: "Canva Pro",
        price: 30.00,
        category: "streaming",
        type: "selectable",
        icon: "fas fa-paint-brush",
        badge: "Lego Edition",
        description: "Herramientas Pro activadas para tu cuenta.\n\n- 1 Mes: $30\n- 2 Meses: $40\n- 1 Año: $90\n- 2 Años: $105\n- 3 Años: $135",
        variants: [
            { name: "1 Mes", price: 30.00 },
            { name: "2 Meses", price: 40.00 },
            { name: "1 Año", price: 90.00 },
            { name: "2 Años", price: 105.00 },
            { name: "3 Años", price: 135.00 }
        ]
    },
    /* CUENTAS COMPLETAS (Lego) */
    {
        id: 80,
        name: "Vix (Cuenta Completa)",
        price: 25.00,
        category: "streaming-completa",
        type: "selectable",
        icon: "fas fa-film",
        badge: "Full Acceso",
        description: "Cuentas completas de Vix con acceso total.",
        variants: [
            { name: "1 Mes", price: 25.00 },
            { name: "2 Meses", price: 37.00 },
            { name: "Anual", price: 65.00 }
        ]
    },
    {
        id: 81,
        name: "Disney Premium (Completa)",
        price: 105.00,
        category: "streaming-completa",
        icon: "fas fa-tv",
        badge: "Premium",
        description: "Cuenta completa de Disney+ Premium."
    },
    {
        id: 82,
        name: "Prime Video (Completa)",
        price: 70.00,
        category: "streaming-completa",
        icon: "fas fa-video",
        badge: "Disney+",
        description: "Cuenta completa de Amazon Prime Video."
    },
    {
        id: 83,
        name: "Max (Cuenta Completa)",
        price: 70.00,
        category: "streaming-completa",
        type: "selectable",
        icon: "fas fa-tv",
        description: "Cuentas completas de Max.",
        variants: [
            { name: "Max Estandar", price: 70.00 },
            { name: "Max Platino", price: 80.00 }
        ]
    },
    {
        id: 84,
        name: "Paramount+ (Completa)",
        price: 37.00,
        category: "streaming-completa",
        type: "selectable",
        icon: "fas fa-tv",
        description: "Cuentas completas de Paramount+.",
        variants: [
            { name: "1 Mes", price: 37.00 },
            { name: "2 Meses", price: 47.00 }
        ]
    },
    {
        id: 85,
        name: "Crunchyroll Mega Fan (Completa)",
        price: 55.00,
        category: "streaming-completa",
        icon: "fas fa-film",
        description: "Cuenta completa de Crunchyroll (1 Mes Mega Fan)."
    },
    /* ECONÓMICO (Simi) */
    {
        id: 70,
        name: "Netflix (Plan Aleatorio)",
        price: 40.00,
        category: "ofertas",
        type: "selectable",
        icon: "fas fa-percentage",
        badge: "Simi Oferta",
        description: "# PLAN DE SUSCRIPCIÓN ALEATORIA\n\n- Planes aleatorios económicos.",
        variants: [
            { name: "1 Mes", price: 40.00 },
            { name: "3 Meses", price: 90.00 },
            { name: "6 Meses", price: 150.00 }
        ]
    },
    {
        id: 71,
        name: "Disney+ (Plan Aleatorio)",
        price: 40.00,
        category: "ofertas",
        type: "selectable",
        icon: "fas fa-percentage",
        badge: "Simi Oferta",
        description: "# PLAN DE SUSCRIPCIÓN ALEATORIA.",
        variants: [
            { name: "1 Mes", price: 40.00 },
            { name: "6 Meses", price: 90.00 },
            { name: "12 Meses", price: 200.00 }
        ]
    },
    {
        id: 76,
        name: "Spotify (Plan Aleatorio)",
        price: 60.00,
        category: "ofertas",
        type: "selectable",
        icon: "fas fa-percentage",
        badge: "Simi Oferta",
        description: "Música sin anuncios y modo offline.",
        variants: [
            { name: "1 Mes", price: 60.00 },
            { name: "3 Meses", price: 90.00 },
            { name: "6 Meses", price: 160.00 }
        ]
    },
    {
        id: 72,
        name: "HBO Max (Plan Aleatorio)",
        price: 38.00,
        category: "ofertas",
        type: "selectable",
        icon: "fas fa-percentage",
        badge: "Simi Oferta",
        description: "Planes aleatorios según disponibilidad.",
        variants: [
            { name: "1 Mes", price: 38.00 },
            { name: "6 Meses", price: 85.00 },
            { name: "12 Meses", price: 200.00 }
        ]
    },
    {
        id: 75,
        name: "Crunchyroll (1 Mes Aleatorio)",
        price: 35.00,
        category: "ofertas",
        icon: "fas fa-percentage",
        badge: "Simi Oferta",
        description: "Te puede tocar fan, mega fan, etc."
    },
    {
        id: 90,
        name: "Seguidores de Instagram",
        price: 43.00,
        priceWithGuarantee: 59.00,
        category: "extras",
        type: "calculator",
        icon: "fab fa-instagram",
        badge: "+1k Regalados",
        description: "Aumenta tu presencia en Instagram con seguidores reales de alta calidad.\n\n📉 **Caída estimada**: 0-10%\n🛡️ **Garantía**: 1 mes completo\n\n🔥 **PROMOCIÓN**: En la compra de más de 2,000 seguidores, recibe 1,000 Likes totalmente DE REGALO para la foto que quieras.",
        unitName: "Seguidores",
        minAmount: 100,
        step: 100
    },
    {
        id: 91,
        name: "Cualquier Juego Steam",
        price: 195.00,
        category: "extras",
        icon: "fab fa-steam",
        badge: "Económico",
        description: "Obtén cualquier juego de Steam mediante este método exclusivo.\n\n✅ Un solo pago\n✅ Cuenta principal de Steam\n✅ Sin riesgo de baneo\n✅ No Bin / No CC\n✅ Funciona para jugar Online",
        platform: "PC"
    },
    {
        id: 92,
        name: "Panel de TikTok (Vistas Gratis)",
        price: 98.00,
        category: "extras",
        icon: "fab fa-tiktok",
        badge: "Auto-Servicio",
        description: "Obtén acceso a nuestro panel exclusivo de TikTok. Genera vistas, likes, seguidores, compartidos y guardados de forma gratuita.\n\n🚀 **USO ILIMITADO**: Puedes usarlo para tus propias cuentas o incluso abrir tu propio negocio de reventa de servicios sociales.",
    },
    {
        id: 93,
        name: "Google Drive 500TB (LifeTime)",
        price: 295.00,
        category: "extras",
        icon: "fab fa-google-drive",
        badge: "STAR PRODUCT",
        description: "Almacenamiento masivo y permanente para todos tus archivos.\n\n✅ **500 TERABYTES**: Espacio masivo en cuenta emitida.\n✅ **PERMANENTE**: No vence, un solo pago de por vida.\n✅ **PRIVADO**: Tu información es 100% privada.\n✅ **VINCULABLE**: Se puede vincular con tu cuenta personal.\n\n✨ *Incluye cuenta personalizada con el prefijo que elijas (ej: tunombre@).* ",
        platform: "Cloud"
    },
    // --- NINTENDO GAMES (CUENTA NUEVA) ---
    {
        id: 101,
        name: "Super Mario Wonder",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Juego para Nintendo Switch (Cuenta Secundaria). Disfruta de la última aventura de Mario.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 102,
        name: "Zelda: Breath of the Wild",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Una obra maestra de la aventura. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 103,
        name: "Mario Kart 8 Deluxe",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Carreras infinitas con amigos. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 104,
        name: "Super Smash Bros Ultimate",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Todos están aquí. El juego de lucha definitivo.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 105,
        name: "Pokémon Escarlata",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Explora la región de Paldea. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 106,
        name: "Animal Crossing: New Horizons",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Crea tu paraíso en una isla desierta. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 107,
        name: "Super Mario 3D World + Bowser's Fury",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Diversión multijugador y una nueva aventura gigante.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 108,
        name: "Kirby and the Forgotten Land",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "La primera aventura en 3D de Kirby. Absorbente y divertido.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 109,
        name: "Luigi's Mansion 3",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Caza de fantasmas en un hotel de lujo. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 110,
        name: "Metroid Dread",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Samus regresa en una aventura de acción y sigilo. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 111,
        name: "Hogwarts Legacy",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "Vive tu propia historia en el mundo de Harry Potter. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 112,
        name: "Minecraft (Nintendo Switch)",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "El mundo de bloques en tu consola. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 113,
        name: "EA Sports FC 25",
        price: 375.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Promo 2x$560",
        description: "El fútbol más realista en Switch. Cuenta secundaria.\n\n🔥 **PROMOCIÓN**: 2 juegos por $560 + Regalo o 3 por $800 + Regalo.",
        platform: "Nintendo Switch"
    },
    {
        id: 114,
        name: "Pack Especial: 2 Juegos Nintendo",
        price: 560.00,
        category: "nintendo",
        icon: "fas fa-boxes",
        badge: "GANA UN JUEGO",
        description: "Elige 2 juegos cualesquiera de la lista promocional.\n\n🎁 **Bonus**: ¡Llévate un TERCER juego de regalo sorpresa!",
        platform: "Nintendo Switch"
    },
    {
        id: 115,
        name: "Pack Premium: 3 Juegos Nintendo",
        price: 800.00,
        category: "nintendo",
        icon: "fas fa-gift",
        badge: "GANA UN JUEGO",
        description: "Elige 3 juegos de la lista promocional.\n\n🎁 **REGALO**: ¡Llévate un CUARTO juego de regalo sorpresa!",
        platform: "Nintendo Switch"
    },
    {
        id: 116,
        name: "Zelda: Tears of the Kingdom",
        price: 300.00,
        category: "nintendo",
        icon: "fas fa-gamepad",
        badge: "Precio Especial",
        description: "La épica secuela de Breath of the Wild.\n\n⚠️ *No aplica en promociones de packs.*",
        platform: "Nintendo Switch"
    },
    {
        id: 117,
        name: "Mario Kart 8 DLC (Pistas Extras)",
        price: 450.00,
        category: "nintendo",
        icon: "fas fa-plus-circle",
        description: "Pase de pistas extras para Mario Kart 8 Deluxe.\n\n⚠️ *No aplica en promociones de packs.*",
        platform: "Nintendo Switch"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
