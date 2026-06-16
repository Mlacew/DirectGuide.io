// ==========================================
// 1. БАЗА ДАННЫХ КОНТЕНТА (СТАТЬИ И ДОНАТ)
// ==========================================
const articlesDatabase = {
    "telegram-stars": {
        meta: '<span class="tag">Telegram / Фарминг</span><span class="date">Обновлено сегодня</span>',
        title: 'Как бесплатно получить звезды Телеграм (Telegram Stars) через бота Rewaro',
        content: `
            <p>Telegram Stars — это внутренняя валюта мессенджера, с помощью которой можно оплачивать цифровые товары, подписки, контент в каналах и запускать различные мини-приложения. Тратить личные деньги на их покупку необязательно, ведь сейчас существуют проверенные способы их бесплатного фарма.</p>
            <p>Один из самых простых и надежных инструментов на данный момент — специализированный бот <strong>Rewaro</strong>. Он позволяет зарабатывать кристаллы за выполнение простых действий и приглашение друзей.</p>
            <div class="highlight-box">
                <strong>Бонус на старт:</strong> При первой авторизации по кнопке ниже вы мгновенно получите приветственный бонус в размере <strong>4000 кристаллов</strong> на свой внутренний баланс.
            </div>
            <p style="text-align: center;">
                <a href="https://t.me/rewaro_bot?start=promo-rewarotokens" target="_blank" class="action-button tg-blue">Запустить Rewaro бота +4000 Бонус</a>
            </p>
            <h3>Основные способы заработка в боте:</h3>
            <ul>
                <li><strong>Ежедневный бонус (Daily Check-in):</strong> Заходите в приложение каждый день и забирайте бесплатную порцию кристаллов.</li>
                <li><strong>Простые квесты:</strong> Подписки на официальные каналы партнеров, просмотр постов или короткая активность в мини-игры.</li>
                <li><strong>Реферальная система:</strong> Распространяйте свою партнерскую ссылку. За каждого приглашенного пользователя вам будут начисляться бонусы без каких-либо лимитов и ограничений.</li>
            </ul>
        `
    },
    "skins-cash": {
        meta: '<span class="tag">CS2 / Заработок</span><span class="date">🔥 Тренды</span>',
        title: 'Как выгодно продать скины CS2 за реальные деньги на Skins.Cash',
        content: `
            <p>Skins.Cash — это международный сервис мгновенной продажи внутриигровых предметов CS2 (CS:GO), Dota 2, Team Fortress 2 и Rust. Платформа работает с 2016 года и является одним из лидеров рынка, предоставляя пользователям возможность безопасно превратить виртуальные пиксели в реальный кэш за считанные минуты.</p>
            <p>Главное преимущество сервиса перед стандартной торговой площадкой Steam — это вывод реальных денег. Из Steam вывести средства напрямую на карту невозможно, а Skins.Cash кэширует и решает эту проблему моментально.</p>
            <div class="highlight-box">
                <strong>Подарок для новых пользователей:</strong> Переходя по официальной ссылке, вы получаете дополнительный накопительный бонус к сумме своей первой сделки.
            </div>
            <p style="text-align: center;">
                <a href="https://skins.cash/user/ref/76561199027677238
" target="_blank" class="action-button">Перейти на Skins.Cash и продать скины</a>
            </p>
            <h3>Why стоит использовать Skins.Cash?</h3>
            <ul>
                <li><strong>Мгновенная выплата:</strong> Деньги поступают на ваш счет в течение 2-5 минут после подтверждения трейда в Steam.</li>
                <li><strong>Огромный выбор платежных систем:</strong> Поддержка банковских карт (Visa/Mastercard), QIWI, WebMoney, а также популярных криптовалют (Bitcoin, Ethereum, USDT, TON).</li>
                <li><strong>Безопасность сделок:</strong> Сайт защищен SSL-шифрованием, а автоматическая система проверки трейдов исключает возможность подмены со стороны мошенников.</li>
            </ul>
        `
    },
    "grid-bot": {
        meta: '<span class="tag">Трейдинг / Автоматизация</span><span class="date">Инструкция</span>',
        title: 'Как запустить автоматического спотового Grid-бота на криптовалютной бирже',
        content: `
            <p>Grid-трейдинг (сеточная торговля) — это одна из самых популярных стратегий автоматизации на криптовалютном рынке. Она идеально работает в условиях "флэта" (бокового тренда), когда цена актива колеблется в определенном коридоре без резких движений вверх или вниз.</p>
            <p>Суть стратегии проста: бот расставляет сетку лимитных ордеров на покупку ниже текущей цены и ордеров на продажу выше нее. При колебаниях курса бот автоматически покупает дешевле и продает дороже, забирая микро-прибыль с каждого шага.</p>
            <div class="highlight-box">
                <strong>Важное правило:</strong> Сеточный бот приносит стабильную прибыль только до тех пор, пока цена актива не выходит за заранее установленные вами верхнюю и нижнюю границы торгового коридора.
            </div>
            <h3>Базовые шаги для настройки бота:</h3>
            <ul>
                <li><strong>Выбор торговой пары:</strong> Лучше выбирать монеты с высокой ликвидностью и высокой волатильностью (например, BTC/USDT или TON/USDT).</li>
                <li><strong>Установка ценового диапазона:</strong> Определите по графику уровни поддержки и сопротивления за последние несколько недель — это и будут ваши границы Grid.</li>
                <li><strong>Количество уровней (гридов):</strong> Чем больше ордеров в сетке, тем чаще они будут срабатывать, но тем меньше будет прибыль с отдельной сделки из-за комиссий биржи. Оптимальный шаг — от 0.5% до 1.5% между уровнями.</li>
            </ul>
        `
    },
    "cors-error": {
        meta: '<span class="tag">Фронтенд / Разработка</span><span class="date">Решение проблемы</span>',
        title: 'Как исправить блокировку CORS в браузере при разработке веб-сайтов',
        content: `
            <p>Каждый веб-разработчик сталкивался в консоли с ошибкой: <code>CORS policy: No 'Access-Control-Allow-Origin' header is present...</code>. Это не баг самого скрипта, а стандартный механизм безопасности браузеров, называемый Same-Origin Policy (Политика единого источника).</p>
            <p>Браузер блокирует запросы вашего фронтенда (например, запущенного на <code>localhost:3000</code>) к бэкенду на другом домене или порту, если сервер явно не разрешил такой доступ.</p>
            <div class="highlight-box">
                <strong>Главное заблуждение:</strong> Попытки отключить CORS во фронтенд-коде (через заголовки в fetch или axios) бессмысленны. CORS настраивается исключительно на стороне сервера, который принимает запросы.
            </div>
            <h3>Основные способы решения CORS-блокировки:</h3>
            <ul>
                <li><strong>Добавление заголовков на бэкенде:</strong> Сервер должен отдавать заголовок <code>Access-Control-Allow-Origin: *</code> (разрешить всем) или указать конкретный адрес вашего фронтенда.</li>
                <li><strong>Настройка конфигурации Nginx/Apache:</strong> Если перед бэкендом стоит прокси-сервер, заголовки можно прописать прямо в его конфигах.</li>
                <li><strong>Проксирование на фронтенде:</strong> На этапе разработки в инструментах сборки (Vite, Webpack или Next.js) можно настроить внутренний прокси, который будет перенаправлять запросы на бэкенд, обманывая ограничения браузера.</li>
            </ul>
        `
    },
    "tg-premium": {
        meta: '<span class="tag">Telegram / Скидки</span><span class="date">Лайфхак</span>',
        title: 'Как купить Telegram Premium со скидкой до 50%',
        content: `
            <p>Подписка Telegram Premium открывает доступ к уникальным функциям: удвоенным лимитам, расширенному управлению чатами, расшифровке голосовых сообщений и эксклюзивным эмодзи. Однако покупать её через стандартный App Store или Google Play невыгодно из-за высоких комиссий платформ.</p>
            <h3>3 легальных способа сэкономить на подписке:</h3>
            <ul>
                <li><strong>Использование официального @PremiumBot:</strong> Если вы запустите этого бота в десктопной версии Telegram или клиенте для Android, скачанном прямо с сайта (не из Google Play), цена подписки будет на 30-40% ниже из-за отсутствия комиссий Apple и Google.</li>
                <li><strong>Годовая подписка:</strong> Оплата Premium сразу на 12 месяцев дает автоматическую скидку около 40-50% по сравнению с помесячной оплатой.</li>
                <li><strong>Покупка через платформу Fragment (за TON):</strong> На официальной платформе Fragment можно приобрести подарочный код Premium для любого аккаунта, оплатив его криптовалютой TON. В периоды просадки курса это может быть самым выгодным решением.</li>
            </ul>
            <div class="highlight-box">
                <strong>Внимание:</strong> Опасайтесь сторонних продавцов на маркетплейсах, предлагающих Premium «через вход в аккаунт» по слишком заниженным ценам. За использование ворованных карт для подарков Telegram может аннулировать подписку или забанить аккаунт.
            </div>
        `
    },
    "crypto-safety": {
        meta: '<span class="tag">Крипта / Безопасность</span><span class="date">Важно</span>',
        title: 'Как защитить криптокошелек от слива баланса и фишинга',
        content: `
            <p>В мире Web3 безопасность ваших средств полностью лежит на вас. Самая частая причина потери криптовалюты новичками — это не хакерские атаки на блокчейн, а фишинг и невнимательность при подписании транзакций смарт-контрактов.</p>
            <h3>Критически важные правила защиты:</h3>
            <ul>
                <li><strong>Никогда не вводите сид-фразу (Seed phrase):</strong> Ни один легальный сервис, поддержка биржи или кошелька никогда не потребует вашу фразу из 12/24 слов. Ввод сид-фразы на сайте — это 100% потеря всех средств.</li>
                <li><strong>Опасность транзакции «Set Approval For All»:</strong> Фишинговые сайты маскируются под бесплатные раздачи (Airdrop) или минт NFT. При подключении кошелька они просят подписать транзакцию Approval. Это действие дает право смарт-контракту мошенников без вашего ведома забрать все токены или NFT с кошелька.</li>
                <li><strong>Используйте Revoke-сервисы:</strong> Если вы часто подключались к DeFi-проектам, регулярно проверяйте и отзывайте доступы к своим токенам через проверенные платформы, такие как <code>Revoke.cash</code> или разделы одобрений в проводниках сетей (Etherscan, TonViewer).</li>
            </ul>
            <div class="highlight-box">
                <strong>Рекомендация:</strong> Для хранения крупных сумм используйте исключительно аппаратные («холодные») кошельки (Ledger, Keystone, Tangem). Они физически изолируют приватные ключи от интернета.
            </div>
        `
    },
    "cs2-fps": {
        meta: '<span class="tag">CS2 / Настройка</span><span class="date">Гайд</span>',
        title: 'Оптимизация CS2: как повысить FPS и убрать микрофризы',
        content: `
            <p>Движок Source 2 принес в Counter-Strike 2 отличную графику, но вместе с ней и повышенные требования к железу. Для стабильной игры без задержек ввода (Input Lag) и фризов необходима тонкая настройка системы.</p>
            <h3>1. Оптимальные параметры запуска (Launch Options):</h3>
            <p>Кликните правой кнопкой по CS2 в Steam → Свойства → Параметры запуска. Вставьте строку:</p>
            <p><code>-novid -high -threads 0 -nojoy</code></p>
            <ul>
                <li><code>-threads 0</code> — заставляет движок Source 2 автоматически и наиболее эффективно распределить нагрузку по ядрам вашего процессора.</li>
            </ul>
            <h3>2. Настройки графики внутри игры:</h3>
            <ul>
                <li><strong>Повышенный контраст игроков:</strong> Включить (помогает видимости).</li>
                <li><strong>Вертикальная синхронизация:</strong> Выключить (вызывает дикий инпут-лаг).</li>
                <li><strong>Режим сглаживания:</strong> 4x MSAA (компромисс между качеством и производительностью).</li>
                <li><strong>Глобальное качество теней:</strong> Высоко или Средне. (Выключение теней лишает тактического преимущества, так как вы не увидите тень врага за углом).</li>
                <li><strong>FidelityFX Super Resolution (FSR):</strong> Выключить (Режим "Качество"). Включение FSR сильно мылит картинку, используйте только на очень слабых видеокартах.</li>
            </ul>
            <div class="highlight-box">
                <strong>Совет по Windows:</strong> Обязательно включите «Режим игры» (Game Mode) в настройках Windows и обновите драйверы видеокарты до последней актуальной версии с чистой установкой кэша шейдеров.
            </div>
        `
    },
    "git-guide": {
        meta: '<span class="tag">Фронтенд / Инструменты</span><span class="date">Для новичков</span>',
        title: 'Шпаргалка по командам Git: от инициализации до деплоя',
        content: `
            <p>Git — это база для любого разработчика. Данная шпаргалка содержит ключевые команды, которые ежедневно используются в коммерческой разработке проектов.</p>
            <h3>Начало работы и сохранение изменений:</h3>
            <ul>
                <li><code>git init</code> — инициализация нового локального репозитория в текущей папке.</li>
                <li><code>git clone [url]</code> — клонирование удаленного репозитория на ваш компьютер.</li>
                <li><code>git add .</code> — индексация (подготовка) всех измененных файлов для коммита.</li>
                <li><code>git commit -m "feat: add grid layout"</code> — фиксация изменений с понятным описанием.</li>
            </ul>
            <h3>Работа с ветками (Branching):</h3>
            <ul>
                <li><code>git branch [name]</code> — создание новой ветки для разработки фичи.</li>
                <li><code>git checkout [name]</code> (или новое <code>git switch [name]</code>) — переход на указанную ветку.</li>
                <li><code>git merge [name]</code> — слияние указанной ветки с текущей (например, подтягивание фичи в main).</li>
            </ul>
            <h3>Отмена изменений и синхронизация:</h3>
            <ul>
                <li><code>git pull</code> — скачивание последних обновлений из удаленного репозитория в ваш локальный.</li>
                <li><code>git push origin [branch-name]</code> — отправка ваших локальных коммитов на GitHub/GitLab.</li>
                <li><code>git reset --hard HEAD~1</code> — полный откат последнего коммита с уничтожением незакоммиченных изменений в коде (используйте осторожно!).</li>
            </ul>
        `
    },
    "p2p-trading": {
        meta: '<span class="tag">Трейдинг / Крипта</span><span class="date">Безопасность</span>',
        title: 'Как безопасно покупать крипту на P2P и не поймать блок карты',
        content: `
            <p>P2P-торговля (от человека к человеку) удобна полным отсутствием комиссий со стороны биржи, но несет риски блокировок со стороны финмониторинга банков по правилам борьбы с незаконными операциями.</p>
            <h3>Как защититься от мошенников и блокировок карт:</h3>
            <ul>
                <li><strong>Угроза схемы «Треугольник»:</strong> Мошенник выставляет товар на условном OLX/Avito, берет деньги у реального покупателя и направляет эти деньги вам на карту на P2P-бирже, чтобы забрать у вас криптовалюту. Для банка вы становитесь соучастником мошенничества. Чтобы этого избежать, всегда проверяйте: <strong>ФИО контрагента на бирже должно строго совпадать с ФИО отправителя перевода на банковской карте!</strong> Если имена разные, отменяйте сделку или подавайте апелляцию.</li>
                <li><strong>Комментарии к платежу:</strong> Никогда не пишите в назначении перевода слова «крипта», «USDT», «биткоин», «Bybit». Оставляйте поле пустым или пишите «возврат долга», «подарок».</li>
                <li><strong>Диверсификация лимитов:</strong> Не гоняйте крупные суммы через одну личную карту. Используйте карты разных банков и не совершайте более 5-7 входящих переводов в сутки от третьих лиц на одну карту.</li>
            </ul>
            <div class="highlight-box">
                <strong>Золотое правило:</strong> Работайте только с мерчантами (пользователями с желтой галочкой), у которых высокий рейтинг (от 98%) и не менее 100 выполненных ордеров за последний месяц.
            </div>
        `
    },
    "api-speed": {
        meta: '<span class="tag">Фронтенд / Веб</span><span class="date">Продвинутый</span>',
        title: 'Ускорение загрузки данных: Оптимизация API-запросов',
        content: `
            <p>Быстрый интерфейс — залог хорошего пользовательского опыта (UX). Если ваш фронтенд отправляет слишком много тяжелых и неоптимизированных запросов на бэкенд, приложение начнет тормозить и расходовать лишний трафик.</p>
            <h3>Эффективные стратегии оптимизации клиентских запросов:</h3>
            <ul>
                <li><strong>Оптимистичные обновления (Optimistic UI):</strong> Изменяйте состояние интерфейса мгновенно при клике пользователя (например, покраска лайка), не дожидаясь ответа от сервера. Если сервер вернет ошибку, просто откатите состояние назад.</li>
                <li><strong>Debounce (Устранение дребезга):</strong> Используется для живого поиска. Не отправляйте запрос на сервер при каждом нажатии клавиши. Запустите таймер и делайте запрос только тогда, когда пользователь сделал паузу в наборе текста (например, 300мс).</li>
                <li><strong>Каширование данных (Caching):</strong> Используйте инструменты вроде React Query (TanStack Query) или SWR. Они сохраняют результаты прошлых API-запросов в памяти и мгновенно отдают их при повторном открытии страницы, обновляя контент в фоновом режиме.</li>
                <li><strong>Пакетные запросы (Request Batching):</strong> Объединяйте несколько мелких запросов в один составной, чтобы снизить накладные расходы на установку HTTP-соединений с сервером.</li>
            </ul>
        `
    },
    "bybit-partner": {
        meta: '<span class="tag">Крипта / Инструкция</span><span class="date">🔥 Популярное</span>',
        title: 'Как правильно купить криптовалюту на бирже Bybit: пошаговый гайд',
        content: `
            <p>Биржа Bybit является одной из самых удобных и безопасных площадок для покупки и торговли криптовалютой. В этой инструкции мы разберем самый простой и выгодный способ покупки цифровых активов через P2P-платформу и спотовый рынок без лишних комиссий.</p>
            <h3>Шаг 1: Регистрация и верификация</h3>
            <p>Для начала необходимо создать аккаунт на официальном сайте или в приложении биржи. Для этого перейдите по ссылке ниже, введите почту или номер телефона и придумайте надежный пароль. Чтобы получить доступ к операциям, пройдите базовую верификацию (KYC уровень 1) — для этого понадобится паспорт или ID-карта, проверка занимает всего 5 минут.</p>
            <h3>Шаг 2: Покупка через P2P (без комиссии)</h3>
            <ul>
                <li>Перейдите в раздел <strong>«Купить криптовалюту» → «P2P-торговля»</strong>.</li>
                <li>Выберите валюту оплаты (например, UAH, KZT, EUR) и монету, которую хотите получить (рекомендуется покупать стейблкоин <code>USDT</code> — это цифровой аналог доллара).</li>
                <li>Укажите ваш банк в фильтрах способов оплаты.</li>
                <li>Выберите мерчанта с хорошим рейтингом (от 95% выполненных ордеров) и нажмите <strong>«Купить»</strong>.</li>
                <li>Переведите указанную сумму со своего банковского приложения на реквизиты продавца и нажмите кнопку «Я перевел». В течение пары минут USDT зачислятся на ваш баланс финансирования.</li>
            </ul>
            <h3>Шаг 3: Обмен USDT на Bitcoin или другую крипту</h3>
            <p>Если вам нужен BTC, Ethereum или Toncoin, переведите монеты с баланса «Финансирование» на «Единый торговый аккаунт». Зайдите в раздел <strong>«Торговля» → «Спотовая торговля»</strong>, выберите нужную пару (например, BTC/USDT) и совершите покупку по рыночной (Market) цене.</p>
            <div class="highlight-box">
                <p><strong>Бонус для новых пользователей:</strong> При регистрации по кнопке ниже вы автоматически закрепляетесь в бонусной программе и можете получить приветственные награды до $30,000 в «Торговом центре» Bybit после первого депозита.</p>
            </div>
            <p style="text-align: center;">
                <a href="https://www.bybit.com/invite?ref=XJO0WOA&medium=referral&utm_campaign=evergreen" target="_blank" class="action-button">Зарегистрироваться на Bybit и забрать бонусы</a>
            </p>
        `
    },
    "cryptobot-ref": {
        meta: '<span class="tag">Telegram / P2P</span><span class="date">⚡ Быстро</span>',
        title: 'Как покупать и хранить криптовалюту прямо в Telegram через Crypto Bot',
        content: `
            <p>Если вы не хотите устанавливать тяжелые приложения бирж и проходить долгую верификацию, идеальный вариант — использовать Crypto Bot внутри Telegram. Это полностью безопасный кошелек и P2P-маркет, работающий прямо в мессенджере.</p>
            <h3>Как купить монеты (USDT, TON, BTC, NOT) в боте:</h3>
            <ul>
                <li>Запустите официального бота по ссылке ниже и нажмите кнопку <strong>«Старт»</strong>.</li>
                <li>В главном меню перейдите в раздел <strong>«P2P»</strong> и выберите пункт <strong>«Купить»</strong>.</li>
                <li>Выберите интересующую вас монету (например, USDT) и валюту, которой будете платить.</li>
                <li>Бот покажет список объявлений от реальных продавцов. Отфильтруйте их по вашему банку и лимитам.</li>
                <li>Откройте сделку, отправьте перевод со своей карты на указанную карту продавца. Как только продавец подтвердит получение, монеты мгновенно окажутся на вашем балансе в боте.</li>
            </ul>
            <div class="highlight-box">
                <p><strong>Безопасность сделок:</strong> Crypto Bot выступает гарантом (эскроу-агентом). В момент открытия сделки криптовалюта продавца замораживается ботом, поэтому обман со стороны контрагента технически исключен.</p>
            </div>
            <p>Купленную крипту можно хранить прямо здесь, моментально отправлять друзьям в чатах Telegram без комиссий или выводить на внешние некастодиальные кошельки вроде Tonkeeper.</p>
            <p style="text-align: center;">
                <a href="https://t.me/CryptoBot" target="_blank" class="action-button tg-blue">Запустить Crypto Bot в Telegram</a>
            </p>
        `
    },
    "market-cs2-ref": {
        meta: '<span class="tag">CS2 / Скины</span><span class="date">🔥 Тренды</span>',
        title: 'Гайд: Как выгодно покупать и продавать скины CS2 за реальные деньги',
        content: `
            <p>Стандартная торговая площадка Steam имеет огромный минус — из нее невозможно легально вывести заработанные на скинах деньги на банковскую карту. Чтобы обойти это ограничение и покупать скины дешевле, чем в Steam, используется специализированный маркет Market.CSGO.</p>
            <h3>Инструкция по покупке предметов:</h3>
            <ul>
                <li>Авторизуйтесь на сайте через свой аккаунт Steam (это безопасно, авторизация идет через официальное API).</li>
                <li>Вставьте свою актуальную <strong>Trade-ссылку</strong> (трейд-урл) и API-ключ в настройках профиля, чтобы боты сайта могли присылать вам обмены.</li>
                <li>Пополните баланс сайта любым удобным способом (карты, СБП, крипта, электронные кошельки).</li>
                <li>Найдите нужный скин в каталоге (цены здесь обычно на 20-40% ниже, чем на торговой площадке Steam) и нажмите «Купить».</li>
                <li>Перейдите в свой клиент Steam или мобильное приложение и примите пришедший обмен в течение указанного времени.</li>
            </ul>
            <h3>Как выводить деньги?</h3>
            <p>Если вы выбили дорогой нож или затрейдили скины в плюс, вы можете выставить их на продажу на этом же маркете. После того как другой геймер купит ваш предмет, баланс сайта можно в два клика вывести на карту, электронный или криптокошелек с минимальной комиссией.</p>
            <p style="text-align: center;">
                <a href="https://market.csgo.com" target="_blank" class="action-button">Открыть Market.CSGO и получить скидки</a>
            </p>
        `
    },
    "beget-ref": {
        meta: '<span class="tag">Веб / Разработка</span><span class="date">Инструкции</span>',
        title: 'Как арендовать дешевый VPS/VDS сервер и разместить свой сайт на Beget',
        content: `
            <p>Для запуска веб-порталов, ботов или серверов баз данных разработчику необходим надежный и быстрый хостинг. Провайдер Beget является одним из лидеров рынка благодаря удобной панели управления и отличным тарифам на виртуальные серверы (VPS).</p>
            <h3>Пошаговый запуск сервера:</h3>
            <ul>
                <li>Зарегистрируйте аккаунт на платформе по ссылке ниже.</li>
                <li>Перейдите в левом меню в раздел <strong>«VPS»</strong> и нажмите кнопку <strong>«Создать виртуальный сервер»</strong>.</li>
                <li>Выберите операционную систему (для большинства задач идеально подходит чистая <code>Ubuntu 22.04 LTS</code> или <code>Debian</code>).</li>
                <li>Выберите конфигурацию железа. Для простых проектов и Telegram-ботов хватит самого базового тарифа за минимальную стоимость.</li>
                <li>Укажите регион дата-центра и нажмите «Создать». Через пару минут сервер будет развернут, а вы получите IP-адрес и Root-пароль для подключения через SSH.</li>
            </ul>
            <div class="highlight-box">
                <p><strong>Преимущества для тестов:</strong> На Beget доступна посуточная тарификация. Вы можете арендовать мощный сервер, протестировать свой код в течение дня, удалить его и заплатить всего за один день использования.</p>
            </div>
            <p style="text-align: center;">
                <a href="https://beget.com" target="_blank" class="action-button">Создать аккаунт и получить тестовый баланс</a>
            </p>
        `
    },
    "payeer-ref": {
        meta: '<span class="tag">Способы оплаты</span><span class="date">Инструкция</span>',
        title: 'Электронный кошелек PAYEER: Инструкция по созданию и пополнению',
        content: `
            <p>PAYEER — это универсальная платежная система, которая позволяет хранить, обменивать и переводить фиатные деньги (USD, EUR) вместе с популярными криптовалютами в одном аккаунте. Кошелек незаменим для оплаты зарубежных сервисов и приема платежей на сайтах.</p>
            <h3>Как пользоваться кошельком:</h3>
            <ul>
                <li><strong>Регистрация:</strong> Перейдите на официальный сайт по кнопке ниже, нажмите «Создать аккаунт» и введите email. Вам сразу выдадут номер кошелька (вида P10000000) и секретный мастер-код.</li>
                <li><strong>Пополнение:</strong> Фиатные счета можно пополнять с банковских карт, других платежных систем или через встроенную биржу/обменники. Криптовалютные счета пополняются стандартным прямым переводом на сгенерированный внутри кошелька адрес.</li>
                <li><strong>Внутренний обмен:</strong> Внутри кошелька есть моментальный обменник и упрощенная биржа. Вы можете в один клик перевести доллары в USDT или Bitcoin и обратно.</li>
            </ul>
            <p>Главный плюс PAYEER — высочайшая анонимность. Для совершения базовых платежей, обмена и мелких переводов не требуется обязательная загрузка документов и верификация личности.</p>
            <p style="text-align: center;">
                <a href="https://payeer.com" target="_blank" class="action-button">Зарегистрировать кошелек PAYEER бесплатно</a>
            </p>
        `
    },
    "donate-page": {
        meta: '<span class="tag" style="background:#0088cc; color:#fff;">Пожертвование</span><span class="date">Support</span>',
        title: 'ПОДДЕРЖКА ПРОЕКТА DIRECT GUIDE',
        content: `
            <p>DIRECT GUIDE развивается исключительно на энтузиазме команды и добровольных пожертвованиях пользователей. Любая ваша поддержка помогает нам оплачивать серверы, обновлять базу данных и выпускать новые инструкции.</p>
            <div style="background-color: #0b0b0b; border: 1px solid #1a1a1a; border-radius: 10px; padding: 25px; margin: 30px 0; position: relative; text-align:center;">
                <div style="font-family: monospace; font-size: 0.85rem; color: #0088cc; letter-spacing: 2px; margin-bottom: 10px; font-weight: 700;">💎 TONKEEPER (TON NETWORK)</div>
                <div style="display: flex; background: #030303; border: 1px solid #141414; border-radius: 6px; padding: 12px; align-items: center; justify-content: space-between; gap: 10px; margin-top: 15px;">
                    <div style="color: #ffffff; font-family: monospace; font-size: 0.9rem; word-break: break-all; text-align: left; user-select: all;" id="walletAddr">UQD6v9ktcXLJfRN79RERBIUIlo0PtUuoiCNRvN1mQgIWGn7V</div>
                    <button style="background: #ff0000; border: none; color: #fff; padding: 8px 16px; border-radius: 4px; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.2s ease; white-space: nowrap;" id="copyBtn">КОПИРОВАТЬ</button>
                </div>
            </div>
            <div style="border-top: 1px dashed #141414; padding-top: 30px; margin-top: 20px; text-align: center;">
                <p style="color: #555; font-size: 0.9rem; margin-bottom: 15px;">Следите за обновлениями базы данных в официальном источнике:</p>
                <a href="https://t.me/directguide" target="_blank" style="display: inline-flex; align-items: center; gap: 10px; background: transparent; border: 1px solid #222; color: #cccccc; text-decoration: none; padding: 12px 24px; border-radius: 30px; font-weight: 600; transition: all 0.2s ease;">
                    <span style="color:#ff0000;">📢</span> @directguide
                </a>
            </div>
        `
    }
};

