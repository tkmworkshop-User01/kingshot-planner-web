'use strict';
// Activate only after the group exists, its privacy settings are verified and
// Play's Alpha track uses it. Do not collect membership data on this static site.
const enrollment = Object.freeze({groupUrl: 'https://groups.google.com/g/ksplannertesters', testUrl: null});
const fields = ['title','intro','pending','requirements','join','groupHelp','install','testHelp','try','tryHelp','help','privacy','policy'];
const languages = [
  ['en','English'],['es','Español'],['fr','Français'],['de','Deutsch'],
  ['pt','Português'],['it','Italiano'],['pl','Polski'],['tr','Türkçe'],
  ['ru','Русский'],['ar','العربية'],['th','ไทย'],['vi','Tiếng Việt'],
  ['id','Bahasa Indonesia'],['ko','한국어'],['ja','日本語'],['zh','简体中文'],['zh-TW','繁體中文']
];
const languageLabels={en:'Language',es:'Idioma',fr:'Langue',de:'Sprache',pt:'Idioma',it:'Lingua',pl:'Język',tr:'Dil',ru:'Язык',ar:'اللغة',th:'ภาษา',vi:'Ngôn ngữ',id:'Bahasa',ko:'언어',ja:'言語',zh:'语言','zh-TW':'語言'};
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
    'After joining the group, open the Play testing link with the same Google account. Choose to become a tester, then install from Google Play. This link works once the closed test is published.',
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
    'Después de unirte al grupo, abre el enlace de pruebas de Play con la misma cuenta de Google. Elige participar y luego instala desde Google Play. El enlace funcionará cuando se publique la prueba cerrada.',
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
    'Après avoir rejoint le groupe, ouvrez le lien de test Play avec le même compte Google. Choisissez de devenir testeur, puis installez depuis Google Play. Ce lien fonctionnera lorsque le test fermé sera publié.',
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
    'Öffne nach dem Gruppenbeitritt den Play-Testlink mit demselben Google-Konto. Wähle die Teilnahme und installiere die App über Google Play. Der Link funktioniert, sobald der geschlossene Test veröffentlicht ist.',
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
    'Depois de entrar no grupo, abra o link de teste do Play com a mesma conta Google. Escolha participar do teste e instale pela Google Play. O link funcionará quando o teste fechado for publicado.',
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
    'Dopo esserti unito al gruppo, apri il link del test Play con lo stesso account Google. Scegli di diventare tester, poi installa da Google Play. Il link funzionerà quando il test chiuso sarà pubblicato.',
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
    'Po dołączeniu do grupy otwórz link testowy Play na tym samym koncie Google. Wybierz udział w teście, a następnie zainstaluj aplikację z Google Play. Link zadziała po opublikowaniu testu zamkniętego.',
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
    'Gruba katıldıktan sonra Play test bağlantısını aynı Google hesabıyla aç. Test kullanıcısı olmayı seç, ardından Google Play’den yükle. Bağlantı, kapalı test yayınlandığında çalışır.',
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
    'После вступления в группу откройте ссылку тестирования Play с тем же аккаунтом Google. Выберите участие в тесте, затем установите приложение из Google Play. Ссылка заработает после публикации закрытого теста.',
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
    'بعد الانضمام إلى المجموعة، افتح رابط اختبار Play بالحساب نفسه. اختر المشاركة في الاختبار، ثم ثبّت التطبيق من Google Play. سيعمل الرابط بعد نشر الاختبار المغلق.',
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
    'หลังเข้าร่วมกลุ่ม เปิดลิงก์ทดสอบ Play ด้วยบัญชี Google เดียวกัน เลือกเข้าร่วมการทดสอบ แล้วติดตั้งจาก Google Play ลิงก์นี้จะใช้ได้เมื่อเผยแพร่การทดสอบแบบปิดแล้ว',
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
    'Sau khi tham gia nhóm, mở liên kết thử nghiệm Play bằng cùng tài khoản Google. Chọn trở thành người thử nghiệm, rồi cài đặt từ Google Play. Liên kết hoạt động khi thử nghiệm kín được phát hành.',
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
    'Setelah bergabung ke grup, buka tautan pengujian Play dengan akun Google yang sama. Pilih menjadi penguji, lalu instal dari Google Play. Tautan berfungsi setelah uji tertutup dipublikasikan.',
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
    '그룹 가입 후 같은 Google 계정으로 Play 테스트 링크를 여세요. 테스터 참여를 선택한 후 Google Play에서 설치하세요. 비공개 테스트가 출시되면 링크가 작동합니다.',
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
    'グループ参加後、同じGoogleアカウントでPlayのテストリンクを開きます。テスターへの参加を選び、Google Playからインストールしてください。リンクはクローズドテスト公開後に利用できます。',
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
    '加入群组后，使用同一个 Google 账号打开 Play 测试链接。选择成为测试者，然后从 Google Play 安装。封闭测试发布后，此链接才可使用。',
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
    '加入群組後，使用同一個 Google 帳戶開啟 Play 測試連結。選擇成為測試人員，再從 Google Play 安裝。封閉測試發布後，此連結才能使用。',
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
  if(enrollment.groupUrl && !enrollment.testUrl) strings.pending=pendingHelp[code];
  document.documentElement.lang=code==='zh'?'zh-Hans':code;
  document.documentElement.dir=code==='ar'?'rtl':'ltr';
  languageSelect.value=code;
  document.getElementById('language-label').textContent=languageLabels[code];
  document.title=strings.title+' · KS Planner';
  for (const element of document.querySelectorAll('[data-copy]')) element.textContent=strings[element.dataset.copy];
  // Language is the sole browser-local preference; no membership data is stored.
  try { localStorage.setItem('ks-testing-language',code); } catch (_) {}
}
let savedLanguage;
try { savedLanguage=localStorage.getItem('ks-testing-language'); } catch (_) {}
const queryLanguage=new URLSearchParams(location.search).get('lang');
const browserLanguage=(navigator.languages||[navigator.language]).map(supportedLanguage).find(Boolean);
setLanguage(supportedLanguage(queryLanguage)||supportedLanguage(savedLanguage)||browserLanguage||'en');
languageSelect.addEventListener('change',()=>setLanguage(languageSelect.value));
for (const [id,url] of [['group-link',enrollment.groupUrl],['test-link',enrollment.testUrl]]) {
  if(url) {
    const link=document.getElementById(id); link.href=url; link.removeAttribute('aria-disabled');
  }
}
if(enrollment.groupUrl && enrollment.testUrl) {
  document.getElementById('enrollment-status').hidden=true;
}
