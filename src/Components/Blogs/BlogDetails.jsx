import makeStyles from "@mui/styles/makeStyles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    fontFamily: "Rubik Mono One",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    padding: "1em 1em 0em 1em",
  },
  heading: {
    color: "aquamarine",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap",
    padding: "2em 5em",
    flexDirection: "column",
    color: "darkturquoise",
    fontFamily: "monospace",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0em",
    },
  },
  dummyHeader: {
    color: "aquamarine",
    fontSize: "25px",
    margin: "1em 0em",
  },
}));

const BlogDetails = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <div className={classes.main}>
      <span className={classes.heading}>This is a dummy blog {id}</span>
      <div className={classes.cardWrapper}>
        <span>
          Dummy text: Its function as a filler or as a tool for comparing the
          visual impression of different typefaces Dummy text is text that is
          used in the publishing industry or by web designers to occupy the
          space which will later be filled with 'real' content. This is required
          when, for example, the final text is not yet available. Dummy text is
          also known as 'fill text'. It is said that song composers of the past
          used dummy texts as lyrics when writing melodies in order to have a
          'ready-made' text to sing with the melody. Dummy texts have been in
          use by typesetters since the 16th century.
        </span>
        <span className={classes.dummyHeader}>
          The usefulness of nonsensical content
        </span>
        <span>
          Dummy text is also used to demonstrate the appearance of different
          typefaces and layouts, and in general the content of dummy text is
          nonsensical. Due to its widespread use as filler text for layouts,
          non-readability is of great importance: human perception is tuned to
          recognize certain patterns and repetitions in texts. If the
          distribution of letters and 'words' is random, the reader will not be
          distracted from making a neutral judgement on the visual impact and
          readability of the typefaces (typography), or the distribution of text
          on the page (layout or type area). For this reason, dummy text usually
          consists of a more or less random series of words or syllables. This
          prevents repetitive patterns from impairing the overall visual
          impression and facilitates the comparison of different typefaces.
          Furthermore, it is advantageous when the dummy text is relatively
          realistic so that the layout impression of the final publication is
          not compromised.
        </span>
        <span className={classes.dummyHeader}>
          Incomprehensibility or readability? That is the question.
        </span>
        <span>
          The most well-known dummy text is the 'Lorem Ipsum', which is said to
          have originated in the 16th century. Lorem Ipsum is composed in a
          pseudo-Latin language which more or less corresponds to 'proper'
          Latin. It contains a series of real Latin words. This ancient dummy
          text is also incomprehensible, but it imitates the rhythm of most
          European languages in Latin script. The advantage of its Latin origin
          and the relative meaninglessness of Lorum Ipsum is that the text does
          not attract attention to itself or distract the viewer's attention
          from the layout.
        </span>
      </div>
    </div>
  );
};

export default BlogDetails;
