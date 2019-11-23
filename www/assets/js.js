$(document).ready(function () {

  if ($("#slider").length) {
    $("#slider").slider({
      orientation: "horizontal",
      range: "min",
    });
  }

  $("body").on("click", ".mixed_elem label", function (e) {
    if ($(this).parent().find("input").prop("checked") == true) {
      $(this).parent().find("input").prop("checked", false);
    } else {
      $(this).parent().find("input").prop("checked", true);
    }
  });

  $("body").on("click", ".elem_program .lf_program label", function (e) {
    e.preventDefault();
    if ($(this).parent().find("input").prop("checked") == true) {
      $(this).parent().find("input").prop("checked", false);
    } else {
      $(this).parent().find("input").prop("checked", true);
    }
  });
  $(".reset_mix_button").on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".category_player")
      .find(".count_elems>.mixed_elem>.mixed_wrap_text .mixed_text_elem")
      .each(function (index, elem) {
        var newEl = "<div class='elem_program'>\
						<div class='lf_program'>\
							<div class='preview_prog'>\
								<p class='checkbox_in_prog'>\
									<input type='checkbox' id='test32'>\
									<label for='test32'></label>\
								</p>\
							</div>\
							<p> " + $(elem).find("p").text() + " </p>\
						</div>\
						<div class='rf_program'>\
							<img src='img/move.png' alt='move'>\
							<img src='img/bin.png' alt='bin' class='bin_button'>\
							<p>" + $(elem).parent().next().find(".mixed_text_elem").eq([index]).find("p").text() + "</p>\
						</div>\
					</div>";

        $(elem).closest(".program_edit_>div").first().before(newEl);
        if ($(elem).parent().find(".mixed_text_elem").length == 1) {
          $(elem).closest(".mixed_elem").remove();
        }
        $(elem).remove();

      });
  });

  $('.save_mix_button').on("click", function (e) {
    e.preventDefault();

    var counterMix = 0;
    $(this).closest(".category_player").find(".elem_program").each(function (index, elem) {
      if ($(elem).find(".checkbox_in_prog>input:checked").length && !$(elem).hasClass("mixed_elem")) {
        counterMix++;
      }
    });

    if (counterMix == 0 || counterMix > 5) {
      $('.sound_bottom').css("bottom", "0px");
    } else {
      var elemeText  = "";
      var elemeCount = "";
      $(this).closest(".category_player").find(".count_elems .elem_program").each(function (index, elem) {
        if ($(elem).find(".checkbox_in_prog>input:checked").length) {
          elemeText += "<div class='mixed_text_elem'>\
										<p>" + $(elem).find(".lf_program>p").text() + "</p>\
									</div>";

        }

      });

      $(this).closest(".category_player").find(".count_elems>.elem_program").each(function (index, elem) {
        if ($(elem).find(".checkbox_in_prog>input:checked").length) {
          elemeCount += "<div class='mixed_text_elem'>\
										<p>" + $(elem).find(".rf_program>p").text() + "</p>\
									</div>"
        }
      });

      var wrapElem = "<div class='elem_program mixed_elem'>\
						<div class='mixed_checkbox'>\
							<p class='checkbox_in_prog'>\
								<input type='checkbox' >\
								<label ></label>\
							</p>\
						</div>\
						<div class='mixed_wrap_text'>\
							" + elemeText + "\
						</div>\
						<div class='mixed_wrap_count'>\
							" + elemeCount + "\
						</div>\
						<div class='mixed_wrap_button'>\
							<img src='img/move.png' alt='move'>\
							<img src='img/bin.png' alt='bin' class='bin_button'>\
						</div>\
					</div>";

      if ($(this).closest(".category_player").find(".count_elems .elem_program").length) {
        $(this).closest(".category_player").find(".count_elems .elem_program").first().before(wrapElem);
      } else {
        $(this).closest(".category_player").find(".count_elems .elem_program").append(wrapElem);
      }

      $(this).closest(".category_player").find(".count_elems .elem_program input:checked").each(function (index, elem) {
        $(elem).closest(".elem_program").remove();
      });
    }

    // wrapElem
  });

  $('.bin_button').on("click", function (e) {
    e.preventDefault();
    $(this).closest(".elem_program").remove();
    callHeight();
  });

  function callHeight () {
    $('.count_elems').each(function (index, elem) {
      if ($(window).width() > 1840) {
        if ($(elem).innerHeight() > 800) {
          $(elem).closest(".edit_of_content").find(".scrolltobot").fadeIn();
        } else {
          $(elem).closest(".edit_of_content").find(".scrolltobot").fadeOut();
        }
      } else {
        if ($(elem).innerHeight() > 500) {
          $(elem).closest(".edit_of_content").find(".scrolltobot").fadeIn();
        } else {
          $(elem).closest(".edit_of_content").find(".scrolltobot").fadeOut();
        }

        if ($(window).width() < 1640) {
          if ($(elem).innerHeight() > 340) {
            $(elem).closest(".edit_of_content").find(".scrolltobot").fadeIn();
          } else {
            $(elem).closest(".edit_of_content").find(".scrolltobot").fadeOut();
          }
        }
      }
    });
  }

  callHeight();

  $(".scrolltobot").on("click", function (e) {
    e.preventDefault();
    // $(this).parent().find(".cont_of_edit_").scrollTop($(this).parent().find(".cont_of_edit_").scrollTop() + 72);
    $(this)
      .parent()
      .find(".cont_of_edit_")
      .animate({ scrollTop: $(this).parent().find(".cont_of_edit_").scrollTop() + 72 }, 500);
  });

  $('.delete_button_courses').on("click", function (e) {
    e.preventDefault();
    $(".delete_elems").removeClass("active_delete");
    $(".checkbbox_p input:checked").each(function (index, elem) {
      $(elem).closest(".elem_of_cont_edit").remove();
    });
    $('.bottom_delete').css("bottom", "-350px");
    $(".checkbbox_p").remove();
    if ($(this).hasClass("button_in_courses")) {
      var allVal    = $('.wrap_category_longest').find(".cont_of_edit_ >div").length;
      var emptyElem = "<div class='eleme_empty_p'>\
								<p>You have no playlists created.</p>\
							 </div>";
      if (allVal == 0) {
        $('.wrap_category_longest').find(".cont_of_edit_").append(emptyElem);
      }
    }
  });
  $(".ok_button_courses").on("click", function (e) {
    e.preventDefault();
    $(".delete_elems").removeClass("active_delete");
    $('.bottom_delete').css("bottom", "-350px");
    $(".checkbbox_p").remove();
  });

  $('.delete_button_program').on("click", function (e) {
    e.preventDefault();
    $(".delete_elems").removeClass("active_delete");
    $(".checkbbox_p input:checked").each(function (index, elem) {
      $(elem).closest(".elem_of_cont_edit").remove();
    });
    $('.bottom_delete').css("bottom", "-350px");
    $(".checkbbox_p").remove();
  });
  $(".ok_button_program").on("click", function (e) {
    e.preventDefault();
    $(".delete_elems").removeClass("active_delete");
    $('.bottom_delete').css("bottom", "-350px");
    $(".checkbbox_p").remove();
  });
  $(".delete_elems").on("click", function (e) {
    e.preventDefault();

    if (!$(this).hasClass("active_delete")) {

      $(".delete_elems").removeClass("active_delete");
      $(".checkbbox_p").remove();

      var newEl = "<p class='checkbbox_p'>\
						<input type='checkbox' id='test1'>\
						<label for='test1'></label>\
					</p>"

      $(this).closest(".edit_of_content").find(".cont_of_edit_>.elem_of_cont_edit").each(function (index, elem) {
        $(elem).append(newEl);
      });
      $(this).addClass("active_delete");
    } else {
      if ($(this).closest(".edit_of_content").find("input:checked").length > 0) {
        if ($(this).closest(".edit_of_content").find("h2").text() == "Category") {
          $(".program_bottom").css("bottom", "0px");
        } else {
          $('.courses_bottom').css("bottom", "0px");
        }
      } else {
        $(this).removeClass("active_delete");
        $(this).closest(".edit_of_content").find(".checkbbox_p").each(function (index, elem) {
          $(elem).remove();
        });

        callHeight();
      }
    }

  });

  $(".delete_button_program").on("click", function () {

  });

  $(".lf_edit>textarea").on("keyup", function () {
    // console.log($(this).val().length);
    // if ($(this).val().length == 0) {
    // 	$(this).closest(".edit_of_").find(".rg_edit>a.disabled_button").addClass("disabled_button");
    // }
    // if ($(this).val().length >= 1) {
    // 	$(this).closest(".edit_of_").find(".rg_edit>a:nth-child(1)").removeClass("disabled_button");
    // }
    if ($(this).closest(".category_player").find(".current_edition").length) {
      $(this).closest(".category_player").find('.current_edition>p').text($(this).val());
    }
    if ($(this).closest(".category_player").find(".edit_active").length) {
      $(this).closest(".category_player").find('.active_elem_>p').text($(this).val());
    }
  });

  $(".edit_me_").on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass("edit_active")) {
      $(this).addClass("edit_active");
      $(this).closest(".category_player").find(".rg_edit>a:nth-child(1)").addClass("disabled_button");
      $(this).closest(".category_player").find(".lf_edit>textarea").removeAttr("disabled").focus();
      $(this)
        .closest(".category_player")
        .find(".lf_edit>textarea")
        .val($(this).closest(".category_player").find(".active_elem_>p").text());
      $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").css("pointer-events", "none");
      $(this)
        .closest(".category_player")
        .find(".cont_of_edit_>.elem_of_cont_edit.active_elem_")
        .css("pointer-events", "auto");
      $(this).closest(".category_player").find(".active_elem_").find("img").fadeIn(400);
      $(this).closest(".category_player").find(".cont_of_edit_").sortable({
        items: "div",
      });
      $(this)
        .closest(".category_player")
        .find(".active_elem_>p")
        .attr("data-text", $(this).closest(".category_player").find(".active_elem_>p").text());
    } else {
      if ($(this).closest(".category_player").find(".lf_edit>textarea").val().length == 0) {
        $(this).removeClass("edit_active");
        $(this).closest(".category_player").find(".active_elem_").find("img").fadeOut(400);
        $(this)
          .closest(".category_player")
          .find(".active_elem_>p")
          .text($(this).closest(".category_player").find(".active_elem_>p").attr("data-text"));
        $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").css("pointer-events", "auto");
        $(this).closest(".category_player").find(".lf_edit>textarea").val("");
        $(this).closest(".category_player").find(".cont_of_edit_").sortable("destroy");
        $(this).closest(".category_player").find(".active_elem_>p").attr("data-text", "");
        $(this).closest(".category_player").find(".lf_edit>textarea").attr("disabled", true);
        $(this).closest(".category_player").find(".rg_edit>a:nth-child(1)").removeClass("disabled_button");
      } else {
        $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").css("pointer-events", "auto");
        $(this).removeClass("edit_active");
        $(this).closest(".category_player").find(".active_elem_").find("img").fadeOut(400);
        $(this).closest(".category_player").find(".cont_of_edit_").sortable("destroy");
        $(this).closest(".category_player").find(".lf_edit>textarea").val("");
        $(this).closest(".category_player").find(".lf_edit>textarea").attr("disabled", true);
        $(this).closest(".category_player").find(".rg_edit>a:nth-child(1)").removeClass("disabled_button");
      }
    }
  });

  $(".rg_edit>a:nth-child(1)").on("click", function (e) {
    if ($(this).hasClass("active_creation")) {
      $(this).removeClass("active_creation");
      if ($(this).closest(".edit_of_").find(".lf_edit>textarea").val().length == 0) {
        $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit.current_edition").remove();
        $(this).closest(".category_player").find(".cont_of_edit_>.eleme_empty_p").fadeIn(400);
      } else {
        $(this).closest(".category_player").find(".cont_of_edit_").sortable("destroy");
        $(this)
          .closest(".category_player")
          .find(".cont_of_edit_>.elem_of_cont_edit.current_edition")
          .find("img")
          .fadeOut(400);
        $(this)
          .closest(".category_player")
          .find(".cont_of_edit_>.elem_of_cont_edit.current_edition")
          .removeClass("current_edition");
        $(this).closest(".category_player").find(".cont_of_edit_>.eleme_empty_p").remove();
      }
      $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").css("pointer-events", "auto");
      $(this).closest(".edit_of_").find(".lf_edit>textarea").val("")
        .attr("disabled", true);
      $(this).closest(".category_player").find(".rg_edit>a:nth-child(2)").removeClass("disabled_button");
      callHeight();
    } else {
      $(this).addClass("active_creation");
      $(this).closest(".edit_of_").find(".lf_edit>textarea").removeAttr("disabled").focus();
      $(this).closest(".category_player").find(".rg_edit>a:nth-child(2)").addClass("disabled_button");
      var ValueName = $(this).closest(".edit_of_").find(".lf_edit>textarea").val();
      $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").removeClass("active_elem_");
      var ElemData = "<div class='elem_of_cont_edit active_elem_ current_edition'>\
								<p>" + ValueName + "</p>\
								<img src='img/whiteoption.png' alt='whiteoption'>\
							</div>";
      if ($(this).closest(".category_player").find(".cont_of_edit>.elem_of_cont_edit.new_elem_").length) {
        $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").first().before(ElemData);
      } else {
        if ($(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").length == 0) {
          $(this).closest(".category_player").find(".cont_of_edit_").find(".eleme_empty_p").css("display", "none");
          $(this).closest(".category_player").find(".cont_of_edit_").append(ElemData);
        } else {
          $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").first().before(ElemData);
        }

      }
      $(this).closest(".category_player").find(".current_edition img").fadeIn(400);
      $(this).closest(".category_player").find(".cont_of_edit_>.elem_of_cont_edit").css("pointer-events", "none");
      $(this)
        .closest(".category_player")
        .find(".cont_of_edit_>.elem_of_cont_edit.current_edition")
        .css("pointer-events", "auto");
      $(this).closest(".category_player").find(".active_elem_").find("img").fadeIn(400);
      $(this).closest(".category_player").find(".cont_of_edit_").sortable({
        items: "div",
      });
      callHeight();
    }
  });

  $("body").on("click", ".checkbbox_p", function () {
    if ($(this).find("input").prop("checked") == true) {
      $(this).find("input").prop("checked", false);
    } else {
      $(this).find("input").prop("checked", true);
    }
    callHeight();
  });

  $("body").on("click", ".elem_of_cont_edit", function (e) {
    e.preventDefault();

    if (!$(this).hasClass("new_elem_")) {
      $(this).parent().find(".active_elem_").removeClass("active_elem_");
      // if ($(this).hasClass("new_elem_")) {
      // 	$(this).removeClass("new_elem_");
      // }
      $(this).addClass('active_elem_');
    }

    callHeight();
  });

  $(".head_of_programm_sort>a").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active_draggable")) {
      $(this).removeClass('active_draggable');
      $(this).closest(".edit_of_content").find(".program_edit_").removeClass("active_move");
      $(".program_edit_").sortable("destroy");
      $(".program_edit_").disableSelection("destroy");
    } else {
      $(this).closest(".edit_of_content").find(".mixed_wrap_count").css('display', "none");
      $(this).closest(".edit_of_content").find(".mixed_wrap_button").css("display", "flex")
        .hide()
        .fadeIn();
      $(this).addClass("active_draggable");
      $(this).closest(".edit_of_content").find(".program_edit_").addClass("active_move");
      $(".program_edit_").sortable();
      $(".program_edit_").disableSelection();
    }
    callHeight();
  });

  if ($('.generation_category_wrap').length) {
    $('.generation_category_wrap').sortable();
    $('.generation_category_wrap').disableSelection();
  }

  // if ($(".program_edit_ ").length) {
  // 	$( function() {
  // 	   $(".program_edit_").sortable();
  // 	   $( ".program_edit_ " ).disableSelection();
  // 	});
  // }

  $(".choose_elem").on("click", function (e) {
    var CurrentCol = $(this);
    $(".choose_elem").find("img").css("display", "none");
    $(this).find("img").fadeIn(400);
    e.preventDefault();
    $(".txt_col_").each(function (index, elem) {
      // console.log($(CurrentCol).attr("data-id"));
      // console.log($(elem));
      $(elem).css("color", "" + $(CurrentCol).attr("data-id"));
    });

    $(".back_col_").each(function (index, elem) {
      console.log("../img/" + $(CurrentCol).attr("data-back"));
      $(elem).css("background", "url(img/" + $(CurrentCol).attr("data-back") + ")");
    });

    if ($(".plus_button").length) {
      $(".plus_button").each(function (index, elem) {
        $(elem).find("img").attr("src", "img/" + $(CurrentCol).attr("data-plus"));
      });

    }
    callHeight();
  });

  $(".inn_choose_card>a").on('click', function (e) {
    e.preventDefault();
    $(".add_new_card").fadeIn(400);
  });

  /* Trigger modal on load of page - remove this when no needed */
  if ($("#emailModal").length) {
    $("#emailModal").modal("show");
  }
  if ($("#infoModal").length) {
    $("#infoModal").modal("show");
  }

  $(".unsub_buttons>a").on('click', function (e) {
    e.preventDefault();
    $('.unsub_block').css("display", "none");
    $(".already_unsubed").fadeIn(400);
  });

  $(".already_unsubed").on("click", function (e) {
    $("#unsubModal").modal("hide");
  });

  if ($("#unsubModal").length) {
    $("#unsubModal").modal("show");
  }

  $(".inner_info_button>a").on("click", function (e) {
    e.preventDefault();
    $("#infoModal").modal("hide");
  });

  $(".wrap_of_menu_small>a").on("click", function () {
    $(".left_menu").css("left", "0px");
    $(".overlay").fadeIn(400);
    $("body").css("overflow-y", "hidden");
  });

  $(".overlay").on('click', function (e) {
    e.preventDefault();
    $('.left_menu').css("left", "-480px");
    $('.overlay').fadeOut(400);
    $("body").css("overflow-y", "auto");
  });

  $(".ok_button").on('click', function () {
    $("#emailModal").modal("hide");
  });

  $(".wrap_number_card>input , .inn_numb_card>input").on("keyup", function (e) {
    if (e.keyCode != 8) {
      if ($(this).val().length == 4) {
        if ($(this).next().length) {
          $(this).next().focus();
        }
      }
    } else {
      if ($(this).val().length == 0) {
        if ($(this).prev().length) {
          $(this).prev().focus();
        }
      }
    }
  });
  $(".date_year>input").on("keyup", function (e) {
    if (e.keyCode != 8) {
      if ($(this).val().length == 2) {
        $(this).val($(this).val() + "/");
      }
    }

  });
});
