const keySounds = {
    '1': 'sounds/1.wav',
    '!': 'sounds/!.wav',
    '2': 'sounds/2.wav',
    '@': 'sounds/@.wav',
    '3': 'sounds/3.wav',
    '4': 'sounds/4.wav',
    '$': 'sounds/$.wav',
    '5': 'sounds/5.wav',
    '%': 'sounds/%.wav',
    '6': 'sounds/6.wav',
    '^': 'sounds/^.wav',
    '7': 'sounds/7.wav',
    '8': 'sounds/8.wav',
    '*': 'sounds/*.wav',
    '9': 'sounds/9.wav',
    '0': 'sounds/0.wav',
    'q': 'sounds/q.wav',
    'Q': 'sounds/SHIFTQ.wav',
    'w': 'sounds/w.wav',
    'W': 'sounds/SHIFTW.wav',
    'e': 'sounds/e.wav',
    'E': 'sounds/SHIFTE.wav',
    'r': 'sounds/r.wav',
    't': 'sounds/t.wav',
    'T': 'sounds/SHIFTT.wav',
    'y': 'sounds/y.wav',
    'Y': 'sounds/SHIFTY.wav',
    'u': 'sounds/u.wav',
    'i': 'sounds/i.wav',
    'I': 'sounds/SHIFTI.wav',
    'o': 'sounds/o.wav',
    'O': 'sounds/SHIFTO.wav',
    'p': 'sounds/p.wav',
    'P': 'sounds/SHIFTP.wav',
    'A': 'sounds/a.wav',
    's': 'sounds/s.wav',
    'S': 'sounds/SHIFTS.wav',
    'd': 'sounds/d.wav',
    'D': 'sounds/SHIFTD.wav',
    'f': 'sounds/f.wav',
    'g': 'sounds/g.wav',
    'G': 'sounds/SHIFTG.wav',
    'h': 'sounds/h.wav',
    'H': 'sounds/SHIFTH.wav',
    'j': 'sounds/j.wav',
    'J': 'sounds/SHIFTJ.wav',
    'k': 'sounds/k.wav',
    'l': 'sounds/l.wav',
    'L': 'sounds/SHIFTL.wav',
    'z': 'sounds/z.wav',
    'Z': 'sounds/SHIFTZ.wav',
    'x': 'sounds/x.wav',
    'c': 'sounds/c.wav',
    'C': 'sounds/SHIFTC.wav',
    'v': 'sounds/v.wav',
    'V': 'sounds/SHIFTV.wav',
    'b': 'sounds/b.wav',
    'B': 'sounds/SHIFTB.wav',
    'n': 'sounds/n.wav',
    'm': 'sounds/m.wav',
};

document.addEventListener('keydown', function (event) {
    makeSound(event.key);
});

function makeSound(key) {
    const audioPath = keySounds[key];

    if (audioPath) {
        const audio = new Audio(audioPath);
        audio.play();
        buttonAnime(key); 
    }
}

function buttonAnime(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}