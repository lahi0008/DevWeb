/**
 * Created by gueye7616 on 21/04/14.
 */
function modifyPassword() {
    var passwordOne = $('#passwordOne').val();
    var passwordTwo = $('#passwordTwo').val();
    if (passwordOne != passwordTwo) {
        var msgAlert = "saisissez le même mot de passe svp!";
        $('#msgAlert').html(msgAlert);
    } else {
        bootbox.confirm("êtes vous certains de vouloir modifier votre mot de passe?", function (result) {
            if (result == false) {

            }
            else {
                var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
                var crId = $('#crId').val();
                $("#right-content").html(waitingIcon);
                $.ajax({
                        type: 'POST',
                        url: 'sql-pages/modify-profil.php',
                        data: "password=" + passwordOne,
                        dataType: 'text',
                        success: function (reponse) {
                            $("#right-content").html(reponse);
                        }
                    }
                );
            }
        });
    }


}

function updateResumeRubrique() {
    var title = $('#title').val();
    var beginDate = $('#beginDate').val();
    var endDate = $('#endDate').val();
    var Content = $('#Content').val();
    var crId = $('#crId').val();
    var crrId = $('#crrId').val();
    var empty = '';
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    var empty = '';
    $('#resumeAddRubrique').html(empty);
    $("#resumeRubriqueList").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/update-resume-rubrique.php',
            data: 'crrId=' + crrId + '&title=' + title + '&beginDate=' + beginDate + '&endDate=' + endDate + '&Content=' + Content + '&crId=' + crId,
            dataType: 'text',
            success: function (response) {
                $('#resumeRubriqueList').html(response);
            }
        }

    );
}
function modifyResumeRubrique(crrId) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#resumeAddRubrique").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'fragment-pages/modify-resume-rubrique.php',
            data: "crrId=" + crrId,
            dataType: 'text',
            success: function (reponse) {
                $("#resumeAddRubrique").html(reponse);
            }
        }
    );
}
function deleteResumeRubrique(crrId) {
    bootbox.confirm("êtes vous certains de vouloir supprimer cette rubrique du CV?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            var crId = $('#crId').val();
            $("#resumeRubriqueList").html(waitingIcon);
            $.ajax({
                    type: 'POST',
                    url: 'sql-pages/del-resume-rubrique.php',
                    data: "crId=" + crId + "&crrId=" + crrId,
                    dataType: 'text',
                    success: function (reponse) {
                        $("#resumeRubriqueList").html(reponse);
                    }
                }
            );
        }
    });
}
function updateResume() {
    var crId = $('#crId').val();
    var title = $('#title').val();
    var name = $('#name').val();
    var surname = $('#surname').val();
    var mobile = $('#mobile').val();
    var officePhone = $('#officePhone').val();
    var officeAddress = $('#officeAddress').val();
    var email = $('#email').val();
    var webPage = $('#webPage').val();
    var university = $('#university').val();
    var speciality = $('#speciality').val();
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/update-resume.php',
            data: 'crId=' + crId + '&title=' + title + '&name=' + name + '&surname=' + surname + '&mobile=' + mobile + '&officePhone=' + officePhone + '&officeAddress=' + officeAddress + '&email=' + email + '&webPage=' + webPage + '&university=' + university + '&speciality=' + speciality,
            dataType: 'text',
            success: function (response) {
                $("#right-content").html(response);
            }
        }
    );
}
function unpublishResume(crId) {
    bootbox.confirm("êtes vous certains de vouloir arrêter la publication de votre CV?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $.ajax({
                    type: 'POST',
                    url: 'sql-pages/unpublish-resume.php',
                    data: "crId=" + crId,
                    dataType: 'text',
                    success: function (reponse) {
                        $("#right-content").html(reponse);
                    }
                }
            );
        }
    });
}
function modifyResume(crId) {

    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#modifyRubrique").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'fragment-pages/modify-resume.php',
            data: "crId=" + crId,
            dataType: 'text',
            success: function (reponse) {
                $("#modifyRubrique").html(reponse);
            }
        }
    );
}
function deleteResume(crId) {
    bootbox.confirm("êtes vous certains de vouloir supprimer ce CV?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $.ajax({
                    type: 'POST',
                    url: 'sql-pages/del-resume.php',
                    data: "crId=" + crId,
                    dataType: 'text',
                    success: function (reponse) {
                        $("#right-content").html(reponse);
                    }
                }
            );
        }
    });
}
function publishResume(crId) {
    bootbox.confirm("êtes vous certains de vouloir publier ce CV?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $.ajax({
                    type: 'POST',
                    url: 'sql-pages/publish-resume.php',
                    data: "crId=" + crId,
                    dataType: 'text',
                    success: function (reponse) {
                        $("#right-content").html(reponse);
                    }
                }
            );
        }
    });
}
function getSizes(im, obj) {
    var x_axis = obj.x1;
    var x2_axis = obj.x2;
    var y_axis = obj.y1;
    var y2_axis = obj.y2;
    var thumb_width = obj.width;
    var thumb_height = obj.height;
    if (thumb_width > 0) {
        if (confirm("Do you want to save image..!")) {
            $.ajax({
                type: "GET",
                url: "illustration-ajax-paragraph.php?t=ajax&img=" + $("#image_name").val() + "&w=" + thumb_width + "&h=" + thumb_height + "&x1=" + x_axis + "&y1=" + y_axis,
                cache: false,
                success: function (response) {
                    $("#cropimage").hide();
                    $("#thumbs").html("");
                    $("#thumbs").html("<img src='img/uploads/" + response + "' />");
                }
            });
        }
    }
    else
        alert("Please select portion..!");
}
function loadIllustrationImage() {
    var fileToUpload = $("#photoimg").val();
    var filename = $('input[type=file]').val();
    alert(filename);
    /* $.ajax({
     type:"POST",
     url:'fragment-pages/load-illustration-image.php',
     data:'fileToUpload='+fileToUpload,
     datetype:'text',
     success:function(response){
     $("#articleAddIllustration").html(response);
     }
     });*/

}

