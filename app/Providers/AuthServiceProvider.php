<?php

namespace Pterodactyl\Providers;

use Laravel\Sanctum\Sanctum;
use Pterodactyl\Models\Server;
use Pterodactyl\Models\ApiKey;
use Pterodactyl\Policies\ServerPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Server::class => ServerPolicy::class,
    ];

    /**
     * Register any application authentication / authorization services.
     */
    public function boot()
    {
        Sanctum::usePersonalAccessTokenModel(ApiKey::class);

        $this->registerPolicies();
    }
}
