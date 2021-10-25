import React from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { SocialIcon } from 'react-social-icons';
import { GrDocumentPdf } from 'react-icons/gr';


const websites = {
    "Tainã Coleman": "https://tainacoleman.com",
    "Rafael Ferreira da Silva": "https://rafaelsilva.com/",
    "Henri Casanova": "https://henricasanova.github.io/",
    "Ewa Deelman": "https://deelman.isi.edu/",
    "Ju Cheol Moon": "https://scholar.google.com/citations?user=0Yw0wbYAAAAJ&hl=en",
    "Ty Gwartney": "https://ty-gwartney.github.io/",
    "Loïc Pottier": "https://loicpottier.com/"
}

const pubs = [
    {   "title": "WfCommons: A Framework for Enabling Scientific Workflow Research and Development",
        "venue": "Future Generation Computer Systems",
        "volume": "128",
        "pages": "16-27",
        "authors": ["Tainã Coleman","Henri Casanova", "Loïc Pottier", "Manav Kaushik", "Ewa Deelman", "Rafael Ferreira da Silva"],
        "social":{
            "pdf":"https://arxiv.org/abs/2105.14352",
        },
        "abstract": `Scientific workflows are a cornerstone of modern scientific computing. They are used to describe complex computational applications that require efficient and robust management of large volumes of data, which are typically stored/processed on heterogeneous, distributed resources. The workflow research and development community has employed a number of methods for the quantitative evaluation of existing and novel workflow algorithms and systems. In particular, a common approach is to simulate workflow executions. In previous works, we have presented a collection of tools that have been adopted by the community for conducting workflow research. Despite their popularity, they suffer from several shortcomings that prevent easy adoption, maintenance, and consistency with the evolving structures and computational requirements of production workflows. In this work, we present WfCommons, a framework that provides a collection of tools for analyzing workflow executions, for producing generators of synthetic workflows, and for simulating workflow executions. We demonstrate the realism of the generated synthetic workflows by comparing their simulated executions to real workflow executions. We also contrast these results with results obtained when using the previously available collection of tools. We find that the workflow generators that are automatically constructed by our framework not only generate representative same-scale workflows (i.e., with structures and task characteristics distributions that resemble those observed in real-world workflows), but also do so at scales larger than that of available real-world workflows. Finally, we conduct a case study to demonstrate the usefulness of our framework for estimating the energy consumption of large-scale workflow executions.`
    },
    {
        "title": "A Community Roadmap for Scientific Workflows Research and Development",
        "venue": "arXiv preprint",
        "authors": ["Rafael Ferreira da Silva", "Henri Casanova", "Kyle Chard", "Ilkay Altintas", "Rosa M Badia", "Bartosz Balis", "Tainã Coleman", "Frederik Coppens", "Frank Di Natale", "Bjoern Enders", "Thomas Fahringer", "Rosa Filgueira", "Grigori Fursin", "Daniel Garijo", "Carole Goble", "Dorran Howell"," Shantenu Jha", "Daniel S. Katz", "Daniel Laney", "Ulf Leser", "Maciej Malawski", "Kshitij Mehta", "Loïc Pottier", "Jonathan Ozik", "J. Luc Peterson", "Lavanya Ramakrishnan"," Stian Soiland-Reyes", "Douglas Thain", "Matthew Wolf"],
        "social": {
            "pdf": "https://arxiv.org/abs/2110.02168"
        },
        "abstract": `The landscape of workflow systems for scientific applications is notoriously convoluted with hundreds of seemingly equivalent workflow systems, many isolated research claims, and a steep learning curve. To address some of these challenges and lay the groundwork for transforming workflows research and development, the WorkflowsRI and ExaWorks projects partnered to bring the international workflows community together. This paper reports on discussions and findings from two virtual "Workflows Community Summits" (January and April, 2021). The overarching goals of these workshops were to develop a view of the state of the art, identify crucial research challenges in the workflows community, articulate a vision for potential community efforts, and discuss technical approaches for realizing this vision. To this end, participants identified six broad themes: FAIR computational workflows; AI workflows; exascale challenges; APIs, interoperability, reuse, and standards; training and education; and building a workflows community. We summarize discussions and recommendations for each of these themes.`
    },
    // {
    //     "title": "WfCommons: A Framework for Enabling Scientific Workflow Research and Development",
    //     "venue": "arXiv preprint",
    //     "authors": ["Tainã Coleman","Henri Casanova", "Loïc Pottier", "Manav Kaushik", "Ewa Deelman", "Rafael Ferreira da Silva"],
    //     "social": {
    //         "pdf": "https://arxiv.org/abs/2105.14352"
    //     },
    //     "abstract": `Scientific workflows are a cornerstone of modern scientific computing. They are used to describe complex computational applications that require efficient and robust management of large volumes of data, which are typically stored/processed on heterogeneous, distributed resources. The workflow research and development community has employed a number of methods for the quantitative evaluation of existing and novel workflow algorithms and systems. In particular, a common approach is to simulate workflow executions. In previous works, we have presented a collection of tools that have been adopted by the community for conducting workflow research. Despite their popularity, they suffer from several shortcomings that prevent easy adoption, maintenance, and consistency with the evolving structures and computational requirements of production workflows. In this work, we present WfCommons, a framework that provides a collection of tools for analyzing workflow executions, for producing generators of synthetic workflows, and for simulating workflow executions. We demonstrate the realism of the generated synthetic workflows by comparing their simulated executions to real workflow executions. We also contrast these results with results obtained when using the previously available collection of tools. We find that the workflow generators that are automatically constructed by our framework not only generate representative same-scale workflows (i.e., with structures and task characteristics distributions that resemble those observed in real-world workflows), but also do so at scales larger than that of available real-world workflows. Finally, we conduct a case study to demonstrate the usefulness of our framework for estimating the energy consumption of large-scale workflow executions.`
    // },
    {
        "title": "Evaluating energy-aware scheduling algorithms for I/O-intensive scientific workflows",
        "venue": "International Conference on Computational Science (ICCS)",
        "authors": ["Tainã Coleman", "Henri Casanova", "Ty Gwartney", "Rafael Ferreira da Silva"],
        "social": {
            "pdf": "https://rafaelsilva.com/files/publications/coleman2021iccs.pdf"
        },
        "abstract": `Improving energy efficiency has become necessary to enable sustainable computational science. At the same time, scientific workflows are key in facilitating distributed computing in virtually all domain sciences. As data and computational requirements increase, I/O-intensive workflows have become prevalent. In this work, we evaluate the ability of two popular energy-aware workflow scheduling algorithms to provide effective schedules for this class of workflow applications, that is, schedules that strike a good compromise between workflow execution time and energy consumption. These two algorithms make decisions based on a widely used power consumption model that simply assumes linear correlation to CPU usage. Previous work has shown this model to be inaccurate, in particular for modeling power consumption of I/O-intensive workflow executions, and has proposed an accurate model. We evaluate the effectiveness of the two aforementioned algorithms based on this accurate model. We find that, when making their decisions, these algorithms can underestimate power consumption by up to 360%, which makes it unclear how well these algorithm would fare in practice. To evaluate the benefit of using the more accurate power consumption model in practice, we propose a simple scheduling algorithm that relies on this model to balance the I/O load across the available compute resources. Experimental results show that this algorithm achieves more desirable compromises between energy consumption and workflow execution time than the two popular algorithms.`
    },
    {
        "title": "Workflows Community Summit: Bringing the Scientific Workflows Community Together",
        "venue": "Zenodo",
        "authors": ["Rafael Ferreira da Silva", "Henri Casanova", "Kyle Chard", "Dan Laney", "Dong Ahn", "Shantenu Jha", "Carole Goble", "Lavanya Ramakrishnan", "Luc Peterson", "Bjoern Enders", "Douglas Thain", "Ilkay Altintas", "Yadu Babuji", "Rosa M. Badia", "Vivien Bonazzi", "Taina Coleman", "Michael Crusoe", 
        "Ewa Deelman", "Frank Di Natale", "Paolo Di Tommaso", "Thomas Fahringer", "Rosa Filgueira", "Grigori Fursin", "Alex Ganose", "Bjorn Gruning", "Daniel S. Katz", "Olga Kuchar", "Ana Kupresanin", "Bertram Ludascher", "Ketan Maheshwari", "Marta Mattoso", "Kshitij Mehta", "Todd Munson", "Jonathan Ozik", "Tom Peterka", "Loic Pottier", "Tim Randles", "Stian Soiland-Reyes", "Benjamin Tovar", "Matteo Turilli", "Thomas Uram", "Karan Vahi", "Michael Wilde", "Matthew Wolf", "Justin Wozniak"],
        "social": {
            "pdf": "https://arxiv.org/pdf/2103.09181"
        },
        "abstract": `Scientific workflows have been used almost universally across scientific domains, and have underpinned some of the most significant discoveries of the past several decades. Many of these workflows have high computational, storage, and/or communication demands, and thus must execute on a wide range of large-scale platforms, from large clouds to upcoming exascale high-performance computing (HPC) platforms. These executions must be managed using some software infrastructure. Due to the popularity of workflows, workflow management systems (WMSs) have been developed to provide abstractions for creating and executing workflows conveniently, efficiently, and portably. While these efforts are all worthwhile, there are now hundreds of independent WMSs, many of which are moribund. As a result, the WMS landscape is segmented and presents significant barriers to entry due to the hundreds of seemingly comparable, yet incompatible, systems that exist. As a result, many teams, small and large, still elect to build their own custom workflow solution rather than adopt, or build upon, existing WMSs. This current state of the WMS landscape negatively impacts workflow users, developers, and researchers. The "Workflows Community Summit" was held online on January 13, 2021. The overarching goal of the summit was to develop a view of the state of the art and identify crucial research challenges in the workflow community. Prior to the summit, a survey sent to stakeholders in the workflow community (including both developers of WMSs and users of workflows) helped to identify key challenges in this community that were translated into 6 broad themes for the summit, each of them being the object of a focused discussion led by a volunteer member of the community. This report documents and organizes the wealth of information provided by the participants before, during, and after the summit.`
    },
    {
        "title": "WorkflowHub: Community Framework for Enabling Scientific Workflow Research and Development",
        "venue": "2020 IEEE/ACM Workflows in Support of Large-Scale Science (WORKS)",
        "authors": ["Rafael Ferreira da Silva", "Loïc Pottier", "Tainã Coleman", "Ewa Deelman", "Henri Casanova"],
        "social": {
            "pdf": "https://pegasus.isi.edu/wordpress/wp-content/papercite-data/pdf/ferreiradasilva2020works.pdf",
            "github": "https://github.com/wfcommons/wfcommons",
        },
        "abstract": `Scientific workflows are a cornerstone of modern scientific computing. They are used to describe complex computational applications that require efficient and robust management of large volumes of data, which are typically stored/processed on heterogeneous, distributed resources. The workflow research and development community has employed a number of methods for the quantitative evaluation of existing and novel workflow algorithms and systems. In particular, a common approach is to simulate workflow executions. In previous work, we have presented a collection of tools that have been used for aiding research and development activities in the Pegasus project, and that have been adopted by others for conducting workflow research. Despite their popularity, there are several shortcomings that prevent easy adoption, maintenance, and consistency with the evolving structures and computational requirements of production workflows. In this work, we present WorkflowHub, a community framework that provides a collection of tools for analyzing workflow execution traces, producing realistic synthetic workflow traces, and simulating workflow executions. We demonstrate the realism of the generated synthetic traces by comparing simulated executions of these traces with actual workflow executions. We also contrast these results with those obtained when using the previously available collection of tools. We find that our framework not only can be used to generate representative synthetic workflow traces (i.e., with workflow structures and task characteristics distributions that resemble those in traces obtained from real-world workflow executions), but can also generate representative workflow traces at larger scales than that of available workflow traces.`
    },
    {
        "title": "WfChef: Automated Generation of Accurate Scientific Workflow Generators",
        "venue": "17th IEEE eScience 2021",
        "authors": ["Tainã Coleman", "Henri Casanova", "Rafael Ferreira da Silva"],
        "social": {
            "pdf": "https://arxiv.org/pdf/2105.00129",
            "github": "https://github.com/tainagdcoleman/wfchef"
        },
        "abstract": `Scientific workflow applications have become mainstream and their automated and efficient execution on large-scale compute platforms is the object of extensive research and development. For these efforts to be successful, a solid experimental methodology is needed to evaluate workflow algorithms and systems. A foundation for this methodology is the availability of realistic workflow instances. Dozens of workflow instances for a few scientific applications are available in public repositories. While these are invaluable, they are limited: workflow instances are not available for all application scales of interest. To address this limitation, previous work has developed generators of synthetic, but representative, workflow instances of arbitrary scales. These generators are popular, but implementing them is a manual, labor-intensive process that requires expert application knowledge. As a result, these generators only target a handful of applications, even though hundreds of applications use workflows in production.
        In this work, we present WfChef, a framework that fully automates the process of constructing a synthetic workflow generator for any scientific application. Based on an input set of workflow instances, WfChef automatically produces a synthetic workflow generator. We define and evaluate several metrics for quantifying the realism of the generated workflows. Using these metrics, we compare the realism of the workflows generated by WfChef generators to that of the workflows generated by the previously available, hand-crafted generators. We find that the WfChef generators not only require zero development effort (because it is automatically produced), but also generate workflows that are more realistic than those generated by hand-crafted generator.`
    },
    {
        "title": "A biometric for shark dorsal fins based on boundary descriptor matching",
        "venue": "CAINE: Computer Applications in Industry and Engineering (2019)",
        "authors": ["Tainã Coleman", "Ju Cheol Moon"],
        "social": {
            "pdf": "https://easychair.org/publications/open/1Rr8",
            "github": "https://github.com/tainagdcoleman/sharkid"
        },
        "abstract": `Recent progress in animal biometrics has revolutionized wildlife research. Cutting edge techniques allow researchers to track individuals through noninvasive methods of recognition that are not only more reliable, but also applicable to large, hard-to-find, and otherwise difficult to observe animals. In this research, we propose a metric for boundary descriptors based on bipartite perfect matching applied in shark dorsal fins. In order to identify a shark, we first take a fin contour and transform it to a normalized coordinate system so that we can analyze images of sharks regardless of orientation and scale. Finally, we propose a metric scheme that performs a minimum weight perfect matching in a bipartite graph. The experimental results show that our metric is applicable to identify and track individuals from visual data.`
    }
]