function addIllustration(TypeId, Type) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#articleAddIllustration").html(waitingIcon);
    $("#addArticleIllustrationButton").remove();
    if (Type == 'Article')
        $.ajax({
            type: "POST",
            data: 'cp_id=' + TypeId,
            datatype: 'text',
            url: 'fragment-pages/add-illustration-article.php',
            success: function (response) {
                $("#articleAddIllustration").html(response);
            }
        });
    else
        $.ajax({
            type: "POST",
            data: 'ce_id=' + TypeId,
            datatype: 'text',
            url: 'fragment-pages/add-illustration-event.php',
            success: function (response) {
                $("#articleAddIllustration").html(response);
            }
        });


    $("#articleAddParagraph").html(addParagraphForm);
}
function addPartenaireLogo(TypeId, Type) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#articleAddIllustration").html(waitingIcon);
    $("#addArticleIllustrationButton").remove();
    if (Type == 'Partenaire')
        $.ajax({
            type: "POST",
            data: 'cp_id=' + TypeId,
            datatype: 'text',
            url: 'fragment-pages/add-partenaire-logo.php',
            success: function (response) {
                $("#articleAddIllustration").html(response);
            }
        });
    else
        $.ajax({
            type: "POST",
            data: 'ce_id=' + TypeId,
            datatype: 'text',
            url: 'fragment-pages/add-illustration-event.php',
            success: function (response) {
                $("#articleAddIllustration").html(response);
            }
        });


    $("#articleAddParagraph").html(addParagraphForm);
}
function addPdfArticle(TypeId, Type) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#articleAddIllustration").html(waitingIcon);
    $("#addArticleIllustrationButton").remove();
    if (Type == 'Article_pdf')
        $.ajax({
            type: "POST",
            data: 'cp_id=' + TypeId,
            datatype: 'text',
            url: 'fragment-pages/add-pdf-article.php',
            success: function (response) {
                $("#articleAddIllustration").html(response);
            }
        });
    else
        $.ajax({
            type: "POST",
            data: 'ce_id=' + TypeId,
            datatype: 'text',
            url: 'fragment-pages/add-illustration-event.php',
            success: function (response) {
                $("#articleAddIllustration").html(response);
            }
        });


    $("#articleAddParagraph").html(addParagraphForm);
}
function manageArticleIllustration(articleId) {
    /*
     last update : 10/10/2014
     crefat:  fonction  utilisé pour afficher la liste des illustration dans un pop up box
     */
    $.ajax({
        type: 'POST',
        url: 'fragment-pages/list-illustration-article.php',
        data: 'cp_id=' + articleId,
        dataType: 'text',
        success: function (reponse) {
            $('#articleIllustrationList').html(reponse);
        }

    });

    $("#manageIllustrationList").modal();

}
function UpdateArticleParagraph(paragraphId) {
    /*
     last update : 10/10/2014
     crefat:  fonction  utilisé pour mettre à jour le paragraphe a modifier
     */
    var paragraphTitle = $('#paragraphTitle').val();
    var paragraphContent = $('#paragraphContent').val();
    var paragraphTypeId = $('#paragraphType').val();
    var cpId = $('#cpId').val();
    var empty = '';
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#articleParagraphList").html(waitingIcon);
    var empty = '';
    $('#articleAddParagraph').html(empty);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/update-article-paragraph.php',
            data: 'paragraphTitle=' + paragraphTitle + '&paragraphContent=' + paragraphContent + '&paragraphTypeId=' + paragraphTypeId + '&paragraphId=' + paragraphId + '&cpId=' + cpId,
            dataType: 'text',
            success: function (response) {
                $('#articleParagraphList').html(response);
            }
        }

    );
}
function modifyArticleParagraph(paragraphId) {
    /*
     last update : 10/10/2014
     crefat: fonction utilisé pour charger le paragraphe a modifier
     */
    var cpId = $('#cpId').val();
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $.ajax({
            type: 'POST',
            url: 'fragment-pages/modify-article-paragraph.php',
            data: "paragraphId=" + paragraphId + "&publicationId=" + cpId,
            dataType: 'text',
            success: function (reponse) {
                $("#articleAddParagraph").html(reponse);
            }
        }
    );
}
function deleteIllustration(TypeId, Type) {
    bootbox.confirm("êtes vous certain de vouloir supprimer definitivement cette illustration ?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $("#addArticleIllustrationButton").remove();
            if (Type == 'Article'){
                var cpId=$('#cpId').val();
                $.ajax({
                    type: "POST",
                    data: 'cpId='+cpId+'&ciId=' + TypeId,
                    datatype: 'text',
                    url: 'sql-pages/delete-illustration-article.php',
                    success: function (response) {
                        $("#right-content").html(response);
                    }
                });
            }

            else if(Type == 'Event'){
                var ceId=$('#ceId').val();
                $.ajax({
                    type: "POST",
                    data: 'ceId='+ceId+'&ciId=' + TypeId,
                    datatype: 'text',
                    url: 'sql-pages/delete-illustration-event.php',
                    success: function (response) {
                    $("#right-content").html(response);
                }
            });
            }

        }
    });
}
function deleteIllustrationPdf(TypeId, Type) {
    bootbox.confirm("êtes vous certain de vouloir supprimer definitivement ce fichier pdf?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $("#addArticleIllustrationButton").remove();
            if (Type = 'Article'){
                var cpId=$('#cpId').val();
                $.ajax({
                    type: "POST",
                    data: 'cpId='+cpId+'&ciId=' + TypeId,
                    datatype: 'text',
                    url: 'sql-pages/delete-illustration-article-pdf.php',
                    success: function (response) {
                        $("#right-content").html(response);
                    }
                });
            }

            else{
                var ceId=$('#ceId').val();
                $.ajax({
                    type: "POST",
                    data: 'ceId='+ceId+'&ciId=' + TypeId,
                    datatype: 'text',
                    url: 'sql-pages/delete-illustration-event.php',
                    success: function (response) {
                        $("#right-content").html(response);
                    }
                });
            }

        }
    });
}
    function deleteArticleParagraph(paragraphId) {
        /*
         last update : 10/10/2014
         crefat: fonction utilisé pour supprimer un paragraphe de la liste en pop up
         */
        bootbox.confirm("êtes vous certain de vouloir supprimer definitivement ce paragraphe ?", function (result) {
            if (result == false) {

            }
            else {
                var cpId = $('#cpId').val();
                var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
                $("#articleParagraphList").html(waitingIcon);
                $.ajax({
                        type: 'POST',
                        url: 'sql-pages/del-article-paragraph.php',
                        data: "paragraphId=" + paragraphId + "&publicationId=" + cpId,
                        dataType: 'text',
                        success: function (reponse) {
                            $("#articleParagraphList").html(reponse);
                        }
                    }
                );
            }
        });
    }

    function saveArticleParagraph() {
        /* last update: 06/10/2014
         crefat: fonction utilisé pour sauvegarder le paragraphe d'un article
         */
        var paragraphTitle = $('#paragraphTitle').val();
        var paragraphContent = $('#paragraphContent').val();
        var paragraphTypeId = $('#paragraphType').val();
        var cpId = $('#cpId').val();
        var empty = '';
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var empty = '';
        $('#articleAddParagraph').html(empty);
        $("#articleParagraphList").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/insert-article-paragraph.php',
                data: 'paragraphTitle=' + paragraphTitle + '&paragraphContent=' + paragraphContent + '&paragraphTypeId=' + paragraphTypeId + '&cpId=' + cpId,
                dataType: 'text',
                success: function (response) {
                    $('#articleParagraphList').html(response);
                }
            }

        );

    }

    function manageArticleParagraph(articleId) {
        /* last update: 06/10/2014
         crefat: fonction utilisé pour ajouter un paragraphe à un article
         */
        $.ajax({
            type: 'POST',
            url: 'fragment-pages/list-article-paragraph.php',
            data: 'cp_id=' + articleId,
            dataType: 'text',
            success: function (reponse) {
                $('#articleParagraphList').html(reponse);
            }

        });

        $("#manageParagraphList").modal();
    }

    function addArticleParagraph() {
        /* last update: 06/10/2014
         crefat: fonction utilisé pour ajouter un paragraphe à un article
         */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#articleAddParagraph").html(waitingIcon);

        $.ajax({
            type: "GET",
            url: 'fragment-pages/add-paragraph-article.php',
            success: function (response) {
                $("#articleAddParagraph").html(response);
            }
        });


        //$("#articleAddParagraph").html(addParagraphForm);
    }


    function submitArticle() {
        /* last update: 06/10/2014
         crefat: fonction utilisé pour lancer la création d'un nouvel article
         */
        var title = $('#title').val();
        var abstract = $('#abstract').val();
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/insert-article.php',
                data: 'title=' + title + '&abstract=' + abstract,
                dataType: 'text',
                success: function (response) {
                    $("#right-content").html(response);
                }
            }
        );

    }

