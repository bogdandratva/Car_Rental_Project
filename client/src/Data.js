export const authenticated = false

export const carToBeRent = false

export const carRented = false

export const carBookings = false

export const paymentHistory = false

export const userData = [
    {
        _id: '1UD45CDF09K45',
        firstName: 'Rohan',
        lastName: 'Kumar',
        email: 'user1@gmail.com',
        password: '123456',
        address: '1B, Vijay khand 1',
        city: 'Lucknow',
        state: 'Uttar Pradesh',
        country: 'India',
        pin: 220001,
        contact: 1898989100,
        profilePicture: 'https://yt3.ggpht.com/a/AATXAJyuoSvqXQn2lBeh1uo_CGeQtCtIEp4Ea76r2A=s900-c-k-c0xffffffff-no-rj-mo',
        occupation: 'Engineer',
    },
    {
        _id: '1UD45CDF09K46',
        firstName: 'John',
        lastName: 'White',
        email: 'user2@gmail.com',
        password: '123456',
        address: '119A swaroop nagar, sector 4',
        city: 'Kanpur',
        state: 'Uttar Pradesh',
        country: 'India',
        pin: 210001,
        contact: 2339891004,
        profilePicture: 'https://static.tvtropes.org/pmwiki/pub/images/polly_characters_thumbs_pierce.jpg',
        occupation: 'Student',
    },
    {
        _id: '1UD45CDF09K47',
        firstName: 'Ishaan',
        lastName: 'Sharma',
        email: 'user3@gmail.com',
        password: '123456',
        address: '234, Badarka',
        city: 'Azamgarh',
        state: 'Uttar Pradesh',
        country: 'India',
        pin: 270001,
        contact: 1233919401,
        profilePicture: 'https://i.pinimg.com/originals/59/fd/1f/59fd1ff8c1e5619f8e96121c194b3c20.jpg',
        occupation: 'Engineer',
    },
]

export const cityOptionAvailable =[
    {
        _id: '1UD45CDF0CY21',
        address: '2b, Car-Rental Office, Gomati Nagar block-B sector-F',
        city: 'Lucknow',
        state: 'Uttar Pradesh',
        country: 'India',
        pin: 226001,
        contact: 3452817321,
    },
    {
        _id: '1UD45CDF0CY22',
        address: '112, Car-Rental Office, Jhakarkati block-2D sector-B',
        city: 'Kanpur',
        state: 'Uttar Pradesh',
        country: 'India',
        pin: 236001,
        contact: 3452817332,
    },
    {
        _id: '1UD45CDF0CY23',
        address: '11B, Car-Rental Office, Canaught Palace block-3N sector-Q',
        city: 'New Delhi',
        state: 'Delhi',
        country: 'India',
        pin: 116001,
        contact: 3452817343,
    },
    {
        _id: '1UD45CDF0CY24',
        address: '123, Car-Rental Office, Indira Nagar block-5E sector-G',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
        pin: 336001,
        contact: 3452817355,
    },
    {
        _id: '1UD45CDF0CY25',
        address: '23-B, Car-Rental Office, Bandra block-8H sector-B',
        city: 'Mumbai',
        state: 'Maharastra',
        country: 'India',
        pin: 146001,
        contact: 3452817773,
    },
]

