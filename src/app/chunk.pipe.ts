import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(value: Array<any>, size: number): any {
    if (value instanceof Array) {
      const data = [...value];
      const chunks = [];
      while (data.length) {
        const chunk = data.splice(0, size);
        chunks.push(chunk);
      }

      return chunks;
    }

    return value;
  }
}