function submitPartenaire() {
    /* last update: 06/10/2014
     crefat: fonction utilisé pour lancer la création d'un nouvel partenaire
     */
    var title = $('#title').val();
    var abstract = $('#abstract').val();
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/insert-partenaire.php',
            data: 'title=' + title + '&abstract=' + abstract,
            dataType: 'text',
            success: function (response) {
                $("#right-content").html(response);
            }
        }
    );

}
function submitLogoPartenaire() {
    /* last update: 06/10/2014
     crefat: fonction utilisé pour lancer la création d'un nouvel partenaire
     */
    var title = $('#title').val();
    var abstract = $('#abstract').val();
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/insert-logo-partenaire.php',
            data: 'title=' + title + '&abstract=' + abstract,
            dataType: 'text',
            success: function (response) {
                $("#right-content").html(response);
            }
        }
    );

}
function submitArticlePdf() {
    /* last update: 06/10/2014
     crefat: fonction utilisé pour lancer la création d'un nouvel article en pdf
     */
    var title = $('#title').val();
    var abstract = $('#abstract').val();
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/insert-article-pdf.php',
            data: 'title=' + title + '&abstract=' + abstract,
            dataType: 'text',
            success: function (response) {
                $("#right-content").html(response);
            }
        }
    );

}

    function createArticle() {
        /* last update: 06/10/2014
         crefat: fonction utilisé pour lancer la création d'un nouvel article
         */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $("#menu-publications").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-admin").removeClass('active');
        $("#right-content").load('fragment-pages/add-article.php');

    }