// ==========================================
// 2. УПРАВЛЕНИЕ ЭКРАНАМИ (SPA НАВИГАЦИЯ С АНИМАЦИЯМИ)
// ==========================================
const mainSearchContainer = document.getElementById('mainSearchContainer');
const articleViewerContainer = document.getElementById('articleViewerContainer');
const dynamicMeta = document.getElementById('dynamicMeta');
const dynamicTitle = document.getElementById('dynamicTitle');
const dynamicContent = document.getElementById('dynamicContent');

function showScreen(screenType, articleKey = null) {
    if (screenType === 'home') {
        articleViewerContainer.style.opacity = '0';
        
        setTimeout(() => {
            articleViewerContainer.style.display = 'none';
            
            if (searchInput) searchInput.value = '';
            if (articlesSection) {
                articlesSection.style.display = 'none';
                articlesSection.style.opacity = '0';
            }
            
            mainSearchContainer.style.display = 'block';
            setTimeout(() => {
                mainSearchContainer.style.opacity = '1';
                // Показываем виджет обратно при возврате на главную
                if (stickyNoticeWidget) {
                    stickyNoticeWidget.style.visibility = 'visible';
                    stickyNoticeWidget.style.opacity = '1';
                }
            }, 10);
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    } 
    else if (screenType === 'article' && articleKey && articlesDatabase[articleKey]) {
        const data = articlesDatabase[articleKey];
        
        dynamicMeta.innerHTML = data.meta;
        dynamicTitle.textContent = data.title;
        dynamicContent.innerHTML = data.content;
        
        mainSearchContainer.style.opacity = '0';
        // Закрываем и плавно прячем боковой виджет, чтобы не мешал читать статью
        if (noticeModal) noticeModal.classList.remove('active');
        if (stickyNoticeWidget) {
            stickyNoticeWidget.style.opacity = '0';
            setTimeout(() => { stickyNoticeWidget.style.visibility = 'hidden'; }, 200);
        }
        
        setTimeout(() => {
            mainSearchContainer.style.display = 'none';
            
            articleViewerContainer.style.display = 'block';
            setTimeout(() => {
                articleViewerContainer.style.opacity = '1';
            }, 10);
            
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (articleKey === 'donate-page') {
                initDonateCopyLogic();
            }
        }, 200);
    }
}

// Делегирование событий клика по карточкам статей
document.addEventListener('click', (e) => {
    const item = e.target.closest('.article-item');
    if (item) {
        const articleKey = item.getAttribute('data-article');
        showScreen('article', articleKey);
    }
});

// Слушатели кнопок навигации
document.getElementById('backToSearchBtn').addEventListener('click', () => showScreen('home'));
document.getElementById('logoHomeBtn').addEventListener('click', () => showScreen('home'));

document.getElementById('menuHomeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    showScreen('home');
});

document.getElementById('menuDonateBtn').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    showScreen('article', 'donate-page');
});

