'use strict';

/**
 * @ngdoc directive
 * @name lyricCloudApp.directive:wcAutocomplete
 * @description
 * # wcAutocomplete
 */
angular.module('lyricCloudApp')
    .directive('wcAutocomplete', function() {
        return {
            template: '<div></div>',
            restrict: 'EACM',
            link: function postLink(scope, element, attrs) {
                $(function() {
                    //TODO change to actual files
                    var availableTags = [
                   'Soo Ling Lim',
            'Bentley',
            'Kanakam',
            'Ishikawa',
            'Barr',
            'Harman',
            'McMinn',
            'Shahbaz',
            'Yoo',
            'Carvajal',
            'Moreno',
'Sanchez-Segure',
'Seffah',
'Chidamber',
'Kemerer',
'Mens',
'Tourwe',
'Minghui Zhuo',
'Mockus',
'Aleti',
'Buhnova',
'Grunske',
'Koziolek',
'Meedeniya',
'Yepang Liu',
'Chang Xu',
'Jian Lu',
'Minku',
'Sudholt',
'Xin Yao',
'Jorgensen',
'Shepperd',
'Kitchenham',
'Pfleeger',
'Pickard',
'Jones',
'Hoaglin',
'El Emam',
'Rosenberg',
'Thimbleby',
'Mangano',
'LaToza',
'Petre',
'van der Hoek',
'Hall',
'Beecham',
'Bowes',
'Gray',
'Counsell',
'Kamiya',
'Kusumoto',
'Inoue',
'Brosig',
'Meier',
'Becker',
'Koziolek',
'Kounev',
'Galster',
'Weyns',
'Tofan',
'Michalik',
'Avgeriou',
'Scandariato',
'Walden',
'Hovsepyan',
'Joosen',
'Medvidovic',
'Taylor',
'Boehm',
'Ross',
'Unterkalmsteiner',
'Gorschek',
'Islam',
'Chow Kian Cheng',
'Permadi',
'Feldt',
'Paulk',
'Hoda',
'Noble',
'Yue Jia',
'Harman',
'Bansiya',
'Davis',
'Denning',
'McCabe',
'Rothermel',
'Untch',
'Chengyun Chu',
'Harrold',
'Balsamo',
'di Marco',
'Inverardi',
'Simeoni',
'Seonah Lee',
'Sungwon Kang',
'Sunghun Kim',
'Belli',
'Beyazit',
'Bennaceur',
'Issarny',
'Wei-Neng Chen',
'Jun Zhang',
'Basili',
'Briand',
'Melo',
'Seaman',
'Albrecht',
'Gaffney',
'John',
'Cheng Zhang',
'Budgen',
'Madeyski',
'Orzeszyna',
'Torkar',
'Jozala',
'Yi Liu',
'Khoshgoftaar',
'Seliya',
'Dobrica',
'Niemela',
'Kessentini',
'Sahraoui',
'Bechikh',
'Ouni',
'Kramer',
'Magee',
'Meron',
'Xie',
'Murphy-Hill',
'Zimmermann',
'Bird',
'Nagappan',
'Liangzhao',
'Benatallah',
'Ngu',
'Dummas',
'Kalagnanam',
'Syer',
'Adams',
'Hassan',
'Menzies',
'Greenwald',
'Frank',
'JaeSeung Song',
'Cadar',
'Pietzuch',
'Ying-Dar Lin',
'Rojas',
'Chu',
'Yuan-Cheng Lai',
'Kung-Kiu Lau',
'Zheng Wang',

'Pacheco-Sanchez Sergio',
'Casale Giuliano',
'Issarny Valerie',
'Hierons Robert',
'Staats Matt',
'Mendes Jorge',
'Pesant Gilles',
'Gueheneuc Yann-Gael',
'Sunghun Kim',
'Sungwon Kang',
'Cunha Jacome',
'Fernandes Joao Paulo',
'Seonah Lee',
'Sakti Abdelilah',
'Bennaceur Amel',
'Perez Juan',
'Saraiva Joao',


                        'ActionScript',
                        'AppleScript',
                        'Asp',
                        'BASIC',
                        'C',
                        'C++',
                        'Clojure',
                        'COBOL',
                        'ColdFusion',
                        'Erlang',
                        'Fortran',
                        'Groovy',
                        'Haskell',
                        'Java',
                        'JavaScript',
                        'Lisp',
                        'Perl',
                        'PHP',
                        'Python',
                        'Ruby',
                        'Scala',
                        'Scheme',

            'network',
            'image',
            'sensor',
            'LTE',
            'wireless',
            'communication',
            'security',
            'robot',
            'inverter',
            'antenna',
            'cloud',
            'MIMO',
            'power system',
            'cloud computing',
            'wireless sensor network',
            'radar',
            'solar',
            'image processing',
            'data mining',
            'big data',
            'neural network',
            'ODFM',
            'electronics',
            'smart grid',
            'FPGA',
        //ieeexplore.ieee.org/xpl/topAccessedArticles.jsp?punumber=78

            'Arulampalam',
'Maskell',
'Gordon',
'Clapp',
'Aharon',
'Elad',
'Burckstein',
'Lei Huang',
'Jin Zhang',
'Zhongfu Ye',
'Spencer',
'Swindlehurst',
'Haardt',
'Shihao Ji',
'Ya Xue',
'Carin',
'Mallat',
'Zhang',
'Masood',
'Afify',
'Al-Naffouri',
'Junxiao',
'Babu',
'Palomar',
'Facchinei',
'Scutari',
'Sagratella',
'Jin Ho Choi',
'Yoo',
'Xingguo Li',
'Haupt',
'Han-Sol Lee',
'Seong-Eun Kim',
'Jae-Woo Lee',
'Woo-Jin Song',
'He Chen',
'Yonghui Li',
'Luiz Rebelatto',
'Uchoa-Filho',
'Xiaojun Zhang',
'Zishu He',
'Rayman-Bacchus',
'Jihong Yan',
'Gan Zheng',
'Quang-Doanh Vu',
'Le-Nam Tran',
'Juntti',
'Een-Kee Hong',
'Xu Tang',
'Xin Chen',
'McDonald',
'Mahler',
'Tharmarasa',
'Duarte',
'Eldar',
'Bandiera',
'Coluccia',
'Ricci',
'van de Beek',
'Sandell',
'Borjesson',
'Chunli Guo',
'Davies',
'Rebeiz',
'Ghadam',
'Valkama',
'Cabric',
'Breloy',
'Ginolhac',
'Pascal',
'Forster',
'Jin Tan',
'Yanting Ma',
'Baron',
'Cambareri',
'Mangia',
'Parescshi',
'Rovatti',
'Setti',
'Jianping He',
'Lingjie Duan',
'Fen Hou',
'Peng Cheng',
'Jiming Chen',
'Meillier',
'Chatelain',
'Michel',
'Ayasso',
'Huang Bai',
'Gang Li',
'Sheng Li',
'Quiwei Li',
'Qianru Jiang',
'Liping Chang',
'Harms',
'Bajwa',
'Calderbank',
'Xiongbin Rao',
'Lau',
'Lopez-Valcarce',
'Villares',
'Riba',
'Gappmair',
'Mosquera',
'Ghauch',
'Taejoon Kim',
'Bengtsson',
'Skoglund',
'Kumar',
'Hegde',
'Gustafsson',
'Gunnarsson',
'Bergman',
'Forssell',
'Jansson',
'Karlsson',
'Nordlund',
'Morgan',
'Zhengxiang Ma',
'Jaehyeong',
'Zierdt',
'Pastalan',
'Vorobyov',
'Gershman',
'Zhi-Quan Luo',
'Jianshu Chen',
'Towfic',
'Sayed',
'Xiongbing Rao',
'Lau',
'An Liu',
'Lau',
'Talebi',
'Pratt',
'Adalbjornsson',
'Sward',
'Wallin',
'Jakobsson',
'Junjie Ma',
'Li Ping',
'Si Qin',
'Amin',
'Ahrabian',
'Mandic',
'Rajan',
'van der Veen',
'Hack',
'Patton',
'Himed',
'Saville',
'Qiang Li',
'Ye Yang',
'Wing-Kin Ma',
'Meilu Lin',
'Jianhua Ge',
'Jingran Lin',
'Dasarathan',
'Tepedelenlioglu',
'Banavar',
'Spanias',
'Xu',
'Tekin',
'van der Schaar',
'Ciuonzo',
'Salvo Rossi',
'Dey',
'Halfond',
''
                    ];

                    $('#topic_title').autocomplete({
                        source: availableTags

                        //TODO change the source
                        //source: '/path/to/ajax_autocomplete.php',
                    });

                });
            }
        };
    });