function createPartenaire() {
    /* last update: 06/10/2014
     crefat: fonction utilisé pour lancer la création d'un nouvel article
     */
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $("#menu-publications").addClass('active');
    $("#menu-profils").removeClass('active');
    $("#menu-admin").removeClass('active');
    $("#right-content").load('fragment-pages/add-partenaire.php');

}
function createLogoPartenaire() {
    /* last update: 06/10/2014
     crefat: fonction utilisé pour lancer la création d'un nouvel article
     */
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $("#menu-publications").addClass('active');
    $("#menu-profils").removeClass('active');
    $("#menu-admin").removeClass('active');
    $("#right-content").load('fragment-pages/add-logo-partenaire.php');

}
function createArticlePdf() {
    /* last update: 06/10/2014
     crefat: fonction utilisé pour lancer la création d'un nouvel article pdf
     */
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $("#menu-publications").addClass('active');
    $("#menu-profils").removeClass('active');
    $("#menu-admin").removeClass('active');
    $("#right-content").load('fragment-pages/add-article-pdf.php');

}

    function submitNews() {
        /*
         crefat : fonction pour enregister et ouvrir la creation des paragrpahe
         */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var title = $("#title").val();
        var abstract = $("#abstract").val();
        $("#right-content").html(waitingIcon);
        $("#menu-admin").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-publications").removeClass('active');


        $.ajax({
                type: 'POST',
                url: 'sql-pages/insert-news.php',
                data: "title=" + title + "&abstract=" + abstract,
                dataType: 'text',
                success: function (reponse) {
                    $("#right-content").html(reponse);
                }
            }
        );

    }

    function addNews() {
        /*
         crefat: fonction pour ajouter une nouvelle news
         */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $("#menu-admin").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-publications").removeClass('active');
        $("#right-content").load('fragment-pages/add-news.php');


    }

    function modifyUser(cm_id) {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $.ajax({
            type: 'POST',
            data: 'cm_id=' + cm_id,
            dataType: 'text',
            url: 'fragment-pages/modify-user.php',
            success: function (response) {
                $("#right-content").html(response);
            }

        });
    }

    function updateUser(cm_id) {

        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var userName = $("#username").val();
        var email = $("#email").val();
        var passwd = $("#password").val();
        var name = $("#name").val();
        var surname = $("#surname").val();
        var fonction = $("#fontion").val();
        var profession = $("#profession").val();
        var idProfil = $("#id-profil").val();
        $("#right-content").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/update-user.php',
                data: "cmId=" + cm_id + "&userName=" + userName + "&email=" + email + "&passwd=" + passwd + "&name=" + name + "&surname=" + surname + "&fonction=" + fonction + "&profession=" + profession + "&idProfil=" + idProfil,
                dataType: 'text',
                success: function (reponse) {
                    $("#right-content").html(reponse);
                }
            }
        );
    }

    function manageNews() {
        /*
         * crefat: fonction utilisé pour lister les news qui sont en base
         * */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $("#menu-admin").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-publications").removeClass('active');
        $("#right-content").load('fragment-pages/list-news.php');
    }

    function manageUser(actionName) {
        /*
         crefat: fonction utilisé pour la gestion des utilisateurs
         */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#menu-admin").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-publications").removeClass('active');
        $("#right-content").html(waitingIcon);
        if (actionName == 'user')
            $("#right-content").load('fragment-pages/list-utilisateur.php');
        else if (actionName == 'add-user')
            $("#right-content").load('fragment-pages/add-user.php');
        else if (actionName == 'pro')
            $("#right-content").load('fragment-pages/profil.php');
    }

    function managePublication(actionName) {
        /* last update: 06/10/2014
         crefat: fonction utilisé pour la gestion des publications
         */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';

        $("#menu-admin").removeClass('active')
        $("#menu-profils").removeClass('active');
        $("#menu-publications").addClass('active');
        $("#articleAddIllustration").html('');
        $("#addButtonPlace").html('');
        $("#illustrationPreviewSpace").html('');
        $("#illustrationLoadingMsg").html('');
        $("#right-content").html(waitingIcon);
        if (actionName == 'resume')
            $("#right-content").load('fragment-pages/list-resumes.php');
        else if (actionName == 'article')
            $("#right-content").load('fragment-pages/list-articles.php');
        else if (actionName == 'publication')
            $("#right-content").load('fragment-pages/list-ouvrages.php');
        else if (actionName == 'article_pdf')
            $("#right-content").load('fragment-pages/list-article_pdf.php');
        else if (actionName == 'event')
            $("#right-content").load('fragment-pages/list-events.php')
        else if (actionName == 'partenaire')
            $("#right-content").load('fragment-pages/list-partenaire.php');

    }


    function createUser() {
        /*
         * crefat : cette fonction permet de cree un membres .
         * elle est utilisée dans add-user.php
         * */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var userName = $("#username").val();
        var email = $("#email").val();
        var passwd = $("#password").val();
        var name = $("#name").val();
        var surname = $("#surname").val();
        var fonction = $("#fontion").val();
        var profession = $("#profession").val();
        var idProfil = $("#id-profil").val();
        $("#right-content").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/insert-user.php',
                data: "userName=" + userName + "&email=" + email + "&passwd=" + passwd + "&name=" + name + "&surname=" + surname + "&fonction=" + fonction + "&profession=" + profession + "&idProfil=" + idProfil,
                dataType: 'text',
                success: function (reponse) {
                    $("#right-content").html(reponse);
                }
            }
        );
    }

    function deleteUser(cm_id) {
        bootbox.confirm("êtes vous certains de vouloir supprimer ce membre ?", function (result) {
            if (result == false) {

            }
            else {
                var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
                $("#right-content").html(waitingIcon);
                $.ajax({
                        type: 'POST',
                        url: 'sql-pages/del-user.php',
                        data: "cm_id=" + cm_id,
                        dataType: 'text',
                        success: function (reponse) {
                            $("#right-content").html(reponse);
                        }
                    }
                );
            }
        });
    }

    function deleteNews(cnId) {
        bootbox.confirm("êtes vous certains de vouloir supprimer cette news ?", function (result) {
            if (result == false) {

            }
            else {
                var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
                $("#right-content").html(waitingIcon);
                $.ajax({
                        type: 'POST',
                        url: 'sql-pages/del-new.php',
                        data: "cnId=" + cnId,
                        dataType: 'text',
                        success: function (reponse) {
                            $("#right-content").html(reponse);
                        }
                    }
                );
            }
        });
    }

    function modifyNews(cnId) {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $.ajax({
            type: 'POST',
            data: 'cnId=' + cnId,
            dataType: 'text',
            url: 'fragment-pages/modify-news.php',
            success: function (response) {
                $("#right-content").html(response);
            }

        });
    }

    function updateNews(cnId) {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var title = $("#title").val();
        var abstract = $("#abstract").val();
        $("#right-content").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/update-news.php',
                data: "cnId=" + cnId + "&title=" + title + "&abstract=" + abstract,
                dataType: 'text',
                success: function (reponse) {
                    $("#right-content").html(reponse);
                }
            }
        );

    }

    function manageEvents() {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $("#menu-admin").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-publications").removeClass('active');
        $("#right-content").load('fragment-pages/list-events.php');
    }
