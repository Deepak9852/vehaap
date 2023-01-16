const carData = [
    {
        "_id":1,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":" Maruti Suzuki",
        "car_name":"Maruti Suzuki Swift",
        "image": "https://i.ibb.co/p4MPbhp/Maruti-suzuki-swift.jpg"
    },

    {
        "_id":2,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":" Hyundai",
        "image": "https://i.ibb.co/Hg7PffL/Hyundai-i20.jpg",
        "car_name":"Hyundai i20"
    },

    {
        "_id":3,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":" Maruti Suzuki",
        "image": "https://i.ibb.co/93cphh5/Maruti-Suzuki-Baleno.jpg",
        "car_name":"Maruti Suzuki Baleno"
    },

    {
        "_id":4,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":"Tata",
        "image": "https://i.ibb.co/rxhxdZ2/Tata-Altroz.jpg",
        "car_name":"Tata Altroz"
    },

    {
        "_id":5,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":"Toyota",
        "image": "https://i.ibb.co/kD0NTY0/Toyota-Glanza.jpg",
        "car_name": "Toyota Glanza"
    },

    {
        "_id":6,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":"Renault",
        "image": "https://i.ibb.co/CvJWGVr/Renault-Kwid.jpg",
        "car_name":"Renault Kwid"
    },


    {
        "_id":7,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":"Citreon",
        "image": "https://i.ibb.co/0yGjNts/Citreon-c3.webp",
        "car_name":"Citreon C3"
    },

    {
        "_id":8,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":"Tata",
        "image": "https://i.ibb.co/kDsGq0y/Tata-Tiago-ev.jpg",
        "car_name":"Tata Tiago Ev"
    },

    {
        "_id":9,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":"Tata",
        "image": "https://i.ibb.co/YcKcTvB/Tata-punch.jpg",
        "car_name":"Tata Punch"
    },

    {
        "_id":10,
        "carType_name":"Hatchback",
        "cartype_id":1,
        "brand":" Maruti Suzuki",
        "image": "https://i.ibb.co/VQHRhYY/Maruti-Suzuki-Celerio.jpg",
        "car_name":"Maruti Suzuki Celerio"
    },

    {
        "_id":11,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":" Hyundai",
        "image": "https://i.ibb.co/j8wN9LQ/Hyundai-Verna.jpg",
        "car_name":"Hyundai Verna"
    },

    {
        "_id":12,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"Skoda",
        "image": "https://i.ibb.co/9t0H99Y/Skoda-slavia.webp",
        "car_name":"Skoda Salavia"
    },

    {
        "_id":13,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"Volkswagen",
        "image": "https://i.ibb.co/Tvm3b78/Volkswagen-virtus.webp",
        "car_name":"Volkswagen Virtus"
    },

    {
        "_id":14,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":" Maruti Suzuki",
        "image": "https://i.ibb.co/1qnp7Xf/Maruti-sduzuki-Ciaz.jpg",
        "car_name":"Maruti Suzuki Ciaz"
    },

    {
        "_id":15,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"BMW",
        "image": "https://i.ibb.co/y41T6Qg/BMW-3-Series.webp",
        "car_name":"BMW 3 Series"
    },

    {
        "_id":16,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"Mercedes",
        "image": "https://i.ibb.co/9yCtksV/mercedes-benz-c-class-selenite-grey.jpg",
        "car_name":"Mercedes-Benz C-Class "
    },

    {
        "_id":17,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"Jaguar",
        "image": "https://i.ibb.co/FhMsDqD/Jaguar-XF.webp",
        "car_name":"Jaguar XF"
    },

    {
        "_id":18,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"HONDA",
        "image": "https://i.ibb.co/W08cs64/Hondacity.jpg",
        "car_name":"HONDA City"
    },

    {
        "_id":19,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"HONDA",
        "image": "https://i.ibb.co/qNhz0wm/Honda-City-5th-gen.jpg",
        "car_name":"HONDA All New City"
    },

    {
        "_id":20,
        "carType_name":"Sedan",
        "cartype_id":2,
        "brand":"Toyota",
        "image": "https://i.ibb.co/pvvD9XY/Toyota-Camry.webp",
        "car_name":"Toyota Camry"
    },


    {
        "_id":21,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":" Hyundai",
        "image": "https://i.ibb.co/hDjx1Ck/Hyundai-Creta.webp",
        "car_name":"Hyundai Creta"
    },

    {
        "_id":22,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"Toyota",
        "image": "https://i.ibb.co/ww8vB5N/Toyota-Fortuner.webp",
        "car_name":"Toyota Fortuner"
    },

    {
        "_id":23,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"Mahindra",
        "image": "https://i.ibb.co/HLcPx6k/Scorpio-n.webp",
        "car_name":"Mahindra Scorpio"
    },

    {
        "_id":24,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":" Maruti Suzuki",
        "image": "https://i.ibb.co/ZWpPSCR/maruti-suzuki-grand-vitara.webp",
        "car_name":"Maruti Suzuki Grand Vitara"
    },

    {
        "_id":25,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"Toyota",
        "image": "https://i.ibb.co/W5Kqgqj/Toyota-urban-cruiser.webp",
        "car_name":"Toyota Urban Crusier"
    },

    {
        "_id":26,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"Mahindra",
        "image": "https://i.ibb.co/tCyXVKr/Xuv700.jpg",
        "car_name":"Mahindra XUV700"
    },

    {
        "_id":27,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"Tata",
        "image": "https://i.ibb.co/yN0H5F4/Tata-Harrier.webp",
        "car_name":"Tata Harrier"
    },

    {
        "_id":28,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"Mahindra",
        "image": "https://i.ibb.co/fX9w48x/Mahindra-thar.webp",
        "car_name":"Mahindra Thar"
    },

    {
        "_id":29,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"MG",
        "image": "https://i.ibb.co/375cDdx/MG-Astor.webp",
        "car_name":"MG Astor"
    },

    {
        "_id":30,
        "carType_name":"SUV",
        "cartype_id":3,
        "brand":"Tata",
        "image": "https://i.ibb.co/yqBwRb9/Tata-Safari.jpg",
        "car_name":"Tata Safari"
    }];

    export default carData;