const SOCIAL_STYLE = {height: 30, width: 30};
const SOCIAL_CLASS_NAME = "mr-2";
function getSocial(social, url) {
    if (social === "pdf") {
        return (
            <a key={`social-pdf`} href={url}>
                <GrDocumentPdf 
                    size="2em" 
                    className={SOCIAL_CLASS_NAME}
                />
            </a>
        );
    }
    return (
        <SocialIcon 
            key={`social-${social}`} 
            url={url} 
            className={SOCIAL_CLASS_NAME}
            style={SOCIAL_STYLE} 
        />
    );
}

function Publications() {
    const pubitems = pubs.map((pub, i) => {
        const authors = pub.authors.map(author => {
            return websites[author] ? <a href={websites[author]} style={{color: "gray"}}>{author}</a> : author;
        }).reduce((prev, curr) => [prev, <br/ >, curr]);
        const social = Object.entries(pub.social || {}).map(([social, url]) => {
            return getSocial(social, url);
        });
        const linksRow = (pub.social || []).length <= 0 ? null : (
            <Row>
                <Col>
                    <h5><b>Links</b></h5>
                    {social}
                </Col>
            </Row>
        );
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={`acc-${i}`} style={{cursor: 'pointer'}}>
                    <b>{pub.title}</b>
                    <br />
                    {pub.venue}
                    <br />
                    <em>{pub.authors.reduce((prev, curr) => [prev, ", ", curr])}</em>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`acc-${i}`}>
                    <Card.Body>
                        <Row className="mt-2">
                            <Col xs={12} sm={7} lg={9} className="mb-3">
                                <h5><b>Abstract</b></h5>
                                <span style={{ whiteSpace: 'pre-line' }}>{pub.abstract}</span>
                            </Col>
                            <Col>
                                {linksRow}
                                <Row className="mt-3">
                                    <Col>
                                        <h5><b>Authors</b></h5>
                                        {authors}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    });

    return (
        <Row>
            <Col>
                <h4 className="text-center">Publications</h4>
                <Accordion>
                    {pubitems}
                </Accordion>
            </Col>
        </Row>
    );
}

export default Publications;