function managePartenaire() {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $("#menu-admin").addClass('active');
    $("#menu-profils").removeClass('active');
    $("#menu-publications").removeClass('active');
    $("#right-content").load('fragment-pages/list-partenaire.php');
}
function manageLogoPartenaire() {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $("#menu-admin").addClass('active');
    $("#menu-profils").removeClass('active');
    $("#menu-publications").removeClass('active');
    $("#right-content").load('fragment-pages/list-logo-partenaire.php');
}

    function addEvents() {
        /*
         crefat: fonction pour ajouter une nouvelle news
         */
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $("#menu-admin").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-publications").removeClass('active');
        $("#right-content").load('fragment-pages/add-Events.php');
    }

    function submitEvents() {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var title = $("#title").val();
        var contains = $("#contains").val();
        var contains = $("#contains").val();
        arrayCheckBox = new Array;
        $("input:checked").each(function() {
            arrayCheckBox.push(this.value);
        });
        req = { 'pr_id[]' : arrayCheckBox , type : 'demo'};
        $("#right-content").html(waitingIcon);
        $("#menu-admin").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-publications").removeClass('active');


        $.ajax({
                type: 'POST',
                url: 'sql-pages/insert-events.php',
                data: "title=" + title + "&contains=" + contains + "&pr_id =" + $_POST['pr_id'] ,
                dataType: 'text',
                success: function (reponse) {
                    $("#right-content").html(reponse);
                }
            }
        );
    }

    function deleteEvents(ceId) {
        bootbox.confirm("êtes vous certains de vouloir supprimer cet evenement ?", function (result) {
            if (result == false) {

            }
            else {
                var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
                $("#right-content").html(waitingIcon);
                $.ajax({
                        type: 'POST',
                        url: 'sql-pages/del-event.php',
                        data: "ceId=" + ceId,
                        dataType: 'text',
                        success: function (reponse) {
                            $("#right-content").html(reponse);
                        }
                    }
                );
            }
        });
    }
