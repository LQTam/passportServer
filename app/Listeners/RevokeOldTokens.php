<?php

namespace App\Listeners;

use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\Client;

class RevokeOldTokens
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        // DB::table('oauth_access_tokens')
        //     ->where('id', '<>', $event->tokenId)
        //     ->where('user_id', $event->userId)
        //     ->where('client_id', $event->clientId)
        //     ->update(['revoked' => true]);
        $client = Client::find($event->clientId);
        // delete this client tokens created before one day ago:
        $client->tokens()
                  ->where('user_id', $event->userId)
                  ->where('created_at', '<', Carbon::now()->subDay())
                  ->delete();
    }
}
