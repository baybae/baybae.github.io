
var audio = [],
index = 0;

audio[0] = "<iframe id='drive-viewer-video-player-object-0' src='https://drive.google.com/file/d/1-7EvgaPKyLPHbRiaDRwiifKZD3DZ-uqO/preview' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";
audio[1] = "<iframe id='drive-viewer-video-player-object-0' src='https://drive.google.com/file/d/1-1WPaLd8dlMNovgjRbTX0nldOG1AfdBS/preview' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";
audio[2] = "<iframe id='drive-viewer-video-player-object-0' src='https://drive.google.com/file/d/1KwpHLTSfDU94oOhuQShndF7wkjUwzJai/preview' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";
audio[3] = "<iframe id='drive-viewer-video-player-object-0' src=' https://drive.google.com/file/d/1-33ah4q7q_l-W8wzdONa4K-VcoWwZv-k/preview' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";
audio[4] = "<iframe id='drive-viewer-video-player-object-0' src='https://drive.google.com/file/d/1-9ZrrV3dpwuOE2w-15LeNa4BVBcXeHaG/preview ' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";
audio[5] = "<iframe id='drive-viewer-video-player-object-0' src='https://drive.google.com/file/d/1-W7yG35P5BFdFA31Qz3gFNS703shvhih/preview' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";
audio[6] = "<iframe id='drive-viewer-video-player-object-0' src='https://drive.google.com/file/d/1-EwKgyKipq5R4IrL5g80UXd2v_3TU_kY/preview' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";
audio[7] = "<iframe id='drive-viewer-video-player-object-0' src='https://drive.google.com/file/d/1-B48rvG0diO0QxAqacqH7gcAYuJPczZc/preview' frameborder='0' width='100%' height='100%' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay' title='Pemutar video'></iframe>";


index = Math.floor(Math.random() * audio.length);
document.write(audio[index]);


