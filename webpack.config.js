//Para trabalhar com endereços no windows
const path = require('path');

module.exports = {
  //Cada vírgula é como se fosse uma barra 'src/index.js'
  entry: path.resolve(__dirname,'src','index.js'),
  //determina onde jogará o projeto de uma forma que o browser irá entender
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname,'public'),
  },
  module: {    
    rules: [
      {
        // '//' indica que é uma expressão regular (fica entre duas barras)
        // '\.' para que seja entendido como '\.' já que o ponto pode ser qualquer caracter
        // '$' que a nossa string deve terminar exatamente com .js
        test: /\.js$/,

        // Ignorar essa pasta, pois os arquivos dessa já estão transpilados (foram adicionados como bibliotecas)
        // Por que os arquivos que estão nessa pasta já estão 'transpilados' - sintaxe que o browser entende
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        //arquivos terminando ($) com extensão gif ou png ou jpg ou jpeg e case insensitive (/i)
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}