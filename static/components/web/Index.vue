<template>
    <div data-controller="peep" data-peep-refresh-interval="100">
        <h1>Mastodon ローカルタイムライン覗き見ツール</h1>

        <form>
            <div class="form-group">
                <label>URL</label>
                <input class="form-control" data-target="peep.url" placeholder="覗き見たいMastodonのURLを入力してください">
            </div>
        </form>

        <p>
            <button data-action="click->peep#connect">Check</button>
        </p>

        <div data-target="peep.toots"></div>
    </div>    
</template>
