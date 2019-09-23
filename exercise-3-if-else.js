var name = '';
var peran = '';

if(name === '') {
  console.log('Nama harus diisi!');
} else if(peran === '') {
  console.log('Halo ' + name + ', Pilih peranmu untuk memulai game!');
} else if(peran === 'Ksatria' || 'ksatria') {
  console.log('Selamat Datang di Dunia Proxytia, ' + name + '.');
  console.log('Halo ' + peran + ' ' + name + ', kamu dapat menyerang dengan senjatamu')
} else if(peran === 'Tabib' || 'tabib') {
  console.log('Selamat Datang di Dunia Proxytia, ' + name + '.');
  console.log('Halo ' + peran + ' ' + name + ', kamu dapat menyerang dengan senjatamu')
} else if(peran === 'Penyihir' || 'penyihir') {
  console.log('Selamat Datang di Dunia Proxytia, ' + name + '.');
  console.log('Halo ' + peran + ' ' + name + ', kamu dapat menyerang dengan senjatamu')
}