export const carData = [
    {
        _id: '1CD45CDF09L31',
        carName: 'Tata Harrier',
        carModel: 'XE',
        carCompany: 'Tata',
        carPicture: [
            require('./components/car/img/harrier1.png'),
            require('./components/car/img/harrier2.png'),
        ],
        carCategory: 'SUV',
        carEngine: '1956 cc',
        carMileage: '13.1 to 16.35 kmpl',
        carSeatCapacity: 5,
        carFuelType: 'Disel',
        carTransmission: 'Automatic',
        rentalPriceCharge: '12.5₹/km',
        rentalPrice: 12.5,
    },
    {
        _id: '1CD45CDF09L32',
        carName: 'Mahindra Scorpio N',
        carModel: 'Z2',
        carCompany: 'Mahindra',
        carPicture: [
            'https://prod-preview-auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/hello-test-z101/scorpio_840x560.png?rev=0e100cf22a9648b487ec37c2461a7c70',
        ],
        carCategory: 'SUV',
        carEngine: '2198 cc',
        carMileage: '14.6 to 16.35 kmpl',
        carSeatCapacity: 7,
        carFuelType: 'Disel',
        carTransmission: 'Automatic',
        rentalPriceCharge: '12₹/km',
        rentalPrice: 12,
    },
    {
        _id: '1CD45CDF09L33',
        carName: 'Range Rover Velar',
        carModel: 'R-Dynamic S',
        carCompany: 'Land Rover',
        carPicture: [
            'https://images.dealer.com/ddc/vehicles/2020/Land%20Rover/Range%20Rover%20Velar/SUV/perspective/front-left/2020_76.png',
            'https://carwow-uk-2.imgix.net/model-photos/original/landrover_18rangrorvelarrdynseod1b_lowaggressive_byron-blue.png?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=1536'
        ],
        carCategory: 'SUV',
        carEngine: '1999 cc',
        carMileage: '10.6 to 15.1 kmpl',
        carSeatCapacity: 5,
        carFuelType: 'Disel',
        carTransmission: 'Automatic',
        rentalPriceCharge: '16₹/km',
        rentalPrice: 16,
    },
    {
        _id: '1CD45CDF09L34',
        carName: 'Mahindra Thar',
        carModel: 'AX(O)',
        carCompany: 'Mahindra',
        carPicture: [
            'https://th.bing.com/th/id/R.bd7b5f513fa0fce848f885342f237137?rik=OTOFKmvyWNPX5Q&riu=http%3a%2f%2fprovincialauto.in%2fwp-content%2fuploads%2f2018%2f05%2fthar-png-images.png&ehk=yU8g%2ff410OB94OUi7SzWN52d59XAY7rf6zmt72l5ke4%3d&risl=&pid=ImgRaw&r=0',
            'https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/configuratorassets/pv/thar/variants/lx/red-rage/mahindra-thar-red-rage-01.png?rev=030481520ea445f2b55b464613a7c486'
        ],
        carCategory: 'SUV',
        carEngine: '2184 cc',
        carMileage: '11.6 to 15.7 kmpl',
        carSeatCapacity: 4,
        carFuelType: 'Disel',
        carTransmission: 'Manual',
        rentalPriceCharge: '14.5₹/km',
        rentalPrice: 14.5,
    },
    {
        _id: '1CD45CDF09L35',
        carName: 'Tata Tigor',
        carModel: 'XM',
        carCompany: 'Tata',
        carPicture: [
            'https://th.bing.com/th/id/R.7f4fdd68fa960903afeb9f85ea4253d2?rik=CyCk7KuoumZm2g&riu=http%3a%2f%2fimages.carandbike.com%2fcar-images%2fcolors%2ftata%2ftiago%2ftata-tiago-berry-red.png%3fv%3d23&ehk=gMs9RFZFwGe0Wb62qw2Ha%2bkW%2fRxKI1%2fFesFg%2bkvEjEU%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.e0e7f8c35e39ebe3294adb4b67a61ec7?rik=JI4u5AIjSeJlrA&riu=http%3a%2f%2fwww.pngimagesfree.com%2fCar%2fTata%2fTata-tiago-car-PNG-Transparent-RED.png&ehk=XN1TEva6pAwTew7Bc%2fXSR6oosXS24cBsxrf0YS103F0%3d&risl=&pid=ImgRaw&r=0'
        ],
        carCategory: 'Sedan',
        carEngine: '1199 cc',
        carMileage: '19.1 to 20.35 kmpl',
        carSeatCapacity: 5,
        carFuelType: 'Petrol',
        carTransmission: 'Automatic',
        rentalPriceCharge: '10₹/km',
        rentalPrice: 10,
    },
    {
        _id: '1CD45CDF09L36',
        carName: 'Hyundai Verna',
        carModel: 'SX',
        carCompany: 'Hyundai',
        carPicture: [
            'https://www.pngmart.com/files/22/Hyundai-Verna-PNG-Isolated-File.png',
            'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http:%2f%2fcdni.autocarindia.com%2fGalleries%2f20200331125649_Hyundai_Verna_front-3.jpg&h=578&w=872&c=1'
        ],
        carCategory: 'Sedan',
        carEngine: '1497 cc',
        carMileage: '17.5 to 20.3 kmpl',
        carSeatCapacity: 5,
        carFuelType: 'Petrol',
        carTransmission: 'Automatic & Manual',
        rentalPriceCharge: '11.5₹/km',
        rentalPrice: 11.5,
    },
    {
        _id: '1CD45CDF09L37',
        carName: 'Audi A4',
        carModel: 'Premium Plus',
        carCompany: 'Audi',
        carPicture: [
            'https://carwow-uk-0.imgix.net/model-photos/original/audi_20a4advancedsd5fb_lowaggressive_glacier-white-metallic.png?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=1920',
            'https://th.bing.com/th/id/OIP.3awd0482BSgul161RB-9WAHaE6?pid=ImgDet&rs=1',
            'https://autoroyal.fantasythemes.net/dealership/wp-content/uploads/2018/04/2016-audi-a4-premium-sedan-front-view1.png',
        ],
        carCategory: 'Sedan',
        carEngine: '1998 cc',
        carMileage: '13.5 to 17.1 kmpl',
        carSeatCapacity: 5,
        carFuelType: 'Petrol',
        carTransmission: 'Automatic',
        rentalPriceCharge: '15₹/km',
        rentalPrice: 15,
    },
]