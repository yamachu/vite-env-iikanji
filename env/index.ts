// 他のファイルで process.env.~ で参照してもいいけれども、一箇所にまとめた方が楽では
// Build時検証をしていないのであれば、この辺りで検証をしたり
export const MyEnvValue = process.env.MY_ENV_VAR;
