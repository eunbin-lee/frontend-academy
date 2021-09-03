class HeaderListData {
  constructor(source, separator = ',') {
    const rawData = source.split('\n');

    this.headers = rawData[0].split(separator);
    this.rows = rawData
      .filter((row, index) => index > 0) // Header 제외
      .map((row) => row.split(separator));
  }

  row = (index) =>
    this.rows[index].map((row, index) => [this.headers[index], row]);

  get length() {
    return this.rows.length; // 데이터가 몇 건인지 반환
  }

  get columnLength() {
    return this.headers.length; // 속성이 몇 개인지 반환
  }
}

class MakeObject extends HeaderListData {
  toObject = (index) =>
    this.row(index).reduce((a, [key, value]) => ({ ...a, [key]: value }), {});

  toAllObject = () =>
    Array(this.length)
      .fill(0)
      .map((item, index) => this.toObject(index));
}

const movieData = `Title,Release,Ticketing Rate,Director
보헤미안 랩소디,2018.10.31,11.5%,브라이언 싱어
완벽한 타인,2018.10.31,4.6%,이재규
동네사람들,2018.11.07,0.5%,임진순`;

const movieList = new MakeObject(movieData);

console.log(movieList.toAllObject());
/*
    [
      {
        Title: '보헤미안 랩소디',
        Release: '2018.10.31',
        'Ticketing Rate': '11.5%',
        Director: '브라이언 싱어'
      },
      {
        Title: '완벽한 타인',
        Release: '2018.10.31',
        'Ticketing Rate': '4.6%',
        Director: '이재규'
      },
      {
        Title: '동네사람들',
        Release: '2018.11.07',
        'Ticketing Rate': '0.5%',
        Director: '임진순'
      }
    ]
*/
