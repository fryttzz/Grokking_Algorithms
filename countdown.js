function regressiva(i) {
    console.log(i);
    i <= 1 ? 0 : regressiva(i - 1)
}

regressiva(10)