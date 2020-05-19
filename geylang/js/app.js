jQvan = jQuery.noConflict();
jQvan(document).ready(function ($) {
  $(document).foundation();

  // hide livechat
  // $(document).click(function (event) {
  //   if (!$(event.target).closest('#livechat-tag').length) {
  //     if ($('#livechat-tag').hasClass('open')) {
  //       $('#livechat-tag').removeClass('open');
  //     }
  //   }
  // });

  // //var jackpot = '111,069,598.75';

  // var count = 111069595.89;
  // var no = count.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
  // setInterval(function () {
  //   count = count + 0.01;
  //   no = count.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
  //   $('#progressive_jackpot').text('$' + no);
  // }, Math.floor((Math.random() * 10) + 100));


  // var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1OOfKGbYnidujBD6gat00jOkYBSSIQW8Ot8ul1M0sodU/pubhtml';

  // function initData() {
  //   ReactiveSheet.init({
  //     key: publicSpreadsheetUrl,
  //     callback: showInfo,
  //     simpleSheet: true
  //   })
  // }

  // function showInfo(data) {
  //   // alert('Successfully processed!')
  //   console.log(data);
  //   if (data && data.length > 0) {
  //     const winner1st = data[0].livedraw !== '' ? data[0].livedraw : '000000';
  //     $('#winner-1st').text(winner1st);
  //     if (data.length > 1) {
  //       const winner2nd = data[1].livedraw !== '' ? data[1].livedraw : '000000';
  //       $('#winner-2nd').text(winner2nd);
  //     }
  //     if (data.length > 2) {
  //       const winner3rd = data[2].livedraw !== '' ? data[2].livedraw : '000000';
  //       $('#winner-3rd').text(winner3rd);
  //     }
  //     var specialWinner = $('#special-winner-list');
  //     var consolationWinner = $('#consolation-winner-list');
  //     specialWinner.empty();
  //     consolationWinner.empty();
  //     for (var c = 0; c < data.length; c++) {
  //       const row = data[c];
  //       const specialChild = `<li class="active">${row.special !== '' ? row.special : '-'}</li>`;
  //       const consolationChild = `<li class="active">${row.consolation !== '' ? row.consolation : '-'}</li>`;
  //       specialWinner.append(specialChild);
  //       consolationWinner.append(consolationChild);
  //     }
  //     setTimeout(() => {
  //       $('#winner-sidebar').removeClass('is-loading');
  //     }, 1000);
  //   }
  // }

  // initData();
})
