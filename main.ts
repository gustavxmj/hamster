function make_hamster () {
    hamster = sprites.create(img`
        ............ff.....
        ...........f..f....
        .....ff.fff.f.f....
        ....fb3f......f....
        ....f3f3.......f...
        ....f33e........f..
        .....ee.........f..
        ....f...........ff.
        ....f.....f.f....f.
        ...f......fff.....f
        ...f.......f....f.f
        ..f............f..f
        ..f...........f.ff.
        .f........f....f.f.
        .f.........f..f..f.
        .f...........ff..f.
        f...........f..ff..
        f........fff.....f.
        f................f.
        f................f.
        .f...............f.
        .f..............f..
        ..f...........ff...
        ...fff..ff.fff..f..
        ......f...f...ff...
        .......fff.........
        `, SpriteKind.Player)
}
let hamster: Sprite = null
make_hamster()
