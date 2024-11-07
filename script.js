let currentQuestionIndex = 0;
let selectedSubject = '';
let questions = [];
let userAnswers = []; // Array untuk menyimpan jawaban pengguna

const subjects = {
    matematika: [
       
            { 
                question: "1. Ryan berinvestasi di bank swasta sebanyak Rp5.000.000. Apabila Ryan hendak mengambil uang tabungannya setelah 3 tahun dengan jumlah bunga bank 10% per tahun, berapa saldo akhirnya?", 
                options: [
                    "A. Rp 6.500.000", 
                    "B. Rp 6.300.000", 
                    "C. Rp 7.500.000", 
                    "D. Rp 6.100.000", 
                    "E. Rp 7.250.000"
                ], 
                answer: "A. Rp 6.500.000" 
            },
            { 
                question: "2. Sebuah titik A di koordinat kartesius berada di A(2, 3). A direflesikan ke sumbu x, lalu di translasi dengan (4, 5). Terakhir, di refleksikan dengan sumbu y. Yang manakah A''?", 
                options: [
                    "A. -6, 2", 
                    "B. 6, -2", 
                    "C. 6, 2", 
                    "D. -6, -2", 
                    "E. -2, 6"
                ], 
                answer: "A. -6, 2" 
            },
            { 
                question: "3. Erika menabung di bank sebesar Rp 100.000.000 selama 10 bulan dengan suku bunga sederhana sebesar 12% per tahun. Nilai tabungan Erika setelah 10 bulan adalah...", 
                options: [
                    "A. Rp 100.250.000", 
                    "B. Rp 110.000.000", 
                    "C. Rp 110.400.000", 
                    "D. Rp 100.000.000", 
                    "E. Rp 120.500.000"
                ], 
                answer: "B. Rp 110.000.000" 
            },
            { 
                question: "4. Hanni menabung sejumlah uang di Bank sebesar Rp 100.000.000. Dia mengharapkan uang tersebut akan menjadi Rp 103.200.000 setelah 4 bulan, maka berapa suku bunga per tahun yang diharapkan oleh Hanni...", 
                options: [
                    "A. 0,8%", 
                    "B. 0,16%", 
                    "C. 1,6%", 
                    "D. 9,6%", 
                    "E. 16%"
                ], 
                answer: "D. 9,6%" 
            },
            { 
                question: "5. Jika diketahui f(x) = x+1 dan f(g(x)) = 3x² + 4.g(x), maka pernyataan yang benar di bawah ini adalah...", 
                options: [
                    "A. g(x) = 3(x²+1)", 
                    "B. g(x) = 2(x²+1)", 
                    "C. g(x) = 3(x²+2)", 
                    "D. g(x) = 5(x²+1)", 
                    "E. g(x) = 2(x²+2)"
                ], 
                answer: "A. g(x) = 3(x²+1)" 
            },
            { 
                question: "6. Fungsi invers dari f(x)=(3x+4)/(2x-1) adalah...", 
                options: [
                    "A. f¯¹(x) = (4+2x)/(2x-3)", 
                    "B. f¯¹(x) = (4+x)/(x-3)", 
                    "C. f¯¹(x) = (4+x)/(2x-6)", 
                    "D. f¯¹(x) = (2+x)/(2x-3)", 
                    "E. f¯¹(x) = (4+x)/(2x-3)"
                ], 
                answer: "E. f¯¹(x) = (4+x)/(2x-3)" 
            },
            { 
                question: "7. Diketahui f(x) = 2x + 8 dan g(x) = 4x - 8, maka (f o g)(x) adalah?", 
                options: [
                    "A. (f o g)(x) = 7x - 7", 
                    "B. (f o g)(x) = 7x - 8", 
                    "C. (f o g)(x) = 8x - 7", 
                    "D. (f o g)(x) = 8x - 8", 
                    "E. (f o g)(x) = 8x - 6"
                ], 
                answer: "D. (f o g)(x) = 8x - 8" 
            },
            { 
                question: "8. Diketahui f (x) = 3x + 3 dan g (x) = 2x berapa nilai dari (f o g) (2)?", 
                options: [
                    "A. 11", 
                    "B. 12", 
                    "C. 13", 
                    "D. 14", 
                    "E. 15"
                ], 
                answer: "E. 15" 
            },
            { 
                question: "9. Jika f(x)=x2−3x+2f(x) = x^2 – 3x + 2f(x)=x2−3x+2, berapakah nilai f(3)?", 
                options: [
                    "A. 2", 
                    "B. 4", 
                    "C. 6", 
                    "D. 8", 
                    "E. 10"
                ], 
                answer: "A. 2" 
            },
            { 
                question: "10. Berikut yang termasuk fungsi injektif adalah...", 
                options: [
                    "A. f(x) = x²", 
                    "B. f(x) = x + 1", 
                    "C. f(x) = |x|", 
                    "D. f(x) = x³", 
                    "E. B dan D"
                ], 
                answer: "E. B dan D" 
            },
            { 
                question: "11. Jika f: R → R didefinisikan f(x) = x², maka kodomainnya adalah...", 
                options: [
                    "A. R", 
                    "B. R+", 
                    "C. R-", 
                    "D. R3", 
                    "E. RR"
                ], 
                answer: "B. R+" 
            },
            { 
                question: "12. susunan bilangan yang disusun ke dalam baris dan kolom disebut...", 
                options: [
                    "A. persegi", 
                    "B. matriks", 
                    "C. transformasi", 
                    "D. simetris", 
                    "E. relasi"
                ], 
                answer: "B. matriks" 
            },
            { 
                question: "13. Toko buku “melawai” melayani penjualan berbagai jenis buku. Adapun pembeli buku dari segala kalangan usia. Toko buku “melawai” berhasil menjual buku non fiksi sebanyak 75 buah dari usia remaja, 45 buah dari usia dewasa. Sedangkan buku literatur sains sebanyak 31 buah dari usia remaja dan 53 dari usia dewasa. Untuk buku bisnis sebanyak 25 buah dari usia remaja dan 72 dari usia dewasa. Matriks yang menyajikan penjualan toko buku “melawai” adalah.....", 
                options: [
                    "A.  {75, 31, 25, 45, 53, 72}", 
                    "B.  {75, 31, 25, 45, 53, 71}", 
                    "C.  {75, 31, 25, 45, 52, 72}", 
                    "D.  {75, 31, 25, 35, 53, 72}", 
                    "E.  {75, 21, 25, 45, 53, 72}"
                ], 
                answer: "A.  {75, 31, 25, 45, 53, 72}" 
            },
            { 
                question: "14. Matriks 3x3 = {1, 0, 0, 0, 1, 0, 0, 0, 1}. Jenis matrik tersebut adalah .....", 
                options: [
                    "A. Matriks baris", 
                    "B. Matriks kolom", 
                    "C. Matriks persegi", 
                    "D. Matriks identitas", 
                    "E. Matriks segitiga"
                ], 
                answer: "D. Matriks identitas" 
            },
            { 
                question: "15. Matriks yang mengalami pertukaran elemen dari baris menjadi kolom atau sebaliknya disebut", 
                options: [
                    "A. transpose", 
                    "B. adjoin", 
                    "C. invers", 
                    "D. determinan", 
                    "E. identitas"
                ], 
                answer: "A. transpose" 
            }
        
    ],
    sosiologi: [
        { 
            question: "1. Himpunan kesatuan-kesatuan manusia yang hidup bersama disebut...", 
            options: [
                "A. faktor sosial", 
                "B. masalah sosial", 
                "C. kelompok sosial", 
                "D. tertib sosial", 
                "E. makhluk sosial"
            ], 
            answer: "C. kelompok sosial" 
        },
        { 
            question: "2. Agar disebut sebagai suatu kelompok sosial, himpunan manusia harus memiliki syarat antara lain...", 
            options: [
                "A. bersistem dan berproses", 
                "B. ada seorang pemimpin yang menaunginya", 
                "C. ada aturan yang harus ditegakkan", 
                "D. ada pembagian kerja yang jelas", 
                "E. ada norma yang mengikat"
            ], 
            answer: "A. bersistem dan berproses" 
        },
        { 
            question: "3. Pada prinsipnya kelompok sosial adalah...", 
            options: [
                "A. orang-orang yang memiliki kerjasama dalam pemenuhan kebutuhan", 
                "B. orang-orang yang memiliki identitas yang sama", 
                "C. sejumlah orang yang saling berhubungan secara teratur", 
                "D. kumpulan data-data orang yang mempunyai nasib yang sama", 
                "E. himpunan kegemaran yang bersifat sementara"
            ], 
            answer: "C. sejumlah orang yang saling berhubungan secara teratur" 
        },
        { 
            question: "4. Perbedaaan gemeinschaft dengan gesellschaft adalah pada tingkat hubungan antar anggotanya, yaitu...", 
            options: [
                "A. pada gemeinschaft hubungan antar anggotanya erat",
                "B. pada gesellschaft hubungan antar anggotanya erat",
                "C. pada gemeinschaft hubungan antar anggotanya biasa saja",
                "D. pada gesellschaft hubungan pada antar anggotanya membanggakan",
                "E. pada gemeinschaft dan gesellschaft hubungannya sementara",
            ], 
            answer: "A. pada gemeinschaft hubungan antar anggotanya erat" 
        },
        { 
            question: "5. Kelompok sosial adalah himpunan atau kesatuan manusia yang hidup bersama, saling berhubungan, saling mempengaruhi dan memiliki kesadaran untuk saling menolong. Pengertian Kelompok Sosial tersebut selaras dengan pendapat...", 
            options: [
                "A. Roucek and Warren", 
                "B. Soerjono Soekanto", 
                "C. Robert K. Merton", 
                "D. Paul B. Horton", 
                "E. Max Weber"
            ], 
            answer: "B. Soerjono Soekanto " 
        },
        { 
            question: "6. Berikut ini contoh kelompok sosial yang dasar pembentukannya melalui faktor geografis yaitu...", 
            options: [
                "A. Kelompok pedagang sepatu", 
                "B. Kelompok nelayan desa Suka Bakti", 
                "C. Kelompok perantau Batak", 
                "D. Kelompok pecinta alam", 
                "E. Kelompok penghobi anggar"
            ], 
            answer: "B. Kelompok nelayan desa Suka Bakti" 
        },
        { 
            question: "7. Yang dimaksud dengan segmental menurut Emile Durkheim adalah...", 
            options: [
                "A. masyarakat pedesaan yang sangat sederhana", 
                "B. masyarakat yang masih sederhana", 
                "C. masyarakat pedesaan dengan pola pertanian yang sederhana", 
                "D. masyarakat kota dengan kemjemukan", 
                "E. masyarakat kota metropolitan"
            ], 
            answer: "B. masyarakat yang masih sederhana" 
        },
        { 
            question: "8. Kebodohan dapat disebabkan oleh...?", 
            options: [
                "A. Pendidikan yang tinggi", 
                "B. Rendahnya pemerataan pendidikan", 
                "C. Stabilitas ekonomi", 
                "D. Kesehatan yang baik", 
                "E. Kemajuan teknologi"
            ], 
            answer: "B. Rendahnya pemerataan pendidikan" 
        },
        { 
            question: "9. Contoh kelompok yang terikat oleh solidaritas organis yaitu", 
            options: [
                "A. kelompok belajar siswa", 
                "B. organisasi profesi", 
                "C. kelompok klub matematika",
                "D. kelompok pemain musik",
                'E. kelompok penari'
            ], 
            answer: "B. organisasi sekolah"
        },
        { 
            question: "10. Kekerabatan pada masyarakat Batak yang tetap menjaga nama marga sebagai wujud dari satu keturunan yang sama, dalam pandangan Tonnies termasuk kelompok...", 
            options: [
                "A. gemeinschaft", 
                "B. geselschaft", 
                "C. gemeinschaft by blood",
                "D. gemeinschaft by place",
                "E. gemeinschaft by mind"
            ], 
            answer: "C. gemeinschaft by blood"
        },
        {
            question: "11. Menurut Ferdinand Tonnies ciri-ciri paguyuban adalah...",
            options: [
                "A. intim, publik, inklusif",
                "B. intim, prifat , eksklusif",
                "C. minim prifat, delutif",
                "D. intim, prifat, inklusif",
                "E. intim, prifat, delutif"
            ],
            answer: "B. intim, prifat , eksklusif"
        },    
        {
            question: "12. Kelompok patembayan adalah kelompok sosial yang bersifat...",
            options: [
                "A. sementara",
                "B. abadi",
                "C. nasionalis",
                "D. kedaerahan",
                "E. musiman"
            ],
            answer: "A. sementara"
        },
        {
            question: "13. Berikut ini contoh kelompok sosial yang sifatnya sementara, yaitu...",
            options: [
                "A. orang-orang berdemonstrasi menuntut upah dinaikkan",
                "B. orang-orang dalam satu lingkungan RT yang sedang kerja bakti",
                "C. orang-orang berkerumun melihat kecelakaan lalu lintas",
                "D. OSIS rapat membahas program kerja",
                "E. kelompok ibu-ibu arisan RW"
            ],
            answer: "C. orang-orang berkerumun melihat kecelakaan lalu lintas"
        },
        {
            question: "14. Di bawah ini yang termasuk kelompok tidak teratur adalah...",
            options: [
                "A. kelompok formal dan informal",
                "B. kelompok sendiri dan kelompok luar",
                "C. sekunder dan primer",
                "D. kerumunan, massa, dan publik",
                "E. paguyuban dan patembayan"
            ],
            answer: "D. kerumunan, massa, dan publik"
        },
        {
            question: "15. Suatu kondisi yang tidak sesuai antara harapan dan kenyataan didefinisikan sebagai...",
            options: [
                "A. peluang",
                "B. hambatan",
                "C. masalah",
                "D. anugerah",
                "E. bahaya"
            ],
            answer: "C. masalah"
        }
    ],
    sejarah: [
            { 
                question: "1. Apa penyebab utama terjadinya Perang Dunia I?", 
                options: [
                    "A. Perebutan wilayah di Asia", 
                    "B. Konflik antara ideologi komunis dan kapitalis",
                    "C. Pembunuhan Archduke Franz Ferdinand dari Austria", 
                    "D. Serangan Jepang ke Pearl Harbor", 
                    "E. Invasi Jerman ke Polandia"
                ], 
                answer: "C. Pembunuhan Archduke Franz Ferdinand dari Austria", 
            },
            { 
                question: "2. Apa tujuan utama didirikannya organisasi Budi Utomo pada tahun 1908?", 
                options: [
                    "A. Menuntut kemerdekaan Indonesia", 
                    "B. Meningkatkan kesejahteraan rakyat melalui pendidikan", 
                    "C. Melawan penjajahan Jepang", 
                    "D. Menyebarkan agama Islam", 
                    "E. Membentuk organisasi politik pertama di Indonesia"
                ], 
                answer: "B. Meningkatkan kesejahteraan rakyat melalui pendidikan" 
            },
            { 
                question: "3. Apa yang dimaksud dengan politik etis yang diterapkan di Hindia Belanda?", 
                options: [
                    "A. Kebijakan penjajahan yang keras", 
                    "B. Kebijakan yang berfokus pada kesejahteraan penduduk pribumi", 
                    "C. Pembentukan sistem pendidikan ala Barat", 
                    "D. Kebijakan eksploitasi sumber daya alam", 
                    "E. Sistem pemerintahan monarki di Hindia Belanda"
                ], 
                answer: "B. Kebijakan yang berfokus pada kesejahteraan penduduk pribumi" 
            },
            { 
                question: "4. Siapa yang dianggap sebagai tokoh utama pergerakan nasional Indonesia melalui tulisannya di koran Indonesia Merdeka?", 
                options: [
                    "A. Soekarno", 
                    "B. Hatta", 
                    "C. Tan Malaka", 
                    "D. Sutan Syahrir", 
                    "E. Ki Hajar Dewantara"
                ], 
                answer: "C. Tan Malaka" 
            },
            { 
                question: "5. Perjanjian Renville terjadi setelah peristiwa...", 
                options: [
                    "A. Perang Dunia I", 
                    "B. Proklamasi Kemerdekaan", 
                    "C. Agresi Militer Belanda I", 
                    "D. Agresi Militer Belanda II", 
                    "E. Konferensi Meja Bundar"
                ], 
                answer: "C. Agresi Militer Belanda I" 
            },
            { 
                question: "6. Kapan Jepang menyerah kepada Sekutu yang mengakhiri Perang Dunia II?", 
                options: [
                    "A. 7 Desember 1941", 
                    "B. 6 Agustus 1945", 
                    "C. 9 Agustus 1945", 
                    "D. 15 Agustus 1945", 
                    "E. 17 Agustus 1945"
                ], 
                answer: "D. 15 Agustus 1945" 
            },
            { 
                question: "7. Konferensi Asia Afrika yang diadakan pada tahun 1955 berlangsung di kota...", 
                options: [
                    "A. Jakarta", 
                    "B. Yogyakarta", 
                    "C. Bandung", 
                    "D. Surabaya", 
                    "E. Medan"
                ], 
                answer: "C. Bandung" 
            },
            { 
                question: "8. Organisasi kepemudaan yang pertama kali muncul pada masa pergerakan nasional adalah...", 
                options: [
                    "A. Jong Java", 
                    "B. Jong Sumatra", 
                    "C. Budi Utomo", 
                    "D. Perhimpunan Indonesia", 
                    "E. Jong Celebes"
                ], 
                answer: "C. Budi Utomo" 
            },
            { 
                question: "9. Siapakah yang mengumumkan Deklarasi Kemerdekaan Indonesia pada 17 Agustus 1945?", 
                options: [
                    "A. Bung Hatta", 
                    "B. Jenderal Sudirman", 
                    "C. Soekarno", 
                    "D. Ki Hajar Dewantara", 
                    "E. Sutan Syahrir"
                ], 
                answer: "C. Soekarno" 
            },
            { 
                question: "10. Siapa yang dijuluki sebagai 'Bapak Pendidikan Indonesia'?", 
                options: [
                    "A. Soekarno", 
                    "B. Ki Hajar Dewantara", 
                    "C. Sutan Syahrir", 
                    "D. Raden Ajeng Kartini", 
                    "E. Bung Hatta"
                ], 
                answer: "B. Ki Hajar Dewantara" 
            },
            { 
                question: "11. Apa nama perjanjian antara Belanda dan Inggris yang menandai penyerahan kekuasaan Belanda di Indonesia pada tahun 1814?", 
                options: [
                    "A. Perjanjian Giyanti", 
                    "B. Perjanjian Bongaya", 
                    "C. Traktat Sumatera", 
                    "D. Perjanjian London", 
                    "E. Perjanjian Renville"
                ], 
                answer: "D. Perjanjian London" 
            },
            { 
                question: "12. Apa tujuan utama dilakukannya Ekspedisi Pamalayu oleh Kerajaan Singasari?", 
                options: [
                    "A. Menaklukkan wilayah Sumatera", 
                    "B. Menyebarkan agama Hindu", 
                    "C. Menjalin hubungan diplomatik dengan Cina", 
                    "D. Menguasai perdagangan rempah-rempah", 
                    "E. Melawan invasi dari Kerajaan Mongol"
                ], 
                answer: "A. Menaklukkan wilayah Sumatera" 
            },
            { 
                question: "13. Siapakah pemimpin perang Diponegoro yang berlangsung antara tahun 1825-1830?", 
                options: [
                    "A. Pangeran Antasari", 
                    "B. Pangeran Diponegoro", 
                    "C. Sultan Agung", 
                    "D. Sultan Hasanuddin", 
                    "E. Ki Hajar Dewantara"
                ], 
                answer: "B. Pangeran Diponegoro" 
            },
            { 
                question: "14. Kebijakan yang dilakukan oleh VOC untuk menguasai perdagangan di Nusantara dikenal dengan...", 
                options: [
                    "A. Devide et Impera", 
                    "B. Politik Etis", 
                    "C. Politik Ekonomi", 
                    "D. Sistem Tanam Paksa", 
                    "E. Kerjasama bilateral"
                ], 
                answer: "A. Devide et Impera", 
            },
            { 
                question: "15. Negara pertama yang mengakui kemerdekaan Indonesia secara de facto adalah...", 
                options: [
                    "A. Amerika Serikat", 
                    "B. Mesir", 
                    "C. India", 
                    "D. Australia", 
                    "E. Uni Soviet"
                ], 
                answer: "B. Mesir" 
            }
        ]
};

