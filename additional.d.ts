declare module 'md5' {
  function md5(message:string | Buffer, options?: { asString?: boolean, asBytes?: boolean, encoding?: 'binary'})
}