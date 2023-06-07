<?php

return [
    'validation' => [
        'fqdn_not_resolvable' => 'Указанный домен или IP-адрес не преобразуется в действительный IP-адрес.',
        'fqdn_required_for_ssl' => 'Для использования SSL на данной ноде требуется домен, преобразуемый в публичный IP-адрес.',
    ],
    'notices' => [
        'allocations_added' => 'Адреса для этой ноды успешно добавлены.',
        'node_deleted' => 'Нода успешно удалена из панели.',
        'location_required' => 'Перед добавлением ноды в панель необходимо настроить хотя бы одну локацию.',
        'node_created' => 'Новая нода успешно создана. Вы можете автоматически настроить демона на этой машине, посетив вкладку "Конфигурация". <strong>Прежде чем добавлять сервера, необходимо выделить хотя бы один IP-адрес и порт.</strong>',
        'node_updated' => 'Информация о ноде была обновлена. Если были изменены настройки демона, необходимо перезагрузить его для применения этих изменений.',
        'unallocated_deleted' => 'Удалены все неиспользуемые порты для <code>:ip</code>.',
    ],
];
