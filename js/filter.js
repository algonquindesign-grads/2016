var $filterSelect = $('#filter-select');
var $filterBtn = $('.filter-btn');

$filterSelect.on('change', function () {
  $('[for="' + $(this).val() + '"]').click();
});

$filterBtn.on('click', function () {
  $filterSelect.val($(this).attr('for'));
});
