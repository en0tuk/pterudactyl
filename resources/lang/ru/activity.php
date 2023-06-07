<?php

/**
 * Содержит все строки перевода для различных событий журнала активности.
 * Они должны быть ключевыми по значению перед двоеточием (:)
 * в имени события. Если двоеточие отсутствует, они должны находиться на верхнем уровне.
 */
return [
    'auth' => [
        'fail' => 'Не удалось войти',
        'success' => 'Вход в систему',
        'password-reset' => 'Сброс пароля',
        'reset-password' => 'Запрошен сброс пароля',
        'checkpoint' => 'Требуется двухфакторная аутентификация',
        'recovery-token' => 'Использован восстановительный токен двухфакторной аутентификации',
        'token' => 'Пройдена проверка двухфакторного подтверждения',
        'ip-blocked' => 'Заблокирован запрос с IP-адреса: :identifier',
        'sftp' => [
            'fail' => 'Не удалось войти через SFTP',
        ],
    ],
    'user' => [
        'account' => [
            'email-changed' => 'Изменен адрес электронной почты с :old на :new',
            'password-changed' => 'Изменен пароль',
        ],
        'api-key' => [
            'create' => 'Создан новый ключ API: :identifier',
            'delete' => 'Удален ключ API: :identifier',
        ],
        'ssh-key' => [
            'create' => 'Добавлен SSH-ключ: :fingerprint в учетную запись',
            'delete' => 'Удален SSH-ключ: :fingerprint из учетной записи',
        ],
        'two-factor' => [
            'create' => 'Включена двухфакторная аутентификация',
            'delete' => 'Отключена двухфакторная аутентификация',
        ],
    ],
    'server' => [
        'reinstall' => 'Сервер переустановлен',
        'console' => [
            'command' => 'Выполнена команда ":command" на сервере',
        ],
        'power' => [
            'start' => 'Сервер запущен',
            'stop' => 'Сервер остановлен',
            'restart' => 'Сервер перезагружен',
            'kill' => 'Сервер принудительно остановлен',
        ],
        'backup' => [
            'download' => 'Скачана резервная копия :name',
            'delete' => 'Удалена резервная копия :name',
            'restore' => 'Восстановлена резервная копия :name (удалено файлов: :truncate)',
            'restore-complete' => 'Завершено восстановление резервной копии :name',
            'restore-failed' => 'Не удалось восстановить резервную копию :name',
            'start' => 'Запущена новая резервная копия :name',
            'complete' => 'Резервная копия :name отмечена как завершенная',
            'fail' => 'Резервная копия :name отмечена как неудачная',
            'lock' => 'Заблокирована резервная копия :name',
            'unlock' => 'Разблокирована резервная копия :name',
        ],
        'database' => [
            'create' => 'Создана новая база данных :name',
            'rotate-password' => 'Изменен пароль для базы данных :name',
            'delete' => 'Удалена база данных :name',
        ],
        'file' => [
            'compress_one' => 'Сжат :directory:file',
            'compress_other' => 'Сжато :count файлов в :directory',
            'read' => 'Просмотрено содержимое :file',
            'copy' => 'Создана копия :file',
            'create-directory' => 'Создан каталог :directory:name',
            'decompress' => 'Распаковано :files в :directory',
            'delete_one' => 'Удален :directory:files.0',
            'delete_other' => 'Удалено :count файлов в :directory',
            'download' => 'Скачан :file',
            'pull' => 'Скачан удаленный файл с :url в :directory',
            'rename_one' => 'Переименовано :directory:files.0.from в :directory:files.0.to',
            'rename_other' => 'Переименовано :count файлов в :directory',
            'write' => 'Записан новый контент в :file',
            'upload' => 'Начата загрузка файла',
            'uploaded' => 'Загружен :directory:file',
        ],
        'sftp' => [
            'denied' => 'Доступ к SFTP заблокирован из-за ограничений прав',
            'create_one' => 'Создано :files.0',
            'create_other' => 'Создано :count новых файлов',
            'write_one' => 'Изменено содержимое :files.0',
            'write_other' => 'Изменено содержимое :count файлов',
            'delete_one' => 'Удалено :files.0',
            'delete_other' => 'Удалено :count файлов',
            'create-directory_one' => 'Создан каталог :files.0',
            'create-directory_other' => 'Создано :count каталогов',
            'rename_one' => 'Переименовано :files.0.from в :files.0.to',
            'rename_other' => 'Переименовано или перемещено :count файлов',
        ],
        'allocation' => [
            'create' => 'На сервер добавлен адрес :allocation',
            'notes' => 'Обновлены примечания для :allocation с ":old" на ":new"',
            'primary' => ':allocation установлен в качестве основного адреса сервера',
            'delete' => 'Удален адрес :allocation',
        ],
        'schedule' => [
            'create' => 'Создано расписание :name',
            'update' => 'Обновлено расписание :name',
            'execute' => 'Вручную выполнено расписание :name',
            'delete' => 'Удалено расписание :name',
        ],
        'task' => [
            'create' => 'Создано новое задание ":action" для расписания :name',
            'update' => 'Обновлено задание ":action" для расписания :name',
            'delete' => 'Удалено задание для расписания :name',
        ],
        'settings' => [
            'rename' => 'Сервер переименован с :old на :new',
            'description' => 'Изменено описание сервера с :old на :new',
        ],
        'startup' => [
            'edit' => 'Переменная :variable изменена с ":old" на ":new"',
            'image' => 'Обновлен образ Docker для сервера с :old на :new',
        ],
        'subuser' => [
            'create' => 'Добавлен подпользователь :email',
            'update' => 'Обновлены разрешения подпользователя :email',
            'delete' => 'Удален подпользователь :email',
        ],
    ],
];