function goToLogin() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}

function goToSubject() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('subject-page').style.display = 'block';
}

function startExam(subject) {
    selectedSubject = subject;
    questions = subjects[subject];
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null); // Inisialisasi array untuk menyimpan jawaban
    document.getElementById('subject-page').style.display = 'none';
    document.getElementById('exam-page').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Soal ${currentQuestionIndex + 1}`;
    document.getElementById('question').innerText = question.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((option) => {
        optionsDiv.innerHTML += `<label><input type="radio" name="option" value="${option}" onchange="saveAnswer('${option}')"> ${option}</label>`;
    });
    document.getElementById('prev-button').style.display = currentQuestionIndex === 0 ? 'none' : 'inline';
    document.getElementById('next-button').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline';
    document.getElementById('submit-button').style.display = currentQuestionIndex === questions.length - 1 ? 'inline' : 'none';
}

function saveAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer; // Simpan jawaban pengguna
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function submitExam() {
    let correctAnswers = 0;
    let totalQuestions = questions.length;

    for (let i = 0; i < totalQuestions; i++) {
        if (userAnswers[i] === questions[i].answer) {
            correctAnswers++;
        }
    }

    document.getElementById('exam-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';
    document.getElementById('result').innerText = `Anda mendapatkan ${(6.6666666667 * correctAnswers).toFixed(2)} .`;
}

function restartExam() {
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('welcome-page').style.display = 'block';
}