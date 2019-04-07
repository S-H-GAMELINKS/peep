<template>
    <div data-controller="peep" data-peep-refresh-interval="50000">
        <h1>Mastodon ローカルタイムライン覗き見ツール</h1>

        <form>
            <div class="form-group">
                <label>URL</label>
                <input class="form-control" data-target="peep.url" placeholder="覗き見たいMastodonのURLを入力してください">
            </div>
        </form>

        <div data-target="peep.toots"></div>
    </div>    
</template>