function deletePartenaire(ceId) {
    bootbox.confirm("êtes vous certains de vouloir supprimer ce type de partenariat  ?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $.ajax({
                    type: 'POST',
                    url: 'sql-pages/del-partenaire.php',
                    data: "ceId=" + ceId,
                    dataType: 'text',
                    success: function (reponse) {
                        $("#right-content").html(reponse);
                    }
                }
            );
        }
    });
}
function deleteLogoPartenaire(prId) {
    bootbox.confirm("êtes vous certains de vouloir supprimer  ce partenaire  ?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $.ajax({
                    type: 'POST',
                    url: 'sql-pages/del-logo-partenaire.php',
                    data: "prId=" + prId,
                    dataType: 'text',
                    success: function (reponse) {
                        $("#right-content").html(reponse);
                    }
                }
            );
        }
    });
}

    function modifyEvents(ceId) {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $.ajax({
            type: 'POST',
            data: 'ceId=' + ceId,
            dataType: 'text',
            url: 'fragment-pages/modify-events.php',
            success: function (response) {
                $("#right-content").html(response);
            }

        });
    }
function modifyPartenaires(ceId) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $.ajax({
        type: 'POST',
        data: 'ceId=' + ceId,
        dataType: 'text',
        url: 'fragment-pages/modify-partenaire.php',
        success: function (response) {
            $("#right-content").html(response);
        }

    });
}

    function updateEvents(ceId) {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var title = $("#title").val();
        var contains = $("#contains").val();
        $("#right-content").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/update-events.php',
                data: "ceId=" + ceId + "&title=" + title + "&contains=" + contains,
                dataType: 'text',
                success: function (reponse) {
                    $("#right-content").html(reponse);
                }
            }
        );
    }
