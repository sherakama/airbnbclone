declare module 'md5' {
  export default function(
    message:string | Buffer, 
    options?: { 
      asString?: boolean, 
      asBytes?: boolean, 
      encoding?: 'binary'
    }
  ): string;
}