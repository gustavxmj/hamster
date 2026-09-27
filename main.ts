function make_hamster () {
    hamster = sprites.create(img`
        ............ff.....
        ...........f3bf....
        .....ff.fff3f3f....
        ....fb3f44414ef....
        ....f3f3444444ef...
        ....f33e44444444f..
        .....ee444444114f..
        ....fe4444414111ff.
        ....fe4444f1f1113f.
        ...fe44444fff11111f
        ...fe444411f1111f1f
        ..fee4441111111f11f
        ..fe4444411111f1ff.
        .f444444eef4444f4f.
        .f4444444eef44fbef.
        .f4444ee44414ffeef.
        f4444eeee444fbbff..
        f4444444efffb11b4f.
        fe4444411bb311114f.
        fe444441111111114f.
        .fe4444411111111ef.
        .feeee4441111114f..
        ..feeeee444114ffe..
        ...fffeeff4fff41f..
        ......fe14f...ff...
        .......fff.........
        `, SpriteKind.Player)
    controller.moveSprite(hamster)
    scene.cameraFollowSprite(hamster)
}
let hamster: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
make_hamster()