function updatePartenaire(ceId) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    var title = $("#title").val();
    var contains = $("#contains").val();
    $("#right-content").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/update-partenaire.php',
            data: "ceId=" + ceId + "&title=" + title + "&contains=" + contains,
            dataType: 'text',
            success: function (reponse) {
                $("#right-content").html(reponse);
            }
        }
    );
}

    function deleteArticle(cpId) {
        bootbox.confirm("êtes vous certains de vouloir supprimer cet article ainsi que tous ses paragraphes et illustrations?", function (result) {
            if (result == false) {

            }
            else {
                var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
                $("#right-content").html(waitingIcon);
                $.ajax({
                        type: 'POST',
                        url: 'sql-pages/del-article.php',
                        data: "cpId=" + cpId,
                        dataType: 'text',
                        success: function (reponse) {
                            $("#right-content").html(reponse);
                        }
                    }
                );
            }
        });
    }
function deleteArticlePdf(cpId) {
    bootbox.confirm("êtes vous certains de vouloir supprimer cet article ainsi que tous ses fichier pdf ?", function (result) {
        if (result == false) {

        }
        else {
            var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
            $("#right-content").html(waitingIcon);
            $.ajax({
                    type: 'POST',
                    url: 'sql-pages/del-article-pdf.php',
                    data: "cpId=" + cpId,
                    dataType: 'text',
                    success: function (reponse) {
                        $("#right-content").html(reponse);
                    }
                }
            );
        }
    });
}

    function modifyArticle(cpId) {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $.ajax({
            type: 'POST',
            data: 'cpId=' + cpId,
            dataType: 'text',
            url: 'fragment-pages/modify-article.php',
            success: function (response) {
                $("#right-content").html(response);
            }

        });
    }
