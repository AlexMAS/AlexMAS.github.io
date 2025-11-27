---
layout: post
title: DevSecOps - build phase
date: 2025-08-14
tags: security devops
categories: post
thumbnail: /assets/img/blog/2025/2025-08-14-devsecops-build-phase.png
metadata:
  selection: security
---

Первая фаза DevSecOps-конвейера относится к сборке проекта и состоит из этапов pre-commit, Pre-build и Post-build. Сегодня предлагаю рассмотреть возможные проверки и инструменты этих этапов. Преимущество буду отдавать передовым open-source-решениям.

![](/assets/img/blog/2025/2025-08-14-devsecops-build-phase.png)

Все проверки этой фазы выполняются методом белого/серого ящика — анализируется код, файлы проекта или метаданные артефактов сборки.

## Pre-commit

На этапе Pre-commit можно настроить Secret Detection. Вызов сканера интегрируется в Git через [pre-commit hook](https://git-scm.com/book/ms/v2/Customizing-Git-Git-Hooks). Преимущества понятны, а вот к недостаткам следует отнести необходимость *локальной* установки и настройки, поддержка идентичности которой отдельная и крайне неприятная задача. Между тем, многие настройки можно положить в Git.

> Управление секретами — прежде всего определённый уровень инженерной культуры проекта. Иначе говоря, сначала нужно договориться о способе работы с секретами, а потом вводить инструменты контроля.

Популярные инструменты:
* [Trivy](https://github.com/aquasecurity/trivy) — универсальный сканер для обнаружения проблем с безопасностью. Производит анализ пакетов в SBOM, находит известные уязвимости (CVE), некорректные настройки в IaC, конфиденциальную информацию и секреты, проблемы с лицензированием. Имеет [подробную документацию](https://trivy.dev/latest/) и интеграцию с множеством инструментов. Лицензия Apache-2.0, 27.9k звёзд на GitHub.
* [gitleaks](https://github.com/gitleaks/gitleaks) — сканер для детектирования секретов в Git-репозитории, файловой системе и `stdin`. Позволяет гибко настраивать правила проверки. Лицензия MIT, 22.9k звёзд на GitHub.

## Pre-build

На этом уровне можно настроить следующие проверки:

* *Secret Detection* — обнаружение секретов, но уже после того, как изменения отправлены в центральный репозиторий. Инструменты: [GitLab Secret Detection](https://docs.gitlab.com/user/application_security/secret_detection/) (Free); [Trivy](https://github.com/aquasecurity/trivy); [gitleaks](https://github.com/gitleaks/gitleaks).
* *Static Application Security Testing (SAST)* — анализ исходного кода на наличие распространённых уязвимостей. Отчёт включает список уязвимостей со ссылкой на конкретные фрагменты кода. Статический анализ не запускает проверяемый код, следовательно, провоцирует множество ложно-положительных срабатываний и пропускает некоторые виды уязвимостей. Инструменты: [GitLab SAST](https://docs.gitlab.com/user/application_security/sast/) (Free), [GitFlic SAST](https://docs.gitflic.ru/latest/cicd/sast/) (Enterprise); [PVS-Studio SAST](https://pvs-studio.ru/ru/pvs-studio/sast/); [SonarQube](https://www.sonarsource.com/products/sonarqube/).
* *Software Composition Analysis (SCA)* — обнаружение уязвимостей в используемых зависимостях с открытым исходным кодом, анализ лицензионной совместимости и возможные риски нарушения лицензионных прав. Инструменты: [Trivy](https://github.com/aquasecurity/trivy); [PVS-Studio SCA](https://pvs-studio.ru/ru/pvs-studio/sca/); [GitLab Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) (Ultimate); [GitFlic SCA](https://docs.gitflic.ru/latest/cicd/sca/) (Enterprise). 

> Как мне кажется, несмотря на все недостатки, по соотношению прилагаемых усилий и получаемого эффекта статический анализ остаётся самым простым и рабочим инструментом. Обратите внимание, что часть проверок доступна из коробки CI/CD, следовательно, подключить эти проверки будет проще. Некоторые инструменты могут быть интегрированы в IDE (Trivy, PVS-Studio).

Для SCA требуется сформировать файл [SBOM](https://en.wikipedia.org/wiki/Software_supply_chain). Они бывают разных форматов, поэтому выбирать нужно тот, который совместим с используемым SCA. В Java файл SBOM проще всего формировать на этапе сборки. Например, для генерации SBOM в формате [CycloneDX](https://github.com/CycloneDX) используйте официальный [Gradle-плагин](https://plugins.gradle.org/plugin/org.cyclonedx.bom).

## Post-build

На этом уровне выполняется *Binary SCA* — обнаружение уязвимостей в бинарных артефактах, полученных после сборки. Проверяться может как содержимое файлов, так и их хэш-сумма. В последнем случае по хэш-сумме находят сведения о файле в открытых базах уязвимостей. Инструменты: [GitLab Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/) (Free); [Trivy](https://github.com/aquasecurity/trivy); [grype](https://github.com/anchore/grype); [clair](https://github.com/quay/clair).

***

Делитесь своими историями использования статических сканеров. У меня есть одна...


> На одном из проектов SAST-проверку делал заказчик. Под анализ попадал не только код, но и локальная конфигурация с тестами. Нормально договориться так и не получилось, пришлось искать "обходные пути". В итоге вся проверка была сведена к какому-то бесполезному ритуалу. Уверен, что всё можно сделать значительно эффективней, но эффективность, по всей видимости, во многом зависит от того, насколько ИБ понимает разработку, а разработка ИБ.
