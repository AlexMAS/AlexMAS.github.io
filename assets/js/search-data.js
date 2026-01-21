// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-обо-мне",
    title: "Обо мне",
    section: "Навигация",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-архитектоника-в-ит",
          title: "Архитектоника в ИТ",
          description: "Заметки про ИТ-архитектуру и разработку",
          section: "Навигация",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-публикации-и-выступления",
          title: "Публикации и выступления",
          description: "",
          section: "Навигация",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-oom-killer-к-нам-приходит",
        
          title: "OOM Killer к нам приходит",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2026/oom-killer/";
          
        },
      },{id: "post-throttling-бесполезная-трата-cpu",
        
          title: "Throttling - бесполезная трата CPU",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2026/throttling-and-cpu-usage/";
          
        },
      },{id: "post-итоги-2025-года",
        
          title: "Итоги 2025 года",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/2025-year-summary/";
          
        },
      },{id: "post-первичный-анализ-задачи-поиска-медицинских-документов",
        
          title: "Первичный анализ задачи поиска медицинских документов",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/search-for-medical-documents/";
          
        },
      },{id: "post-трансформация-конференций",
        
          title: "Трансформация конференций",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/ontico-conf-transformation/";
          
        },
      },{id: "post-9-архитектурных-заблуждений-о-распределённых-системах",
        
          title: "9 архитектурных заблуждений о распределённых системах",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/9-fallacies-distributed-computing/";
          
        },
      },{id: "post-порочные-связи-между-компонентами",
        
          title: "Порочные связи между компонентами",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/connascence/";
          
        },
      },{id: "post-декомпозиция-в-стиле-квантовой-архитектуры",
        
          title: "Декомпозиция в стиле квантовой архитектуры",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/decomposition-in-the-style-of-quantum-architecture/";
          
        },
      },{id: "post-базовые-элементы-архитектурного-фреймворка",
        
          title: "Базовые элементы архитектурного фреймворка",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/basic-elements-of-an-architectural-framework/";
          
        },
      },{id: "post-меры-предосторожности-при-работе-с-рсубд",
        
          title: "Меры предосторожности при работе с РСУБД",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/safety-instruction-rdbms/";
          
        },
      },{id: "post-ключевые-темы-highload-2025",
        
          title: "Ключевые темы HighLoad++ 2025",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/highload-2025/";
          
        },
      },{id: "post-как-начать-структурировать-опыт",
        
          title: "Как начать структурировать опыт",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/how-to-structure-experience/";
          
        },
      },{id: "post-вспомогательная-таблица-для-ускорения-выборки",
        
          title: "Вспомогательная таблица для ускорения выборки",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/data-seive/";
          
        },
      },{id: "post-второй-закон-архитектуры",
        
          title: "Второй закон архитектуры",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/second-law-of-architecture/";
          
        },
      },{id: "post-решардирование-данных-через-промежуточный-топик",
        
          title: "Решардирование данных через промежуточный топик",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/resharding-data/";
          
        },
      },{id: "post-контракт-между-приложением-и-окружением",
        
          title: "Контракт между приложением и окружением",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/app-env-contract/";
          
        },
      },{id: "post-вайб-аналитика-митап",
        
          title: "Вайб-аналитика: митап",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/vibe-analytics-meetup/";
          
        },
      },{id: "post-вайб-аналитика",
        
          title: "Вайб-аналитика",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/vibe-analytics/";
          
        },
      },{id: "post-волшебная-кнопка",
        
          title: "Волшебная кнопка",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/magic-button/";
          
        },
      },{id: "post-archimate-убрать-нельзя-оставить",
        
          title: "ArchiMate убрать нельзя оставить",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/archimate/";
          
        },
      },{id: "post-доступность",
        
          title: "Доступность",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/availability/";
          
        },
      },{id: "post-оптимистичная-архитектура",
        
          title: "Оптимистичная архитектура",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/optimistic-architecture/";
          
        },
      },{id: "post-моделирование-данных-переиспользование",
        
          title: "Моделирование данных: переиспользование",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/data-modeling-reusing/";
          
        },
      },{id: "post-моделирование-данных-производительность",
        
          title: "Моделирование данных: производительность",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/data-modeling-performance/";
          
        },
      },{id: "post-моделирование-данных-структуризация",
        
          title: "Моделирование данных: структуризация",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/data-modeling-structuring/";
          
        },
      },{id: "post-devsecops-build-phase",
        
          title: "DevSecOps - build phase",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/devsecops-build-phase/";
          
        },
      },{id: "post-devsecops-amp-shift-left",
        
          title: "DevSecOps &amp; Shift-Left",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/devsecops-shift-left/";
          
        },
      },{id: "post-интеграция-и-внешние-идентификаторы",
        
          title: "Интеграция и внешние идентификаторы",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/integration-and-external-ids/";
          
        },
      },{id: "post-snowflake-id-генерация-целочисленного-идентификатора-в-распределённой-системе",
        
          title: "Snowflake ID: генерация целочисленного идентификатора в распределённой системе",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/snowflake-id/";
          
        },
      },{id: "post-как-еще-определять-границы-микросервисов",
        
          title: "Как еще определять границы микросервисов",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/msa-decomposition/";
          
        },
      },{id: "post-techleadconf-x-2025-видео",
        
          title: "TechLeadConf X 2025: видео",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/techleadconf-x-2025-video/";
          
        },
      },{id: "post-голосование-за-канал",
        
          title: "Голосование за канал",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/tg-contest-vote/";
          
        },
      },{id: "post-ускорение-интеграционных-тестов",
        
          title: "Ускорение интеграционных тестов",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/speeding-up-integration-tests/";
          
        },
      },{id: "post-конкурс-авторских-каналов",
        
          title: "Конкурс авторских каналов",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/tg-contest/";
          
        },
      },{id: "post-борьба-с-техническим-долгом-и-legacy",
        
          title: "Борьба с техническим долгом и Legacy",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/eliminating-legacy/";
          
        },
      },{id: "post-безопасное-исполнение-ненадёжного-кода",
        
          title: "Безопасное исполнение ненадёжного кода",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/untrusted-code/";
          
        },
      },{id: "post-techleadconf-x-2025-итоги",
        
          title: "TechLeadConf X 2025: итоги",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/techleadconf-x-2025-summary/";
          
        },
      },{id: "post-techleadconf-x-2025-презентация",
        
          title: "TechLeadConf X 2025: презентация",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/techleadconf-x-2025-presentation/";
          
        },
      },{id: "post-распределенные-sql-базы",
        
          title: "Распределенные SQL-базы",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/distributed-sql-databases/";
          
        },
      },{id: "post-неизбежность-эволюции",
        
          title: "Неизбежность эволюции",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/inevitability-of-evolution/";
          
        },
      },{id: "post-способы-борьбы-с-legacy-кодом",
        
          title: "Способы борьбы с Legacy-кодом",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/legacy/";
          
        },
      },{id: "post-миграция-данных-и-hll",
        
          title: "Миграция данных и HLL",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/data-migration-and-hll/";
          
        },
      },{id: "post-инструменты-techlead-crew",
        
          title: "Инструменты Techlead Crew",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/techlead-crew-tools/";
          
        },
      },{id: "post-слабая-или-сильная-изоляция-транзакций",
        
          title: "Слабая или сильная изоляция транзакций",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/weak-strong-isolation-levels/";
          
        },
      },{id: "post-event-storming",
        
          title: "Event Storming",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/event-storming/";
          
        },
      },{id: "post-чего-не-написано-того-нет",
        
          title: "Чего не написано - того нет",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/unknown-term/";
          
        },
      },{id: "post-lamport-timestamp-генерация-целочисленного-идентификатора-в-распределённой-бд-без-acid-транзакций",
        
          title: "Lamport Timestamp: генерация целочисленного идентификатора в распределённой БД без ACID-транзакций",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/lamport-timestamp/";
          
        },
      },{id: "post-выбор-uuid-для-первичного-ключа-таблицы",
        
          title: "Выбор UUID для первичного ключа таблицы",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/selecting-b-tree-and-uuids/";
          
        },
      },{id: "post-структура-высеченная-в-камне",
        
          title: "Структура, высеченная в камне",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/structure-carved-in-stone/";
          
        },
      },{id: "post-устранение-уязвимостей-в-коде",
        
          title: "Устранение уязвимостей в коде",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/process-isolation/";
          
        },
      },{id: "post-утилита-изоляции-процессов-bubblewrap",
        
          title: "Утилита изоляции процессов Bubblewrap",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/bubblewrap/";
          
        },
      },{id: "post-безопасное-исполнение-ненадежного-кода",
        
          title: "Безопасное исполнение ненадежного кода",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/teachleadconf-2025/";
          
        },
      },{id: "post-проблемы-изоляции-транзакций",
        
          title: "Проблемы изоляции транзакций",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/transaction-isolation-issues/";
          
        },
      },{id: "post-удаление-конфиденциальных-данных",
        
          title: "Удаление конфиденциальных данных",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/fast-delete-sensitive-data/";
          
        },
      },{id: "post-calvin-protocol-для-распределенных-транзакций",
        
          title: "Calvin Protocol для распределенных транзакций",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/calvin-protocol/";
          
        },
      },{id: "post-конкурентный-доступ-к-данным",
        
          title: "Конкурентный доступ к данным",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/concurrent-data-access/";
          
        },
      },{id: "post-хочешь-рисуй-не-хочешь-вызывай-rest",
        
          title: "Хочешь рисуй, не хочешь - вызывай REST",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/tools/";
          
        },
      },{id: "post-acid-aid-или-ad",
        
          title: "ACID, AID или AD",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/acid-aid-or-ad/";
          
        },
      },{id: "post-что-не-так-с-postgresql",
        
          title: "Что не так с PostgreSQL",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/what-s-wrong-with-postgresql/";
          
        },
      },{id: "post-принцип-прочности",
        
          title: "Принцип прочности",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/robustness-principle/";
          
        },
      },{id: "post-борьба-с-зомби-процессами",
        
          title: "Борьба с зомби-процессами",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/zombie-processes/";
          
        },
      },{id: "post-гарантированная-отправка-сообщений",
        
          title: "Гарантированная отправка сообщений",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2025/reliable-delivery/";
          
        },
      },{id: "post-надежность-прочность-устойчивость",
        
          title: "Надежность, прочность, устойчивость",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2024/reliability-strength-stability/";
          
        },
      },{id: "post-итоги-проведения-олимпиад",
        
          title: "Итоги проведения олимпиад",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2024/olymp-summary/";
          
        },
      },{id: "post-фэйл-с-rabbitmq-и-kubernetes-api",
        
          title: "Фэйл с RabbitMQ и Kubernetes API",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2024/fail-rabbitmq-kubernetes-api/";
          
        },
      },{id: "post-ускорение-потоков-данных",
        
          title: "Ускорение потоков данных",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2024/data-flow-speeding-up/";
          
        },
      },{id: "post-log-based-и-queue-based-брокеры-сообщений",
        
          title: "Log-based- и Queue-based-брокеры сообщений",
        
        description: "",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/blog/2024/log-and-queue-based-brokers/";
          
        },
      },];