function modifyArticlePdf(cpId) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    $("#right-content").html(waitingIcon);
    $.ajax({
        type: 'POST',
        data: 'cpId=' + cpId,
        dataType: 'text',
        url: 'fragment-pages/modify-article-pdf.php',
        success: function (response) {
            $("#right-content").html(response);
        }

    });
}

    function updateArticle(cpId) {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var title = $("#title").val();
        var abstract = $("#abstract").val();
        $("#right-content").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/update-article.php',
                data: "cpId=" + cpId + "&title=" + title + "&abstract=" + abstract,
                dataType: 'text',
                success: function (reponse) {
                    $("#right-content").html(reponse);
                }
            }
        );
    }
function updateArticlePdf(cpId) {
    var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
    var title = $("#title").val();
    var abstract = $("#abstract").val();
    $("#right-content").html(waitingIcon);
    $.ajax({
            type: 'POST',
            url: 'sql-pages/update-article-pdf.php',
            data: "cpId=" + cpId + "&title=" + title + "&abstract=" + abstract,
            dataType: 'text',
            success: function (reponse) {
                $("#right-content").html(reponse);
            }
        }
    );
}

    function createResume() {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $("#menu-publications").addClass('active');
        $("#menu-profils").removeClass('active');
        $("#menu-admin").removeClass('active');
        $("#right-content").load('fragment-pages/add-resume.php');
    }

    function submitResume() {
        var title = $('#title').val();
        var name = $('#name').val();
        var surname = $('#surname').val();
        var mobile = $('#mobile').val();
        var officePhone = $('#officePhone').val();
        var officeAddress = $('#officeAddress').val();
        var email = $('#email').val();
        var webPage = $('#webPage').val();
        var university = $('#university').val();
        var speciality = $('#speciality').val();
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#right-content").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/insert-resume.php',
                data: 'title=' + title + '&name=' + name + '&surname=' + surname + '&mobile=' + mobile + '&officePhone=' + officePhone + '&officeAddress=' + officeAddress + '&email=' + email + '&webPage=' + webPage + '&university=' + university + '&speciality=' + speciality,
                dataType: 'text',
                success: function (response) {
                    $("#right-content").html(response);
                }
            }
        );


    }

    function manageResumeRubriques(cr_id) {
        $.ajax({
            type: 'POST',
            url: 'fragment-pages/list-resume-rubriques.php',
            data: 'crId=' + cr_id,
            dataType: 'text',
            success: function (reponse) {
                $('#resumeRubriqueList').html(reponse);
            }

        });

        $("#manageRubriqueList").modal();
    }

    function addResumeRubrique() {
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        $("#resumeAddRubrique").html(waitingIcon);

        $.ajax({
            type: "GET",
            url: 'fragment-pages/add-rubrique-resume.php',
            success: function (response) {
                $("#resumeAddRubrique").html(response);
            }
        });

    }

    function saveResumeRubrique() {
        var title = $('#title').val();
        var beginDate = $('#beginDate').val();
        var endDate = $('#endDate').val();
        var Content = $('#Content').val();
        var crId = $('#crId').val();
        var empty = '';
        var waitingIcon = '<i class="fa fa-refresh fa-spin"></i>';
        var empty = '';
        $('#resumeAddRubrique').html(empty);
        $("#resumeRubriqueList").html(waitingIcon);
        $.ajax({
                type: 'POST',
                url: 'sql-pages/insert-resume-rubrique.php',
                data: 'title=' + title + '&beginDate=' + beginDate + '&endDate=' + endDate + '&Content=' + Content + '&crId=' + crId,
                dataType: 'text',
                success: function (response) {
                    $('#resumeRubriqueList').html(response);
                }
            }

        );
    }
	function popUpQuestionListt(popUpName,ciId){
    $.ajax({
        type:'POST',
        url:'sql-pages/affiche-image.php',
        data:'ci_id='+ciId,
        dataType:'text',
        success:function(reponse)
        {
            $('#questions-list').html(reponse);
        }

    });

    $("#myModal1").modal();
}
function popUpQuestionListt(popUpName,ciId){
    $.ajax({
        type:'POST',
        url:'sql-pages/affiche-image.php',
        data:'ci_id='+ciId,
        dataType:'text',
        success:function(reponse)
        {
            $('#questions-list').html(reponse);
        }

    });

    $("#myModal1").modal();
}