const products = [
    {
        id: 30,
        name: "2,800 PAVOS (Cuenta Principal)",
        price: 305.00,
        category: "fortnite-principal",
        icon: "fab fa-xbox, fas fa-desktop, fas fa-gamepad",
        badge: "Seguro",
        description: "Recarga de 2,800 Pavos directamente en tu cuenta principal. Proceso 100% seguro y sin riesgos. Disponible para Xbox, PC y Nintendo."
    },
    {
        id: 31,
        name: "5,000 PAVOS (Cuenta Principal)",
        price: 495.00,
        category: "fortnite-principal",
        icon: "fab fa-xbox, fas fa-desktop, fas fa-gamepad",
        badge: "Mejor Valor",
        description: "Recarga de 5,000 Pavos directamente en tu cuenta principal. Proceso 100% seguro y sin riesgos. Disponible para Xbox, PC y Nintendo."
    },
    {
        id: 32,
        name: "13,500 PAVOS (Cuenta Principal)",
        price: 1099.00,
        category: "fortnite-principal",
        icon: "fab fa-xbox, fas fa-desktop, fas fa-gamepad",
        badge: "Más Comprado",
        description: "Mucha cantidad de Pavos recargados en tu cuenta principal con garantía total."
    },
    {
        id: 33,
        name: "27,000 PAVOS (Cuenta Principal)",
        price: 2089.00,
        category: "fortnite-principal",
        icon: "fab fa-xbox, fas fa-desktop, fas fa-gamepad",
        badge: "Pack Pro",
        description: "Pack masivo de 27,000 Pavos directo a tu cuenta principal. La mejor opción para coleccionistas."
    },
    {
        id: 20,
        name: "1,000 PAVOS (Cuenta Nueva)",
        price: 53.00,
        oldPrice: 80.00,
        category: "fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Oferta",
        description: "Cuenta nueva con 1,000 Pavos lista para enviar artículos vía regalo. Compatible con todas las plataformas."
    },
    {
        id: 21,
        name: "1,600 PAVOS (Cuenta Nueva)",
        price: 126.00,
        category: "fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        description: "Cuenta nueva con 1,600 Pavos lista para enviar artículos vía regalo. Compatible con todas las plataformas."
    },
    {
        id: 22,
        name: "2,200 PAVOS (Cuenta Nueva)",
        price: 196.00,
        category: "fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        description: "Cuenta nueva con 2,200 Pavos lista para enviar artículos vía regalo. Compatible con todas las plataformas."
    },
    {
        id: 23,
        name: "3,400 PAVOS (Cuenta Nueva)",
        price: 296.00,
        category: "fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Recomendado",
        description: "Cuenta nueva con 3,400 Pavos lista para enviar artículos vía regalo. Compatible con todas las plataformas."
    },
    {
        id: 10,
        name: "3,000 PAVOS (3 Cuentas de 1K)",
        price: 130.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Económico",
        description: "Lote de 3 cuentas individuales con 1,000 Pavos cada una. Ideal para uso personal o para empezar a revender. Compatibles con todas las plataformas."
    },
    {
        id: 11,
        name: "4,500 PAVOS (3 Cuentas de 1.5K)",
        price: 204.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Popular",
        description: "Lote de 3 cuentas con 1,500 Pavos cada una. El balance perfecto entre precio y cantidad para revendedores."
    },
    {
        id: 12,
        name: "4,800 PAVOS (3 Cuentas de 1.6K)",
        price: 245.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Nuevo",
        description: "Lote de 3 cuentas con 1,600 Pavos cada una. Precio por cuenta de apenas $81.6 MXN."
    },
    {
        id: 13,
        name: "5,000 PAVOS (5 Cuentas de 1K)",
        price: 200.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Mejor Precio",
        description: "Lote masivo de 5 cuentas con 1,000 Pavos cada una. Increíble precio de $40 por cuenta."
    },
    {
        id: 14,
        name: "6,600 PAVOS (3 Cuentas de 2.2K)",
        price: 335.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Premium",
        description: "Lote de 3 cuentas con 2,200 Pavos cada una. Para quienes buscan skins de mayor rareza."
    },
    {
        id: 15,
        name: "10,200 PAVOS (3 Cuentas de 3.4K)",
        price: 595.00,
        category: "lotes-fortnite",
        icon: "fab fa-xbox, fab fa-playstation, fas fa-desktop, fas fa-gamepad",
        badge: "Mega Pack",
        description: "Lote de 3 cuentas de 3,400 Pavos cada una. Máximo ahorro para grandes compras."
    }
];

// Export logic for main scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
