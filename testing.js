'use strict';
// Activate only after the group exists, its privacy settings are verified and
// Play's Alpha track uses it. Do not collect membership data on this static site.
// About is the public joining surface. The group root opens conversations,
// which are deliberately owner-only for this access-list group.
const enrollment = Object.freeze({groupUrl: 'https://groups.google.com/g/ksplannertesters/about', leaveUrl: 'https://groups.google.com/g/ksplannertesters/membership', storeUrl: 'https://play.google.com/store/apps/details?id=com.tkmworkshop.kscalculator', testUrl: 'https://play.google.com/apps/testing/com.tkmworkshop.kscalculator'});
const fields = ['title','intro','pending','requirements','join','groupHelp','install','testHelp','try','tryHelp','help','privacy','policy'];
const languages = [
  ['en','English'],['es','Español'],['fr','Français'],['de','Deutsch'],
  ['pt','Português'],['it','Italiano'],['pl','Polski'],['tr','Türkçe'],
  ['ru','Русский'],['ar','العربية'],['th','ไทย'],['vi','Tiếng Việt'],
  ['id','Bahasa Indonesia'],['ko','한국어'],['ja','日本語'],['zh','简体中文'],['zh-TW','繁體中文']
];
const languageLabels={en:'Language',es:'Idioma',fr:'Langue',de:'Sprache',pt:'Idioma',it:'Lingua',pl:'Język',tr:'Dil',ru:'Язык',ar:'اللغة',th:'ภาษา',vi:'Ngôn ngữ',id:'Bahasa',ko:'언어',ja:'言語',zh:'语言','zh-TW':'語言'};
const returnHelp={
  "en": "Google Groups opens in a new tab. After joining, tap Back or close that tab to return here, then tap Download and install.",
  "es": "Grupos de Google se abre en otra pestaña. Después de unirte, toca Atrás o cierra esa pestaña para volver aquí y toca Descargar e instalar.",
  "fr": "Google Groupes s’ouvre dans un nouvel onglet. Après l’adhésion, touchez Retour ou fermez cet onglet pour revenir ici, puis touchez Télécharger et installer.",
  "de": "Google Groups öffnet sich in einem neuen Tab. Tippe nach dem Beitritt auf Zurück oder schließe diesen Tab, um hierher zurückzukehren, und tippe dann auf Herunterladen und installieren.",
  "pt": "O Grupos do Google abre em outra aba. Depois de entrar, toque em Voltar ou feche essa aba para retornar aqui e toque em Baixar e instalar.",
  "it": "Google Gruppi si apre in una nuova scheda. Dopo l’adesione, tocca Indietro o chiudi quella scheda per tornare qui, poi tocca Scarica e installa.",
  "pl": "Grupy dyskusyjne Google otworzą się w nowej karcie. Po dołączeniu naciśnij Wstecz lub zamknij tę kartę, aby tu wrócić, a potem naciśnij Pobierz i zainstaluj.",
  "tr": "Google Gruplar yeni bir sekmede açılır. Katıldıktan sonra buraya dönmek için Geri’ye dokun veya o sekmeyi kapat, ardından İndir ve yükle’ye dokun.",
  "ru": "Google Группы откроются в новой вкладке. После вступления нажмите «Назад» или закройте ту вкладку, чтобы вернуться сюда, затем нажмите «Скачать и установить».",
  "ar": "تفتح مجموعات Google في علامة تبويب جديدة. بعد الانضمام، اضغط رجوع أو أغلق علامة التبويب تلك للعودة إلى هنا، ثم اضغط «التنزيل والتثبيت».",
  "th": "Google Groups จะเปิดในแท็บใหม่ หลังเข้าร่วมแล้ว แตะย้อนกลับหรือปิดแท็บนั้นเพื่อกลับมาที่นี่ แล้วแตะดาวน์โหลดและติดตั้ง",
  "vi": "Google Groups mở trong thẻ mới. Sau khi tham gia, nhấn Quay lại hoặc đóng thẻ đó để trở lại đây, rồi nhấn Tải xuống và cài đặt.",
  "id": "Google Grup terbuka di tab baru. Setelah bergabung, ketuk Kembali atau tutup tab itu untuk kembali ke sini, lalu ketuk Unduh dan instal.",
  "ko": "Google 그룹스가 새 탭에서 열립니다. 가입 후 뒤로를 누르거나 그 탭을 닫아 이곳으로 돌아온 다음 다운로드 및 설치를 누르세요.",
  "ja": "Google グループは新しいタブで開きます。参加後は「戻る」を押すかそのタブを閉じてここに戻り、「ダウンロードしてインストール」を押してください。",
  "zh": "Google 群组将在新标签页打开。加入后，点按返回或关闭该标签页回到这里，然后点按“下载并安装”。",
  "zh-TW": "Google 網上論壇會在新分頁開啟。加入後，請點按返回或關閉該分頁回到這裡，再點按「下載並安裝」。"
};
const stepOne={"en": "Step 1: Tap below to open the Google Group. Tap Join group, then confirm.", "es": "Paso 1: Toca abajo para abrir el grupo de Google. Toca Unirse al grupo y confirma.", "fr": "Étape 1 : touchez ci-dessous pour ouvrir le groupe Google. Touchez Rejoindre le groupe, puis confirmez.", "de": "Schritt 1: Tippe unten, um die Google-Gruppe zu öffnen. Tippe auf Gruppe beitreten und bestätige.", "pt": "Passo 1: Toque abaixo para abrir o grupo do Google. Toque em Participar do grupo e confirme.", "it": "Passo 1: tocca qui sotto per aprire il gruppo Google. Tocca Iscriviti al gruppo e conferma.", "pl": "Krok 1: Naciśnij poniżej, aby otworzyć grupę Google. Naciśnij Dołącz do grupy i potwierdź.", "tr": "Adım 1: Google Grubunu açmak için aşağıya dokun. Gruba katıl’a dokun ve onayla.", "ru": "Шаг 1: нажмите кнопку ниже, чтобы открыть группу Google. Нажмите «Вступить в группу» и подтвердите.", "ar": "الخطوة 1: اضغط الزر أدناه لفتح مجموعة Google. اضغط الانضمام إلى المجموعة، ثم أكّد.", "th": "ขั้นตอนที่ 1: แตะปุ่มด้านล่างเพื่อเปิด Google Group แตะเข้าร่วมกลุ่ม แล้วยืนยัน", "vi": "Bước 1: Nhấn nút bên dưới để mở nhóm Google. Nhấn Tham gia nhóm, rồi xác nhận.", "id": "Langkah 1: Ketuk tombol di bawah untuk membuka Google Grup. Ketuk Gabung ke grup, lalu konfirmasi.", "ko": "1단계: 아래 버튼을 눌러 Google 그룹을 여세요. 그룹 가입을 누른 후 확인하세요.", "ja": "ステップ1：下のボタンを押して Google グループを開きます。「グループに参加」を押して確定してください。", "zh": "第 1 步：点按下方按钮打开 Google 群组。点按“加入群组”，然后确认。", "zh-TW": "步驟 1：點按下方按鈕開啟 Google 網上論壇。點按「加入群組」，然後確認。"};
const stepTwo={"en": "Step 2: When you’ve joined, come back to this page and tap Download and install. On Google’s page, tap Become a tester.", "es": "Paso 2: Cuando te hayas unido, vuelve a esta página y toca Descargar e instalar. En la página de Google, toca Convertirse en tester.", "fr": "Étape 2 : une fois inscrit, revenez sur cette page et touchez Télécharger et installer. Sur la page Google, touchez Devenir testeur.", "de": "Schritt 2: Wenn du beigetreten bist, kehre zu dieser Seite zurück und tippe auf Herunterladen und installieren. Tippe auf der Google-Seite auf Tester werden.", "pt": "Passo 2: Depois de entrar, volte a esta página e toque em Baixar e instalar. Na página do Google, toque em Tornar-se testador.", "it": "Passo 2: dopo l’iscrizione, torna a questa pagina e tocca Scarica e installa. Nella pagina di Google, tocca Diventa un tester.", "pl": "Krok 2: Po dołączeniu wróć na tę stronę i naciśnij Pobierz i zainstaluj. Na stronie Google naciśnij Zostań testerem.", "tr": "Adım 2: Katıldıktan sonra bu sayfaya dön ve İndir ve yükle’ye dokun. Google sayfasında Test kullanıcısı ol’a dokun.", "ru": "Шаг 2: после вступления вернитесь на эту страницу и нажмите «Скачать и установить». На странице Google нажмите «Стать тестировщиком».", "ar": "الخطوة 2: بعد الانضمام، ارجع إلى هذه الصفحة واضغط «التنزيل والتثبيت». في صفحة Google، اضغط «أن تصبح مختبِرًا».", "th": "ขั้นตอนที่ 2: เมื่อเข้าร่วมแล้ว กลับมาที่หน้านี้และแตะดาวน์โหลดและติดตั้ง ในหน้าของ Google ให้แตะเป็นผู้ทดสอบ", "vi": "Bước 2: Khi đã tham gia, quay lại trang này và nhấn Tải xuống và cài đặt. Trên trang của Google, nhấn Trở thành người thử nghiệm.", "id": "Langkah 2: Setelah bergabung, kembali ke halaman ini dan ketuk Unduh dan instal. Di halaman Google, ketuk Jadi penguji.", "ko": "2단계: 가입한 후 이 페이지로 돌아와 다운로드 및 설치를 누르세요. Google 페이지에서 테스터 되기를 누르세요.", "ja": "ステップ2：参加したらこのページに戻り、「ダウンロードしてインストール」を押します。Google のページで「テスターになる」を押してください。", "zh": "第 2 步：加入后，返回此页面并点按“下载并安装”。在 Google 页面上点按“成为测试者”。", "zh-TW": "步驟 2：加入後，返回此頁面並點按「下載並安裝」。在 Google 頁面上點按「成為測試人員」。"};
const stepThree={"en": "Step 3: After you become a tester, come back here and tap Open in Google Play to install.", "es": "Paso 3: Cuando seas tester, vuelve aquí y toca Abrir en Google Play para instalar.", "fr": "Étape 3 : une fois testeur, revenez ici et touchez Ouvrir dans Google Play pour installer.", "de": "Schritt 3: Wenn du Tester bist, kehre hierher zurück und tippe auf In Google Play öffnen, um zu installieren.", "pt": "Passo 3: Depois de se tornar testador, volte aqui e toque em Abrir no Google Play para instalar.", "it": "Passo 3: quando sei un tester, torna qui e tocca Apri in Google Play per installare.", "pl": "Krok 3: Gdy zostaniesz testerem, wróć tutaj i naciśnij Otwórz w Google Play, aby zainstalować.", "tr": "Adım 3: Test kullanıcısı olduktan sonra buraya dön ve yüklemek için Google Play’de aç’a dokun.", "ru": "Шаг 3: став тестировщиком, вернитесь сюда и нажмите «Открыть в Google Play», чтобы установить.", "ar": "الخطوة 3: بعد أن تصبح مختبِرًا، ارجع إلى هنا واضغط «فتح في Google Play» للتثبيت.", "th": "ขั้นตอนที่ 3: เมื่อเป็นผู้ทดสอบแล้ว กลับมาที่นี่และแตะเปิดใน Google Play เพื่อติดตั้ง", "vi": "Bước 3: Sau khi trở thành người thử nghiệm, quay lại đây và nhấn Mở trong Google Play để cài đặt.", "id": "Langkah 3: Setelah menjadi penguji, kembali ke sini dan ketuk Buka di Google Play untuk menginstal.", "ko": "3단계: 테스터가 된 후 이곳으로 돌아와 Google Play에서 열기를 눌러 설치하세요.", "ja": "ステップ3：テスターになったらここに戻り、「Google Play で開く」を押してインストールしてください。", "zh": "第 3 步：成为测试者后，返回此处并点按“在 Google Play 中打开”进行安装。", "zh-TW": "步驟 3：成為測試人員後，返回此處並點按「在 Google Play 中開啟」進行安裝。"};
const playLabels={"en": "Open in Google Play", "es": "Abrir en Google Play", "fr": "Ouvrir dans Google Play", "de": "In Google Play öffnen", "pt": "Abrir no Google Play", "it": "Apri in Google Play", "pl": "Otwórz w Google Play", "tr": "Google Play’de aç", "ru": "Открыть в Google Play", "ar": "فتح في Google Play", "th": "เปิดใน Google Play", "vi": "Mở trong Google Play", "id": "Buka di Google Play", "ko": "Google Play에서 열기", "ja": "Google Play で開く", "zh": "在 Google Play 中打开", "zh-TW": "在 Google Play 中開啟"};
const leaveLabels={"en": "Leave the group", "es": "Salir del grupo", "fr": "Quitter le groupe", "de": "Gruppe verlassen", "pt": "Sair do grupo", "it": "Lascia il gruppo", "pl": "Opuść grupę", "tr": "Gruptan ayrıl", "ru": "Покинуть группу", "ar": "مغادرة المجموعة", "th": "ออกจากกลุ่ม", "vi": "Rời nhóm", "id": "Keluar dari grup", "ko": "그룹 탈퇴", "ja": "グループを退会", "zh": "退出群组", "zh-TW": "退出群組"};
const actionLabels={
  "en": [
    "Join the group to access the test",
    "Download and install",
    "You must join the group first."
  ],
  "es": [
    "Únete al grupo para acceder a la prueba",
    "Descargar e instalar",
    "Primero debes unirte al grupo."
  ],
  "fr": [
    "Rejoindre le groupe pour accéder au test",
    "Télécharger et installer",
    "Vous devez d’abord rejoindre le groupe."
  ],
  "de": [
    "Gruppe beitreten, um am Test teilzunehmen",
    "Herunterladen und installieren",
    "Du musst zuerst der Gruppe beitreten."
  ],
  "pt": [
    "Entre no grupo para acessar o teste",
    "Baixar e instalar",
    "Você precisa entrar no grupo primeiro."
  ],
  "it": [
    "Unisciti al gruppo per accedere al test",
    "Scarica e installa",
    "Devi prima unirti al gruppo."
  ],
  "pl": [
    "Dołącz do grupy, aby uzyskać dostęp do testu",
    "Pobierz i zainstaluj",
    "Najpierw musisz dołączyć do grupy."
  ],
  "tr": [
    "Teste erişmek için gruba katıl",
    "İndir ve yükle",
    "Önce gruba katılmalısın."
  ],
  "ru": [
    "Вступить в группу для доступа к тесту",
    "Скачать и установить",
    "Сначала нужно вступить в группу."
  ],
  "ar": [
    "انضم إلى المجموعة للوصول إلى الاختبار",
    "التنزيل والتثبيت",
    "يجب الانضمام إلى المجموعة أولاً."
  ],
  "th": [
    "เข้าร่วมกลุ่มเพื่อเข้าถึงการทดสอบ",
    "ดาวน์โหลดและติดตั้ง",
    "คุณต้องเข้าร่วมกลุ่มก่อน"
  ],
  "vi": [
    "Tham gia nhóm để truy cập bản thử nghiệm",
    "Tải xuống và cài đặt",
    "Bạn phải tham gia nhóm trước."
  ],
  "id": [
    "Gabung ke grup untuk mengakses pengujian",
    "Unduh dan instal",
    "Anda harus bergabung ke grup terlebih dahulu."
  ],
  "ko": [
    "테스트에 참여하려면 그룹에 가입하세요",
    "다운로드 및 설치",
    "먼저 그룹에 가입해야 합니다."
  ],
  "ja": [
    "グループに参加してテストにアクセス",
    "ダウンロードしてインストール",
    "先にグループに参加してください。"
  ],
  "zh": [
    "加入群组以参与测试",
    "下载并安装",
    "你必须先加入群组。"
  ],
  "zh-TW": [
    "加入群組以參與測試",
    "下載並安裝",
    "你必須先加入群組。"
  ]
};
const joinGuidance={
  en:['Continue to Google Groups','On Google Groups, choose Join group. Review your display name and email preferences, then confirm Join group in the final form.'],
  es:['Continuar a Grupos de Google','En Grupos de Google, elige Unirse al grupo. Revisa tu nombre y las preferencias de correo, y confirma Unirse al grupo en el formulario final.'],
  fr:['Continuer vers Google Groupes','Dans Google Groupes, choisissez Rejoindre le groupe. Vérifiez votre nom et vos préférences e-mail, puis confirmez Rejoindre le groupe dans le formulaire final.'],
  de:['Weiter zu Google Groups','Wähle in Google Groups Gruppe beitreten. Prüfe deinen Anzeigenamen und die E-Mail-Einstellungen und bestätige Gruppe beitreten im letzten Formular.'],
  pt:['Continuar para o Grupos do Google','No Grupos do Google, escolha Participar do grupo. Confira seu nome e as preferências de e-mail e confirme Participar do grupo no formulário final.'],
  it:['Continua su Google Gruppi','In Google Gruppi, scegli Unisciti al gruppo. Controlla il nome visualizzato e le preferenze e-mail, poi conferma Unisciti al gruppo nel modulo finale.'],
  pl:['Przejdź do Grup dyskusyjnych Google','W Grupach dyskusyjnych Google wybierz Dołącz do grupy. Sprawdź nazwę i ustawienia e-mail, a potem potwierdź Dołącz do grupy w ostatnim formularzu.'],
  tr:['Google Gruplar’a devam et','Google Gruplar’da Gruba katıl seçeneğini seç. Görünen adını ve e-posta tercihlerini kontrol et, ardından son formda Gruba katıl seçeneğiyle onayla.'],
  ru:['Перейти в Google Группы','В Google Группах выберите Вступить в группу. Проверьте отображаемое имя и настройки почты, затем подтвердите Вступить в группу в последней форме.'],
  ar:['المتابعة إلى مجموعات Google','في مجموعات Google، اختر الانضمام إلى المجموعة. راجع اسم العرض وتفضيلات البريد، ثم أكّد الانضمام إلى المجموعة في النموذج الأخير.'],
  th:['ไปที่ Google Groups','ใน Google Groups เลือกเข้าร่วมกลุ่ม ตรวจสอบชื่อที่แสดงและการตั้งค่าอีเมล แล้วกดยืนยันเข้าร่วมกลุ่มในแบบฟอร์มสุดท้าย'],
  vi:['Tiếp tục đến Google Groups','Trong Google Groups, chọn Tham gia nhóm. Kiểm tra tên hiển thị và tùy chọn email, rồi xác nhận Tham gia nhóm trong biểu mẫu cuối cùng.'],
  id:['Lanjutkan ke Google Grup','Di Google Grup, pilih Gabung ke grup. Periksa nama tampilan dan preferensi email, lalu konfirmasikan Gabung ke grup pada formulir terakhir.'],
  ko:['Google 그룹스로 계속','Google 그룹스에서 그룹 가입을 선택하세요. 표시 이름과 이메일 설정을 확인한 다음, 마지막 양식에서 그룹 가입을 눌러 확정하세요.'],
  ja:['Google グループへ進む','Google グループでグループに参加を選びます。表示名とメール設定を確認し、最後のフォームでグループに参加を押して確定してください。'],
  zh:['前往 Google 群组','在 Google 群组中选择加入群组。检查显示名称和邮件偏好，然后在最后的表单中再次点击加入群组完成确认。'],
  'zh-TW':['前往 Google 網上論壇','在 Google 網上論壇中選擇加入群組。檢查顯示名稱及電子郵件偏好，再於最後的表單點選加入群組完成確認。']
};
const accountHelp={
  en:'A Google account is required, but a Gmail address is not. You can create a Google account with your existing email address. Read Google’s instructions.',
  es:'Se necesita una cuenta de Google, pero no una dirección Gmail. Puedes crear una cuenta de Google con tu correo actual. Consulta las instrucciones de Google.',
  fr:'Un compte Google est nécessaire, mais pas une adresse Gmail. Vous pouvez créer un compte Google avec votre adresse e-mail actuelle. Consultez les instructions de Google.',
  de:'Du brauchst ein Google-Konto, aber keine Gmail-Adresse. Du kannst ein Google-Konto mit deiner bisherigen E-Mail-Adresse erstellen. Lies die Anleitung von Google.',
  pt:'É necessário ter uma conta Google, mas não um endereço Gmail. Você pode criar uma conta Google com seu e-mail atual. Veja as instruções do Google.',
  it:'Serve un account Google, ma non un indirizzo Gmail. Puoi creare un account Google con il tuo indirizzo e-mail attuale. Leggi le istruzioni di Google.',
  pl:'Potrzebujesz konta Google, ale nie adresu Gmail. Konto Google możesz utworzyć ze swoim obecnym adresem e-mail. Przeczytaj instrukcje Google.',
  tr:'Google hesabı gerekir, ancak Gmail adresi gerekmez. Mevcut e-posta adresinle Google hesabı oluşturabilirsin. Google’ın yönergelerini oku.',
  ru:'Нужен аккаунт Google, но адрес Gmail не обязателен. Можно создать аккаунт Google с имеющейся электронной почтой. Прочитайте инструкцию Google.',
  ar:'تحتاج إلى حساب Google، لكن لا يشترط عنوان Gmail. يمكنك إنشاء حساب Google باستخدام بريدك الإلكتروني الحالي. اقرأ تعليمات Google.',
  th:'ต้องมีบัญชี Google แต่ไม่จำเป็นต้องมีอีเมล Gmail คุณสร้างบัญชี Google ด้วยอีเมลที่มีอยู่แล้วได้ อ่านคำแนะนำของ Google',
  vi:'Bạn cần tài khoản Google, nhưng không cần địa chỉ Gmail. Bạn có thể tạo tài khoản Google bằng địa chỉ email hiện có. Xem hướng dẫn của Google.',
  id:'Akun Google diperlukan, tetapi alamat Gmail tidak wajib. Anda dapat membuat akun Google dengan alamat email yang sudah ada. Baca petunjuk Google.',
  ko:'Google 계정은 필요하지만 Gmail 주소는 필수가 아닙니다. 기존 이메일 주소로 Google 계정을 만들 수 있습니다. Google 안내를 확인하세요.',
  ja:'Googleアカウントは必要ですが、Gmailアドレスは不要です。今お使いのメールアドレスでGoogleアカウントを作成できます。Googleの手順をご覧ください。',
  zh:'需要 Google 账号，但不要求 Gmail 地址。你可以使用现有邮箱创建 Google 账号。查看 Google 的说明。',
  'zh-TW':'需要 Google 帳戶，但不要求 Gmail 地址。你可以使用現有的電子郵件地址建立 Google 帳戶。查看 Google 的說明。'
};
const pendingHelp={
  en:'The tester group is open. The Google Play opt-in and installation link will be enabled after the closed test is published. Group membership alone does not start the 14-day Play test.',
  es:'El grupo de pruebas está abierto. El enlace de inscripción e instalación de Google Play se activará cuando se publique la prueba cerrada. Unirse al grupo no inicia por sí solo los 14 días de prueba en Play.',
  fr:'Le groupe de test est ouvert. Le lien d’inscription et d’installation Google Play sera activé après la publication du test fermé. L’adhésion au groupe seule ne démarre pas les 14 jours du test Play.',
  de:'Die Testgruppe ist offen. Der Google-Play-Link zur Teilnahme und Installation wird nach Veröffentlichung des geschlossenen Tests aktiviert. Der Gruppenbeitritt allein startet die 14-tägige Play-Testphase nicht.',
  pt:'O grupo de testes está aberto. O link de inscrição e instalação da Google Play será ativado após a publicação do teste fechado. Entrar no grupo, por si só, não inicia os 14 dias de teste no Play.',
  it:'Il gruppo di test è aperto. Il link di adesione e installazione di Google Play sarà attivato dopo la pubblicazione del test chiuso. La sola adesione al gruppo non avvia i 14 giorni di test Play.',
  pl:'Grupa testerów jest otwarta. Link do udziału i instalacji w Google Play zostanie włączony po opublikowaniu testu zamkniętego. Samo dołączenie do grupy nie rozpoczyna 14 dni testu Play.',
  tr:'Test grubu açık. Google Play katılım ve yükleme bağlantısı, kapalı test yayınlandıktan sonra etkinleşecek. Yalnızca gruba katılmak 14 günlük Play testini başlatmaz.',
  ru:'Группа тестирования открыта. Ссылка Google Play для участия и установки станет доступна после публикации закрытого теста. Само вступление в группу не запускает 14 дней тестирования Play.',
  ar:'مجموعة الاختبار مفتوحة. سيتفعّل رابط المشاركة والتثبيت من Google Play بعد نشر الاختبار المغلق. الانضمام إلى المجموعة وحده لا يبدأ فترة اختبار Play البالغة 14 يومًا.',
  th:'กลุ่มผู้ทดสอบเปิดแล้ว ลิงก์สมัครและติดตั้งผ่าน Google Play จะเปิดใช้งานเมื่อเผยแพร่การทดสอบแบบปิด การเข้ากลุ่มเพียงอย่างเดียวไม่ได้เริ่มช่วงทดสอบ Play 14 วัน',
  vi:'Nhóm thử nghiệm đã mở. Liên kết đăng ký và cài đặt Google Play sẽ được bật sau khi thử nghiệm kín được phát hành. Chỉ tham gia nhóm chưa bắt đầu thời gian thử nghiệm Play 14 ngày.',
  id:'Grup penguji sudah dibuka. Tautan pendaftaran dan instalasi Google Play akan diaktifkan setelah uji tertutup dipublikasikan. Bergabung ke grup saja tidak memulai masa uji Play 14 hari.',
  ko:'테스터 그룹에 가입할 수 있습니다. 비공개 테스트가 출시되면 Google Play 참여 및 설치 링크가 활성화됩니다. 그룹 가입만으로 14일의 Play 테스트 기간이 시작되지는 않습니다.',
  ja:'テスターグループへの参加を受付中です。クローズドテスト公開後にGoogle Playの参加・インストールリンクが有効になります。グループへの参加だけでは14日間のPlayテスト期間は始まりません。',
  zh:'测试群组已开放。封闭测试发布后，Google Play 的加入测试和安装链接将启用。仅加入群组不会开始计算 14 天的 Play 测试时间。',
  'zh-TW':'測試群組已開放。封閉測試發布後，Google Play 的加入測試及安裝連結才會啟用。僅加入群組不會開始計算 14 天的 Play 測試時間。'
};
const copy = {
  en: [
    'Help shape your planner.',
    'Try KS Planner and tell us what works and what needs improving. Testing is free and voluntary. You can leave at any time.',
    'Tester enrollment is being prepared. The joining links will appear here when setup is complete.',
    'You need an Android phone or tablet and a Google account. Please aim to stay opted in for at least 14 days and try the app during that time.',
    'Join the tester group',
    'Join our Google Group using the account you use in the Play Store. Group membership gives that account access to the closed test.',
    'Become a tester and install',
    'After joining the group, open the Play testing link with the same Google account. Choose to become a tester, then install from Google Play.',
    'Try it and share feedback',
    'Create a character, try the calculators and check your language. Tell us about confusing text, incorrect results or display problems. Use Settings → Help & Feedback in the app, or email us.',
    'Contact TKM Workshop',
    'This page does not ask for or store your email address. Google handles joining and sign-in. Group owners can manage membership; review the group’s privacy information before joining. Do not send passwords or identification documents.',
    'Privacy policy'
  ],
  es: [
    'Ayúdanos a mejorar tu planificador.',
    'Prueba KS Planner y cuéntanos qué funciona y qué podemos mejorar. La prueba es gratuita y voluntaria. Puedes dejarla cuando quieras.',
    'Estamos preparando la inscripción. Los enlaces aparecerán aquí cuando terminemos la configuración.',
    'Necesitas un teléfono o una tableta Android y una cuenta de Google. Intenta permanecer inscrito al menos 14 días y probar la aplicación durante ese tiempo.',
    'Únete al grupo de pruebas',
    'Únete a nuestro grupo de Google con la cuenta que usas en Play Store. La pertenencia al grupo permite a esa cuenta acceder a la prueba cerrada.',
    'Hazte probador e instala',
    'Después de unirte al grupo, abre el enlace de pruebas de Play con la misma cuenta de Google. Elige participar y luego instala desde Google Play.',
    'Prueba y comparte tus comentarios',
    'Crea un personaje, prueba las calculadoras y revisa tu idioma. Cuéntanos si encuentras textos confusos, resultados incorrectos o problemas de visualización. Usa Ajustes → Ayuda y comentarios en la aplicación o escríbenos.',
    'Contactar con TKM Workshop',
    'Esta página no solicita ni guarda tu correo electrónico. Google gestiona la inscripción y el inicio de sesión. Los propietarios del grupo gestionan los miembros; revisa la información de privacidad del grupo antes de unirte. No envíes contraseñas ni documentos de identidad.',
    'Política de privacidad'
  ],
  fr: [
    'Aidez-nous à améliorer votre planificateur.',
    'Essayez KS Planner et dites-nous ce qui fonctionne et ce qui doit être amélioré. Le test est gratuit et volontaire. Vous pouvez le quitter à tout moment.',
    'Les inscriptions sont en préparation. Les liens apparaîtront ici une fois la configuration terminée.',
    'Il vous faut un téléphone ou une tablette Android et un compte Google. Essayez de rester inscrit au moins 14 jours et de tester l’application pendant cette période.',
    'Rejoindre le groupe de test',
    'Rejoignez notre groupe Google avec le compte utilisé dans le Play Store. L’adhésion au groupe donne à ce compte accès au test fermé.',
    'Devenir testeur et installer',
    'Après avoir rejoint le groupe, ouvrez le lien de test Play avec le même compte Google. Choisissez de devenir testeur, puis installez depuis Google Play.',
    'Essayer et partager vos avis',
    'Créez un personnage, essayez les calculateurs et vérifiez votre langue. Signalez les textes peu clairs, les résultats incorrects ou les problèmes d’affichage. Utilisez Paramètres → Aide et commentaires dans l’application ou envoyez-nous un e-mail.',
    'Contacter TKM Workshop',
    'Cette page ne demande ni ne conserve votre adresse e-mail. Google gère l’adhésion et la connexion. Les propriétaires du groupe gèrent les membres ; consultez les informations de confidentialité du groupe avant de le rejoindre. N’envoyez ni mots de passe ni pièces d’identité.',
    'Politique de confidentialité'
  ],
  de: [
    'Gestalte deinen Planer mit.',
    'Teste KS Planner und sag uns, was funktioniert und was wir verbessern können. Die Teilnahme ist kostenlos und freiwillig. Du kannst jederzeit aufhören.',
    'Die Anmeldung wird vorbereitet. Die Links erscheinen hier, sobald die Einrichtung abgeschlossen ist.',
    'Du brauchst ein Android-Smartphone oder -Tablet und ein Google-Konto. Bleibe möglichst mindestens 14 Tage angemeldet und probiere die App in dieser Zeit aus.',
    'Der Testgruppe beitreten',
    'Tritt unserer Google-Gruppe mit dem Konto bei, das du im Play Store nutzt. Die Gruppenmitgliedschaft gibt diesem Konto Zugang zum geschlossenen Test.',
    'Tester werden und installieren',
    'Öffne nach dem Gruppenbeitritt den Play-Testlink mit demselben Google-Konto. Wähle die Teilnahme und installiere die App über Google Play.',
    'Ausprobieren und Feedback geben',
    'Erstelle einen Charakter, teste die Rechner und prüfe deine Sprache. Melde unklare Texte, falsche Ergebnisse oder Anzeigeprobleme. Nutze Einstellungen → Hilfe und Feedback in der App oder schreib uns eine E-Mail.',
    'TKM Workshop kontaktieren',
    'Diese Seite fragt deine E-Mail-Adresse nicht ab und speichert sie nicht. Google verwaltet Beitritt und Anmeldung. Die Gruppeninhaber verwalten die Mitglieder; lies vor dem Beitritt die Datenschutzhinweise der Gruppe. Sende keine Passwörter oder Ausweisdokumente.',
    'Datenschutzerklärung'
  ],
  pt: [
    'Ajude a melhorar seu planejador.',
    'Experimente o KS Planner e conte o que funciona e o que precisa melhorar. O teste é gratuito e voluntário. Você pode sair a qualquer momento.',
    'Estamos preparando as inscrições. Os links aparecerão aqui quando a configuração estiver concluída.',
    'Você precisa de um celular ou tablet Android e de uma conta Google. Tente permanecer inscrito por pelo menos 14 dias e testar o aplicativo nesse período.',
    'Entrar no grupo de testes',
    'Entre no nosso Grupo do Google com a conta que você usa na Play Store. A participação no grupo dá a essa conta acesso ao teste fechado.',
    'Participar do teste e instalar',
    'Depois de entrar no grupo, abra o link de teste do Play com a mesma conta Google. Escolha participar do teste e instale pela Google Play.',
    'Experimentar e enviar comentários',
    'Crie um personagem, experimente as calculadoras e confira seu idioma. Avise sobre textos confusos, resultados incorretos ou problemas de exibição. Use Configurações → Ajuda e comentários no aplicativo ou envie um e-mail.',
    'Falar com a TKM Workshop',
    'Esta página não pede nem armazena seu e-mail. O Google gerencia a entrada e o login. Os proprietários do grupo gerenciam os membros; leia as informações de privacidade do grupo antes de entrar. Não envie senhas ou documentos de identidade.',
    'Política de privacidade'
  ],
  it: [
    'Aiutaci a migliorare il tuo pianificatore.',
    'Prova KS Planner e raccontaci cosa funziona e cosa migliorare. Il test è gratuito e volontario. Puoi abbandonarlo in qualsiasi momento.',
    'Stiamo preparando le iscrizioni. I link appariranno qui al termine della configurazione.',
    'Servono un telefono o tablet Android e un account Google. Cerca di rimanere iscritto per almeno 14 giorni e di provare l’app durante questo periodo.',
    'Unisciti al gruppo di test',
    'Unisciti al nostro gruppo Google con l’account che usi nel Play Store. L’iscrizione al gruppo consente a quell’account di accedere al test chiuso.',
    'Diventa tester e installa',
    'Dopo esserti unito al gruppo, apri il link del test Play con lo stesso account Google. Scegli di diventare tester, poi installa da Google Play.',
    'Prova e condividi le tue opinioni',
    'Crea un personaggio, prova i calcolatori e controlla la tua lingua. Segnala testi poco chiari, risultati errati o problemi di visualizzazione. Usa Impostazioni → Aiuto e feedback nell’app oppure scrivici.',
    'Contatta TKM Workshop',
    'Questa pagina non richiede né conserva il tuo indirizzo e-mail. Google gestisce adesione e accesso. I proprietari del gruppo gestiscono gli iscritti; leggi le informazioni sulla privacy del gruppo prima di aderire. Non inviare password o documenti d’identità.',
    'Informativa sulla privacy'
  ],
  pl: [
    'Pomóż ulepszyć swój planer.',
    'Wypróbuj KS Planner i powiedz nam, co działa, a co wymaga poprawy. Test jest bezpłatny i dobrowolny. Możesz zrezygnować w każdej chwili.',
    'Przygotowujemy zapisy. Linki pojawią się tutaj po zakończeniu konfiguracji.',
    'Potrzebujesz telefonu lub tabletu z Androidem oraz konta Google. Postaraj się pozostać w teście przez co najmniej 14 dni i korzystać w tym czasie z aplikacji.',
    'Dołącz do grupy testerów',
    'Dołącz do naszej Grupy dyskusyjnej Google, używając konta ze Sklepu Play. Członkostwo w grupie daje temu kontu dostęp do testu zamkniętego.',
    'Zostań testerem i zainstaluj',
    'Po dołączeniu do grupy otwórz link testowy Play na tym samym koncie Google. Wybierz udział w teście, a następnie zainstaluj aplikację z Google Play.',
    'Wypróbuj i podziel się opinią',
    'Utwórz postać, sprawdź kalkulatory i swój język. Zgłoś niejasne teksty, błędne wyniki lub problemy z wyświetlaniem. Skorzystaj z Ustawienia → Pomoc i opinie w aplikacji lub napisz do nas.',
    'Kontakt z TKM Workshop',
    'Ta strona nie prosi o adres e-mail ani go nie zapisuje. Google obsługuje dołączanie i logowanie. Właściciele grupy zarządzają członkostwem; przed dołączeniem przeczytaj informacje o prywatności grupy. Nie wysyłaj haseł ani dokumentów tożsamości.',
    'Polityka prywatności'
  ],
  tr: [
    'Planlayıcını geliştirmemize yardımcı ol.',
    'KS Planner’ı dene; nelerin iyi çalıştığını ve nelerin geliştirilmesi gerektiğini bize söyle. Test ücretsiz ve gönüllüdür. İstediğin zaman ayrılabilirsin.',
    'Test kayıtları hazırlanıyor. Kurulum tamamlandığında katılım bağlantıları burada görünecek.',
    'Bir Android telefon veya tablet ve bir Google hesabı gerekir. Lütfen en az 14 gün teste kayıtlı kalmaya ve bu sürede uygulamayı denemeye çalış.',
    'Test grubuna katıl',
    'Google grubumuza Play Store’da kullandığın hesapla katıl. Grup üyeliği, bu hesaba kapalı teste erişim sağlar.',
    'Test kullanıcısı ol ve yükle',
    'Gruba katıldıktan sonra Play test bağlantısını aynı Google hesabıyla aç. Test kullanıcısı olmayı seç, ardından Google Play’den yükle.',
    'Dene ve geri bildirim paylaş',
    'Bir karakter oluştur, hesaplayıcıları dene ve dilini kontrol et. Anlaşılmayan metinleri, yanlış sonuçları veya görüntüleme sorunlarını bildir. Uygulamada Ayarlar → Yardım ve Geri Bildirim’i kullan veya bize e-posta gönder.',
    'TKM Workshop ile iletişim',
    'Bu sayfa e-posta adresini istemez veya saklamaz. Katılım ve oturum açmayı Google yönetir. Grup sahipleri üyeliği yönetebilir; katılmadan önce grubun gizlilik bilgilerini incele. Şifre veya kimlik belgesi gönderme.',
    'Gizlilik politikası'
  ],
  ru: [
    'Помогите улучшить ваш планировщик.',
    'Попробуйте KS Planner и расскажите, что работает хорошо, а что нужно улучшить. Тест бесплатный и добровольный. Вы можете выйти в любой момент.',
    'Мы готовим регистрацию тестировщиков. Ссылки появятся здесь после завершения настройки.',
    'Нужны телефон или планшет Android и аккаунт Google. Постарайтесь оставаться участником теста не менее 14 дней и пользоваться приложением в этот период.',
    'Присоединиться к группе тестирования',
    'Вступите в нашу группу Google с аккаунтом, который используете в Google Play. Участие в группе даёт этому аккаунту доступ к закрытому тесту.',
    'Стать тестировщиком и установить',
    'После вступления в группу откройте ссылку тестирования Play с тем же аккаунтом Google. Выберите участие в тесте, затем установите приложение из Google Play.',
    'Попробовать и оставить отзыв',
    'Создайте персонажа, проверьте калькуляторы и свой язык. Сообщите о непонятных текстах, неверных результатах или проблемах отображения. Используйте Настройки → Помощь и отзывы в приложении или напишите нам.',
    'Связаться с TKM Workshop',
    'Эта страница не запрашивает и не сохраняет вашу электронную почту. Google обрабатывает вступление и вход. Владельцы группы управляют участниками; перед вступлением прочитайте информацию о конфиденциальности группы. Не отправляйте пароли или документы, удостоверяющие личность.',
    'Политика конфиденциальности'
  ],
  ar: [
    'ساعدنا في تحسين مخططك.',
    'جرّب KS Planner وأخبرنا بما يعمل جيدًا وما يحتاج إلى تحسين. الاختبار مجاني وتطوعي، ويمكنك الانسحاب في أي وقت.',
    'نعمل على تجهيز التسجيل للاختبار. ستظهر روابط الانضمام هنا عند اكتمال الإعداد.',
    'تحتاج إلى هاتف أو جهاز لوحي يعمل بنظام Android وحساب Google. نرجو البقاء مسجّلًا في الاختبار لمدة 14 يومًا على الأقل وتجربة التطبيق خلال هذه الفترة.',
    'انضم إلى مجموعة الاختبار',
    'انضم إلى مجموعة Google باستخدام الحساب الذي تستخدمه في متجر Play. تمنح عضوية المجموعة هذا الحساب حق الوصول إلى الاختبار المغلق.',
    'شارك في الاختبار وثبّت التطبيق',
    'بعد الانضمام إلى المجموعة، افتح رابط اختبار Play بالحساب نفسه. اختر المشاركة في الاختبار، ثم ثبّت التطبيق من Google Play.',
    'جرّب التطبيق وشارك ملاحظاتك',
    'أنشئ شخصية وجرّب الآلات الحاسبة وراجع لغتك. أخبرنا عن النصوص غير الواضحة أو النتائج الخاطئة أو مشكلات العرض. استخدم الإعدادات ← المساعدة والملاحظات في التطبيق، أو راسلنا بالبريد الإلكتروني.',
    'تواصل مع TKM Workshop',
    'لا تطلب هذه الصفحة عنوان بريدك الإلكتروني ولا تخزّنه. تتولى Google الانضمام وتسجيل الدخول. يستطيع مالكو المجموعة إدارة العضوية؛ راجع معلومات خصوصية المجموعة قبل الانضمام. لا ترسل كلمات مرور أو وثائق هوية.',
    'سياسة الخصوصية'
  ],
  th: [
    'ช่วยเราพัฒนาเครื่องมือวางแผนของคุณ',
    'ลองใช้ KS Planner แล้วบอกเราว่าส่วนใดทำงานได้ดีและส่วนใดควรปรับปรุง การทดสอบฟรีและเป็นไปโดยสมัครใจ คุณออกได้ทุกเมื่อ',
    'กำลังเตรียมการลงทะเบียนทดสอบ ลิงก์เข้าร่วมจะแสดงที่นี่เมื่อตั้งค่าเสร็จ',
    'คุณต้องมีโทรศัพท์หรือแท็บเล็ต Android และบัญชี Google โปรดพยายามอยู่ในโครงการทดสอบอย่างน้อย 14 วัน และลองใช้แอปในช่วงนั้น',
    'เข้าร่วมกลุ่มผู้ทดสอบ',
    'เข้าร่วม Google Group ของเราด้วยบัญชีที่ใช้ใน Play Store การเป็นสมาชิกกลุ่มทำให้บัญชีนั้นเข้าถึงการทดสอบแบบปิดได้',
    'เป็นผู้ทดสอบและติดตั้ง',
    'หลังเข้าร่วมกลุ่ม เปิดลิงก์ทดสอบ Play ด้วยบัญชี Google เดียวกัน เลือกเข้าร่วมการทดสอบ แล้วติดตั้งจาก Google Play',
    'ทดลองใช้และส่งความคิดเห็น',
    'สร้างตัวละคร ลองใช้เครื่องคำนวณ และตรวจสอบภาษาของคุณ แจ้งข้อความที่ไม่ชัดเจน ผลลัพธ์ผิด หรือปัญหาการแสดงผล ใช้ การตั้งค่า → ความช่วยเหลือและความคิดเห็น ในแอป หรือส่งอีเมลถึงเรา',
    'ติดต่อ TKM Workshop',
    'หน้านี้ไม่ขอหรือจัดเก็บอีเมลของคุณ Google จัดการการเข้าร่วมและการลงชื่อเข้าใช้ เจ้าของกลุ่มจัดการสมาชิกได้ โปรดอ่านข้อมูลความเป็นส่วนตัวของกลุ่มก่อนเข้าร่วม อย่าส่งรหัสผ่านหรือเอกสารยืนยันตัวตน',
    'นโยบายความเป็นส่วนตัว'
  ],
  vi: [
    'Cùng cải thiện công cụ lập kế hoạch của bạn.',
    'Hãy dùng thử KS Planner và cho chúng tôi biết điều gì hoạt động tốt, điều gì cần cải thiện. Thử nghiệm miễn phí và tự nguyện. Bạn có thể rời đi bất cứ lúc nào.',
    'Chúng tôi đang chuẩn bị đăng ký thử nghiệm. Các liên kết tham gia sẽ xuất hiện tại đây khi thiết lập hoàn tất.',
    'Bạn cần điện thoại hoặc máy tính bảng Android và tài khoản Google. Hãy cố gắng duy trì đăng ký ít nhất 14 ngày và dùng thử ứng dụng trong thời gian đó.',
    'Tham gia nhóm thử nghiệm',
    'Tham gia Google Group của chúng tôi bằng tài khoản bạn dùng trên Play Store. Thành viên nhóm sẽ có quyền truy cập thử nghiệm kín bằng tài khoản đó.',
    'Đăng ký thử nghiệm và cài đặt',
    'Sau khi tham gia nhóm, mở liên kết thử nghiệm Play bằng cùng tài khoản Google. Chọn trở thành người thử nghiệm, rồi cài đặt từ Google Play.',
    'Dùng thử và gửi phản hồi',
    'Tạo nhân vật, thử các công cụ tính toán và kiểm tra ngôn ngữ của bạn. Báo cho chúng tôi về văn bản khó hiểu, kết quả sai hoặc lỗi hiển thị. Dùng Cài đặt → Trợ giúp và phản hồi trong ứng dụng hoặc gửi email.',
    'Liên hệ TKM Workshop',
    'Trang này không yêu cầu hoặc lưu địa chỉ email của bạn. Google xử lý việc tham gia và đăng nhập. Chủ nhóm có thể quản lý thành viên; hãy đọc thông tin quyền riêng tư của nhóm trước khi tham gia. Không gửi mật khẩu hoặc giấy tờ tùy thân.',
    'Chính sách quyền riêng tư'
  ],
  id: [
    'Bantu sempurnakan perencana Anda.',
    'Coba KS Planner dan beri tahu kami apa yang berfungsi baik dan apa yang perlu diperbaiki. Pengujian gratis dan sukarela. Anda dapat keluar kapan saja.',
    'Pendaftaran penguji sedang disiapkan. Tautan bergabung akan muncul di sini setelah penyiapan selesai.',
    'Anda memerlukan ponsel atau tablet Android dan akun Google. Usahakan tetap terdaftar setidaknya selama 14 hari dan mencoba aplikasi selama waktu tersebut.',
    'Gabung ke grup penguji',
    'Gabung ke Google Group kami dengan akun yang Anda gunakan di Play Store. Keanggotaan grup memberikan akses uji tertutup kepada akun tersebut.',
    'Jadi penguji dan instal',
    'Setelah bergabung ke grup, buka tautan pengujian Play dengan akun Google yang sama. Pilih menjadi penguji, lalu instal dari Google Play.',
    'Coba dan bagikan masukan',
    'Buat karakter, coba kalkulator, dan periksa bahasa Anda. Laporkan teks yang membingungkan, hasil yang salah, atau masalah tampilan. Gunakan Pengaturan → Bantuan & Masukan di aplikasi atau kirim email.',
    'Hubungi TKM Workshop',
    'Halaman ini tidak meminta atau menyimpan alamat email Anda. Google menangani pendaftaran dan login. Pemilik grup dapat mengelola keanggotaan; baca informasi privasi grup sebelum bergabung. Jangan mengirim kata sandi atau dokumen identitas.',
    'Kebijakan privasi'
  ],
  ko: [
    '더 나은 플래너를 함께 만들어요.',
    'KS Planner를 사용해 보고 잘 작동하는 부분과 개선할 부분을 알려 주세요. 테스트는 무료이며 자발적으로 참여합니다. 언제든지 나갈 수 있습니다.',
    '테스터 모집을 준비 중입니다. 설정이 완료되면 여기에 참여 링크가 표시됩니다.',
    'Android 휴대전화 또는 태블릿과 Google 계정이 필요합니다. 최소 14일 동안 테스트 참여 상태를 유지하며 그동안 앱을 사용해 주세요.',
    '테스터 그룹 가입',
    'Play 스토어에서 사용하는 계정으로 Google 그룹에 가입하세요. 그룹 회원이 되면 해당 계정으로 비공개 테스트에 참여할 수 있습니다.',
    '테스터 참여 및 설치',
    '그룹 가입 후 같은 Google 계정으로 Play 테스트 링크를 여세요. 테스터 참여를 선택한 후 Google Play에서 설치하세요.',
    '사용해 보고 의견 보내기',
    '캐릭터를 만들고 계산기를 사용하며 번역을 확인해 주세요. 이해하기 어려운 문구, 잘못된 결과, 화면 문제를 알려 주세요. 앱의 설정 → 도움말 및 의견을 이용하거나 이메일을 보내 주세요.',
    'TKM Workshop에 문의',
    '이 페이지는 이메일 주소를 요청하거나 저장하지 않습니다. 가입과 로그인은 Google에서 처리합니다. 그룹 소유자가 회원을 관리할 수 있으므로 가입 전 그룹의 개인정보 안내를 확인하세요. 비밀번호나 신분증은 보내지 마세요.',
    '개인정보 처리방침'
  ],
  ja: [
    'より良いプランナーを一緒に。',
    'KS Plannerを試して、良い点や改善点を教えてください。テストは無料で、参加は任意です。いつでも退出できます。',
    'テスター募集を準備中です。設定が完了すると、ここに参加リンクが表示されます。',
    'AndroidのスマートフォンまたはタブレットとGoogleアカウントが必要です。少なくとも14日間は参加状態を保ち、その間にアプリを試してください。',
    'テスターグループに参加',
    'Playストアで使っているアカウントでGoogleグループに参加してください。グループに参加すると、そのアカウントでクローズドテストにアクセスできます。',
    'テスター登録とインストール',
    'グループ参加後、同じGoogleアカウントでPlayのテストリンクを開きます。テスターへの参加を選び、Google Playからインストールしてください。',
    '試して感想を送る',
    'キャラクターを作成し、計算機や翻訳を確認してください。分かりにくい文章、誤った結果、表示の問題をお知らせください。アプリの設定 → ヘルプとフィードバック、またはメールをご利用ください。',
    'TKM Workshopに問い合わせ',
    'このページはメールアドレスを求めたり保存したりしません。参加とログインはGoogleが処理します。グループのオーナーはメンバーを管理できます。参加前にグループのプライバシー情報を確認してください。パスワードや本人確認書類は送らないでください。',
    'プライバシーポリシー'
  ],
  zh: [
    '一起完善你的规划工具。',
    '试用 KS Planner，告诉我们哪些地方好用、哪些需要改进。测试免费，自愿参加，你可以随时退出。',
    '我们正在准备测试报名。设置完成后，这里将显示加入链接。',
    '你需要一部 Android 手机或平板电脑以及 Google 账号。请尽量保持加入测试的状态至少 14 天，并在此期间试用应用。',
    '加入测试群组',
    '使用你在 Play 商店使用的账号加入我们的 Google 群组。群组成员资格可让该账号访问封闭测试。',
    '成为测试者并安装',
    '加入群组后，使用同一个 Google 账号打开 Play 测试链接。选择成为测试者，然后从 Google Play 安装。',
    '试用并分享反馈',
    '创建角色、试用计算器并检查你的语言。请告知我们难懂的文字、错误的计算结果或显示问题。你可以使用应用中的设置 → 帮助与反馈，或给我们发邮件。',
    '联系 TKM Workshop',
    '本页面不会索取或保存你的邮箱地址。加入和登录由 Google 处理。群组所有者可以管理成员；加入前请查看群组隐私信息。请勿发送密码或身份证件。',
    '隐私政策'
  ],
  'zh-TW': [
    '一起完善你的規劃工具。',
    '試用 KS Planner，告訴我們哪些地方好用、哪些需要改善。測試免費，自願參加，你可以隨時退出。',
    '我們正在準備測試報名。設定完成後，這裡會顯示加入連結。',
    '你需要一部 Android 手機或平板電腦，以及 Google 帳戶。請盡量保持加入測試的狀態至少 14 天，並在此期間試用應用程式。',
    '加入測試群組',
    '使用你在 Play 商店使用的帳戶加入我們的 Google 群組。群組成員資格可讓該帳戶存取封閉測試。',
    '成為測試人員並安裝',
    '加入群組後，使用同一個 Google 帳戶開啟 Play 測試連結。選擇成為測試人員，再從 Google Play 安裝。',
    '試用並分享意見',
    '建立角色、試用計算機並檢查你的語言。請告訴我們難懂的文字、錯誤的計算結果或顯示問題。你可以使用應用程式中的設定 → 說明與意見回饋，或寄電子郵件給我們。',
    '聯絡 TKM Workshop',
    '本頁面不會索取或儲存你的電子郵件地址。加入和登入由 Google 處理。群組擁有者可以管理成員；加入前請查看群組隱私資訊。請勿傳送密碼或身分證件。',
    '隱私權政策'
  ]
};
const languageSelect = document.querySelector('#language');
for (const [code,label] of languages) {
  const option = document.createElement('option'); option.value=code; option.textContent=label; languageSelect.append(option);
}
function supportedLanguage(value) {
  if (!value) return null;
  if (copy[value]) return value;
  if (/^zh-(TW|HK|MO|Hant)/i.test(value)) return 'zh-TW';
  return copy[value.split('-')[0]] ? value.split('-')[0] : null;
}
function setLanguage(value) {
  const code=supportedLanguage(value)||'en';
  const strings=Object.fromEntries(fields.map((field,i)=>[field,copy[code][i]]));
  strings.account=accountHelp[code];
  [strings.continue,strings.confirm]=joinGuidance[code];
  strings.return=returnHelp[code];
  strings.leave=leaveLabels[code];
  strings.step1=stepOne[code];
  strings.step2=stepTwo[code];
  strings.step3=stepThree[code];
  strings.play=playLabels[code];
  [strings.continue,strings.download,strings.prerequisite]=actionLabels[code];
  if(enrollment.groupUrl && !enrollment.testUrl) strings.pending=pendingHelp[code];
  document.documentElement.lang=code==='zh'?'zh-Hans':code;
  document.documentElement.dir=code==='ar'?'rtl':'ltr';
  languageSelect.value=code;
  document.getElementById('language-label').textContent=languageLabels[code];
  document.title=strings.title+' · KS Planner';
  for (const element of document.querySelectorAll('[data-copy]')) {
    const text=strings[element.dataset.copy];
    if (typeof text==='string') element.textContent=text;
  }
  // Language is the sole browser-local preference; no membership data is stored.
  try { localStorage.setItem('ks-testing-language',code); } catch (_) {}
}
let savedLanguage;
try { savedLanguage=localStorage.getItem('ks-testing-language'); } catch (_) {}
const queryLanguage=new URLSearchParams(location.search).get('lang');
const browserLanguage=(navigator.languages||[navigator.language]).map(supportedLanguage).find(Boolean);
setLanguage(supportedLanguage(queryLanguage)||supportedLanguage(savedLanguage)||browserLanguage||'en');
languageSelect.addEventListener('change',()=>setLanguage(languageSelect.value));
for (const [id,url] of [['group-link',enrollment.groupUrl],['test-link',enrollment.testUrl],['leave-link',enrollment.leaveUrl],['play-link',enrollment.storeUrl]]) {
  if(url) {
    const link=document.getElementById(id); link.href=url; link.removeAttribute('aria-disabled');
  }
}
if(enrollment.groupUrl && enrollment.testUrl) {
  document.getElementById('enrollment-status').hidden=true;
}
