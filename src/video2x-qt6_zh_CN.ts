<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>AboutDialog</name>
    <message>
        <location filename="aboutdialog.ui" line="20"/>
        <source>About Video2X Qt6</source>
        <translation>关于 Video2X Qt6</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="mainwindow.ui" line="29"/>
        <source>Video Processing Job Queue</source>
        <translation>视频处理任务队列</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="43"/>
        <source>Click the &quot;Add File(s)&quot; button or drag files into the job queue to add videos for processing.</source>
        <translation>点击“添加文件”按钮或将文件拖入任务队列以添加要处理的视频。</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="71"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Select files to add to the job queue.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;选择文件添加到任务队列。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="74"/>
        <source>Add File(s)</source>
        <translation>添加文件</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="81"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Delete the selected file(s) from the job queue.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;从任务队列中删除选中的文件。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="84"/>
        <source>Delete Selected</source>
        <translation>删除选择</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="91"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Remove all jobs from the job queue.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;从任务队列中移除所有任务。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="94"/>
        <source>Clear</source>
        <translation>删除全部</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="118"/>
        <source>Filter Settings</source>
        <translation>滤镜设置</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="130"/>
        <source>Filter Selection</source>
        <translation>滤镜选择</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="154"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;Select the filter you want to use to process the video.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;- RealESRGAN: Higher quality but slower, with fixed scaling factor. Works better than Anime4K v4 with small (&amp;lt;720p) videos.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;- libplacebo (with Anime4K v4): Very fast, but is of lower quality. Works poorly with small (&amp;lt;720p) videos.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;选择您要用于处理视频的滤镜。&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;- RealESRGAN：质量更高，但速度较慢，具有固定的缩放倍率。对于较小的（&amp;lt;720p）视频，效果优于 Anime4K v4。&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;- libplacebo（默认使用 Anime4K v4）：非常快，但质量较低。对于较小的（&amp;lt;720p）视频效果较差。&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="158"/>
        <source>RealESRGAN</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="163"/>
        <source>libplacebo</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="192"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The GPU to use to process the files.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于处理文件的 GPU。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="216"/>
        <source>Model</source>
        <translation>模型</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="223"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The RealESRGAN model to use. Different models support specific scaling ratios.&lt;/p&gt;&lt;p&gt;- realesr-animevideov3 (2x, 3x, 4x): preferred for anime&lt;br/&gt;- realesrgan-plus-anime (4x)&lt;br/&gt;- realesrgan-plus (4x): for non-anime videos&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The RealESRGAN model to use.&lt;/p&gt;&lt;p&gt;- realesr-animevideov3: preferred for anime&lt;/p&gt;&lt;p&gt;- realesrgan-plus-anime&lt;/p&gt;&lt;p&gt;- realesrgan-plus: for non-anime videos&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;选择要使用的 RealESRGAN 模型。不同的模型支持不同的放大倍率。&lt;/p&gt;&lt;p&gt;- realesr-animevideov3 (2x, 3x, 4x)：推荐用于动漫&lt;br/&gt;- realesrgan-plus-anime (4x)&lt;br/&gt;- realesrgan-plus (4x)：用于非动漫视频&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="252"/>
        <source>Scaling Factor</source>
        <translation>放大倍率</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="265"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The scaling factor to use. I.e., how many times larger you want the output to be.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;要使用的缩放比例，即输出视频该比输入大多少倍。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="295"/>
        <source>libplacebo Settings</source>
        <translation>libplacebo 设置</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="303"/>
        <source>Output Width</source>
        <translation>输出宽度</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="316"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The output video&apos;s width.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;输出视频的宽度。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="336"/>
        <source>Output Height</source>
        <translation>输出高度</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="349"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The output video&apos;s height.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;输出视频的高度。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="376"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The GLSL shader used to process the video.&lt;/p&gt;&lt;p&gt;- Anime4K v4 Mode A: Optimized for 1080p anime&lt;br/&gt;- Anime4K v4 Mode B: Optimized for 720p anime&lt;br/&gt;- Anime4K v4 Mode C: Optimized for 480p anime&lt;br/&gt;- Anime4K v4 Mode A+A: Higher quality version of mode A&lt;br/&gt;- Anime4K v4 Mode B+B: Higher quality version of mode B&lt;br/&gt;- Anime4K v4 Mode C+A: Higher quality version of mode C&lt;br/&gt;- Anime4K v4.1 GAN: Experimental SRGAN shaders; delivers the highest quality but is slower than standard modes&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The GLSL shader used to process the video.&lt;/p&gt;&lt;p&gt;- anime4k-a: Optimized for 1080p anime&lt;br/&gt;- anime4k-b: Optimized for 720p anime&lt;br/&gt;- anime4k-c: Optimized for 480p anime&lt;br/&gt;- anime4k-a+a: Higher quality version of a&lt;br/&gt;- anime4k-b+b: Higher quality version of b&lt;br/&gt;- anime4k-c+a: Higher quality version of c&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于处理视频的 GLSL 着色器。&lt;/p&gt;&lt;p&gt;- Anime4K v4 模式 A：针对 1080p 动漫优化&lt;br/&gt;- Anime4K v4 模式 B：针对 720p 动漫优化&lt;br/&gt;- Anime4K v4 模式 C：针对 480p 动漫优化&lt;br/&gt;- Anime4K v4 模式 A+A：模式 A 的高质量版本&lt;br/&gt;- Anime4K v4 模式 B+B：模式 B 的高质量版本&lt;br/&gt;- Anime4K v4 模式 C+A：模式 C 的高质量版本&lt;br/&gt;- Anime4K v4.1 GAN：实验性 SRGAN 着色器；提供最高质量，但速度较其它模式更慢&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="423"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Path to a custom MPV-compatible GLSL shader file. Leave empty to use the GLSL shader selected above for processing.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;自定义兼容 MPV GLSL 着色器文件的路径。留空以使用上面选择的 GLSL 着色器进行处理。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="433"/>
        <source>Select GLSL Shader File</source>
        <translation>选择 GLSL 着色器文件</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="444"/>
        <source>FFmpeg Settings</source>
        <translation>FFmpeg 设置</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="452"/>
        <source>Container Format (suffix)</source>
        <translation>视频容器格式（后缀）</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="465"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sets the container format for the output file, determining how audio, video, and metadata are stored.&lt;/p&gt;&lt;p&gt;E.g., .mp4, .mkv, .mov, .avi&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;设置输出文件的容器格式，将决定音频、视频和元数据的存储方式。&lt;/p&gt;&lt;p&gt;例如，.mp4, .mkv, .mov, .avi&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="479"/>
        <source>Codec (-vcodec)</source>
        <translation>视频编码 （-vcodec）</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="492"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Selects the video codec for encoding, affecting compression and compatibility.&lt;/p&gt;&lt;p&gt;E.g., libx264, libx265, h264_nvenc&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;选择用于编码的视频编码器，影响压缩率和兼容性。&lt;/p&gt;&lt;p&gt;例如，libx264, libx265, h264_nvenc&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="506"/>
        <source>Preset (preset)</source>
        <translation>预设 （-preset）</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="519"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The encoding preset to use. A slower preset provides better compression efficiency (quality-to-file-size ratio), while a faster preset results in quicker encoding at the cost of compression efficiency.&lt;/p&gt;&lt;p&gt;- ultrafast&lt;br/&gt;- superfast&lt;br/&gt;- veryfast&lt;br/&gt;- faster&lt;br/&gt;- fast&lt;br/&gt;- medium&lt;br/&gt;- slow – default preset&lt;br/&gt;- slower&lt;br/&gt;- veryslow&lt;br/&gt;- placebo&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <oldsource>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The encoding preset to use. A slower preset provides better compression efficiency (quality-to-file-size ratio), while a faster preset results in quicker encoding at the cost of compression efficiency.&lt;/p&gt;&lt;p&gt;- ultrafast&lt;/p&gt;&lt;p&gt;- superfast&lt;/p&gt;&lt;p&gt;- veryfast&lt;/p&gt;&lt;p&gt;- faster&lt;/p&gt;&lt;p&gt;- fast&lt;/p&gt;&lt;p&gt;- medium&lt;/p&gt;&lt;p&gt;- slow – default preset&lt;/p&gt;&lt;p&gt;- slower&lt;/p&gt;&lt;p&gt;- veryslow&lt;/p&gt;&lt;p&gt;- placebo&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</oldsource>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;选择要使用的编码预设。较慢的预设提供更好的压缩效率（质量与文件大小的比率），而较快的预设会牺牲压缩效率以换取更快的编码速度。&lt;/p&gt;&lt;p&gt;- ultrafast&lt;/p&gt;&lt;p&gt;- ultrafast&lt;br/&gt;- superfast&lt;br/&gt;- veryfast&lt;br/&gt;- faster&lt;br/&gt;- fast&lt;br/&gt;- medium&lt;br/&gt;- slow – 默认预设&lt;br/&gt;- slower&lt;br/&gt;- veryslow&lt;br/&gt;- placebo&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="533"/>
        <source>Pixel Format (-pix_fmt)</source>
        <translation>像素格式 （-pix_fmt）</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="546"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Specifies the pixel format for the output video. Determines how pixel data is stored, affecting color depth, transparency, and compatibility.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;指定输出视频的像素格式。将决定如何存储像素数据，影响色深、透明度和兼容性。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="560"/>
        <source>Bit Rate (-b:v)</source>
        <translation>视频码率 （-b:v）</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="567"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sets the target bit rate for the output video, enabling constant bit rate (CBR) encoding. A value of 0 uses variable bit rate (VBR) for better quality at lower file sizes.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;设置输出视频的目标比特率，启用恒定比特率（CBR）编码。值为 0 时使用可变比特率（VBR），在较小文件大小的情况下提供更好的质量。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="570"/>
        <source>bps</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="590"/>
        <source>CRF (-crf)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="597"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sets the Constant Rate Factor (CRF) to control video quality. Uses variable bit rate (VBR) encoding. &lt;/p&gt;&lt;p&gt;- 0-17: Visually lossless quality, large file sizes.&lt;/p&gt;&lt;p&gt;- 18-23: High quality, good balance between quality and file size (recommended range).&lt;/p&gt;&lt;p&gt;- 24-28: Medium quality, suitable for streaming, some artifacts may appear.&lt;/p&gt;&lt;p&gt;- 29+: Low quality, noticeable compression artifacts, smaller file sizes.&lt;/p&gt;&lt;p&gt;Lower values improve quality but increase file size, while higher values reduce quality and file size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;设置恒定速率因子（CRF）来控制视频质量。使用可变比特率（VBR）编码。&lt;/p&gt;&lt;p&gt;- 0-17: 视觉上无损质量，文件大小较大。&lt;/p&gt;&lt;p&gt;- 18-23: 高质量，在质量和文件大小之间有良好平衡（推荐范围）。&lt;/p&gt;&lt;p&gt;- 24-28: 中等质量，适合流媒体，可能出现一些压缩伪影。&lt;/p&gt;&lt;p&gt;- 29+: 低质量，压缩伪影明显，文件大小较小。&lt;/p&gt;&lt;p&gt;较低的值提高质量但增加文件大小，较高的值则降低质量并减少文件大小。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="620"/>
        <source>Hardware Acceleration (-hwaccel)</source>
        <translation>硬件加速模式 （-hwaccel）</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="633"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sets the hardware acceleration method to use. Currently not very stable, especially on Linux.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;设置要使用的硬件加速方法。目前不太稳定，特别是在 Linux 上。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="647"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Check to copy audio and subtitle streams from the input video to the output video.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;勾选此选项以将音频和字幕流从输入视频复制到输出视频。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="650"/>
        <source>Copy audio and subtitle streams</source>
        <translation>复制音频和字母流</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="676"/>
        <source>Debug</source>
        <translation>调试</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="684"/>
        <source>Log Level</source>
        <translation>日志级别</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="691"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sets the verbosity of the log, where &apos;trace&apos; is the most verbose, and &apos;none&apos; is the least verbose, disabling all logging output.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;设置日志的详细程度，其中 “trace” 是最详细的，“none” 是最简略的，禁用所有日志输出。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="780"/>
        <source>Progress</source>
        <translation>进度</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="813"/>
        <source>Current: %v/%m (%p%)</source>
        <translation>当前：%v/%m (%p%)</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="845"/>
        <source>Overall: %v/%m (%p%)</source>
        <translation>总体：%v/%m (%p%)</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="865"/>
        <source>Frames/s:</source>
        <translation>帧/秒：</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="886"/>
        <source>Time Elapsed:</source>
        <translation>已用时间：</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="907"/>
        <source>Time Remaining:</source>
        <translation>剩余时间：</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="369"/>
        <source>GLSL Shader</source>
        <translation>GLSL 着色器</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="180"/>
        <source>GPU Selection</source>
        <translation>GPU 选择</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="208"/>
        <source>RealESRGAN Settings</source>
        <translation>RealESRGAN 设置</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="426"/>
        <source>Custom GLSL shader file path</source>
        <translation>自定义 GLSL 着色器文件路径</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="743"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Displays the logs in a console window (Windows only). On other platforms, the logs will be printed in the terminal.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在控制台窗口中显示日志（仅限Windows）。在其他平台上，日志将打印在终端中。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="746"/>
        <source>Show Logs</source>
        <translation>显示日志窗口</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="947"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;When stopped: start processing.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;When running: pause processing.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;停止时：开始处理。&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;运行时：暂停处理。&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="953"/>
        <location filename="mainwindow.cpp" line="380"/>
        <source>START</source>
        <translation>开始</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="975"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;Abort processing.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-size:9pt; font-weight:400;&quot;&gt;中止处理。&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="981"/>
        <source>STOP</source>
        <translation>停止</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1002"/>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1008"/>
        <source>Help</source>
        <translation>帮助</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1015"/>
        <source>Language</source>
        <translation>语言</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1029"/>
        <source>Exit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1032"/>
        <source>Ctrl+Q</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1037"/>
        <source>About</source>
        <translation>关于</translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1042"/>
        <source>English (United States)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1047"/>
        <source>中文（中国）</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1052"/>
        <source>日本語（日本）</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1057"/>
        <source>Português (Portugal)</source>
        <translation></translation>
    </message>
    <message>
        <location filename="mainwindow.ui" line="1062"/>
        <source>Report Bugs...</source>
        <translation>报告错误...</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="264"/>
        <source>Select Files</source>
        <translation>选择文件</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="266"/>
        <source>All Files (*.*)</source>
        <translation>所有文件 (*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="333"/>
        <source>RESUME</source>
        <translation>继续</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="336"/>
        <source>PAUSE</source>
        <translation>暂停</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="152"/>
        <location filename="mainwindow.cpp" line="162"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="44"/>
        <location filename="mainwindow.cpp" line="388"/>
        <location filename="mainwindow.cpp" line="399"/>
        <source>Status: </source>
        <translation>状态： </translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="44"/>
        <location filename="mainwindow.cpp" line="388"/>
        <source>idle</source>
        <translation>空闲</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="86"/>
        <source>No GPUs with Vulkan support found!</source>
        <translation>未找到支持 Vulkan 的 GPU！</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="173"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="347"/>
        <source>The job queue is empty!</source>
        <translation>任务队列是空的！</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="368"/>
        <source>Processing aborted</source>
        <translation>处理中止</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="368"/>
        <source>Video processing aborted!</source>
        <translation>视频处理已中止！</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="371"/>
        <source>Processing complete</source>
        <translation>处理完成</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="371"/>
        <source>All videos processed.</source>
        <translation>所有视频已处理。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="399"/>
        <source>Processing file </source>
        <translation>正在处理文件 </translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="418"/>
        <source>Failed to allocate memory for FilterConfig.</source>
        <translation>无法为 FilterConfig 分配内存。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="493"/>
        <source>Invalid filter selected!</source>
        <translation>选择了无效的滤镜！</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="501"/>
        <source>Invalid FFmpeg video codec.</source>
        <oldsource>Invalid FFmpeg codec.</oldsource>
        <translation>选择了无效的 FFmpeg 视频编码。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="512"/>
        <source>Invalid FFmpeg video pixel format.</source>
        <oldsource>Invalid FFmpeg pixel format.</oldsource>
        <translation>选择了无效的 FFmpeg 视频像素格式。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="522"/>
        <source>Failed to allocate memory for EncoderConfig.</source>
        <translation>无法为 EncoderConfig 分配内存。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="533"/>
        <source>Invalid hardware acceleration method.</source>
        <translation>选择了无效的硬件加速模式。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="556"/>
        <source>Failed to allocate memory for VideoProcessingContext.</source>
        <translation>无法为 VideoProcessingContext 分配内存。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="643"/>
        <source> days</source>
        <translation> 天</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="684"/>
        <source>Video processing failed for: %1.
Check logs for more information. Enable logging in Debug &gt; Show Logs.</source>
        <translation>视频处理失败: %1。
请检查日志以获取更多信息。在“调试 &gt; 显示日志”中启用日志记录。</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="769"/>
        <source>Select GLSL Shader</source>
        <translation>选择 GLSL 着色器</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="771"/>
        <source>GLSL Files (*.glsl);;All Files (*.*)</source>
        <translation>GLSL 文件 (*.glsl);;所有文件 (*.*)</translation>
    </message>
</context>
</TS>
