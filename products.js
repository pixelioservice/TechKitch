/* ============================================================
   TECHKITCH — PRODUCT CATALOG
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Hoco W55 Plus Extra 170H Long Usage ANC Headphone",
    category: "Headphone",
    price: 1890,
    oldPrice: 1980,
    images: [
      "https://i.postimg.cc/JhrB7Pzz/Screenshot-(305).png",
      "https://i.postimg.cc/R0SnCXZ3/Screenshot-(306).png",
      "https://i.postimg.cc/0NkJ5cyK/Screenshot-(308).png"
    ],
    description: `Battery: Industry-leading 170 Hours total playback (ANC off) | USB-C fast charge.

Noise Canceling: Active Noise Cancellation (ANC) up to -28dB.

Sound: 40 mm dynamic drivers for deep bass and crisp audio.

Connectivity: Bluetooth 5.4, 3.5mm AUX, and TF card support.

Design: Lightweight, foldable, and cushioned protein-leather earcups.`,
    stock: 24,
    badge: "Best Seller"
  },

  {
    id: 2,
    name: "Hoco W103 Gaming Headphone",
    category: "Headphone",
    price: 1250.00,
    oldPrice: 1380,
    images: [
      "https://i.postimg.cc/FKGGhT0R/Screenshot-(316).png",
      "https://i.postimg.cc/cH2zNDNf/Screenshot-(317).png",
      "https://i.postimg.cc/CLHcvMdy/Screenshot-(318).png",
      "https://i.postimg.cc/W18f4pPQ/Screenshot-(314).png"
    ],
    description: `Drivers: 40mm tuned for immersive gaming audio.

Microphone: Dedicated Phi 6.0 x 2.2mm mic for clear voice chat.

Connectivity: Universal 3.5mm jack with a 1.2m durable cable (PC/Mobile/Consoles).

Comfort: Ultra-lightweight (184g) with cushioned ear pads.

Warranty: 7-day replacement warranty.`,
    stock: 15,
    badge: "New"
  },

  {
    id: 3,
    name: "Xiaomi AISOLOVE F01 Handheld Turbo Fan (2000mAh Battery) – Green Color",
    category: "Rechargeable Fan",
    price: 1220.00,
    oldPrice: 1449.00,
    images: [
      "https://i.postimg.cc/Bvr764gR/Screenshot-20260712-191830-Chrome.jpg",
      "https://i.postimg.cc/B62YPk7p/Screenshot-20260712-191814-Chrome.jpg"
    ],
    description: `Product name: Handheld Fan.
    Model: F01.
    Color: Green.
    Battery type/energy: Lithium battery/2000mAh 3.7V 4.44Wh.
    Rated voltage: 5V=.
    Rated current: 1A.
    Rated input power: 5W.
    Working time: About 1.2 – 4.2h.
    Charging time: About 2.2h.
    Product size: About 61x161x48.9mm.
    Product weight: About 125g.
    Product material: PC+ABS (V0).
    Support charging and use at the same time.
    Type-C fast charging interface.
    Five levels of wind speed control.
    Low noise.
    
    NOTE: This is a Xiaomi Ecological product and there won’t be any Xiaomi Logo on it. As a sub-brand, there will be a SOLOVE or AISOLOVE logo.`,
    stock: 8,
    badge: "New"
  },
  {
    id: 4,
    name: "JYSUPER JY-2320 Portable Handheld Mini Fan with Integrated LED light",
    category: "Rechargeable Fan",
    price: 680.00,
    oldPrice: 920.0,
    images: [
      "https://i.postimg.cc/rsDp9B7X/Screenshot-20260712-200400-Chrome.jpg",
      "https://i.postimg.cc/4NhdHTzp/Screenshot-20260712-200417-Chrome.jpg"
    ],
    description: `Product Type: Portable Handheld Mini Fan with LED Light.
    Model: JYSUPER JY-2320.
    Material: High-Quality ABS Plastic.
    Dimensions (H x W x D): 18.5 cm x 9.5 cm x 4.5 cm.
    Weight: 180 grams (approx.).
    Battery Type: Rechargeable Lithium-ion.
    Battery Capacity: 1500 mAh.
    Input Voltage: DC 5V / 1A.
    Charging Port: Micro USB.
    Charging Time: Approximately 3 hours.
    Usage Time: 2-5 hours (depending on fan speed and LED usage).
    Fan Speeds: No adjustable speeds.
    LED Light: Integrated single-mode LED.
    Color Options: White.
    Noise Level: Less than 40dB.
    Power Output: 2.5W.
    Included Accessories: USB Charging Cable.`,
    stock: 15,
    badge: "Budget"
  },
  {
    id: 5,
    name: "GearUP Air Cooler Fan With Mist Flow – White Color",
    category: "Air Cooler Fan",
    price: 1150,
    oldPrice: 1880,
    images: [
      "https://i.postimg.cc/mkf92y55/Screenshot-20260713-092850-Chrome.jpg",
      "https://i.postimg.cc/KvbT6QLG/Screenshot-20260713-092705-Chrome.jpg",
      "https://i.postimg.cc/y8YZddvf/Screenshot-20260713-092812-Chrome.jpg"
    ],
    description: `Product parameters:
    Rated voltage: 5V.
    Rated current: 2A.
    Output power: 10W.
    Charging interface: TYPE – C.
    Water tank capacity: 600ML.
    Atomization amount: 45ml/H~225ml/H.
    Gear: Three speed settings.
    21x9x26 cm.
    USB cable length: 1200mm.
    1) Three wind speed options.
    2) Spray fan.
    3) Fan increases water and ice water to accelerate cooling speed.
    4) 240 ° wide angle adjustment air outlet.
    5) Adjustable angle up and down.
    6) Spray: five spray ports.`,
    stock: 24,
    badge: "39% Discount"
  },
  {
    id: 6,
    name: "B22 to E27 LED Lamp Holder with Wireless Remote & Timer",
    category: "Lamp Holder",
    price: 550,
    oldPrice: 680,
    images: [
      "https://i.postimg.cc/yN6Y3YgL/Screenshot-20260713-205355-Chrome.jpg",
      "https://i.postimg.cc/W3RWftGZ/Screenshot-20260713-210054-Chrome.jpg",
      "https://i.postimg.cc/gjmMm5BP/Screenshot-20260713-210033-Chrome.jpg",
      "https://i.postimg.cc/Gh3MfWyv/Screenshot-20260713-210014-Chrome.jpg"
    ],
    description: `Product parameters:
    Wireless IR Remote Control (5–8m range).
    Built-in timer: 5 / 15 / 30 / 60 / 120 minutes.
    Supports E27 bulbs up to 60W.
    Converts B22 socket to E27 bulb holder.
    Plug & Play installation — no tools needed.
    Includes CR2025 battery-powered remote.
    
    How It Works:
    Screw the adapter into your B22 socket.
    Attach any compatible E27 bulb.
    Use the remote to turn on/off or set timer.
    Enjoy wireless control instantly.`,
    stock: 24,
    badge: "Smart Gadget"
  },

  {
    id: 7,
    name: "AULA F2066-II USB Wired Mechanical Gaming Keyboard — Full-Size RGB Backlit 104-Key Mechanical Keyboard with Blue Switches",
    category: "Keyboard",
    price: 2580.00,
    oldPrice: 2650,
    images: [
      "https://i.imgur.com/TwsE0MX.png",
      "https://i.imgur.com/ZWmQCvp.png",
      "https://i.imgur.com/3kO2YW9.png",
      "https://i.imgur.com/h9wR057.png"
    ],
    description: `Brand: AULA
Model: F2066-II Gaming Mechanical Keyboard.
Connection: Wired USB.
Keyboard Type: Mechanical (Blue switches).
Number of Keys: 104 (full-size).
Backlight: RGB / Rainbow effects (~20 modes).
Switch Life: ~60 million keystrokes`,
    stock: 10,
    badge: "Sale"
  },

  {
    id: 8,
    name: "AULA AC101 USB Wired Keyboard & Mouse Combo — 104-Key Keyboard with 1200 DPI Optical Mouse (Black)",
    category: "Keyboard",
    price: 900.00,
    oldPrice: 1150,
    images: [
      "https://i.imgur.com/xoAhwSB.png",
      "https://i.imgur.com/XOWwa8S.png",
      "https://i.imgur.com/eW2XGsT.png"
    ],
    description: `Brand: AULA.
Model: AC101 USB Keyboard & Mouse Combo.
Keyboard Layout: Full-size (104 keys).
Switch Type: Membrane.
Keyboard Key Life: ~10 million keystrokes.
Mouse Type: Optical.
Mouse DPI: 1200.
Mouse Buttons: 3 (Left, Right, Scroll).
Connection: USB 2.0 wired`,
    stock: 10,
    badge: "Combo"
  }
];

/* Store settings */
const STORE_SETTINGS = {
  storeName: "TechKitch",
  currencySymbol: "৳",
  freeShippingThreshold: 2000,
  shippingFee: 150,
  taxRate: 0.00
};

// Global safety fallback to set primary image
PRODUCTS.forEach(product => {
  if (product.images && product.images.length > 0) {
    product.image = product.images[0];
  }
});