// Логика копирования адреса кошелька
function initDonateCopyLogic() {
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const addressText = document.getElementById('walletAddr').textContent;
            navigator.clipboard.writeText(addressText).then(() => {
                copyBtn.textContent = 'СКОПИРОВАНО!';
                copyBtn.style.background = '#00ff66';
                copyBtn.style.color = '#000000';
                
                setTimeout(() => {
                    copyBtn.textContent = 'КОПИРОВАТЬ';
                    copyBtn.style.background = '#ff0000';
                    copyBtn.style.color = '#ffffff';
                }, 2000);
            });
        });
    }
}

// ==========================================
// 3. СИСТЕМА ЖИВОГО ПОИСКА СТАТЕЙ
// ==========================================
const searchInput = document.getElementById('searchInput');
const articlesSection = document.getElementById('articlesSection');

if (searchInput && articlesSection) {
    
    // Раскрытие секции при фокусе
    searchInput.addEventListener('focus', function() {
        articlesSection.style.display = 'block';
        setTimeout(() => {
            articlesSection.style.opacity = '1';
        }, 10);
    });

    // Живая фильтрация карточек
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.article-item');
        
        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(query)) {
                card.style.setProperty('display', 'block', 'important');
            } else {
                card.style.setProperty('display', 'none', 'important');
            }
        });
    });

    // Скрытие при blur с задержкой (для отработки клика)
    searchInput.addEventListener('blur', function() {
        if (this.value.trim() === "") {
            setTimeout(() => {
                if (searchInput.value.trim() === "") {
                    articlesSection.style.opacity = '0';
                    setTimeout(() => {
                        articlesSection.style.display = 'none';
                    }, 200);
                }
            }, 200);
        }
    });
}

// ==========================================
// 4. УПРАВЛЕНИЕ БОКОВЫМ МЕНЮ (МЕНЮ-БУРГЕР)
// ==========================================
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function openMenu() {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
}

function closeMenu() {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
}

if (openMenuBtn) openMenuBtn.addEventListener('click', openMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

// ==========================================
// 5. ЛОГИКА ОКНА "ВАЖНО ПРОЧИТАТЬ"
// ==========================================
const stickyNoticeWidget = document.getElementById('stickyNoticeWidget');
const noticeModal = document.getElementById('noticeModal');
const openNoticeBtn = document.getElementById('openNoticeBtn');
const closeNoticeBtn = document.getElementById('closeNoticeBtn');

if (openNoticeBtn && noticeModal) {
    openNoticeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        noticeModal.classList.toggle('active');
    });
}

if (closeNoticeBtn) {
    closeNoticeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        noticeModal.classList.remove('active');
    });
}

// Закрываем окно при клике в любую пустую область сайта
document.addEventListener('click', (e) => {
    if (noticeModal && !stickyNoticeWidget.contains(e.target)) {
        noticeModal.classList.remove('active');
    }
});